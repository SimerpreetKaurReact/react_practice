import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login/Login";
import AuthContext from "./store/auth-context";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
}

export default App;
