import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import { Api } from '@/app/api';
import axios from 'axios';


export const  getrate = createAsyncThunk (
    'getrate', async function (id, { dispatch,rejectWithValue }) {
        try {
            const data = await axios(`${Api}about/rate/`, {
                method: "GET",
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const getservice = createAsyncThunk (
    'getservice', async function (id, { dispatch,rejectWithValue }) {
        try {
            const data = await axios(`${Api}about/additional_service/`, {
                method: "GET",
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

export const rateSlice = createSlice({

    name: 'rate',
    initialState: {
        rate: [],
        additional_service:[]
    },
    error: null,
    status: null,
    reducers: {},
    extraReducers: {
        [getrate.fulfilled]: (state, action) => {
            state.status = 'success';
            state.rate = action.payload
        },
        [getrate.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getrate.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        [getservice.fulfilled]: (state, action) => {
            state.status = 'success';
            state.additional_service = action.payload
        },
        [getservice.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getservice.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        }
    }
})

export const { addData } = rateSlice.actions

export default rateSlice.reducer