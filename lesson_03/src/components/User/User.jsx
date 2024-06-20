import React, { useState, useEffect } from "react";

export default function User({ user: propsUser = {} }) {
  const [user, setUser] = useState(propsUser);

  useEffect(() => {
    console.log(`in useEffect for user`, user);
    console.log(`Watching for ${user.email}`);

    return () => {
        console.log(`Stop watching for ${user.email}`);
    }
  }, [user.email])

  const handleChangeEmail = () => {
    const email = prompt(`Enter email: `, `sheva@gmail.com`);
    setUser(prevState => ({...prevState, email: email}));
  }

  const handleChangeName = () => {
    const name = prompt(`Enter name: `, `Anya`);
    setUser(prevState => ({...prevState, name: name}));
  }

  return Object.keys(user).length ? (
    <>
        <ul>
        {Object.keys(user).map((key, index) => (
            <li key={index}>
            {key}: {user[key]}
            </li>
        ))}
        </ul>
        <button onClick={handleChangeEmail}>Change email</button>
        <button onClick={handleChangeName}>Change name</button>
    </>
    
  ) : null;
}
