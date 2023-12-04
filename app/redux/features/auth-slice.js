/* eslint-disable @typescript-eslint/no-explicit-any */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Api } from "@/app/api";
import { useDispatch, useSelector } from "react-redux";

import error from "next/error";
import axios, { AxiosError } from "axios";
import {  getUser, } from "@/app/getData/getData";
import { useState } from "react";
import { redirect } from "next/navigation";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'

export const registrationPost= createAsyncThunk(
    'autor/registrationPost', async function (params, { rejectWithValue, }) {

        try {
            if (params.password === params.repeatPassword) {
                const phoneNumberWithoutMask = params.tel.replace(/\D/g, '');
                await axios.post(`${Api}account/register/`, {
                    email: params.email,
                    phone: phoneNumberWithoutMask,
                    password: params.password,
                    info: `${params.name}  ${params.lastName}`,
                    role: params.role,
                    address: params.address,
                })
               
                const data = await axios.get(`${Api}account/code/send/?type=1&email=${params.email}`)
                if (data) {
                    await location.replace('/registration/confirm')
                }
            } else {
                return rejectWithValue('Пароль не совпадают')
            }
        } catch (error) {
            return rejectWithValue(` Это электронная почта занята `,)
        }
    }
)
export const codeVerifyPost = createAsyncThunk(
    'autor/codeVerifyPost', async function (params, { rejectWithValue, }) {
        try {
            const  data= await axios.post(`${Api}account/code/verify/`,{
                code:params.code
            })
            if (data) {
                await location.replace('/entrance')
            }
        } catch (error) {
            return rejectWithValue(`${error}`)
        }
    }
)
export const ugetUsers = createAsyncThunk(
    'autor/ugetUsers', async function (id, { dispatch }) {
        try {
            const data = await axios(`${Api}account/get/`, {
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
//         const data = await axios(`${Api}/flight/baseparcels/`,{
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
export const postLogin = createAsyncThunk(
    'autor/postLogin', async function (action, { rejectWithValue, dispatch }) {
        try {
            await axios.post(`${Api}account/token/`, {
                email: action.email,
                password: action.password
            }).then((res) => {
                Cookies.set('uliId', res.data.access, );
                // localStorage?.setItem("uliId", JSON.stringify(res.data.access));
                dispatch(ugetUsers(res.data.access))
            })
        } catch (error) {
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
        info: "",
        address: ""
    } 
}

export const auto = createSlice({
    name: "autor",
    initialState: initialState,
    error: null,
    status: null,
    reducers: {
        Login: (state, action) => {
            return {
                value: {
                    isAuth: true,
                    email: action.payload.email,
                    name: action.payload?.info,
                    code_logistic: action.payload.code_logistic,
                    send_code: action.payload.send_cod,
                    tel: action.payload.phone,
                    address: action.payload.address
                },
            }
        },
        AutoLogin: (start, action) => {
            return {
                value: {
                    isAuth: true,
                    email: action.payload.email,
                    name: action.payload?.info,
                    code_logistic: action.payload.code_logistic,
                    send_code: action.payload.send_cod,
                    tel: action.payload.phone,
                    address: action.payload.address
                },
            }
        },
    },
    extraReducers: {
        [postLogin.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },
        [registrationPost.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },
        [codeVerifyPost.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },
    }
}
)

export const { Login, AutoLogin } = auto.actions

export default auto.reducer

export const useAppSelector = useSelector