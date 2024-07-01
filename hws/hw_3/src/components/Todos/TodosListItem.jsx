import React from "react";

import Button from "./../Button/Button";

export default function TodosListItem({ item = {}, handleItemDelete, handleItemCompleted, className }) {
  return (
    <li className={className} onClick={handleItemCompleted}>
      {item.title} <Button title={"Delete"} handleClick={handleItemDelete} />
    </li>
  );
}
