import React, { useContext } from "react";
import AmountContext from "../store/AmountContext";
import classes from "./CartItem.module.css";
function CartItem(props) {
  const { quanityList, onIncrease, onDecrease, onChange } =
    useContext(AmountContext);
  const { meal } = props;
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.summary}>
          <span className={classes.price}>{`$${meal.price.toFixed(2)}`}</span>
          <span> {`x${meal.quantity}`}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button
          onClick={(e) => onDecrease(e, meal.id)}
          disabled={meal.quantity === 0}
        >
          -
        </button>
        <button
          onClick={(e) => onIncrease(e, meal.id)}
          disabled={meal.quantity === 6}
        >
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
