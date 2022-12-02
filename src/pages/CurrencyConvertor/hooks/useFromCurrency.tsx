import { useState } from "react";

export const useFromCurrency = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("USD");

  const fromCurrencyChange = (value: string) => {
    setFromCurrency(value);
  };
  
  return { fromCurrency, setFromCurrency, fromCurrencyChange };
};
