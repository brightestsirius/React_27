import React from "react";

import { renderItem } from "./../../utils/render";

import Button from "./../Button/Button";

export default function ListItem({ item, handleClick }) {
  return (
    <li>
      {renderItem(item)} <Button title={`Click`} handleClick={handleClick} />
    </li>
  );
}
