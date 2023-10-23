
import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit"
import { redirect } from "next/navigation";

interface AuthSate {
    isAuth:boolean,
    eamil:string
}
const initialState ={
    value : {
        isAuth:false,
        eamil:''
    } as AuthSate
} 
export const auto = createSlice ({
    name: "autor",
    initialState: initialState,
    reducers: {
        Login:(state,action:PayloadAction<string>   )=> {
            return  {
                value: {
                    isAuth:true,
                    eamil:action.payload,
                },
            }    
        }
    }
})
export const { Login} = auto.actions
export default auto.reducer