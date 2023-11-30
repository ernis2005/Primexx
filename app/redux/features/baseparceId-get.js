import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBaseparceId = createAsyncThunk(
    'baseparce/getBaseparceId', async function (id, { dispatch, rejectWithValue }) {
        try {
            const data = await axios(  `http://192.168.89.177:8000/flight/baseparcels/?search=${id}`)

            return data.data
        } catch (error) {
            return rejectWithValue(`${error}`)
        }
    }
)
        

export const baseparceId = createSlice({
    initialState: {
        baseparceId: [],
        status: null,
        error: null,
    },
    name: 'baseparceId',
    reducers: {
        getData: (state, action) => {
            return state.baseparceId = action.payload
        }
    },
    extraReducers: {
        [getBaseparceId.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getBaseparceId.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            state.baseparceId = payload
        },
        [getBaseparceId.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        }
    }
})

export const { getData } = baseparceId.actions

export default baseparceId.reducer