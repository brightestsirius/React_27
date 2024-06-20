import React, {useState, useEffect} from 'react'

export default function TodosList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        (async () => {
            const request = await fetch(`https://jsonplaceholder.typicode.com/todos`),
                response = await request.json();
                setTodos(response.slice(0, 10));
        })()
    }, [])

    const handleItemDelete = async id => {
        try{
            await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {method: `DELETE`});
            setTodos(prevState => prevState.filter((item) => item.id !== id));
        } catch(err){
            console.log(err);
        }
    }

  return todos.length ? <ul>
    {todos.map((item) => <li key={item.id}>{item.title} <button onClick={() => handleItemDelete(item.id)}>Delete</button></li>)}
  </ul> : null;
}