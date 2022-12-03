import { Button, Input, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/Spinner";
import { useToCurrency } from "./hooks/useToCurrency";
import { useGetCurrencyList } from "./hooks/useGetCurrencyList";
import { useFromCurrency } from "./hooks/useFromCurrency";
import { useInputAmount } from "./hooks/useInputAmount";
import { useConvertResult } from "./hooks/useConvertResult";
import "./index.scss";

function CurrencyConvertor() {
  const { inputAmunt, handleAmountChange } = useInputAmount();
  const { data, loading, currencyList } = useGetCurrencyList();
  const { fromCurrency, setFromCurrency, fromCurrencyChange } =
    useFromCurrency();
  const { toCurrency, setToCurrency, toCurrencyChange } = useToCurrency();
  const { convetResult, handleConvertChange } = useConvertResult(
    inputAmunt,
    toCurrency,
    fromCurrency,
    data
  );

  const repalceCurrencyVal = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
  };

  return (
    <div className="currency">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="currency__container">
            <Input
              value={inputAmunt}
              size="large"
              className="currency_width"
              onChange={handleAmountChange}
            />
            <Select
              size="large"
              value={fromCurrency}
              className="currency_width"
              onChange={fromCurrencyChange}
              options={currencyList.map((currency) => ({
                label: currency,
                value: currency,
              }))}
            />
            <div className="currency__circule" onClick={repalceCurrencyVal}>
              <FontAwesomeIcon icon={faRightLeft} />
            </div>
            <Select
              size="large"
              value={toCurrency}
              className="currency_width"
              onChange={toCurrencyChange}
              options={currencyList.map((currency) => ({
                label: currency,
                value: currency,
              }))}
            />
          </div>
          <div className="currency__container">
            <Input
              value={convetResult}
              size="large"
              className="currency_width"
            />
            <Button type="primary" size="large" onClick={handleConvertChange}>
              Convert
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default CurrencyConvertor;
