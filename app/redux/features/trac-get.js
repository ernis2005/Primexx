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
    'trac/getTrac' , async function(){
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
            return error
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
      
    }
})
export const {test} = trac.actions

export default trac.reducer