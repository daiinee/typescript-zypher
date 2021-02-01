import "./style.css";
import "./style.scss";
import React, { useState } from "react";
import { render } from "react-dom";

function App() {
  const [state, setState] = useState("CLICK ME");

  return (
    <button onClick={() => setState("I kind of get it now")}>{state}</button>
  );
}

render(<App />, document.getElementById("root"));
