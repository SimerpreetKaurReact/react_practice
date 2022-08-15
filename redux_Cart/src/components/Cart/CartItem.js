import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, quantity, totalPrice, price } = props.item;
  console.log(props.item);
  const handleIncrement = () => {
    dispatch(
      cartActions.addItemsToCart({ id, title, quantity, totalPrice, price })
    );
  };
  const handleDecrement = () => {
    dispatch(
      cartActions.removeItemFromCart({ id, title, quantity, totalPrice, price })
    );
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
