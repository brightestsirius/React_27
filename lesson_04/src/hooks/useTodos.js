import React, { useState, useEffect } from "react";

import serviceTodos from "./../services/todos";

import { STATUS_TODO, STATUS_PROGRESS, STATUS_DONE } from "../constants/todos";
import {
  TITLE_TODO,
  TITLE_PROGRESS,
  TITLE_DONE,
  TITLE_ARCHIVE,
} from "../constants/todos";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  const [todosToDo, setTodosToDo] = useState([]);
  const [todosProgress, setTodosProgress] = useState([]);
  const [todosDone, setTodosDone] = useState([]);

  const getTodos = async () => {
    const response = await serviceTodos.get();
    setTodos(response);
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    setTodosToDo(todos.filter((item) => item.status === STATUS_TODO));
  }, [todos]);

  useEffect(() => {
    setTodosProgress(todos.filter((item) => item.status === STATUS_PROGRESS));
  }, [todos]);

  useEffect(() => {
    setTodosDone(todos.filter((item) => item.status === STATUS_DONE));
  }, [todos]);

  const handleItemStatus = async (id, status) => {
    try {
      const response = await serviceTodos.put(id, { status });

      setTodos((prevState) =>
        prevState.map((item) => {
          if (item.id === response.id) item = response;
          return item;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemDelete = async (id) => {
    try {
      await serviceTodos.delete(id);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const todoBlocks = [
    {
      title: TITLE_TODO,
      list: todosToDo,
      btns: [
        {
          title: TITLE_PROGRESS,
          status: 1,
          handleClick: handleItemStatus,
        },
      ],
    },
    {
      title: TITLE_PROGRESS,
      list: todosProgress,
      btns: [
        {
          title: TITLE_TODO,
          status: STATUS_TODO,
          handleClick: handleItemStatus,
        },
        {
          title: TITLE_DONE,
          status: STATUS_DONE,
          handleClick: handleItemStatus,
        },
      ],
    },
    {
      title: TITLE_DONE,
      list: todosDone,
      btns: [
        {
          title: TITLE_PROGRESS,
          status: 1,
          handleClick: handleItemStatus,
        },
        {
          title: TITLE_ARCHIVE,
          handleClick: handleItemDelete,
        },
      ],
    },
  ];

  return todoBlocks
}
