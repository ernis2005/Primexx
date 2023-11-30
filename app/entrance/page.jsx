/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from 'react'
import s from './style.module.scss'

import { useForm } from 'react-hook-form';
import Image from "next/legacy/image";
import { useDispatch } from 'react-redux'

import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux'
import Link from 'next/link';
import { postLogin } from '../redux/features/auth-slice';
const page = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        dispatch(postLogin(data))
    }
    const isAuth = useSelector((state) => state.authReducer.value.isAuth)

    const { status, error } = useSelector((state) => state.authReducer)
    useEffect(() => {
        if (isAuth === true) {
            redirect('/')
        }
    }, [isAuth])

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
                    {error && <p>Не правильно ввели пароль или логин</p>}
                    <span>Электронная почта
                        <input placeholder='email' type="email" {...register("email")} />
                    </span>
                    <span>Пароль
                        <input placeholder='password' type="password" {...register("password")} />

                    </span>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button type="submit">Войти</button>
                 
                    <p className={s.link}>Нет аккаунта? <Link href={'/registration'}>
                            Создать аккаунт
                    </Link></p>
                    
                </div>
            </form>
        </div>
    )
}

export default page