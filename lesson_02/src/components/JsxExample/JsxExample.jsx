import React from "react";

import { renderItem } from "./../../utils/render";
import { printFn, alertFn } from "./../../utils/clickFns";
import { animals, user } from "./../../data/mockData";

import List from "./../List/List";

export default function JsxExample() {
  return (
    <>
      <List list={animals} handleClick={printFn} />
      <List list={[`Jack`, `Taras`]} handleClick={alertFn} />
      <List />

      <ul>
        {Object.keys(user).map((key, index) => (
          <li key={index}>{renderItem(user[key])}</li>
        ))}
      </ul>
    </>
  );
}