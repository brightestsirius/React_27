import React, { useState, useEffect } from "react";

import { TODOS_FILTER } from "./../../constants/todos";

export default function TodosFilter({liftingFilter}) {
  const [filter, setFilter] = useState(TODOS_FILTER[0].value);

  const handleSelect = e => setFilter(e.target.value);

  useEffect(() => {
    liftingFilter(filter)
  }, [filter])

  return TODOS_FILTER.length ? (
    <label className="todos__filter">
      Select filter:{" "}
      <select defaultValue={filter} onChange={handleSelect}>
        {TODOS_FILTER.map((item, index) => (
          <option key={index} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </label>
  ) : null;
}
