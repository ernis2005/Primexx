
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { redirect } from "next/navigation";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { RootSate } from "../store";
import error from "next/error";
import { start } from "repl";
import axios, { AxiosError } from "axios";
import { api, getUser,  } from "@/app/getData/getData";
import { useState } from "react";
import { data } from "@/components/ServicesPages/Page6/Page6";
export  const ugetUsers = createAsyncThunk(
    'autor/ugetUsers',async function (id,{rejectWithValue,dispatch}) {

        try {
           
            const data = await axios('http://192.168.89.177:8000/account/get/',{
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${id} `,
                },
            })
            dispatch(AutoLogin(data.data))
                
        } catch (error) {
            return error
        }
    }
)
interface AuthSate {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    isAuth: true;
        email: string;
        name: string;
        tel: string;
        code_logistic: string;
        send_code: string;
}
export const testData = [
    {
        eamil: 'nhtfxnhtfx.9@gmail.com',
        name: "Ernis Ismanilev",
        password: "test",
        uliId: "123456789",
        tel: "0999999999",
    },
    {
        eamil: 'ernis@gamil.com',
        name: "test test",
        password: "test",
        uliId: "12345",
        tel: "0999999999",
    }
]
const initialState = {
    value: {
        isAuth: false,
        email: "",
        name: "",
        send_code: "",
        tel: "",
        code_logistic: "",
        info:""
    
    } as unknown as AuthSate
}
interface PayloadActionType {
    email: string,
    password: string,
}
interface AutoLoginType {
    uliId: ""
}
export const auto = createSlice({
    name: "autor",
    initialState: initialState,
    reducers: {
        Login:  (state, action: PayloadAction<PayloadActionType>) =>  {
            const datas = axios.post(`${api}/account/token/`, {
                email: action.payload.email,
                password: action.payload.password
            }).then(function (response) {
                localStorage.setItem("uliId", JSON.stringify(response.data.access));
                getUser(response.data.access).then(function (response) {
                    console.log(response, 'dataUsers')
                    return {
                        value: {
                            isAuth: true,
                            eamil: response.email,
                            name: response.info,
                            tel: response.tel,
                            code_logistic: response.code_logistic,
                            send_code: response.send_code
                        }
                    }

                })
            }).catch(function (error) {
                console.log(error);
            });

        },
        AutoLogin: (start, action: PayloadAction<AuthSate>) => { 
            console.log(action);
        
            return {
                value: {
                    isAuth: true,
                    email: action.payload.email,
                    name: action.payload?.info,
         
                    code_logistic: action.payload.code_logistic,
                    send_code: action.payload.send_cod,
                    tel: action.payload.phone,
                },
             
            }
        },
    },
    extraReducers: {

    }
}
)
export const { Login, AutoLogin } = auto.actions
export default auto.reducer
export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector