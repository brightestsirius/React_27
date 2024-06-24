import React from "react";
import "./style.sass";

import TodosBlock from "./TodosBlock";

import useTodos from "../../hooks/useTodos";

export default function Todos() {
  const todoBlocks = useTodos();

  return (
    <div className="container">
      {todoBlocks.map((item, index) => (
        <TodosBlock
          key={index}
          title={item.title}
          list={item.list}
          btns={item.btns}
        />
      ))}
    </div>
  );
}
