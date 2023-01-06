import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderSummary: 0,
  shipDetail: 0,
};

const orderSlice = createSlice({
  name: "uid",
  initialState,
  reducers: {
    orderSummary: (state, action) => {
      state.orderSummary = action.payload;
    },
    shipDetail: (state, action) => {
      state.shipDetail = action.payload;
    },
    removeOrderDetail: (state) => {
      state = {};
    },
  },
});

export const { orderSummary, shipDetail, removeOrderDetail } = orderSlice.actions;
export default orderSlice.reducer;
