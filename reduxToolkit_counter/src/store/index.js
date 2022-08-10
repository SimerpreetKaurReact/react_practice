import React from "react";
import { createStore } from "redux";
const counterReducer = (state = { counter: 0, showCounter: false }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return { counter: state.counter, showCounter: !state.showCounter };
  }
  return state;
};
const store = createStore(counterReducer);
export default store;
