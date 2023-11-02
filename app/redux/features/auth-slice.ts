
import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit"
import { redirect } from "next/navigation";
import type { TypedUseSelectorHook} from "react-redux";
import { useSelector } from "react-redux";
import type { RootSate } from "../store";
import error from "next/error";
import { start } from "repl";

interface AuthSate {
    isAuth:boolean,
    eamil:string,
    password:string,
    name:string,
    uliId:string,
    tel:string

}
export const  testData  = [
    {  eamil:'nhtfxnhtfx.9@gmail.com',
        name:"Ernis Ismanilev",
        password:"test",
        uliId:"123456789",
        tel:"0999999999",
    },
    {  eamil:'ernis@gamil.com',
        name:"test test",
        password:"test",
        uliId:"12345",
        tel:"0999999999",
    }
]

const initialState ={
    value : {
        isAuth:false,
        eamil:"",
        name:"",
        password:"",
        uliId:"",
        tel:""
    } as AuthSate
} 
interface PayloadActionType {
    email: string,
    password:string,
}
interface AutoLoginType {
    uliId:""
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
                localStorage.setItem("uliId", JSON.stringify(dataEamil[0].uliId));
                return  {
                    value: {
                        isAuth:true,
                        eamil:dataEamil[0].eamil,
                        name:dataEamil[0].name,
                        password:dataEamil[0].password,
                        uliId:dataEamil[0].uliId,
                        tel:dataEamil[0].tel
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
                        uliId:"",
                        tel:""
                    },
                }  
            }
        },
        AutoLogin:(start, action:PayloadAction<string>) =>{
            const dataEamil = testData.filter((res,i )=> {
                if(res.uliId === action.payload ) {
                    return res
                } 
            })
            if(dataEamil[0]?.uliId === action.payload) {
                return  {
                    value: {
                        isAuth:true,
                        eamil:dataEamil[0].eamil,
                        name:dataEamil[0].name,
                        password:dataEamil[0].password,
                        uliId:dataEamil[0].uliId,
                        tel:dataEamil[0].tel
                    },
                }  
            } else {
              
                return  {
                    value: {
                        isAuth:false,
                        eamil:"",
                        name:"",
                        password:"",
                        uliId:"",
                        tel:""
                    },
                }  
            }
   
        }
    }
})
export const { Login,AutoLogin} = auto.actions
export default auto.reducer
export  const  useAppSelector:TypedUseSelectorHook<RootSate> =  useSelector