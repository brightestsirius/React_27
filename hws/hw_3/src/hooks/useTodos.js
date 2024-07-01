import React, { useState, useEffect } from "react";

import service from "../services/todos";

import { FILTER_COMPLETED, FILTER_PROGRESS } from "../constants/todos";

export default function useTodos(newTodo, filter) {
  const [todos, setTodos] = useState([]);
  const [sortedTodos, setSortedTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setSortedTodos(todos.sort((a, b) => a.completed - b.completed));
  }, [todos]);

  useEffect(() => {
    setFilteredTodos(sortedTodos);
  }, [sortedTodos]);

  useEffect(() => {
    switch (filter) {
      case FILTER_COMPLETED:
        setFilteredTodos(sortedTodos.filter((item) => item.completed));
        break;
      case FILTER_PROGRESS:
        setFilteredTodos(sortedTodos.filter((item) => !item.completed));
        break;
      default:
        setFilteredTodos(sortedTodos);
    }
  }, [filter, sortedTodos]);

  const getTodos = async () => {
    const response = await service.get();
    setTodos(response.slice(0, 10));
  };

  const handleItemDelete = async (e, id) => {
    e.stopPropagation();
    await service.delete(id);
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };

  const handleItemCompleted = async (item) => {
    const response = await service.patch(item.id, {
      completed: !item.completed,
    });
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === response.id) item = response;
        return item;
      })
    );
  };

  const getClassName = (item) => {
    const classes = [`list__item`];
    classes.push(
      item.completed ? `list__item--completed` : `list__item--progress`
    );
    return classes.join(` `);
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    if (newTodo) {
      setTodos((prevState) => [...prevState, newTodo]);
    }
  }, [newTodo]);

  return { filteredTodos, handleItemDelete, handleItemCompleted, getClassName };
}
