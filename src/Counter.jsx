import * as React from "react";
import { useState } from "react";

function Laskuri() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Kasvata</button>
      <button onClick={() => setCount(count - 1)}>Vähennä</button>
      <button onClick={() => setCount(0)}>Nollaa</button>
    </div>
  );
}

export default Laskuri;
