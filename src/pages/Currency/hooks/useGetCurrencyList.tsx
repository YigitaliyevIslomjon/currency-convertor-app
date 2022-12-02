import { useEffect, useState } from "react";
import api from "../../../services/api";
import { CurrencyApi, CurrencyList } from "../type/type";

export const useGetCurrencyList = (count: number) => {
  const [currencyList, setCurrcyList] = useState<CurrencyList[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<CurrencyList[] | []>([]);

  function getCurrencyList() {
    setLoading(true);
    api
      .get(
        "/v1/latest?apikey=4qUSJq8p7UmIkFoTgaPAierfYyK4kyvQfjqutInT&currencies="
      )
      .then((res: CurrencyApi) => {
        let data = Object.entries(res.data.data).map((item) => ({
          name: item[0],
          value: item[1],
        }));
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

    // const intervalId = setInterval(() => {
    //   // api
    // }, 10000);

    // return () => {
    //   clearInterval(intervalId);
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return { data, loading, currencyList };
};
