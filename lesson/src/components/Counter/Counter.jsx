import React, { useState } from "react";
import "./style.sass";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [int, setInt] = useState();

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleSet = () => {
    const value = +prompt(`Enter value`);
    setCounter(counter + value);
  };

  const startInterval = () => {
    const inetrval = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 1000);

    setInt(inetrval);
  };

  const stopInterval = () => {
    clearInterval(int);
  };

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <span>{counter}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleSet}>Set value</button>
      <button onClick={startInterval}>Start interval</button>
      <button onClick={stopInterval}>Stop interval</button>
    </div>
  );
}