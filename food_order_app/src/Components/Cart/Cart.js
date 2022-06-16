import React, { useContext, useState } from "react";
import MealItem from "../Meals/MealItem/MealItem";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../PopUps/Modal";
import AmountContext from "../store/AmountContext";
import DUMMY_MEALS from "../../utils/dummy-meals";
function Cart(props) {
  const { quanityList, onIncrease, onDecrease, onChange, totalAmount } =
    useContext(AmountContext);
  const elementAddedToCart = DUMMY_MEALS.map((meal) => {
    for (const ele of quanityList) {
      if (ele.id === meal.id) {
        console.log({ ...meal, quantity: ele.amount });

        return { ...meal, quantity: ele.amount };
      }
    }
  });

  const handleClick = () => {
    props.setShowCart(false);
  };
  return (
    <Modal>
      {elementAddedToCart?.map((cartItem) => {
        if (cartItem.quantity > 0) {
          return (
            <ul key={cartItem.id} className={classes["cart-items"]}>
              {" "}
              <CartItem meal={cartItem} />
            </ul>
          );
        }
      })}

      <div className={classes.total}>
        <h1>Total Amount</h1>
        <h1>{`$${totalAmount.toFixed(2)}`}</h1>
      </div>
      <div className={classes.action}>
        <button onClick={handleClick}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
