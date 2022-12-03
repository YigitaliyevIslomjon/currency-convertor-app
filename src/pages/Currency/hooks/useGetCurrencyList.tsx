import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Currency, CurrencyResponse } from "../../../types/Currency.types";

export const useGetCurrencyList = (count: number) => {
  const [currencyList, setCurrcyList] = useState<Currency[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Currency[] | []>([]);

  function getCurrencyList() {
    setLoading(true);
    api
      .get<CurrencyResponse>(
        "/v1/latest?apikey=4qUSJq8p7UmIkFoTgaPAierfYyK4kyvQfjqutInT&currencies="
      )
      .then((res) => {
        let data: Currency[] = Object.entries(res.data.data).map(
          (item, index) => ({
            name: item[0],
            value: item[1],
            key: index + 1,
          })
        );
        setData(data);
        setCurrcyList(data.slice(0, count));
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    getCurrencyList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getCurrencyList();
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, currencyList };
};
