import { createSlice , createAsyncThunk}  from '@reduxjs/toolkit'
import { Api } from '@/app/api';
import axios from 'axios';


export const  getabout = createAsyncThunk (
    'getAboutUs', async function (id, { dispatch,rejectWithValue }) {
        try {
            const data = await axios(`${Api}about/about_us/`, {
                method: "GET",
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message                )
        }
    }
)

export const aboutUsSlice = createSlice({
     
    name: 'aboutUs',
    initialState: {
        aboutUs: [],
    },
    error: null,
    status: null,
    reducers: {},
    extraReducers: {
        // [getabout.rejected]: (state, action) => {
        //     state.status = 'rejected';
        //     state.error = action.payload
        // },
        // [getabout.rejected]: (state, action) => {
        //     state.status = 'rejected';
        //     state.error = action.payload
        // },
        // [getabout.rejected]: (state, action) => {
        //     state.status = 'rejected';
        //     state.error = action.payload
        // },
        [getabout.fulfilled]: (state, action) => {
            state.status = 'success';
            state.aboutUs = action.payload
        },
        [getabout.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getabout.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        }

    }
    
})
export const { addData } = aboutUsSlice.actions

export default aboutUsSlice.reducer


