import { createSlice } from "@reduxjs/toolkit";

interface productData {
  id: number;
  amount: number;
  total: number;
}

interface cartState {
  products: productData[];
  cartItems: number;
  amount: number;
  total: number;
}

const initialState: cartState = {
  products: [{ id: 1013947294, amount: 25, total: 1 }],
  cartItems: 0,
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addCart: (state, action) => {
    //   state.products = action.payload;
    // },
    increaseAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.id === payload);
      if (item) {
        item.amount++;
      }
    },
    addToCart: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { increaseAmount, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
