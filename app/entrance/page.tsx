"use client"
import React from 'react'
import s from './style.module.scss'
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import {useDispatch} from 'react-redux'
import { Login } from '../redux/features/auth-slice';
type Inputs = {
    example: string
    exampleRequired: string
}

const page = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) =>  {
        dispatch(Login(data.example))
    }

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
                    <span>Электронная почта
                        <input placeholder='email' type="email" {...register("example")} />
                    </span>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button type="submit">Войти</button>
                </div>
            </form>
        </div>
    )
}

export default page