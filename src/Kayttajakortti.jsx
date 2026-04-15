import Tervehdys from "./Tervehdys.jsx";
import Infolista from "./infolista.jsx";

function Kayttajakortti(props) {
  return (
    <div>
      <Tervehdys nimi={props.nimi} />
      <Infolista taulukko={props.lista} />
    </div>
  );
}

export default Kayttajakortti;
