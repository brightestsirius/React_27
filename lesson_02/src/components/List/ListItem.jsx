import React from "react";

import { renderValue } from "./../../utils/render";

import Button from './../Button/Button'

export default function ListItem({ item, clickFn }) {
  return (
    <li>
      {renderValue(item)} <Button title={`Click`} clickFn={clickFn} />
    </li>
  );
}
