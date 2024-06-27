import React, { useState } from "react";

export default function Form({liftingNewItem}) {
  const [newItem, setNewItem] = useState({
    title: `New title`,
    completed: true,
  });

  const handleItemTitle = e => setNewItem(prevState => ({...prevState, title: e.target.value}))

  const handleItemCompleted = e => setNewItem(prevState => ({...prevState, completed: e.target.checked}))

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = newItem; // await send newItem to API
    liftingNewItem(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title: <input type="text" defaultValue={newItem.title} onChange={handleItemTitle} />
      </label>

      <label>
        Completed: <input type="checkbox" defaultChecked={newItem.completed} onChange={handleItemCompleted} />
      </label>

      <button>Add</button>
    </form>
  );
}
