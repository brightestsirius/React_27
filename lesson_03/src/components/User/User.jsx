import React, { useState, useEffect } from "react";

export default function User({ user: userProps = {} }) {
  const [user, setUser] = useState(userProps);

  useEffect(() => {
    console.log(`Start watching for ${user.email}`);

    return () => {
        console.log(`Stop watching for ${user.email}`);
    }
  }, [user.email])

  const handleChangeEmail = () => {
    const email = prompt(`Enter email: `, `sheva@gmail.com`);
    setUser((prevState) => ({ ...prevState, email: email }));
  };

  const handleChangeName = () => {
    const name = prompt(`Enter name: `, `Lesya`);
    setUser((prevState) => ({ ...prevState, name: name }));
  };
  
  return Object.keys(user).length ? (
    <>
      <ul>
        {Object.keys(user).map((key, index) => (
          <li key={index}>
            {key}: {user[key]}
          </li>
        ))}
      </ul>
      <button onClick={handleChangeEmail}>Change user email</button>
      <button onClick={handleChangeName}>Change user name</button>
    </>
  ) : null;
}
