/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { use, useEffect } from 'react'
import s from './style.module.scss'

import { useForm } from 'react-hook-form';
import Image from "next/legacy/image";
import { useDispatch } from 'react-redux'

import { redirect, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux'
import Link from 'next/link';
import { postLogin } from '../redux/features/auth-slice';
import { Box, Modal } from '@mui/material'
import { codeSend } from '../getData/getData';
import { restorePasswordPost } from '../redux/features/password-restore';
const page = () => {
    const {error,status} = useSelector((state) => state.passwordRestoreReducer)
    const [email, setEmail] = React.useState()
    const dispatch = useDispatch()
  
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const router = useRouter()
    const onSubmit = (data) => {
        const  datasda =   dispatch(restorePasswordPost(data))
    }
    useEffect(() => {
        if (status === 'failed') {
            setInterval(() => { 
                document.getElementById('error').style.display = 'none'
            },3500);
          
        }
        if (status === 'success') {
            
            router.push('/entrance');
        }
    }, [status])
    return (
        <div className={s.Header} >
            <div className={s.bg}>
                <Image src={'/images/iamgeLogin.png'} layout="fill"
                    objectFit="cover"
                    alt="hwllo" />
            </div>
            <form className={s.contend} onSubmit={handleSubmit(onSubmit)}>
                <h2>Добро пожаловать</h2>
                <div>
                    {error && <p  id='error'>{error.message }</p>}
                    <span>Электронная почта
                        <input placeholder='email' type="email" {...register("email")} />
                    </span>
                    <span>Kод
                        <input placeholder='код' type="number" {...register("kod")} />
                    </span>
                    <span>Password
                        <input placeholder='зassword' type="string" {...register("Password")} />
                    </span>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button type="submit">Войти</button>
                </div>
            </form>
            
        </div>
    )
}

export default page