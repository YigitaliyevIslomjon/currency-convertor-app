import { ChangeEvent, useState } from "react";

export const useInputAmount = () => {
  const [inputAmunt, setInputAmunt] = useState<number>(1);
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputAmunt(+e.target.value);
  };

  return { inputAmunt, handleAmountChange };
};
