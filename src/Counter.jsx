import { useState } from "react";

function LaskuriNaytto({ count }) {
  return <p>{count}</p>;
}

function KasvatusPainike({ onClick }) {
  return <button onClick={onClick}>Kasvata</button>;
}

function VahennysPainike({ onClick }) {
  return <button onClick={onClick}>Vähennä</button>;
}

function NollausPainike({ onClick }) {
  return <button onClick={onClick}>Nollaa</button>;
}

function TuplaKasvatus({ onClick }) {
  return <button onClick={onClick}>TuplaKasvatus</button>;
}

function Laskuri() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <LaskuriNaytto count={count} />
      <KasvatusPainike onClick={() => setCount(count + 1)} />
      <VahennysPainike onClick={() => setCount(count - 1)} />
      <NollausPainike onClick={() => setCount(0)} />
      <TuplaKasvatus onClick={() => setCount(count + 2)} />
    </div>
  );
}

export default Laskuri;
