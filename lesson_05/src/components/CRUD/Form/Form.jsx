import React, { useState, useRef, memo } from "react";
import "./style.sass";

import service from "./../../../services/todos";

export default memo(function Form({ liftingItem }) {
  const DEFAULT_ITEM = {
    title: `Some title`,
    completed: false,
  };

  const [item, setItem] = useState(DEFAULT_ITEM);

  const form = useRef();

  const handleTitle = (e) =>
    setItem((prevState) => ({ ...prevState, title: e.target.value }));

  const handleCompleted = (e) =>
    setItem((prevState) => ({ ...prevState, completed: e.target.checked }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await service.post(item);
    liftingItem(response);
    form.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <fieldset className="list__form">
        <legend>Add item</legend>

        <label>
          Title:{" "}
          <input
            type="text"
            defaultValue={DEFAULT_ITEM.title}
            onChange={handleTitle}
          />
        </label>

        <label>
          Completed:{" "}
          <input
            type="checkbox"
            defaultChecked={DEFAULT_ITEM.completed}
            onChange={handleCompleted}
          />
        </label>

        <button>Add item</button>
      </fieldset>
    </form>
  );
});
