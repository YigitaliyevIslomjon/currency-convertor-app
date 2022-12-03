export type Currency = {
  name: string;
  value: number;
};

export type CurrencyRates = { [key: string]: number };

export interface CurrencyResponse {
  data: CurrencyRates;
}
