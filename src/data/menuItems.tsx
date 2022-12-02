import { ReactNode } from "react";
import { faRightLeft, faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface MenuItems {
  key: string;
  icon?: ReactNode;
  label: ReactNode;
}

export const menuItems: MenuItems[] = [
  {
    key: "1",
    label: <Link to="/currency-converter">Currency Convertor</Link>,
    icon: <FontAwesomeIcon icon={faRightLeft} />,
  },
  {
    key: "2",
    label: <Link to="/currency"> Currency</Link>,
    icon: <FontAwesomeIcon icon={faCoins} />,
  },
];
