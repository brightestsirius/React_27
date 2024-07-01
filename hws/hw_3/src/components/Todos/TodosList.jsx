import React from "react";

import TodosListItem from "./TodosListItem";

import useTodos from "../../hooks/useTodos";

export default function TodosList({ newTodo, filter }) {
  const { filteredTodos, handleItemDelete, handleItemCompleted, getClassName } =
    useTodos(newTodo, filter);

  return filteredTodos.length ? (
    <ul>
      {filteredTodos.map((item) => (
        <TodosListItem
          key={item.id}
          item={item}
          handleItemDelete={(e) => handleItemDelete(e, item.id)}
          handleItemCompleted={() => handleItemCompleted(item)}
          className={getClassName(item)}
        />
      ))}
    </ul>
  ) : null;
}
