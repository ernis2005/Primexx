/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from 'react'
import s from '../page.module.scss'
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import Image from "next/legacy/image";
import { useDispatch } from 'react-redux'

import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux'
import { codeVerifyPost, registrationPost, useAppSelector } from '@/app/redux/features/auth-slice';

type Inputs = {
 code:string
}

const page = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(codeVerifyPost(data))
    }
    const { status, error }:any = useAppSelector((state) => state.authReducer)
    return (
        <div className={s.Header} >
            <div className={s.bg}>
                <Image src={'/images/bgLogin.jfif'} layout="fill"
                    objectFit="cover"
                    alt="hwllo" />
            </div>
            <form className={s.contend} onSubmit={handleSubmit(onSubmit)}>
                <h2>Добро пожаловать</h2>
                <div>
                    {error && <p>{error}</p>}
                    {/* {error && <p>{error}</p>} */}
                    <span> код
                        <input placeholder='Подтвердить код ' type='number' {...register("code", { required: true, maxLength: 6,minLength:6})}  />
                    </span>
                   
                    <button type="submit"> Подтвердить Код</button>
                </div>
            </form>
        </div>
    )
}

export default page