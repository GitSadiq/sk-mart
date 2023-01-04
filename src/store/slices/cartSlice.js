import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
const initialState = {
  cartArray: [],
};
let flag = false;
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addcart: (state, action) => {
      state.cartArray.push(action.payload);
      console.log(action);
    },
    updatecartincrement: (state, action) => {
      state.cartArray[action.payload].quantity++;
      state.cartArray[action.payload].updatedprice =
        state.cartArray[action.payload].price *
        state.cartArray[action.payload].quantity;
    },
    updatecartdecrement: (state, action) => {
      if (state.cartArray[action.payload].quantity > 1) {
        state.cartArray[action.payload].quantity--;
        state.cartArray[action.payload].updatedprice =
          state.cartArray[action.payload].price *
          state.cartArray[action.payload].quantity;
      } else {
        swal("Alert!", "You can't reduce the quantity from one!", "warning");
      }
    },
    removecart: (state, action) => {
      if (action.payload >= 0) {
        state.cartArray.splice(action.payload, 1);
      } else {
        state.cartArray = [];
      }
    },
  },
});

export const { addcart, removecart, updatecartincrement, updatecartdecrement } =
  cartSlice.actions;
export default cartSlice.reducer;
