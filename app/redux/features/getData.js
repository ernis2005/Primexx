
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

export const getConsolidationData = createSlice({
    initialState: {
        consolidation: [],
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
        }
    }
})

export const { getData, } = getConsolidationData.actions

export default getConsolidationData.reducer