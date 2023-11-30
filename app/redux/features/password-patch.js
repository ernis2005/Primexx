import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import Cookies from 'js-cookie';

export const fetchPasswordPatch = createAsyncThunk(
    'passwordPatch/fetchPasswordPatch',
    async (data, { rejectWithValue }) => {
        const myto = Cookies.get('uliId');
        console.log(myto);
        try {
            const response = axios.patch('http://192.168.89.177:8000/account/password/change​',
                { password: data.oldPassword, new_password: data.newPassword }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${myto}`
                    }
                })
            console.log(response,'hello');
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }

    }
);
export const passwordPatchSlice = createSlice({
    name: 'passwordPatch',
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
        [fetchPasswordPatch.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchPasswordPatch.fulfilled]: (state, action) => {
            state.status = 'success';
            state.value = action.payload;
        },
        [fetchPasswordPatch.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});
export const { increment, decrement } = passwordPatchSlice.actions;
export default passwordPatchSlice.reducer;