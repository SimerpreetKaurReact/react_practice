import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const setIsLoggedIn = (status) => {
    console.log(status);
    setLoggedIn(status);
  };
  return (
    <div className="App">
      <Header loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Login setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
