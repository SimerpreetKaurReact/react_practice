import React, { useState, useEffect } from "react";
const AuthContext = React.createContext({
  loggedIn: false,
  onLogOut: () => {},
  onLogIn: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setLoggedIn(true);
    }
  }, []);
  const logOutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(false);
  };
  const logInHandler = () => {
    console.log("inside login handler");
    localStorage.setItem("isLoggedIn", 1);
    setLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        loggedIn: loggedIn,
        onLogOut: logOutHandler,
        onLogIn: logInHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
