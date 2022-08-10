import React, { useContext, useState } from "react";
import MealItem from "../Meals/MealItem/MealItem";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../PopUps/Modal";
import AmountContext from "../store/AmountContext";
import DUMMY_MEALS from "../../utils/dummy-meals";
import OrderForm from "./OrderForm";
function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [submitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

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
  const handleOrderSubmit = () => {
    setIsCheckout(true);
  };
  const handleClick = () => {
    props.setShowCart(false);
  };
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://mealapp-f83a3-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: elementAddedToCart,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
  };
  const isSubmittingModalContent = <p>submitting data...</p>;
  const didSubmitModalContent = (
    <>
      <p>successfully sent the order</p>{" "}
      <div className={classes.action}>
        <button className={classes.button} onClick={handleClick}>
          Close
        </button>
      </div>
    </>
  );
  const cartItems = (
    <>
      {" "}
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
    </>
  );
  const cartModalContent = (
    <>
      {cartItems}

      <div className={classes.total}>
        <h1>Total Amount</h1>
        <h1>{`$${totalAmount.toFixed(2)}`}</h1>
      </div>
      <div className={classes.action}>
        <button onClick={handleClick}>Close</button>
        <button onClick={handleOrderSubmit}>Order</button>
      </div>
      {isCheckout && (
        <OrderForm onCancel={handleClick} onSubmit={submitOrderHandler} />
      )}
    </>
  );
  return (
    <Modal>
      {!submitting && !didSubmit && cartModalContent}
      {submitting && isSubmittingModalContent}
      {!submitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;
