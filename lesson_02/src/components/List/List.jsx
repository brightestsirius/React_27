import React from "react";

import ListItem from "./ListItem";

export default function List({ list = [], handleClick }) {

  return list.length ? (
    <ol>
      {list.map((item, index) => (
        <ListItem key={index} item={item} handleClick={() => handleClick(item)} />
      ))}
    </ol>
  ) : null;
}
