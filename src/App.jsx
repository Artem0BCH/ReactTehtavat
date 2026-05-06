import * as React from "react";
import { useState } from "react";

import Infolista from "./infolista.jsx";
import Linkkilista from "./Linkkilista.jsx";
import Tervehdys from "./Tervehdys.jsx";
import Kayttajakortti from "./Kayttajakortti.jsx";
import Laskuri from "./Counter.jsx";
import LaskuriKorjattu from "./FixedCounter.jsx";

function App() {
  const tiedot = ["React", "Javascript", "CSS"];
  const linkit = [
    { id: 1, nimi: "Google", url: "https://google.com" },
    { id: 2, nimi: "React", url: "https://react.dev" },
  ];
  return (
    <>
      <Infolista taulukko={tiedot} />
      <Linkkilista taulukko={linkit} />
      <Kayttajakortti nimi="Ville" lista={["React", "JavaScript", "CSS"]} />
      <Laskuri />
      <LaskuriKorjattu />
    </>
  );
}

export default App;
