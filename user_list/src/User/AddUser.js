import React, { useState, useRef } from "react";
import ListUser from "./ListUser";
import Card from "../UI/Card";

function AddUser(props) {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);
  const ageUserRef = useRef();
  const nameUserRef = useRef();
  const handleAddUser = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const enteredName = nameUserRef.current.value;
    const enteredAge = ageUserRef.current.value;
    if (!enteredAge.trim().length || !enteredName.trim().length) {
      alert("name and age cannot be empty");
    }
    if (+enteredAge < 1) {
      alert("name and age cannot be less than 1");
    } else {
      props.AddUserList(enteredAge, enteredName);
    }
    setAge("");
    setName("");
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else setAge(value);
  };
  return (
    <>
      <Card>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="name"
          value={name}
          ref={nameUserRef}
          onChange={handleChange}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          type="number"
          name="age"
          value={age}
          ref={ageUserRef}
          onChange={handleChange}
        />
        <button onClick={handleAddUser}>Add User</button>
      </Card>
    </>
  );
}

export default AddUser;
