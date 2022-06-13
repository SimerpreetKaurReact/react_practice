import React, { useEffect, useState, useReducer } from "react";
import Card from "../UI/Card";
import classes from "./Login.module.css";
const emailReducer = (state, action) => {
  console.log(action);
  if (action.type === "SET_EMAIL") {
    return { value: action.payload, isValid: action.payload.includes("@") };
  } else if (action.type === "INITIALISE") {
    return { value: "", isValid: false };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  ///state.value gives absolute last snapshot of state
  return { value: "", isValid: false };
};
const passwordReducer = (state, action) => {
  console.log(action);
  if (action.type === "SET_PASSWORD") {
    return { value: action.payload, isValid: state.value > 6 };
  } else if (action.type === "INITIALISE") {
    return { value: "", isValid: false };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value > 6 };
  }
  ///state.value gives absolute last snapshot of state
  return { value: "", isValid: false };
};
export default function Login({ setIsLoggedIn }) {
  //const [userEnteredMail, setUserEnteredMail] = useState("");
  //const [emailValid, setEmailIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("useEffect running");
      if (!emailState.isValid || passwordState.isValid) {
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
  }, [emailIsValid, passwordIsValid]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchEmail({ type: "INITIALISE", payload: "" });
    dispatchPassword({ type: "INITIALISE", payload: "" });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email"
      ? dispatchEmail({ type: "SET_EMAIL", payload: value })
      : dispatchPassword({ type: "SET_PASSWORD", payload: value });
  };
  const validateEmailIsValid = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const validatePasswordIsValid = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div
          className={`${classes.control} ${
            emailState.isValid ? "" : classes.invalid
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            name="email"
            value={emailState.value}
            onChange={handleChange}
            onBlur={validateEmailIsValid}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid ? "" : classes.invalid
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={passwordState.value}
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
