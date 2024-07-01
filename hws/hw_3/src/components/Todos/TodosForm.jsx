import React, { useState, useRef } from "react";

import { DEFAULT_TODO } from "./../../constants/todos";

import service from "../../services/todos";

export default function TodosForm({liftingNewTodo}) {
  const [todo, setTodo] = useState(DEFAULT_TODO);

  const formRef = useRef();

  const handleChangeTitle = (e) =>
    setTodo((prevState) => ({ ...prevState, title: e.target.value }));
  const handleChangeCompleted = (e) =>
    setTodo((prevState) => ({ ...prevState, completed: e.target.checked }));

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await service.post(todo);
    liftingNewTodo(response);

    formRef.current.reset();
    setTodo(DEFAULT_TODO);
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <fieldset className="todos__form">
        <legend>Add todo</legend>
        <label>
          Title:{" "}
          <input
            type="text"
            defaultValue={DEFAULT_TODO.title}
            onChange={handleChangeTitle}
          />
        </label>
        <label>
          Completed:{" "}
          <input
            type="checkbox"
            defaultChecked={DEFAULT_TODO.completed}
            onChange={handleChangeCompleted}
          />
        </label>
        <button>Submit</button>
      </fieldset>
    </form>
  );
}
