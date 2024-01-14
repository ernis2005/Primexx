import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import { Api } from '@/app/api';
import axios from 'axios';


export const  getaboutBlog = createAsyncThunk (
    
    'getAboutBlog', async function (id, { dispatch,rejectWithValue }) {
        try {
            const data = await axios(`${Api}about/blog/`, {
                method: "GET",
            })
            return data.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const aboutBlogSlice = createSlice({
    name: 'aboutBlog',
    initialState: {
        aboutBlog: [],
    },
    error: null,
    status: null,
    reducers: {},
    extraReducers: {
        [getaboutBlog.fulfilled]: (state, action) => {
            state.status = 'success';
            state.aboutBlog = action.payload
        },
        [getaboutBlog.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getaboutBlog.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        }
    }
},
)

export const { addData } = aboutBlogSlice.actions

export default aboutBlogSlice.reducer