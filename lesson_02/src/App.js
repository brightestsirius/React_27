import React from "react";

// import JsxExample from './components/JsxExample/JsxExample'
// import Counter from './components/Counter/Counter'
import ListState from "./components/ListState/ListState";

import { animals } from "./data/mockData";

export default function App() {
  return (
    <>
      {/* <JsxExample /> */}
      {/* <Counter /> */}
      <ListState list={animals} />
    </>
  );
}
