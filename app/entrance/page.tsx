"use client"
import React, { useEffect } from 'react'
import s from './style.module.scss'
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import Image from "next/legacy/image";
import {useDispatch} from 'react-redux'
import { Login, useAppSelector } from '../redux/features/auth-slice';
import { redirect } from 'next/navigation';
import {useSelector} from 'react-redux'

type Inputs = {
    email: string,
    password:string,
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
        dispatch(Login(data))
    }
    const   isAuth = useAppSelector((state)=> state.authReducer.value.isAuth)
   
    
    useEffect(() => {
        if(isAuth === true) {
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
                    <span>Электронная почта
                        <input placeholder='email' type="email" {...register("email")} />
                    </span>
                    <span>Пароль
                        <input placeholder='password' type="password" {...register("password")} />
                    </span>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button type="submit"  >Войти</button>
                </div>
            </form>
        </div>
    )
}

export default page