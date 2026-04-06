import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clear = () => {
    setInput("");
  };

  // ✅ Delete last character
  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      let expression = input.replace(/÷/g, "/").replace(/×/g, "*");
      setInput(eval(expression).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1 className="name">CALCULATOR</h1>

      <input type="text" value={input} readOnly className="display" />

      <div className="buttons">
        {/* Top row */}
        <button onClick={clear} className="clear">C</button>
        <button onClick={deleteLast}>DEL</button>
        <button onClick={() => handleClick("%")}>%</button>
        <button onClick={() => handleClick("/")}>÷</button>

        {/* Numbers */}
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>×</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        {/* Bottom */}
        <button onClick={() => handleClick("0")} className="zero">0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculate} className="equal">=</button>
      </div>
    </div>
  );
}

export default App;