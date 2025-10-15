import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    productDetailss : {},
    loading : false,
    error : null,
}

export const fetchdateDetail = createAsyncThunk(
    "productDetail/fetchdateDetail",
async (id, thunkAPI)=> {
    try{
  const {data} = await axios.get(`https://dummyjson.com/products/${id}`)
     return data;
    }catch (error){
        return thunkAPI.rejectWithValue('not respond object data id')
    }
}
)

const productdetailsSlice = createSlice({
    name : "productDetail",
    initialState,
    reducers : {},
    extraReducers : (builder)=> {
        builder 
        .addCase(fetchdateDetail.pending, (state)=> {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchdateDetail.fulfilled,(state, action)=> {
           state.loading = false;
           state.productDetailss = action.payload;
        })
        .addCase(fetchdateDetail.rejected, (state, action)=> {
            state.loading = false ;
            state.error = action.payload;
        })
    },
});

export default productdetailsSlice.reducer;