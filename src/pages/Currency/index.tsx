import { Table } from "antd";
import { useCount } from "./hooks/useCount";
import { useGetCurrencyList } from "./hooks/useGetCurrencyList";
import { columns } from "./data/constants";
import "./index.scss";

function Currency() {
  const { count, handleScroll } = useCount();
  const { data, loading, currencyList } = useGetCurrencyList(count);

  return (
    <div className="currencyList" onScroll={(e) => handleScroll(e, data)}>
      <div className="currencyList__container">
        <Table
          className="currencyList__table"
          columns={columns}
          loading={loading}
          dataSource={currencyList}
          size="large"
          pagination={false}
        />
      </div>
    </div>
  );
}

export default Currency;
