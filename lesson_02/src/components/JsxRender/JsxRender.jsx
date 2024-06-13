import React from "react";

import { renderValue } from "./../../utils/render";
import { animals, user } from "./../../data/mockedData";

import List from './../List/List'

export default function JsxRender() {
  return (
    <>
      <List list={animals} />
      <List />

      <ul>
        {Object.keys(user).map((key, index) => (
          <li key={index}>{renderValue(user[key])}</li>
        ))}
      </ul>
    </>
  );
}
