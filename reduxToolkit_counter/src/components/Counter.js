import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseCounterHandler = () => {
    dispatch(counterActions.increase(5));
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
