import React, { useState } from "react";

import Counter from "./../Counter/Counter";
import CounterTitle from './CounterTitle'

export default function CounterWrapper() {
  const [counterWrap, setCounterWrap] = useState();
  const [counterAddedValue, setCounterAddedValue] = useState();

  return (
    <>
      <CounterTitle counterWrap={counterWrap} />
      <h4>Add value: {counterAddedValue}</h4>
      <Counter liftingCounter={setCounterWrap} liftingAddValue={setCounterAddedValue} />
    </>
  );
}