
import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit"
import { redirect } from "next/navigation";
import type { TypedUseSelectorHook} from "react-redux";
import { useSelector } from "react-redux";
import type { RootSate } from "../store";
import error from "next/error";

interface AuthSate {
    isAuth:boolean,
    eamil:string,
    password:string,
    name:string,
    uliId:string,

}
export const  testData  = [
    {  eamil:'nhtfxnhtfx.9@gmail.com',
        name:"Ernis Ismanilev",
        password:"test",
        uliId:"123456789"
    },
    {  eamil:'ernis@gamil.com',
        name:"test test",
        password:"test",
        uliId:"12345"
    }
]

const initialState ={
    value : {
        isAuth:false,
        eamil:"",
        name:"",
        password:"",
        uliId:""
    } as AuthSate
} 
interface PayloadActionType {
    email: string,
    password:string,
}
export const auto = createSlice ({
    name: "autor",
    initialState: initialState,
    reducers: {
        Login:(state,action:PayloadAction<PayloadActionType>)=> {
    
            const dataEamil = testData.filter((res,i )=> {
                if(res.eamil === action.payload.email ) {
                    return res
                } 
            })
            if(dataEamil[0]?.password === action.payload.password) {
                return  {
                    value: {
                        isAuth:true,
                        eamil:dataEamil[0].eamil,
                        name:dataEamil[0].name,
                        password:dataEamil[0].password,
                        uliId:dataEamil[0].uliId
                    },
                }  
            } else {
                alert("Логин или Пароль неправильно указан")
                return  {
                    value: {
                        isAuth:false,
                        eamil:"",
                        name:"",
                        password:"",
                        uliId:""
                    },
                }  
            }
        }
    }
})
export const { Login} = auto.actions
export default auto.reducer
export  const  useAppSelector:TypedUseSelectorHook<RootSate> =  useSelector