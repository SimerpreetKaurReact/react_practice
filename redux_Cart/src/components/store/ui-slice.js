import { createSlice } from "@reduxjs/toolkit";
const initialUiState = { showCart: false, notification: null };
const uiSlice = createSlice({
  initialState: initialUiState,
  name: "uiSlice",
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiSliceReducer = uiSlice.reducer;
export const uiSliceActions = uiSlice.actions;
