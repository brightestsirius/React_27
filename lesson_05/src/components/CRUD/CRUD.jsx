import React, {useState} from "react";

import List from "./List/List";
import Form from "./Form/Form";

export default function CRUD() {
    const [newItem, setNewItem] = useState();

    

  return (
    <>
      <Form liftingNewItem={setNewItem} />

      <select>
        <option value="">All</option>
        <option value="">Completed</option>
        <option value="">Non-completed</option>
      </select>

      <List newItem={newItem} />
    </>
  );
}
