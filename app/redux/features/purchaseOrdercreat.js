import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Api } from '@/app/api';

export const postPurchase_ordercreats = createAsyncThunk(
    'postPurchase_ordercreat',
    async function (datas, { rejectWithValue }) {
        try {
            await axios.post(`${Api}flight/purchase_order/create/`, {
                country: datas[1].name,
                url:datas[0].url,
                size:datas[0].size,
                color:datas[0].color,
                quantity:datas[0].quantity,
                price:datas[0].price,
                fullname:datas[0].fullname,
                contact:datas[0].contact,
                comment:datas[0].comment,
            })

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


export const purchaseOrdercreatSlice = createSlice({
    name: 'postPurchase_ordercreat',
    initialState: {
        status: null,
        error: null,
        
        value: 0},
    reducers: {},
    extraReducers: {
        [postPurchase_ordercreats.pending]: (state, action) => {
            state.status = 'loading'
        },
        [postPurchase_ordercreats.fulfilled]: (state, action) => {
            state.status = 'success'
            state.value = action.payload
        },
        [postPurchase_ordercreats.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        }
    }
})

export const {_} = purchaseOrdercreatSlice.actions
export default purchaseOrdercreatSlice.reducer
