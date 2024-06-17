import React, { useState, useEffect } from "react";

import User from "./components/User/User";
import Button from "./components/Button/Button";

export default function App() {
  const [showUser, setShowUser] = useState(true);
  const [deleteUser, setDeleteUser] = useState(false);

  const handleDeleteUser = () => {
    setDeleteUser(true);
  };

  return (
    <>
      {showUser && (
        <>
          <User
            deleteUser={deleteUser}
            liftingUserDeleted={() => setShowUser(false)}
          />
          <Button title={`Delete user`} handleClick={handleDeleteUser} />
        </>
      )}
    </>
  );
}
