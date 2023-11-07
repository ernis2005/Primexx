/* eslint-disable @typescript-eslint/no-explicit-any */

import type { AnyAction, AsyncThunk, AsyncThunkPayloadCreatorReturnValue, PayloadAction, ThunkDispatch } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { redirect } from "next/navigation";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { RootSate } from "../store";
import error from "next/error";
import { start } from "repl";
import axios, { AxiosError } from "axios";
import { api, getUser, } from "@/app/getData/getData";
import { useState } from "react";
interface Person {
    id:string
}
export const registrationPost:any =createAsyncThunk (
    'autor/registrationPost', async function (params:any, {rejectWithValue,  }) {
        try {
            if (params.password === params.repeatPassword) {
                await axios.post(`${api}/account/register/`,{
                    email:params.email ,
                    phone: params.tel,
                    password:params.password,
                    info: `${params.name}  ${params.lastName}`,
                    role: 0,
                })
                await axios.get(`${api}/account/code/send/?type=1&email=${params.email}`)
                console.log(`${api}/account/code/send/&type=1&email=${params.email}`);
                
            } else  {
                return   rejectWithValue('пароль не совпадают')
            }
        } catch (error) {
            return   rejectWithValue(` Это электронная почта занята ${error}`,)
        }
    }
)
export const ugetUsers = createAsyncThunk(
    'autor/ugetUsers', async function (id:string, { dispatch }) {
        try {

            const data = await axios('http://192.168.89.177:8000/account/get/', {
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
export const postLogin:any = createAsyncThunk(
    'autor/postLogin', async function (action:{email:string,password:string}, { rejectWithValue, dispatch }) {
        try {
            await axios.post(`${api}/account/token/`, {
                email: action.email,
                password: action.password
            }) .then((res)=> {
                localStorage.setItem("uliId", JSON.stringify(res.data.access));
                dispatch(ugetUsers(res.data.access))
            })
        } catch (error:any) {
            return rejectWithValue(error.message)
        }

        // dispatch(AutoLogin(data.data))
        console.log(action);


        // } catch (error) {
        //     return error
        // }
    }
)
// interface any {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// [x: string]: any;
// isAuth: true;
// email: string;
// name: string;
// tel: string;
// code_logistic: string;
// send_code: string;
// }

const initialState = {
    value: {
        isAuth: false,
        email: "",
        name: "",
        send_code: "",
        tel: "",
        code_logistic: "",
        info: ""

    } as unknown as any
}
interface PayloadActionType {

    email: string,
    password: string,
}
interface AutoLoginType {
    uliId: ""
}
export const auto = createSlice ({
    name: "autor",
    initialState: initialState,
    error:null,
    status:null,
    reducers: {
        Login: (state, action: PayloadAction<any>) => {
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
        AutoLogin: (start, action: PayloadAction<any>) => {


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
        [postLogin.rejected]:(state: { status: string; error:string; },action: { payload: string; }) => {
            state.status='rejected';
            state.error = action.payload
        },
        [registrationPost.rejected]:(state: { status: string; error:string; },action: { payload: string; }) => {
            state.status='rejected';
            state.error = action.payload
        },
        
    }
}
)

export const { Login, AutoLogin } = auto.actions
export default auto.reducer
export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector