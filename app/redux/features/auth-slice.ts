/* eslint-disable @typescript-eslint/no-explicit-any */

import type { PayloadAction, } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { RootSate } from "../store";
import error from "next/error";
import { start } from "repl";
import axios, { AxiosError } from "axios";
import { api, getUser, } from "@/app/getData/getData";
import { useState } from "react";
import { redirect } from "next/navigation";
interface Person {
    id: string
}
import { useRouter } from 'next/navigation'

export const registrationPost: any = createAsyncThunk(
    'autor/registrationPost', async function (params: any, { rejectWithValue, }) {

        try {
            if (params.password === params.repeatPassword) {
                const phoneNumberWithoutMask = params.tel.replace(/\D/g, '');
                await axios.post(`${api}/account/register/`, {
                    email: params.email,
                    phone: phoneNumberWithoutMask,
                    password: params.password,
                    info: `${params.name}  ${params.lastName}`,
                    role: params.role,
                })
                console.log(params);
                const data = await axios.get(`${api}/account/code/send/?type=1&email=${params.email}`)
                if (data) {
                    await window.location.replace('/registration/confirm')
                }
            } else {
                return rejectWithValue('пароль не совпадают')
            }
        } catch (error) {
            return rejectWithValue(` Это электронная почта занята ${error}`,)
        }
    }
)
export const codeVerifyPost: any = createAsyncThunk(
    'autor/codeVerifyPost', async function (params: any, { rejectWithValue, }) {
        try {
            const  data= await axios.post(`${api}/account/code/verify/`,{
                code:params.code
            })
            if (data) {
                await window.location.replace('/entrance')
            }
         

        } catch (error) {
            return rejectWithValue(`${error}`)
        }
    }
)
export const ugetUsers = createAsyncThunk(
    'autor/ugetUsers', async function (id: string, { dispatch }) {
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

// export const  getTrack = async () => {

//     try {
//         const data = await axios('http://192.168.89.177:8000/flight/baseparcels/',{
//             method: "GET",
//             headers: {
//                 accept: "application/json",
//                 Authorization: `Bearer ${kye} `,
//             },
//         })
//         return data.data
//     } catch (error) {
//         return error
//     }
// }
export const postLogin: any = createAsyncThunk(
    'autor/postLogin', async function (action: { email: string, password: string }, { rejectWithValue, dispatch }) {
        try {
            await axios.post(`${api}/account/token/`, {
                email: action.email,
                password: action.password
            }).then((res) => {
                localStorage.setItem("uliId", JSON.stringify(res.data.access));
                dispatch(ugetUsers(res.data.access))
            })
        } catch (error: any) {
            return rejectWithValue(error.message)
        }

        // dispatch(AutoLogin(data.data))
    
    }
)


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
export const auto = createSlice({
    name: "autor",
    initialState: initialState,
    error: null,
    status: null,
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
        [postLogin.rejected]: (state: { status: string; error: string; }, action: { payload: string; }) => {
            state.status = 'rejected';
            state.error = action.payload
        },
        [registrationPost.rejected]: (state: { status: string; error: string; }, action: { payload: string; }) => {
            state.status = 'rejected';
            state.error = action.payload
        },
        [codeVerifyPost.rejected]: (state: { status: string; error: string; }, action: { payload: string; }) => {
            state.status = 'rejected';
            state.error = action.payload
        },
    }
}
)

export const { Login, AutoLogin } = auto.actions

export default auto.reducer

export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector