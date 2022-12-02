import { useState } from "react";
import { CurrencyList } from "../type/type";

export const useCount = () => {
  const [count, setCount] = useState<number>(10);

  const handleScroll = (
    event: React.UIEvent<HTMLElement>,
    data: CurrencyList[]
  ) => {
    let element = event.currentTarget;
    if (
      element.scrollHeight - element.scrollTop === element.clientHeight &&
      data.length > count
    ) {
      setCount((prev) => prev + 10);
    }
  };
  return { count, handleScroll };
};
