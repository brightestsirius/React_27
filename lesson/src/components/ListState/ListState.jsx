import React, { useState, useEffect } from "react";
import "./style.sass";

export default function ListState({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);
  const [color, setColor] = useState(`black`);
  const [borderWidth, setBorderWidth] = useState(`0px`);
  const [handleRemoveCount, setHandleRemoveCount] = useState(0);

  useEffect(() => {
    console.log(`in useEffect for componentDidMount`);

    setTimeout(() => {
      setList((prevState) => [`TARAS`, ...prevState.slice(1)]);
    }, 1000);

    setTimeout(() => {
      setList((prevState) => [...prevState.slice(0, -1), `SHEVA`]);
    }, 1000);

    setTimeout(() => {
      setList((prevState) => prevState.slice(0, -1));
    }, 2000);
  }, []);

  useEffect(() => {
    console.log(`in useEffect for list`, list);
    if (list.length <= 3) setColor(`crimson`);
    if (list.length <= 2) setBorderWidth(`2px`);
  }, [list]);

  useEffect(() => {
    console.log(
      `in useEffect for list && handleRemoveCount`,
      list,
      handleRemoveCount
    );
    if (list.length <= 3 && handleRemoveCount === 3) alert(`Critical!`);
  }, [list, handleRemoveCount]);

  const handleItemRemove = (index) => {
    setList((prevState) => prevState.filter((item, ind) => index !== ind));
    setHandleRemoveCount((prevState) => prevState + 1);
  };

  return list.length ? (
    <ol className="list" style={{ color, borderWidth }}>
      {list.map((item, index) => (
        <li key={index}>
          {item} <button onClick={() => handleItemRemove(index)}>Remove</button>
        </li>
      ))}
    </ol>
  ) : null;
}
