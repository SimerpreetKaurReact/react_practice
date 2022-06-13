import React from "react";
import Navigation from "./Navigation";

function Header({ loggedIn, setIsLoggedIn }) {
  return (
    <header className="App-header">
      {console.log(loggedIn, setIsLoggedIn)}
      <p>Login</p>
      <Navigation loggedIn={loggedIn} setLoggedIn={setIsLoggedIn} />
    </header>
  );
}

export default Header;
