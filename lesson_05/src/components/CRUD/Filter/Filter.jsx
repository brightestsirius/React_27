import React, { useState, useEffect, memo } from "react";
import "./style.sass";

import {
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_NON_COMPLETED,
} from "../../../constants/list";

import useLocalStorage from './../../../hooks/useLocalStorage'

export default memo(function Filter({ liftingFilter }) {
  const [filter, setFilter] = useLocalStorage(`filter`, FILTER_ALL);

  const handleSelect = (e) => setFilter(e.target.value);

  useEffect(() => {
    liftingFilter(filter);
  }, [filter]);

  useEffect(() => {
    localStorage.setItem(`filter`, JSON.stringify(filter));
  }, [filter]);

  return (
    <label className="list__filter">
      Select filter:{" "}
      <select defaultValue={filter} onChange={handleSelect}>
        <option value={FILTER_ALL}>{FILTER_ALL}</option>
        <option value={FILTER_COMPLETED}>{FILTER_COMPLETED}</option>
        <option value={FILTER_NON_COMPLETED}>{FILTER_NON_COMPLETED}</option>
      </select>
    </label>
  );
});
