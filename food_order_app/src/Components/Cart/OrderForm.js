import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useInput from "../hooks/use-input";

function OrderForm(props) {
  const [formIsValid, setFormIsValid] = useState(false);
  const {
    input: nameEnteredValue,
    handleChange: handleNameChange,
    handleBlur: handleNameBlur,
    isValid: nameIsValid,
    hasError: nameHasError,
    reset: nameReset,
  } = useInput((value) => value.trim(""));
  const {
    input: streetEnteredValue,
    handleChange: handleStreetChange,
    handleBlur: handleStreetBlur,
    isValid: StreetIsValid,
    hasError: StreetHasError,
    reset: streetReset,
  } = useInput((value) => value.trim(""));
  const {
    input: postalEnteredValue,
    handleChange: handlePostalChange,
    handleBlur: handlePostalBlur,
    isValid: postalIsValid,
    hasError: postalHasError,
    reset: posatalReset,
  } = useInput((value) => value.length === 6);
  const {
    input: cityEnteredValue,
    handleChange: handleCityChange,
    handleBlur: handleCityBlur,
    isValid: cityIsValid,
    hasError: cityHasError,
    reset: cityReset,
  } = useInput((value) => value.trim(""));

  useEffect(() => {
    if (!postalHasError && !cityHasError && !StreetHasError && !nameHasError) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [postalHasError, cityHasError, StreetHasError, nameHasError]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(
      nameEnteredValue,
      streetEnteredValue,
      postalEnteredValue,
      cityEnteredValue
    );
    props.onSubmit({
      name: nameEnteredValue,
      street: streetEnteredValue,
      postalCode: postalEnteredValue,
      city: cityEnteredValue,
    });
    nameReset();
    cityReset();
    posatalReset();
    streetReset();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label id="name">Your Name</label>
        <input
          id="name"
          type="text"
          value={nameEnteredValue}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
        />
        {nameHasError && <p>incorrect name</p>}
      </div>
      <div>
        <label id="street">Street</label>
        <input
          id="street"
          type="text"
          value={streetEnteredValue}
          onChange={handleStreetChange}
          onBlur={handleStreetBlur}
        />
        {StreetHasError && <p>incorrect street</p>}
      </div>
      <div>
        <label id="postal">Postal Code</label>
        <input
          id="postal"
          type="number"
          value={postalEnteredValue}
          onChange={handlePostalChange}
          onBlur={handlePostalBlur}
        />
        {postalHasError && <p>incorrect postal code</p>}
      </div>
      <div>
        <label id="city">City</label>
        <input
          id="city"
          type="text"
          value={cityEnteredValue}
          onChange={handleCityChange}
          onBlur={handleCityBlur}
        />
        {cityHasError && <p>incorrect city</p>}
      </div>
      <button type="button" onClick={props.onCancel}>
        CAncel
      </button>
      <button type="submit" disabled={!formIsValid}>
        Confirm
      </button>
    </form>
  );
}

export default OrderForm;
