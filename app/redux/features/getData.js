
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getConsolidation = createAsyncThunk(
    'consolidation/getConsolidation', async function (_, { dispatch, rejectWithValue }) {
        try {
            const data = await axios(`http://192.168.89.177:8000//about/consolidation/`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const baseparceId = createSlice({
    initialState: {
        consolidation: [],
    },
    status: null,
    error: null,
    name: 'consolidation',
    reducers: {
        getData: (state, action) => {
            // eslint-disable-next-line no-undef
            getBaseparceId(action.payload)
        } ,
        addData: (state, action) => {
            state.baseparceId = action.payload[0]
        }
    },
    extraReducers: {
        [getConsolidation.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getConsolidation.fulfilled]: (state,  action ) => {
            state.status = 'success'
            state.baseparceId = action.payload
        },
        [getConsolidation.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        }
    }
})

export const { getData,addData } = baseparceId.actions

export default baseparceId.reducer