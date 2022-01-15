import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    setUsersList((prevUsersList) => {
      const updatedUsersList = [...prevUsersList];
      updatedUsersList.unshift({ name: user.name, age: user.age, id: user.id });
      return updatedUsersList;
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
};

export default App;
