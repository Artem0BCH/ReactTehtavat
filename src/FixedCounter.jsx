import { useState } from "react";

function LaskuriKorjattu() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Kasvata</button>
      <button onClick={reset}>Nollaa</button>
    </div>
  );
}

export default LaskuriKorjattu;
