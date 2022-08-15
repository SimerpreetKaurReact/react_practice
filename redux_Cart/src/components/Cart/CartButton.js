import { startTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalQuanity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const handleShowCart = () => {
    dispatch(uiSliceActions.toggle());
  };
  return (
    <button onClick={handleShowCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuanity}</span>
    </button>
  );
};

export default CartButton;
