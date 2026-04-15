import Infolista from "./infolista.jsx";
import Linkkilista from "./Linkkilista.jsx";
import Tervehdys from "./Tervehdys.jsx";
import Kayttajakortti from "./Kayttajakortti.jsx";

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
    </>
  );
}

export default App;
