import React, {useEffect, useState} from "react";

import JsxRender from "./components/JsxRender/JsxRender";
import Counter from "./components/Counter/Counter";
import ListState from './components/ListState/ListState'

import {animals} from './data/mockData'

export default function App() {
  const [list, setList] = useState(animals);
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowList(false);
    }, 3000);
  }, []);

  return (
    <>
      {/* <JsxRender /> */}
      {/* <Counter /> */}
      {showList && <ListState list={list} />}
    </>
  );
}
