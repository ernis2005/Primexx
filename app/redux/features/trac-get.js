import { kye } from "@/components/ServicesPages/Page6/Page6";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value: {
        isAuth: false,
        email: "",
        name: "",
        send_code: "",
        tel: "",
        code_logistic: "",
        info: ""

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } 
}
export const getTrac = createAsyncThunk(
    'trac/getTrac' , async function(kye,{rejectWithValue}){
        try {
            
            const data = await axios('http://192.168.89.177:8000/flight/baseparcels/',{
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${kye} `,
                },
            })
            return data.data    
        } catch (error) {

            return  rejectWithValue(error.response.data.message)
        }
    }
)
export const trac = createSlice({
    name: "trac",
    initialState: {
        trac:[]
    },
    error: null,
    status: null,
    reducers: {
        test:()=>{}
    },
    extraReducers: {
        [getTrac.pending]: (state, action) => {
            state.status = "loading"
        },
        [getTrac.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.trac = payload
        },
        [getTrac.rejected]: (state, action) => { 
            
            state.status = "failed"
            state.error = action.payload.message
        }
      
    }
})
export const {test} = trac.actions

export default trac.reducer