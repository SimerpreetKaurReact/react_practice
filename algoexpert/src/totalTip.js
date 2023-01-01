import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ billValue: 50, tip: 18, people: 1 });
  const [totalTip, setTotalTip] = useState();
  useEffect(() => {
    setTotalTip(state.billValue * state.tip * 0.01);
  }, [state]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return (
    <>
      <label htmlFor="bill">Bill</label>
      <input
        id="bill"
        name="billValue"
        type="number"
        value={state.billValue}
        onChange={handleChange}
      />
      <label htmlFor="percent">Tip Percentage</label>
      <input
        id="percent"
        type="number"
        name="tip"
        value={state.tip}
        onChange={handleChange}
      />
      <label htmlFor="total">Number of People</label>
      <input
        id="total"
        type="number"
        name="people"
        value={state.people}
        onChange={handleChange}
      />
      <p>{`total tip=${totalTip.toFixed(2)}`}</p>
      <p>{`Tip Per Person:${totalTip / state.people}`}</p>
    </>
  );
}

export default App;
