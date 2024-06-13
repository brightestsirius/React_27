import React, { useState, useEffect } from "react";
import "./style.sass";

export default function ListState({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);
  const [color, setColor] = useState(`black`);
  const [borderWidth, setBorderWidth] = useState(0);
  const [removeInterval, setRemoveInteval] = useState();

  // setTimeout(() => {
  //   setList((prevState) => [`TARAS`, ...prevState.slice(1)]);
  // }, 1000);

  // setTimeout(() => {
  //   setList(prevState => [...prevState.slice(0, -1), `SHEVA`]);
  // }, 1000);

  useEffect(() => {
    // setTimeout(() => {
    //   setList((prevState) => prevState.slice(0, -1));
    // }, 1000);

    // setTimeout(() => {
    //   setList((prevState) => prevState.slice(0, -1));
    // }, 2000);

    const interval = setInterval(() => {
      console.log(`in interval`);
      setList((prevState) => prevState.slice(0, -1));
    }, 1000);

    setRemoveInteval(interval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log(list);
    if (list.length === 4) setColor(`green`);
    if (list.length === 3) setBorderWidth(`5px`);
    if (!list.length) clearInterval(removeInterval);
  }, [list]);

  useEffect(() => {
    console.log(`style changed`, color, borderWidth);
  }, [color, borderWidth]);

  return list.length ? (
    <ol className="list" style={{ color, borderWidth }}>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  ) : null;
}
