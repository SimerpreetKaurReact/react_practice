import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  const incrementCounterHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementCounterHandler = () => {
    dispatch({ type: "decrement" });
  };
  const increaseCounterHandler = () => {
    dispatch({ type: "increase", payload: 5 });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementCounterHandler}>increment</button>
      <button onClick={increaseCounterHandler}>increase by 5</button>

      <button onClick={decrementCounterHandler}>decrement</button>
    </main>
  );
};

export default Counter;
