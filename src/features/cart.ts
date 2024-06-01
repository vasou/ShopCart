import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {
      products: [],
      cartItems: 0,
    },
  },
  reducers: {
    addCart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default cartSlice.reducer;
