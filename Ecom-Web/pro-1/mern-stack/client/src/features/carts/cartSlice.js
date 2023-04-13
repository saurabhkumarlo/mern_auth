import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: "",
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  addCart: (state, action) => {},
});

export const { addCart } = cartsSlice.actions;

export default cartsSlice.reducer;
