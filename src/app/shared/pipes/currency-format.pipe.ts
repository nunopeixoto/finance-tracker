import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

/*
 * Format number with currency.
 * Usage:
 *   value | currencyFormat:printSymbol:code
 * Example:
 *   {{ 12.30 | currencyFormat:true:'EUR' }}
 *   formats to: '12,30 €'
*/

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
  constructor(private currencyService: CurrencyService) {}

  transform(value: number, printSymbol?: boolean, code?: string): string {
    return this.currencyService.format(value, code, printSymbol);
  }

}
