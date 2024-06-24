import React from "react";

import Button from "./../Button/Button";

export default function TodosBlock({ title = ``, list = [], btns = [] }) {
  return (
    <div className="todo__container">
      <p className="todo__title">
        {title}: {list.length}
      </p>
      {list.length ? (
        <ul className="todo__list">
          {list.map((item) => (
            <li key={item.id} className={item.priority ? `todo--priority` : ``}>
              {item.title}{" "}
              {btns.map((btn, index) => (
                <Button
                  key={index}
                  title={btn.title}
                  handleClick={() => btn.handleClick(item.id, btn.status)}
                  className={`todo__btn`}
                />
              ))}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
