import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '@/app/api';
import axios from 'axios';

export const getBaseparceId = createAsyncThunk(
    'baseparce/getBaseparceId', async function (id, { dispatch, rejectWithValue }) {
        try {
            const data = await axios(`${Api}flight/baseparcels/?search=${id}`)

            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const baseparceId = createSlice({
    initialState: {
        baseparceId: [],
  
    },
    status: null,
    error: null,
    name: 'baseparceId',
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
        [getBaseparceId.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getBaseparceId.fulfilled]: (state,  action ) => {
            state.status = 'success'
            state.baseparceId = action.payload
        },
        [getBaseparceId.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        }
    }
})

export const { getData,addData } = baseparceId.actions

export default baseparceId.reducer