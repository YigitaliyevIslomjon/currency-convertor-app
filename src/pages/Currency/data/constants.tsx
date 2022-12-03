import { ColumnsType } from "antd/es/table";
import { Currency } from "../../../types/Currency.types";

export const columns: ColumnsType<Currency> = [
  {
    key: "number",
    title: "№",
    dataIndex: "number",
    render: (text, record, index) => {
      return <div>{index + 1}</div>;
    },
  },
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
  },
  {
    key: "value",
    title: "Value",
    dataIndex: "value",
  },
];
