import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBaseparceId = createAsyncThunk(
    'baseparce/getBaseparceId', async function (id, { dispatch, rejectWithValue }) {
        try {
            const data = await axios(`http://192.168.89.177:8000/flight/baseparcels/?search=${id}`)

            dispatch(addData(data.data))
        } catch (error) {
            return rejectWithValue(error)
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

export const { getData,addData } = baseparceId.actions

export default baseparceId.reducer