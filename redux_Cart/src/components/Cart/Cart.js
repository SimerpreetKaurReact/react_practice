import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartList = useSelector((state) => state.cart.cartList);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {console.log(cartList)}
        {cartList?.map((ele) => (
          <CartItem item={ele} key={ele.id} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
