import React, {useEffect} from 'react'

export default function List({newItem}) {

  useEffect(() => {
    console.log(`in List for newItem`, newItem);
    if(newItem){
      //getItem();
    }
  }, [newItem])

  return <ul>
    <li>delectus aut autem <input type="checkbox" defaultChecked={true} /> <button>Delete</button></li>
    <li>delectus aut autem <input type="checkbox" defaultChecked={false} /> <button>Delete</button></li>
    <li>delectus aut autem <input type="checkbox" defaultChecked={true} /> <button>Delete</button></li>
  </ul>
}