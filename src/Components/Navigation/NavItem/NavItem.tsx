import { FC } from "react";
import { INavigationData } from "../Navigation.interface";
import style from "./NavItem.module.scss";
import { Link } from "react-router-dom";

const NavItem: FC<INavigationData> = ({ link, title }) => {
  return (
    <Link to={link} className={style.nav_link}>
      {title}
    </Link>
  );
};

export default NavItem;
