import React, { useState, useEffect } from "react";

import { renderValue } from "./../../utils/renderValue";

export default function List({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);
  const [color, setColor] = useState(`black`);
  const [removeInterval, setRemoveInterval] = useState();

  useEffect(() => {
    // setTimeout(() => {
    //   setList((prevState) => [`Taras`, ...prevState.slice(1)]);
    // }, 1000);

    // setTimeout(() => {
    //   setList((prevState) => prevState.slice(0, -1));
    // }, 2000);

    const intervalId = setInterval(() => {
        setList((prevState) => prevState.slice(0, -1));
    }, 1000);
    setRemoveInterval(intervalId);

    return () => {
        clearInterval(intervalId);
    }
  }, []);

  //   useEffect(() => {
  //     console.log(`in useEffect for list && content`, list);
  //     if(list[0] === `Taras`) setColor(`orange`);
  //   }, [list])

  //   useEffect(() => {
  //     console.log(`in useEffect for list && length`, list);
  //     if(list.length === 3) setColor(`crimson`);
  //   }, [list])

  useEffect(() => {
    console.log(`in useEffect for list`, list);
    !list.length && clearInterval(removeInterval);

    return () => {
        console.log(`in componentWillUnmount for useEffect for list`, list);
    }
  }, [list]);

  return list.length ? (
    <ul style={{ color }}>
      {list.map((item, index) => (
        <li key={index}>{renderValue(item)}</li>
      ))}
    </ul>
  ) : null;
}
