import React, { useState } from "react";

import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import List from "./List/List";

export default function CRUD() {
  const [newItem, setNewItem] = useState();
  const [filter, setFilter] = useState();

  return (
    <>
      <Form liftingItem={setNewItem} />
      <Filter liftingFilter={setFilter} />
      <List newItem={newItem} filter={filter} />
    </>
  );
}
