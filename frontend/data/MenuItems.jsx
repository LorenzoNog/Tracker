import { BsFillHouseDoorFill} from "react-icons/bs";
import { MdMonetizationOn } from "react-icons/md";
import {GiPayMoney} from "react-icons/gi"
const MenuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <BsFillHouseDoorFill/>,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Incomes",
    icon: <MdMonetizationOn />,
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Expenses",
    icon: <GiPayMoney />,
    link: "/dashboard",
  },
];

export default MenuItems;
