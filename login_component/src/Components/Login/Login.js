import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./Login.module.css";
const emailReducer = () => {};
export default function Login({ setIsLoggedIn }) {
  const [userEnteredMail, setUserEnteredMail] = useState("");
  const [userEnteredPassword, setUserEnteredPassword] = useState("");
  const [emailValid, setEmailIsValid] = useState();
  const [passIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("useEffect running");
      if (
        !userEnteredMail.includes("@") ||
        userEnteredPassword.trim().length < 6
      ) {
        setFormIsValid(false);
      } else {
        setFormIsValid(true);
        setIsLoggedIn(true);
      }
    }, 500);
    return () => {
      console.log("return running");
      clearTimeout(identifier);
    };
  }, [userEnteredMail, userEnteredPassword]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login clicked", userEnteredMail, userEnteredPassword);

    setUserEnteredMail("");
    setUserEnteredPassword("");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email"
      ? setUserEnteredMail(value)
      : setUserEnteredPassword(value);
  };
  const validateEmailIsValid = () => {
    !userEnteredMail.includes("@")
      ? setEmailIsValid(false)
      : setEmailIsValid(true);
  };
  const validatePasswordIsValid = () => {
    userEnteredPassword.trim().length > 6
      ? setPasswordIsValid(true)
      : setPasswordIsValid(false);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div
          className={`${classes.control} ${emailValid ? "" : classes.invalid}`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            name="email"
            value={userEnteredMail}
            onChange={handleChange}
            onBlur={validateEmailIsValid}
          />
        </div>
        <div
          className={`${classes.control} ${passIsValid ? "" : classes.invalid}`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={userEnteredPassword}
            onBlur={validatePasswordIsValid}
          />
        </div>
        <button disabled={!formIsValid} type="submit">
          Login
        </button>
      </form>
    </Card>
  );
}
