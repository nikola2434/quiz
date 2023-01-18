import { FC } from "react";
import { Outlet } from "react-router-dom";
import { dataNavigation } from "./Navigation.data";
import style from "./Navigation.module.scss";
import NavItem from "./NavItem/NavItem";

const Navigation: FC = () => {
  return (
    <div className={style.layout}>
      <div className={style.navigation}>
        {dataNavigation.map((link) => (
          <NavItem link={link.link} title={link.title} key={link.title} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
