import React, { useState, useEffect } from "react";

export default function useLocalStorage(title, defaultValue) {
  const [value, setValue] = useState(
    localStorage.getItem(title)
      ? JSON.parse(localStorage.getItem(title))
      : defaultValue
  );

  useEffect(() => {
    localStorage.setItem(title, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
