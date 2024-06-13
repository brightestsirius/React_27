import React from "react";

import { renderValue } from "./../../utils/render";

import Button from './../Button/Button'

export default function ListItem({ item, handleClick }) {
  return (
    <li>
      {renderValue(item)} <Button title={`Click`} handleClick={handleClick} />
    </li>
  );
}
