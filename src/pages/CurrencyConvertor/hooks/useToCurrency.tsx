import { useState } from "react";

export const useToCurrency = () => {
  const [toCurrency, setToCurrency] = useState<string>("RUB");

  const toCurrencyChange = (value: string) => {
    setToCurrency(value);
  };

 

  return { toCurrency, setToCurrency, toCurrencyChange };
};
