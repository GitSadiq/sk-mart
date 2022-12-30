import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartArray: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addcart: (state, action) => {
            state.cartArray.push(action.payload)
            console.log(action)
        },
        removecart: (state, action) => {
            state.cartArray = []
        }
    }
})

export const {addcart, removecart} = cartSlice.actions
export default cartSlice.reducer