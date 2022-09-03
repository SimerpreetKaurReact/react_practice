import React, { createContext, useState } from "react";

let logoutTimer;
const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjustsedExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjustsedExpirationTime - currentTime;
  return adjustsedExpirationTime;
};
export const AuthContextProvider = (props) => {
  const initialState = localStorage.getItem("token");
  const [token, setToken] = useState(initialState ? initialState : null);
  const userIsLoggedIn = !!token;
  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  const logoutHandler = (token) => {
    setToken(null);
    localStorage.removeItem("token");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
