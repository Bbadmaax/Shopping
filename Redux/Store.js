import { configureStore } from "@reduxjs/toolkit";
import ShopReducer from "./shopSlice";
import todoreducer from "./Todoslice"
import productsReducer from "./ProductslistSlice"
import productDetailsReducer from "./productdetailsSlice"


const store = configureStore({
    reducer :{
        shop: ShopReducer,
        todos : todoreducer,
        productsStatelist : productsReducer,
        productDetail : productDetailsReducer,
    },
})
export default store;