import React from "react";

import { renderItem } from "./../../utils/render";
import { printFn, alertFn } from "./../../utils/clickFns";
import { animals, user } from "./../../data/mockData";

import List from "./../List/List";

export default function JsxRender() {
  return (
    <>
      <List list={animals} handleClick={printFn} />
      <List list={[`Jack`, `Tom`]} handleClick={alertFn} />

      <ul>
        {Object.keys(user).map((key, index) => (
          <li key={index}>{renderItem(user[key])}</li>
        ))}
      </ul>
    </>
  );
}
