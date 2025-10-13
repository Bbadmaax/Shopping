import { configureStore } from "@reduxjs/toolkit";
import ShopReducer from "./shopSlice";


const store = configureStore({
    reducer :{
        shop: ShopReducer,
    },
})
export default store;