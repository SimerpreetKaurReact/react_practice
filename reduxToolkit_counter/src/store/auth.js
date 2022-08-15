import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };
const AuthSlice = createSlice({
  initialState: initialAuthState,
  name: "Auth",
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = AuthSlice.actions;
export const authReducer = AuthSlice.reducer;
