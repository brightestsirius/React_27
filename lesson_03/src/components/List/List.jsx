import React, { useState, useEffect } from "react";

export default function List({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);
  const [color, setColor] = useState(`black`);

  useEffect(() => {
    console.log(`in useEffect for list`, list);
    if(list.length<4) setColor(`green`);
  }, [list])

  useEffect(()=>{
    console.log(`in useEffect in componentDidMount – first`);

    setTimeout(() => {
        setList(prevState => prevState.slice(0, -1));
        console.log(`in timeout`, list); // cat, dog, lion
    }, 1000);
  }, [])

  useEffect(() => {
    console.log(`in useEffect for list`, list);
    if(list.length<=2) setColor(`red`);
  }, [list])

  useEffect(() => {
    console.log(`in useEffect for list & color`, list, color);
    if(list.length === 1 && color === `red`) console.log(`Critical!`);
  }, [list, color])

  const handleItemDelete = (index) => setList(prevState => prevState.filter((item, id) => id !== index))

  return list.length ? (
    <ul style={{color}}>
      {list.map((item, index) => (
        <li key={index}>{item} <button onClick={() => handleItemDelete(index)}>Delete</button></li>
      ))}
    </ul>
  ) : null;
}
