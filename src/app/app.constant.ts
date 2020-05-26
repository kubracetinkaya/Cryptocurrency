export const availableLanguages = [
  {
    code: 'en',
    name: 'English'
  },
  {
    code: 'fr',
    name: 'Français'
  },
  {
    code: 'tr',
    name: 'Türkçe'
  }
];

export const defaultLanguage = 'en';

export const availableCurrency = [
  {
    code: 'usd',
    name: 'Dollar',
    symbol: '$'
  },
  {
    code: 'eur',
    name: 'Euro',
    symbol: '€'
  },
  {
    code: 'try',
    name: 'TRY',
    symbol: '₺'
  }
];

export const defaultCurrency = 'usd';

export enum availableTheme {
  Dark = 'dark-theme',
  Light = 'light-theme'
}

export const apiUrl: string = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?';
