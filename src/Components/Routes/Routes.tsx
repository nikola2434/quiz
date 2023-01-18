import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { aiakData } from "../../Data/Aiak.data";
import { aipData } from "../../Data/Aip.data";
import { cosinchaepData } from "../../Data/Cosinchep.data";
import { cosipeminData } from "../../Data/Cosipemin_data";
import { cosivchoData } from "../../Data/Cosivcho_data";
import { koikaData } from "../../Data/Koika.data";
import { Game } from "../../Game/Game";
import Advice from "../Advice/Advice";
import Navigation from "../Navigation/Navigation";
import Results from "../Results/Results";

const Routers: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Advice />} />
          <Route path="results" element={<Results />} />
        </Route>

        <Route path="cosipemin" element={<Game data={cosipeminData} />} />
        <Route path="cosivcho" element={<Game data={cosivchoData} />} />
        <Route path="cosinchep" element={<Game data={cosinchaepData} />} />
        <Route path="aiak" element={<Game data={aiakData} />} />
        <Route path="koika" element={<Game data={koikaData} />} />
        <Route path="aip" element={<Game data={aipData} />} />
      </Routes>
    </>
  );
};

export default Routers;
