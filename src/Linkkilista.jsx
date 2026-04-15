import * as React from "react";

function Linkkilista(props) {
  return (
    <ul>
      {props.taulukko.map((item) => (
        <li key={item.id}>
          <a href={item.url}>{item.nimi}</a>
        </li>
      ))}
    </ul>
  );
}

export default Linkkilista;
