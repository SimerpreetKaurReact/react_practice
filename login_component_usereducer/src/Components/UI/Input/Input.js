import React, { useRef, useEffect, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => ({ focus: activate }));
  return (
    <div
      className={`${classes.control} ${props.isValid ? "" : classes.invalid}`}
    >
      <label htmlFor={props.name}>{props.name}</label>
      <input
        ref={inputRef}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        onBlur={props.validateEmailIsValid}
      />
    </div>
  );
});

export default Input;
