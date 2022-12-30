import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uid: false,
    email: false,
}

const uidSlice = createSlice({
    name: 'uid',
    initialState,
    reducers: {
        getUid: (state, action) => {
            state.uid = action.payload
        },
        getEmail: (state, action) => {
            state.email = action.payload
        }
    }
})

export const {getUid, getEmail} = uidSlice.actions
export default uidSlice.reducer