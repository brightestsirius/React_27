import React, { useState, useEffect } from "react";

export default function ListStateEffect({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);
  const [removeInterval, setRemoveInterval] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
        console.log(`in interval`);
      setList((prevState) => prevState.slice(0, -1));
    }, 1000);

    setRemoveInterval(interval);

    return () => {
        clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    !list.length && clearInterval(removeInterval);
  }, [list])

  return list.length ? (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : null;
}