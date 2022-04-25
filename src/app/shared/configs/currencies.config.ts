export interface CurrencyModel {
  symbolLeft: string;
  symbolRight: string;
  decimalPlace: number;
  decimalPoint: string;
  thousandsPoint: string
}

export const CurrenciesConfig: { [code: string]: CurrencyModel } = {
  "AED": {
    "symbolLeft": "د.إ",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "AFN": {
    "symbolLeft": "",
    "symbolRight": "؋",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "ALL": {
    "symbolLeft": "",
    "symbolRight": "L",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "AMD": {
    "symbolLeft": "",
    "symbolRight": "դր.",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "ANG": {
    "symbolLeft": "ƒ",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "AOA": {
    "symbolLeft": "",
    "symbolRight": "Kz",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "ARS": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "AUD": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "AWG": {
    "symbolLeft": "",
    "symbolRight": "ƒ",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "AZN": {
    "symbolLeft": "₼",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "BAM": {
    "symbolLeft": "КМ",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "BBD": {
    "symbolLeft": "",
    "symbolRight": "$",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "BDT": {
    "symbolLeft": "৳",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "BGN": {
    "symbolLeft": "",
    "symbolRight": "лв",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "BHD": {
    "symbolLeft": "ب.د",
    "symbolRight": "",
    "decimalPlace": 3,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "BIF": {
    "symbolLeft": "",
    "symbolRight": "Fr",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "BMD": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "BND": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "BOB": {
    "symbolLeft": "Bs.",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "BOV": {
    "symbolLeft": "Bs.",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "BRL": {
    "symbolLeft": "R$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "BSD": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "BTN": {
    "symbolLeft": "",
    "symbolRight": "Nu.",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "BWP": {
    "symbolLeft": "P",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "BYR": {
    "symbolLeft": "",
    "symbolRight": "Br",
    "decimalPlace": 0,
    "decimalPoint": ",",
    "thousandsPoint": " "
  },
  "BZD": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "CAD": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "CDF": {
    "symbolLeft": "",
    "symbolRight": "Fr",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "CHF": {
    "symbolLeft": "CHF",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "CLF": {
    "symbolLeft": "UF",
    "symbolRight": "",
    "decimalPlace": 0,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "CLP": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 0,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "CNY": {
    "symbolLeft": "¥",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "COP": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "CRC": {
    "symbolLeft": "₡",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "CUC": {
    "symbolLeft": "",
    "symbolRight": "$",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "CUP": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "CVE": {
    "symbolLeft": "",
    "symbolRight": "$",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "CZK": {
    "symbolLeft": "",
    "symbolRight": "Kč",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "DJF": {
    "symbolLeft": "",
    "symbolRight": "Fdj",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "DKK": {
    "symbolLeft": "",
    "symbolRight": "kr",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "DOP": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "DZD": {
    "symbolLeft": "",
    "symbolRight": "د.ج",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "EGP": {
    "symbolLeft": "ج.م",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "ERN": {
    "symbolLeft": "",
    "symbolRight": "Nfk",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "ETB": {
    "symbolLeft": "",
    "symbolRight": "Br",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "EUR": {
    "symbolLeft": "€",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": " "
  },
  "FJD": {
    "symbolLeft": "",
    "symbolRight": "$",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "FKP": {
    "symbolLeft": "",
    "symbolRight": "£",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "GBP": {
    "symbolLeft": "£",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "GEL": {
    "symbolLeft": "",
    "symbolRight": "ლ",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "GHS": {
    "symbolLeft": "₵",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "GIP": {
    "symbolLeft": "£",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "GMD": {
    "symbolLeft": "",
    "symbolRight": "D",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "GNF": {
    "symbolLeft": "",
    "symbolRight": "Fr",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "GTQ": {
    "symbolLeft": "Q",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "GYD": {
    "symbolLeft": "",
    "symbolRight": "$",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "HKD": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "HNL": {
    "symbolLeft": "L",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "HRK": {
    "symbolLeft": "kn",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "HTG": {
    "symbolLeft": "",
    "symbolRight": "G",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "HUF": {
    "symbolLeft": "",
    "symbolRight": "Ft",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "IDR": {
    "symbolLeft": "Rp",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "ILS": {
    "symbolLeft": "₪",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "INR": {
    "symbolLeft": "₹",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "IQD": {
    "symbolLeft": "",
    "symbolRight": "ع.د",
    "decimalPlace": 3,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "IRR": {
    "symbolLeft": "﷼",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "ISK": {
    "symbolLeft": "kr",
    "symbolRight": "",
    "decimalPlace": 0,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "JMD": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "JOD": {
    "symbolLeft": "د.ا",
    "symbolRight": "",
    "decimalPlace": 3,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "JPY": {
    "symbolLeft": "¥",
    "symbolRight": "",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "KES": {
    "symbolLeft": "KSh",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "KGS": {
    "symbolLeft": "",
    "symbolRight": "som",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "KHR": {
    "symbolLeft": "",
    "symbolRight": "៛",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "KMF": {
    "symbolLeft": "",
    "symbolRight": "Fr",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "KPW": {
    "symbolLeft": "",
    "symbolRight": "₩",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "KRW": {
    "symbolLeft": "₩",
    "symbolRight": "",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "KWD": {
    "symbolLeft": "د.ك",
    "symbolRight": "",
    "decimalPlace": 3,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "KYD": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "KZT": {
    "symbolLeft": "",
    "symbolRight": "〒",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "LAK": {
    "symbolLeft": "",
    "symbolRight": "₭",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "LBP": {
    "symbolLeft": "ل.ل",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "LKR": {
    "symbolLeft": "",
    "symbolRight": "₨",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "LRD": {
    "symbolLeft": "",
    "symbolRight": "$",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "LSL": {
    "symbolLeft": "",
    "symbolRight": "L",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "LTL": {
    "symbolLeft": "",
    "symbolRight": "Lt",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "LVL": {
    "symbolLeft": "Ls",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "LYD": {
    "symbolLeft": "",
    "symbolRight": "ل.د",
    "decimalPlace": 3,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "MAD": {
    "symbolLeft": "",
    "symbolRight": "د.م.",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "MDL": {
    "symbolLeft": "",
    "symbolRight": "L",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "MGA": {
    "symbolLeft": "Ar",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "MKD": {
    "symbolLeft": "",
    "symbolRight": "ден",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "MMK": {
    "symbolLeft": "",
    "symbolRight": "K",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "MNT": {
    "symbolLeft": "",
    "symbolRight": "₮",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "MOP": {
    "symbolLeft": "",
    "symbolRight": "P",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "MRO": {
    "symbolLeft": "",
    "symbolRight": "UM",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "MUR": {
    "symbolLeft": "₨",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "MVR": {
    "symbolLeft": "",
    "symbolRight": "MVR",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "MWK": {
    "symbolLeft": "",
    "symbolRight": "MK",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "MXN": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "MYR": {
    "symbolLeft": "RM",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "MZN": {
    "symbolLeft": "MTn",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "NAD": {
    "symbolLeft": "",
    "symbolRight": "$",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "NGN": {
    "symbolLeft": "₦",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "NIO": {
    "symbolLeft": "",
    "symbolRight": "C$",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "NOK": {
    "symbolLeft": "",
    "symbolRight": "kr",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "NPR": {
    "symbolLeft": "₨",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "NZD": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "OMR": {
    "symbolLeft": "ر.ع.",
    "symbolRight": "",
    "decimalPlace": 3,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "PAB": {
    "symbolLeft": "",
    "symbolRight": "B/.",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "PEN": {
    "symbolLeft": "S/.",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "PGK": {
    "symbolLeft": "",
    "symbolRight": "K",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "PHP": {
    "symbolLeft": "₱",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "PKR": {
    "symbolLeft": "₨",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "PLN": {
    "symbolLeft": "",
    "symbolRight": "zł",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": " "
  },
  "PYG": {
    "symbolLeft": "₲",
    "symbolRight": "",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "QAR": {
    "symbolLeft": "",
    "symbolRight": "ر.ق",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "RON": {
    "symbolLeft": "Lei",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "RSD": {
    "symbolLeft": "РСД",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "RUB": {
    "symbolLeft": "",
    "symbolRight": "₽",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "RWF": {
    "symbolLeft": "",
    "symbolRight": "FRw",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "SAR": {
    "symbolLeft": "ر.س",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "SBD": {
    "symbolLeft": "",
    "symbolRight": "$",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "SCR": {
    "symbolLeft": "",
    "symbolRight": "₨",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "SDG": {
    "symbolLeft": "£",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "SEK": {
    "symbolLeft": "",
    "symbolRight": "kr",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": " "
  },
  "SGD": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "SHP": {
    "symbolLeft": "",
    "symbolRight": "£",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "SLL": {
    "symbolLeft": "",
    "symbolRight": "Le",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "SOS": {
    "symbolLeft": "",
    "symbolRight": "Sh",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "SRD": {
    "symbolLeft": "",
    "symbolRight": "$",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "SSP": {
    "symbolLeft": "",
    "symbolRight": "£",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "STD": {
    "symbolLeft": "",
    "symbolRight": "Db",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "SVC": {
    "symbolLeft": "₡",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "SYP": {
    "symbolLeft": "",
    "symbolRight": "£S",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "SZL": {
    "symbolLeft": "E",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "THB": {
    "symbolLeft": "฿",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "TJS": {
    "symbolLeft": "",
    "symbolRight": "ЅМ",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "TMT": {
    "symbolLeft": "",
    "symbolRight": "T",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "TND": {
    "symbolLeft": "",
    "symbolRight": "د.ت",
    "decimalPlace": 3,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "TOP": {
    "symbolLeft": "T$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "TRY": {
    "symbolLeft": "₺",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "TTD": {
    "symbolLeft": "",
    "symbolRight": "$",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "TWD": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "TZS": {
    "symbolLeft": "Sh",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "UAH": {
    "symbolLeft": "",
    "symbolRight": "₴",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "UGX": {
    "symbolLeft": "",
    "symbolRight": "USh",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "USD": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "UYU": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "UZS": {
    "symbolLeft": "",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "VEF": {
    "symbolLeft": "Bs F",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "VND": {
    "symbolLeft": "₫",
    "symbolRight": "",
    "decimalPlace": 0,
    "decimalPoint": ",",
    "thousandsPoint": "."
  },
  "VUV": {
    "symbolLeft": "Vt",
    "symbolRight": "",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "WST": {
    "symbolLeft": "",
    "symbolRight": "T",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "XAF": {
    "symbolLeft": "",
    "symbolRight": "Fr",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "XAG": {
    "symbolLeft": "",
    "symbolRight": "oz t",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "XAU": {
    "symbolLeft": "",
    "symbolRight": "oz t",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "XCD": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "XDR": {
    "symbolLeft": "",
    "symbolRight": "SDR",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "XOF": {
    "symbolLeft": "",
    "symbolRight": "Fr",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "XPF": {
    "symbolLeft": "",
    "symbolRight": "Fr",
    "decimalPlace": 0,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "YER": {
    "symbolLeft": "",
    "symbolRight": "﷼",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "ZAR": {
    "symbolLeft": "R",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "ZMW": {
    "symbolLeft": "",
    "symbolRight": "ZK",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  },
  "ZWL": {
    "symbolLeft": "$",
    "symbolRight": "",
    "decimalPlace": 2,
    "decimalPoint": ".",
    "thousandsPoint": ","
  }
};
