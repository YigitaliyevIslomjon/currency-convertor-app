export type CurrencyList = {
  name: string;
  value: number;
};

export interface CurrencyApi {
  data: { [key: string]: number };
}
