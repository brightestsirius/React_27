import React, { useState, useEffect } from "react";

export default function List({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);
  const [color, setColor] = useState(`black`);

  useEffect(() => {
    setTimeout(() => {
      setList((prevState) => prevState.slice(0, -1));
      console.log(`in timeout`);
    }, 1000);
  }, []);

  useEffect(() => {
    if (list.length <= 2) setColor(`crimson`);
  }, [list]);

  useEffect(() => {
    if (list.length <= 1 && color === `crimson`) console.log(`CRITICAL`);
  }, [list, color]);

  const handleDelete = (index) =>
    setList((prevState) => prevState.filter((item, id) => id !== index));

  return list.length ? (
    <ul style={{ color }}>
      {list.map((item, index) => (
        <li key={index}>
          {item} <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
