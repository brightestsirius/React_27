import React, {useState, useEffect} from "react";

// import List from "./components/List/List";
// import ListInterval from './components/List/ListInterval'
// import User from './components/User/User'
// import Counter from './components/Counter/Counter'
// import CounterStatistics from './components/Counter/CounterStatistics'
import Todos from './components/Todos/Todos'

import { animals, user } from "./data/mockData";

export default function App() {
  // const [showList, setShowList] = useState(true);
  // const [counter, setCounter] = useState();
  // const [clickCount, setClickCount] = useState();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowList(false);
  //   }, 2000)
  // }, [])

  return (
    <>
      {/* <List list={animals} /> */}
      {/* {showList && <ListInterval list={animals} />} */}
      {/* <User user={user} /> */}
      {/* <Counter liftingCounter={setCounter} liftingClickCount={setClickCount} />
      <CounterStatistics counter={counter} clickCount={clickCount} /> */}
      <Todos />
    </>
  );
}
