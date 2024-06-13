import React from "react";

import ListItem from "./ListItem";

export default function List({ list = [] }) {
  const handleClick = (item) => console.log(item);

  return list.length ? (
    <ol>
      {list.map((item, index) => (
        <ListItem key={index} item={item} clickFn={() => handleClick(item)} />
      ))}
    </ol>
  ) : null;
}
