import "./App.css";
import React, { useState } from "react";
import AddUser from "./User/AddUser";
import ListUser from "./User/ListUser";

function App() {
  const [user, setUser] = useState([]);
  const AddUserList = (enteredAge, enteredName) => {
    setUser((prevState) => [
      ...prevState,
      { age: enteredAge, name: enteredName },
    ]);
  };

  // const handleAddUser = (event) => {
  //   const { name, value } = event.target;
  //   setState((prevState) => {
  //     console.log("prevState", prevState);
  //     return {
  //       ...prevState,
  //       user: prevState.user.push({ age: prevState.age, name: prevState.name }),
  //     };
  //   });
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setState((prevState) => ({ ...prevState, [name]: value }));
  // };
  return (
    <div className="App">
      {console.log(user)}
      <AddUser AddUserList={AddUserList} />
      <ListUser user={user} />
    </div>
  );
}

export default App;
