import React, { useState } from "react";

function useInputTemp(validation) {
  const [enteredInput, setEnteredInput] = useState("");

  const [enteredInputTouched, setEnteredInputTouched] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;

    setEnteredInput(value);
  };
  const handleBlur = (e) => {
    setEnteredInputTouched(true);
  };
  const enteredInputValid = validation(enteredInput);
  const nameInputHasError = !enteredInputValid && enteredInputTouched;

  const reset = () => {
    setEnteredInput("");
    setEnteredInputTouched(false);
  };
  return {
    enteredInput,
    enteredInputValid,
    handleInputChange,
    handleBlur,
    reset,
    nameInputHasError,
  };
}
export default useInputTemp;
