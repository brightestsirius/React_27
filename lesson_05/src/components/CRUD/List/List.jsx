import React, { useState, useEffect } from "react";
import "./style.sass";

import service from "../../../services/todos";

import ListItem from "./ListItem";

import {
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_NON_COMPLETED,
} from "../../../constants/list";

export default function List({ newItem, filter }) {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const getList = async () => {
    const response = await service.get();
    setList(response.slice(0, 10));
  };

  const handleItemDelete = async (e, id) => {
    e.stopPropagation();

    await service.delete(id);
    setList((prevState) => prevState.filter((item) => item.id !== id));
  };

  const handleItemCompleted = async (e, item) => {
    e.stopPropagation();

    const response = await service.patch(item.id, {
      completed: !item.completed,
    });
    setList((prevState) =>
      prevState.map((item) => {
        if (item.id === response.id) item = response;
        return item;
      })
    );
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  useEffect(() => {
    if (newItem) setList((prevState) => [...prevState, newItem]);
  }, [newItem]);

  useEffect(() => {
    if (filter) {
      switch (filter) {
        case FILTER_COMPLETED:
          setFilteredList(list.filter((item) => item.completed));
          break;
        case FILTER_NON_COMPLETED:
          setFilteredList(list.filter((item) => !item.completed));
          break;
        default:
          setFilteredList(list);
      }
    }
  }, [filter, list]);

  return filteredList.length ? (
    <ul className="list">
      {filteredList.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleItemCompleted={handleItemCompleted}
          handleItemDelete={handleItemDelete}
        />
      ))}
    </ul>
  ) : null;
}
