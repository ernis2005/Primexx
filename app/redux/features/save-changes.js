import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { Api } from "@/app/api";
export const saveChanges = createAsyncThunk(
    'saveChanges/saveChanges', async function (data, { dispatch, rejectWithValue }) {
        const myto = Cookies.get('uliId');
        
        try {
            await axios.put(`${Api}account/update/info/`, {
                info: data.name,
                phone: data.tel,
                address: data.address,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${myto}`
                }
            });

        
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const saveChangesSlice = createSlice({
    initialState: {
        saveChanges: [],
  
    },
    status: null,
    error: null,
    name: 'saveChanges',
    reducers: {
        getData: (state, action) => {
            // eslint-disable-next-line no-undef
            saveChanges(action.payload)
        } ,
        addData: (state, action) => {
            state.saveChanges = action.payload[0]
        }
    },
    extraReducers: {
        [saveChanges.pending]: (state, action) => {
            state.status = 'loading'
        },
        [saveChanges.fulfilled]: (state,  action ) => {
            state.status = 'success'
            state.saveChanges = action.payload
        },
        [saveChanges.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        }
    }
})

export const { getData,addData } = saveChangesSlice.actions

export default saveChangesSlice.reducer