import { lazy, ReactNode } from "react";

const Currency = lazy(() => import("../pages/Currency"));
const CurrencyConvertor = lazy(() => import("../pages/CurrencyConvertor"));
const NotFound = lazy(() => import("../pages/NotFound"));

interface RouteItems {
  path: string;
  component: ReactNode;
  name: string;
  id: string;
}

export const routeItems: RouteItems[] = [
  {
    id: "1",
    path: "/currency-converter",
    component: <CurrencyConvertor />,
    name: "Currency Convertor",
  },
  {
    id: "2",
    path: "/currency",
    component: <Currency />,
    name: "Currency List",
  },
  {
    id: "e",
    path: "/*",
    component: <NotFound />,
    name: "not Found Page",
  },
];
