import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { Api } from '@/app/api';
import axios from 'axios';

export const  getRateTime = createAsyncThunk (
    'getRateTime', async function (id, { dispatch,rejectWithValue }) {
        try {
            const data = await axios(`${Api}about/rate_time/`, {
                method: "GET",
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const getCountry = createAsyncThunk (
    'getCountry', async function (id, { dispatch,rejectWithValue }) {
        try {
            const data = await axios(`${Api}about/country/`, {
                method: "GET",
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export  const getCardPag1 = createAsyncThunk (
    'getCardPag1', async function (id, { dispatch,rejectWithValue }) {
        try {
            const data = await axios(`${Api}about/card/`, {
                method: "GET",
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const aboutHomeSlice = createSlice({
    name: 'aboutHome',
    initialState: {
        rateTime: [],
        country: [],
        card:[]
    },
    error: null,
    status: null,
    reducers: {},
    extraReducers: {
        [getRateTime.fulfilled]: (state, action) => {
            state.status = 'success';
            state.rateTime = action.payload
        },
        [getRateTime.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getRateTime.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        [getCountry.fulfilled]: (state, action) => {
            state.status = 'success';
            state.country = action.payload
        },
        [getCountry.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getCountry.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        [getCardPag1.fulfilled]: (state, action) => {
            state.status = 'success';
            state.card = action.payload
        },
        [getCardPag1.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getCardPag1.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        }
    }
})

export default aboutHomeSlice.reducer

