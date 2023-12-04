import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "@/app/api";

export const restorePasswordPost = createAsyncThunk(
    'restorePasswordPost/restorePasswordPost',
    async (data, { rejectWithValue }) => {
       
        try {
            const response = await axios.post(`${Api}account/password/verify/reset/`,
                { email: data.email,
                    code:data.kod,
                    password: data.Password,
                })
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const restorePasswordPosts = createSlice({
    name: 'restorePasswordPost',
    initialState: {
        value: 0,
    },
    status: null,
    error: null,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
    extraReducers: {
        [restorePasswordPost.pending]: (state, action) => {
            state.status = 'loading';
        },
        [restorePasswordPost.fulfilled]: (state, action) => {
            state.status = 'success';
            state.value = action.payload;
        },
        [restorePasswordPost.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        
    },
});

export const { increment, decrement } = restorePasswordPosts.actions;
export default restorePasswordPosts.reducer;