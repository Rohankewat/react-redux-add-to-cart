import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./Reducers/index";

export default configureStore({
    reducer:{
        number1:cartReducer
    }
})