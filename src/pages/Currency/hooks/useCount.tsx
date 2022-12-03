import { useState } from "react";
import { Currency } from "../../../types/Currency.types";

export const useCount = () => {
  const [count, setCount] = useState<number>(7);

  const handleScroll = (
    event: React.UIEvent<HTMLElement>,
    data: Currency[]
  ) => {
    let element = event.currentTarget;
    if (
      element.scrollHeight - element.scrollTop === element.clientHeight &&
      data.length > count
    ) {
      setCount((prev) => prev + 7);
    }
  };
  return { count, handleScroll };
};
