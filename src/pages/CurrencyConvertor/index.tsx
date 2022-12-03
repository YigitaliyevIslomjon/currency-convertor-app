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
import { Currency } from "../../types/Currency.types";

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

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="currency">
      <div className="currency__container">
        <div className="currency__formControl">
          <label className="currency_label">Amount</label>
          <Input
            value={inputAmunt}
            size="large"
            className="currency_width"
            onChange={handleAmountChange}
          />
        </div>
        <div className="currency__formControl">
          <label className="currency_label">From</label>
          <Select
            size="large"
            value={fromCurrency}
            className="currency_width"
            onChange={fromCurrencyChange}
            options={currencyList.map((currency: Currency) => ({
              label: currency.name,
              value: currency.name,
            }))}
          />
        </div>
        <div className="currency__circule" onClick={repalceCurrencyVal}>
          <FontAwesomeIcon color="#3F90E8" icon={faRightLeft} />
        </div>
        <div className="currency__formControl">
          <label className="currency_label">To</label>
          <Select
            size="large"
            value={toCurrency}
            className="currency_width"
            onChange={toCurrencyChange}
            options={currencyList.map((currency) => ({
              label: currency.name,
              value: currency.name,
            }))}
          />
        </div>
      </div>
      <div className="currency__container">
        <div className="currency__formControl">
          <label className="currency_label">
            {inputAmunt +
              "  " +
              fromCurrency +
              " = " +
              convetResult +
              " " +
              toCurrency}
          </label>
          <Input value={convetResult} size="large" className="currency_width" />
        </div>
        <Button type="primary" size="large" onClick={handleConvertChange}>
          Convert
        </Button>
      </div>
    </div>
  );
}

export default CurrencyConvertor;
