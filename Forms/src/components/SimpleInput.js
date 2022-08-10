import { useState, useRef, useEffect } from "react";
//with ref, you can only validate at the end, ie submission of form
//for validation with each keystroke use state
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) =>
    value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );
  const nameInputRef = useRef();
  //const [enteredName, setEnteredName] = useState("");
  //const [enteredEmail, setEnteredEmail] = useState("");
  //const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  //const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  //const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);
  // const enteredEmailIsValid = enteredEmail
  //   .toLowerCase()
  //   .match(
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   );
  //const enteredNameIsValid = enteredName.trim() !== "";
  //const isInputInValid = enteredNameIsTouched && !enteredNameIsValid;
  //const isEmailInValid = enteredEmailIsTouched && !enteredEmailIsValid;

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid]);

  // const setInputHandler = (event) => {
  //   const { name, value } = event.target;

  //   setEnteredEmail(value);

  //   // if (event.target.value.trim() !== "") {
  //   //   setEnteredNameIsValid(true);
  //   // }
  // };
  // const emailInputBlurHandler = () => {
  //   setEnteredEmailIsTouched(true);
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // setEnteredNameIsTouched(true);
    //setEnteredEmailIsTouched(true);
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    // if (enteredValue.trim() !== "") {
    //   setEnteredNameIsValid(true);
    // }
    console.log(enteredValue, nameInputRef.current.id);
    //nameInputRef.current.value = ""; ==>not ideal dont manipulate the dom
    //setEnteredNameIsValid(false);
    resetNameInput();
    //setEnteredNameIsTouched(false);
    resetEmailInput();
    //setEnteredEmailIsTouched(false);
    //setEnteredName("");
    //setEnteredEmail("");
  };
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={handleFormSubmit}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          name="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError && <p>entered name is invalid</p>}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email </label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p>entered email is invalid</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
