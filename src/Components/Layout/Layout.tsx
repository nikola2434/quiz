import { FC } from "react";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
