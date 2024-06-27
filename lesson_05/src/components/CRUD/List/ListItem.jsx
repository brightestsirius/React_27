import React, { memo } from "react";

export default memo(function ListItem({
  item,
  handleItemCompleted,
  handleItemDelete,
}) {
  return (
    <li
      key={item.id}
      className={item.completed ? `completed` : ``}
      onClick={(e) => handleItemCompleted(e, item)}
    >
      {item.title}{" "}
      <button onClick={(e) => handleItemDelete(e, item.id)}>Delete</button>
    </li>
  );
});
