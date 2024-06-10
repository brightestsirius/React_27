import React from "react";
import "./style.sass";

import { renderValue } from "../../utils/renderValue";
import { animals, user, conditionalRendering } from "./../../data/constants";

export default function index() {
  const date = new Date();
  const Heading = <h1>Heading {date.toISOString()}</h1>;

  const color = `red`;
  const listStyle = {
    color,
    fontWeight: `bold`,
  };

  const getListClassName = (arr) => arr.length%2 ? `even` : `odd`;

  return (
    <div className="container">
      {Heading}

      <ol
        style={Object.assign(listStyle, {
          color: animals.length%2 ? `green` : `orange`,
        })}
      >
        {animals.map((item, index) => (
          <li key={index}>{renderValue(item)}</li>
        ))}
      </ol>

      <ol className={getListClassName(animals)}>
        {animals.map((item, index) => (
          <li key={index}>{renderValue(item)}</li>
        ))}
      </ol>

      <ul>
        {Object.keys(user).map((key, index) => (
          <li key={index}>{renderValue(user[key])}</li>
        ))}
      </ul>

      {conditionalRendering ? (
        <h4>conditionalRendering is 🟢</h4>
      ) : (
        <h4>conditionalRendering is 🔴</h4>
      )}
      {conditionalRendering && <h4>conditionalRendering is 🟢</h4>}
    </div>
  );
}
