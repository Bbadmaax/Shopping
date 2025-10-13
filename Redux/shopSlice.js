import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    // ✅ Addcart
    Addcart: (state, action) => {
      const product = action.payload;
      const updatedproduct = state.products.find((p) => p.id === product.id);

      if (!updatedproduct) {
        state.products = [...state.products, { ...product, quantity: 1 }];
      } else {
        updatedproduct.quantity++;
      }

      state.total = state.products.reduce(
        (acc, p) => acc + p.price * p.quantity,
        0
      );
    },

    // ✅ RemovefromCart
    RemovefromCart: (state, action) => {
      const product = action.payload;
      state.products = state.products.filter((p) => p.id !== product.id);

      state.total = state.products.reduce(
        (acc, p) => acc + p.price * p.quantity,
        0
      );
    },

    // ✅ updatedproductQuantity
    updatedproductQuantity: (state, action) => {
      const { product, newQuantity } = action.payload;
      const updatedproduct = state.products.find((p) => p.id === product.id);

      if (updatedproduct) {
        if (newQuantity <= 0) {
          // Haddii quantity-ga cusub <= 0, ka saar product-ka
          state.products = state.products.filter(
            (p) => p.id !== product.id
          );
        } else {
          // Haddii uu jiro product, update garee quantity-giisa cusub
          state.products = state.products.map((p) =>
            p.id === product.id ? { ...p, quantity: newQuantity } : p
          );
        }
      }

      // Xisaabi wadarta guud (total)
      state.total = state.products.reduce(
        (acc, p) => acc + p.price * p.quantity,
        0
      );
    },
    ClearCart: (state)=> {
state.products =[];
state.total =0;
    }
  },
});

// ✅ Waa in export-ka magacyadu la mid yihiin kuwa reducers-ka
export const { Addcart, RemovefromCart, updatedproductQuantity } =
  shopSlice.actions;

export default shopSlice.reducer;
