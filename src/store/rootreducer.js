import { combineReducers } from "@reduxjs/toolkit";
import uidSlice from "./slices/uidSlice";

const rootReducer = combineReducers({
    uidSlice,
})

export default rootReducer