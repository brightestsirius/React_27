import React, { useState, useEffect } from "react";

export default function ListInterval({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);
  const [removeInt, setRemoveInt] = useState();

  useEffect(() => {
    const int = setInterval(() => {
      setList((prevState) => prevState.slice(0, -1));
    }, 1000);

    setRemoveInt(int);

    return () => {
        console.log(`in ListInterval ComponentWillUnmount`);
        clearInterval(int);
    }
  }, []);

  useEffect(() => {
    console.log(`in useEffect for list`, list);
    !list.length && clearInterval(removeInt);
  }, [list]);

  return list.length ? (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : null;
}