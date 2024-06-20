import React, { useState, useEffect } from "react";
import './style.sass'

export default function Counter({liftingCounter, liftingClickCount}) {
  const [counter, setCounter] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const handleDecrement = () => {
    setCounter(prevState => prevState-1);
    setClickCount(prevState => prevState+1);
  };
  const handleIncrement = () => {
    setCounter(prevState => prevState+1);
    setClickCount(prevState => prevState+1);
  }

  useEffect(() => {
    liftingCounter(counter);
  }, [counter]);

  useEffect(() => {
    liftingClickCount(clickCount);
  }, [clickCount])

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <span>{counter}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}