import React, { useState } from "react";
import "./style.sass";

import TodosForm from "./TodosForm";
import TodosFilter from "./TodosFilter";
import TodosList from "./TodosList";

export default function Todos() {
  const [newTodo, setNewTodo] = useState();
  const [filter, setFilter] = useState();

  return (
    <div>
      <TodosForm liftingNewTodo={setNewTodo} />
      <TodosFilter liftingFilter={setFilter} />
      <TodosList newTodo={newTodo} filter={filter} />
    </div>
  );
}
