import { configureStore } from "@reduxjs/toolkit";
import ShopReducer from "./shopSlice";
import todoreducer from "./Todoslice"


const store = configureStore({
    reducer :{
        shop: ShopReducer,
        todos : todoreducer,
    },
})
export default store;