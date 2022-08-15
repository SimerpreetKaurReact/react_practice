import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./cart";
import { uiSliceReducer } from "./ui-slice";
const store = configureStore({
  reducer: { cart: cartReducer, ui: uiSliceReducer },
});
export default store;
