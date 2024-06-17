import React, { useState } from "react";
import "./style.sass";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [int, setInt] = useState();

  const handleDecrement = () => {
    setCounter(prevState => prevState - 1);
  };

  const handleIncrement = () => {
    setCounter(prevState => prevState + 1);
  };

  const handleSet = () => {
    const value = +prompt(`Enter value`);
    setCounter(prevState => prevState+value);
  }

  const handleStartInterval = () => {
    const interval = setInterval(() => {
        setCounter(prevState => prevState+1);
    }, 1000);

    setInt(interval);
  }

  const handleStopInterval = () => {
    clearInterval(int);
  }

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <span>{counter}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleSet}>Set value</button>
      <button onClick={handleStartInterval}>Start interval</button>
      <button onClick={handleStopInterval}>Stop interval</button>
    </div>
  );
}
