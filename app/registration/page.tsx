"use client"
import React, { useEffect } from 'react'
import s from './page.module.scss'
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
    name:string,
    lastName:string,
    tel:string |number,
    exampleRequired: string,
    repeatPassword:string

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
    // useEffect(() => {
    //     if(isAuth === true) {
    //         redirect('/')
    //     }
    // }, [isAuth])
   
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
                    <span>Ваше имя
                        <input placeholder='Ваше имя' type="text" {...register("name")} />
                    </span>
                    <span>Ваша фамилия
                        <input placeholder='Ваша фамилия' type="text" {...register("lastName")} />
                    </span>
                    <span>Номер телефона
                        <input placeholder='+996 (###) 999 999' type="tel" {...register("tel")} />
                    </span>
                    <span>Электронная почта
                        <input placeholder='email' type="email" {...register("email")} />
                    </span>

                    <span>Введите пароль
                        <input placeholder='' type="password" {...register("password")} />
                    </span>
                    <span>Повторите пароль
                        <input placeholder='' type="password" {...register("repeatPassword")} />
                    </span>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button type="submit"  >Создать аккаунт</button>
                </div>
            </form>
        </div>
    )
}

export default page