import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const appStore= configureStore({
    reducer:{
        cart:cartReducer
    }
});//this wil give us our store of our react app

export default appStore;