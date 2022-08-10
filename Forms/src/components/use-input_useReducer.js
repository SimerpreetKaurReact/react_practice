import React, { useReducer } from "react";

const initialInputState = { value: "", isTouched: false };
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      ...state.isTouched,
    };
  }
  if (action.type === "TOUCHED") {
    return {
      isTouched: true,
      ...state.value,
    };
  }
  if (action.type === "RESET") {
    return {
      isTouched: false,
      value: "",
    };
  }
  return inputStateReducer;
};
function useInputTemp(validation) {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const handleInputChange = (e) => {
    const { value } = e.target;
    dispatch({ type: "INPUT", value });
  };
  const handleBlur = (e) => {
    dispatch({ type: "TOUCHED" });
  };
  const enteredInputValid = validation(inputState.value);
  const nameInputHasError = !enteredInputValid && inputState.isTouched;

  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return {
    enteredInput: inputState.value,
    enteredInputValid,
    handleInputChange,
    handleBlur,
    reset,
    nameInputHasError,
  };
}
export default useInputTemp;
