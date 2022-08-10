import React from "react";
import { useState } from "react";

function useInput(validation) {
  const [input, setInput] = useState("");
  const [touched, setTouched] = useState(false);
  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const handleBlur = () => {
    setTouched(true);
  };
  const isValid = validation(input);
  const hasError = touched && !isValid;
  const reset = () => {
    setInput("");
    setTouched(false);
  };

  return { input, handleChange, handleBlur, isValid, hasError, reset };
}

export default useInput;
