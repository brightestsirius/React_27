import React, { useState } from "react";
import "./style.sass";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [intervalCounter, setIntervalCounter] = useState();

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleSet = () => {
    const value = prompt(`Set value`);
    setCounter(counter + +value);
  };

  const handleStartInterval = () => {
    const interval = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 1000);

    setIntervalCounter(interval);
  };

  const handleClearInterval = () => {
    clearInterval(intervalCounter);
  }

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <span>{counter}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleSet}>Prompt value</button>

      <button onClick={handleStartInterval}>Start increment</button>
      <button onClick={handleClearInterval}>Stop increment</button>
    </div>
  );
}
