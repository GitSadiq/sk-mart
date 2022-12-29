import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uid: 0,
    email: 0,
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