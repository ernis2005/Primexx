import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getShop = createAsyncThunk(
    'shop/getShop', async function (props, { rejectWithValue }) {
        try {
            const data = await axios(`http://192.168.89.177:8000/about/shop/?country__id=${props.country__id}&category__id=${props.category__id}`)
            return data.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    })

export const shop = createSlice({
    initialState: {
        shop: [],

    },
    status: null,
    error: null,
    name: "shop",
    reducers: {
        getData:(state,action)=>{
            return  state.shop = action.payload
        }
    },
    extraReducers: {
        [getShop.pending]: (state, action) => {
            state.status = "loading"
        },
        [getShop.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.shop = payload
        },
        [getShop.rejected]: (state, action) => {
            state.status = "failed"
            state.error = action.payload
        }
    }
})
export const {getData} = shop.actions

export default shop.reducer