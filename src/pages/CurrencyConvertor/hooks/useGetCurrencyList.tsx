import { useEffect, useState } from "react";
import api from "../../../services/api";
import { CurrencyApi, CurrencyList, Data } from "../type/type";

export const useGetCurrencyList = () => {
  const [data, setData] = useState<Data | {}>({});
  const [currencyList, setCurrcyList] = useState([] as CurrencyList);
  const [loading, setLoading] = useState<boolean>(false);

  const getCurrencyList = () => {
    setLoading(true);
    api
      .get(
        "/v1/latest?apikey=4qUSJq8p7UmIkFoTgaPAierfYyK4kyvQfjqutInT&currencies="
      )
      .then((res: CurrencyApi) => {
        setData(res.data.data);
        setCurrcyList(Object.keys(res.data.data));
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCurrencyList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, currencyList };
};
