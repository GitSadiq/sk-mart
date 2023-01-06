import { combineReducers } from "@reduxjs/toolkit";
import uidSlice from "./slices/uidSlice";
import counterSlice from "./slices/counterSlice";
import cartSlice from "./slices/cartSlice";
import orderSlice from "./slices/orderSlice";
const rootReducer = combineReducers({
  uidSlice,
  counterSlice,
  cartSlice,
  orderSlice,
});

export default rootReducer;
