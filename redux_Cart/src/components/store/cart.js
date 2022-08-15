import { createSlice } from "@reduxjs/toolkit";
import { uiSliceActions } from "./ui-slice";
const cartInitialState = {
  cartList: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  initialState: cartInitialState,
  name: "cart",
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemsToCart(state, action) {
      const newItem = action.payload;
      console.log(newItem, "newItem");
      const existingItem = state.cartList.find((ele) => ele.id === newItem.id);
      if (!existingItem) {
        state.cartList.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalAmount = state.totalAmount + newItem.price;
        state.totalQuantity++;
        console.log(state.totalQuantity);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalAmount = state.totalAmount + newItem.price;
        state.totalQuantity++;
        console.log(state.totalQuantity);
      }
    },
    removeItemFromCart(state, action) {
      const ItemToBeRemoved = action.payload;
      const existingItem = state.cartList.find(
        (ele) => ele.id === ItemToBeRemoved.id
      );
      existingItem.quantity--;
      existingItem.totalPrice = existingItem.totalPrice - ItemToBeRemoved.price;
      state.totalAmount = state.totalAmount - ItemToBeRemoved.price;
      state.totalQuantity--;
      console.log(state.totalQuantity);
      if (existingItem.quantity == 0) {
        state.cartList = state.cartList.filter(
          (ele) => ele.id != ItemToBeRemoved.id
        );
      }
    },
  },
});
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://mealapp-f83a3-default-rtdb.firebaseio.com/orders.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error!",
          message: error,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiSliceActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://mealapp-f83a3-default-rtdb.firebaseio.com/orders.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("sending data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiSliceActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
