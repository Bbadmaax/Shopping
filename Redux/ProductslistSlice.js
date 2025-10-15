import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit"
import  Axios  from "axios"

const initialState  = {
    productlists : [],
    loading : false ,
    error : null,
}

export const fetchdata = createAsyncThunk(
    "products/fetchdata",
   async (_, thunkAPI)=> {
    try{
 const {data} = await Axios.get(`https://dummyjson.com/products`);
       return data.products;
    }catch(error){
        return thunkAPI.rejectWithValue(`respond not found`)
    }
    }
      
)


const productslistSlice = createSlice ({
    name : "products",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
   .addCase(fetchdata.pending, (state)=> {
    state.loading = true;
    state.error = null
   })
   .addCase(fetchdata.fulfilled,(state,action)=> {
    state.loading = false ;
    state.productlists = action.payload;
   })
   .addCase(fetchdata.rejected,(state,action)=> {
    state.loading = false ;
    state.error = action.payload;
   })
    },
})

export default productslistSlice.reducer;