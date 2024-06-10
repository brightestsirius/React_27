import React, { useState, useEffect } from "react";

import List from "./components/List/List";

import { animals } from "./data/constants";

export default function App() {
  const [showList, setShowList] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(`Removing List component`);
  //     setShowList(false);
  //   }, 3000);
  // }, [])

  return <>{showList && <List list={animals} />}</>;
}
