import { useState } from "react";
import { CurrencyRates } from "../../../types/Currency.types";

export const useConvertResult = (
  inputAmunt: number,
  toCurrency: string,
  fromCurrency: string,
  data: CurrencyRates
) => {
  const [convetResult, setConvetResult] = useState<number>(0);

  const handleConvertChange = () => {
   
    setConvetResult(
      inputAmunt *
        (data[toCurrency as keyof typeof data] /
          data[fromCurrency as keyof typeof data])
    );
  };

  return { convetResult, handleConvertChange };
};
