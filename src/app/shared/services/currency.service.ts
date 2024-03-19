import { Injectable } from '@angular/core';
import { CurrenciesConfig, CurrencyModel } from 'app/shared/configs/currencies.config';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  constructor() { }

  public format(value: number, code: string = 'EUR', printSymbol: boolean = true): string {
    var currency: CurrencyModel = CurrenciesConfig[code];

    if (!currency) {
      currency = CurrenciesConfig['EUR'];
    }

    if (typeof value === undefined) {
      return "";
    }

    const symbolLeft = currency.symbolLeft;
    const symbolRight = currency.symbolRight;
    const decimalPlace = currency.decimalPlace;
    const decimalPoint = currency.decimalPoint;
    const thousandPoint = currency.thousandsPoint;

    var string = '';

    string += this.numberFormat(this.round(value, decimalPlace), decimalPlace, decimalPoint, thousandPoint);

    if (symbolRight.length != 0 && printSymbol) {
      string += ' ' + symbolRight;
    }

    // For now, all the symbols will go on the right
    // In the future this piece of code must be used before number_format
    // { $string .= ' '.$symbolLeft } MUST BE CHANGED TO { $string .= $symbolLeft.' ' }
    if ((typeof symbolLeft !== 'undefined') && printSymbol) {
      string += ' ' + symbolLeft;
    }

    return string;
  }

  private numberFormat(number: number, decimals: number, decPoint: string, thousandsPoint: string): string {
    if (number == null || !isFinite(number)) {
      throw new TypeError("number is not valid");
    }

    if (!decimals) {
      var len = number.toString().split('.').length;
      decimals = len > 1 ? len : 0;
    }

    if (!decPoint) {
      decPoint = '.';
    }

    if (!thousandsPoint) {
      thousandsPoint = ',';
    }

    var string: string = number.toFixed(decimals).replace(".", decPoint);

    var splitNum = string.split(decPoint);
    splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsPoint);
    string = splitNum.join(decPoint);

    return string;
  }

  private round(num: number, dec: number) {
    var num_sign = num >= 0 ? 1 : -1;
    return parseFloat((Math.round((num * Math.pow(10, dec)) + (num_sign * 0.0001)) / Math.pow(10, dec)).toFixed(dec));
  }
}
