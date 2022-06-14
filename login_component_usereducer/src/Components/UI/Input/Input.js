import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  return (
    <div
      className={`${classes.control} ${props.isValid ? "" : classes.invalid}`}
    >
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        onBlur={props.validateEmailIsValid}
      />
    </div>
  );
}

export default Input;
