import React, { useState, useContext, useEffect } from "react";
import Cart from "../Cart/Cart";
import AmountContext from "../store/AmountContext";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
function HeaderCartButton() {
  const [showcart, setShowCart] = useState(false);
  const [currentQuantity, setCurrentQuantity] = useState(0);

  const { quanityList, onIncrease, onDecrease, onChange, totalAmount } =
    useContext(AmountContext);
  const handleClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };
  useEffect(() => {
    setCurrentQuantity(
      quanityList.reduce((acc, ele) => {
        acc = ele.amount + acc;
        return acc;
      }, 0)
    );
  }, [quanityList]);

  return (
    <>
      <button className={classes.button} onClick={handleClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{currentQuantity}</span>
      </button>
      {showcart ? <Cart setShowCart={setShowCart} /> : <></>}
    </>
  );
}

export default HeaderCartButton;
