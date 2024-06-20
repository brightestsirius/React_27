import React, {useState, useEffect} from "react";

// import List from "./components/List/List";
// import ListInterval from './components/List/ListInterval'
// import User from './components/User/User'
import TodosList from './components/Todos/TodosList'

import { animals, user } from "./data/mockData";

export default function App() {
  // const [showList, setShowList] = useState(true);
  // const [showUser, swtShowUser] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     swtShowUser(false);
  //   }, 3000)
  // }, []);

  return (
    <>
      {/* <List list={animals} /> */}
      {/* {showList && <ListInterval list={animals} />} */}
      {/* {showUser && <User user={user} />} */}
      <TodosList />
    </>
  );
}
