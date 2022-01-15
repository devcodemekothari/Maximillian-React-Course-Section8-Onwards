import React,{useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted with Username: " + enteredUsername + " and Age: " + enteredAge);


    // setEnteredAge('');
    // setEnteredUsername('');
  };

  const usernameChangeHandler = (event) =>{
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = (event) =>{
      setEnteredAge(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler}></input>
        <Button onClick={addUserHandler} type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
