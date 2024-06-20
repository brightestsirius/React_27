import React, { useState, useEffect } from "react";
import "./style.sass";

import service from "./../../services/todos";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await service.get();
      setTodos(response.slice(0, 10));
    })();
  }, []);

  const handleDelete = async (e, id) => {
    try {
      e.stopPropagation();
      await service.delete(id);
      setTodos((prevState) => prevState.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleCompleted = async (item) => {
    const response = await service.patch(item.id, {
      completed: !item.completed,
    });

    setTodos((prevState) =>
      prevState.map((el) => {
        if (el.id === response.id) el = response;
        return el;
      })
    );
  };

  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <li
          key={item.id}
          className={item.completed ? `completed` : ``}
          onClick={() => handleCompleted(item)}
        >
          {item.title}{" "}
          <button onClick={(e) => handleDelete(e, item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
