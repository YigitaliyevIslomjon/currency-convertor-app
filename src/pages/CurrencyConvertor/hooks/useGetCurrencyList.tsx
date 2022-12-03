import { useEffect, useState } from "react";
import api from "../../../services/api";
import {
  Currency,
  CurrencyRates,
  CurrencyResponse,
} from "../../../types/Currency.types";

export const useGetCurrencyList = () => {
  const [data, setData] = useState<CurrencyRates | {}>({});
  const [currencyList, setCurrcyList] = useState([] as Currency[]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCurrencyList = () => {
    setLoading(true);
    api
      .get<CurrencyResponse>(
        "/v1/latest?apikey=4qUSJq8p7UmIkFoTgaPAierfYyK4kyvQfjqutInT&currencies="
      )
      .then((res) => {
        let data: Currency[] = Object.entries(res.data.data).map((item) => ({
          name: item[0],
          value: item[1],
        }));
        setData(res.data.data);
        setCurrcyList(data);
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
