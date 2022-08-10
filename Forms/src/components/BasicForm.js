import { useState } from "react";
import useInputTemp from "./use-inputTemp";

const BasicForm = (props) => {
  const {
    enteredInput: enteredName,
    enteredInputValid: isNameValid,
    handleInputChange,
    handleBlur,
    reset: resetName,
    nameInputHasError,
  } = useInputTemp((value) => value.trim(""));

  const {
    enteredInput: enteredEmail,
    enteredInputValid: isEmailValid,
    handleInputChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    reset: resetEmail,
    nameInputHasError: emailInptHasError,
  } = useInputTemp((value) =>
    value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );

  const {
    enteredInput: enteredLastName,
    enteredInputValid: isLastNameValid,
    handleInputChange: handleLastNameChange,
    handleBlur: handleLastNameBlur,
    reset: resetLastName,
    nameInputHasError: lastNameInputHasError,
  } = useInputTemp((value) => value.trim(""));

  const isFormValid = isNameValid && isLastNameValid && isEmailValid;

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name, value, enteredName, enteredLastName, enteredName);
  //   name === "firstName"
  //     ? setEnteredName(value)
  //     : name === "lastName"
  //     ? setEnteredLastName(value)
  //     : setEnteredEmail(value);
  // };
  // const handleBlur = (e) => {
  //   const { name } = e.target;
  //   console.log(name);
  //   name === "firstName"
  //     ? setNameTouched(true)
  //     : name === "lastName"
  //     ? setLastNameTouched(true)
  //     : setEmailTouched(true);
  // };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }
    console.log(enteredEmail, enteredLastName, enteredName);
    resetEmail();
    resetLastName();
    resetName();
  };
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInptHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="firstName"
            value={enteredName}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {nameInputHasError && "Entered first name is invalid"}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            name="lastName"
            value={enteredLastName}
            onChange={handleLastNameChange}
            onBlur={handleLastNameBlur}
          />
          {lastNameInputHasError && "Entered last name is invalid"}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          name="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        {emailInptHasError && "Entered email is invalid"}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
