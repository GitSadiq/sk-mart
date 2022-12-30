import { combineReducers } from "@reduxjs/toolkit";
import uidSlice from "./slices/uidSlice";
import counterSlice from "./slices/counterSlice";
import cartSlice from "./slices/cartSlice";

const rootReducer = combineReducers({
    uidSlice,
    counterSlice,
    cartSlice,
})

export default rootReducer