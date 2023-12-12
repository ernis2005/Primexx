
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Api } from '@/app/api';

export const getConsolidation = createAsyncThunk(
    'consolidation/getConsolidation', async function (_, { dispatch, rejectWithValue }) {
        try {
            const data = await axios(`${Api}about/consolidation/`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const postConsolidation = createAsyncThunk(  

    'consolidation/postConsolidation', async function (data, { dispatch, rejectWithValue }) {
        
        const phoneNumberWithoutMask = data.phone.replace(/\D/g, '');
        try {
            await axios.post(`${Api}flight/consultation_order/create/`,  {  fullname: data.name,   phone: phoneNumberWithoutMask, })
            
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const getFAQ = createAsyncThunk(

    'consolidation/getFAQ', async function (_, { dispatch, rejectWithValue }) {
        try {
            const data = await axios(`${Api}about/faq/`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const getConsolidationData = createSlice({
    initialState: {
        consolidation: [],
        FAQData: [],
    },
    status: null,
    error: null,
    name: 'consolidation',
    reducers: {
       
        addData: (state, action) => {
            state.consolidation = action.payload[0]
        }
    },
    extraReducers: {
        [getConsolidation.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getConsolidation.fulfilled]: (state,  action ) => {
            state.status = 'success'
            state.consolidation = action.payload.data
        },
        [getConsolidation.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        [postConsolidation.pending]: (state, action) => {
            state.status = 'loading'
        },
        [postConsolidation.fulfilled]: (state, action) => {
            state.status = 'success'
            state.consolidation = action.payload.data
        },
        [postConsolidation.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        [getFAQ.pending]: (state, action) => {
            state.status = 'loading'
        }
        ,
        [getFAQ.fulfilled]: (state, action) => {
            state.status = 'success'
            state.FAQData = action.payload.data
        },
        [getFAQ.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },

    }
})

export const { getData, } = getConsolidationData.actions

export default getConsolidationData.reducer