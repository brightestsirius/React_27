import React, { useState } from "react";

export default function ListState({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);

  // let list = [`cat`, `dog`, `lion`, `tiger`];
  // prevState.slice(1) => [`dog`, `lion`, `tiger`]

  // const [user, setUser] = useState({name: `Andriy`, age: 100});
  // setUser(prevState => ( {...prevState, age: 101, animal: `cat`} ));

  setTimeout(() => {
    setList((prevState) => [`TARAS`, ...prevState.slice(1)]);
    // console.log(`timeout`);
  }, 1000);

  // setTimeout(() => {
  //     setList(prevState => prevState.slice(0, -1));
  // }, 1000)

  return list.length ? (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : null;
}
