import React, { useState, useEffect } from "react";

import Button from "./../Button/Button";

import usersService from "./../../services/users";

export default function User({ deleteUser, liftingUserDeleted }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const response = await usersService.get(1);

      setUser({
        name: response.name,
        email: response.email,
      });
    })();
  }, []);

  useEffect(() => {
    if (user.email) {
      console.log(`Watching for user ${user.email}`);
    }

    return () => {
      if (user.email) {
        console.log(`in componentWillUnmont for useEffect for user`, user);
        console.log(`Stop watching for user ${user.email}`);
      }
    };
  }, [user]);

  useEffect(() => {
    if (deleteUser) {
      (async () => {
        try {
          await usersService.delete(1);
          liftingUserDeleted();
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [deleteUser]);

  const handleEmail = async () => {
    const value = prompt(`Enter email`, `sheva@gmail.com`);

    const response = await usersService.patch(1, { email: value });

    setUser((prevState) => ({ ...prevState, email: response.email }));
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
      <Button title={`Change email`} handleClick={handleEmail} />
    </>
  ) : null;
}
