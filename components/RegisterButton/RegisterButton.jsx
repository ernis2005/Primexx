"use client";
import React from 'react'
import s from './page.module.scss'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function RegisterButton() {
    const router = useRouter();

    const redirect = ()=> {
        router.push('/registration');
    }
    const isAuth = useSelector((state) => state.authReducer.value.isAuth)

    return (
        <div>
            {isAuth ? null : <button className={s.button} onClick={()=>redirect()}>Зарегистрироваться</button>}
        </div>
    )
}

//{data.value.isAuth ? <button className={s.button}>Личный кабинет</button> : null}
        