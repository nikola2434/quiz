import { FC } from "react";

import "./App.module.scss";
import Routers from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";


export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
};
