import { ColumnsType } from "antd/es/table";
import { CurrencyList } from "../type/type";

export const columns: ColumnsType<CurrencyList> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Value",
    dataIndex: "value",
  },
];
