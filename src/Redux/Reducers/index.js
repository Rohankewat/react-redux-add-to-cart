import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cartSli",
    initialState:[],
    reducers:{
        manageCart:(state,action) => {
            return state = action.payload
        }
    }
})

export const {manageCart} = cartSlice.actions;
export default cartSlice.reducer;