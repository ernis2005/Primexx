/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from 'react'
import s from './page.module.scss'
import { InputMask } from '@react-input/mask';
import { Controller, useForm } from 'react-hook-form';
import Image from "next/legacy/image";
import { useDispatch, useSelector } from 'react-redux'
import { registrationPost, useAppSelector } from '../redux/features/auth-slice';

const page = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        dispatch(registrationPost(data))
    }
    const { status, error } = useAppSelector((state) => state.authReducer)
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const containsLatinCharacters = /[a-zA-Z]/.test(inputValue);
      
        if (containsLatinCharacters) {
            // Блокировка ввода латинских символов
            event.preventDefault();
        }
    };
    return (
        <div className={s.Header} >
            <div className={s.bg}>
                <Image src={'/images/iamgeLogin.png'} layout="fill"
                    objectFit="fill"
                    alt="hwllo" />
            </div>
            <form className={s.contend} onSubmit={handleSubmit(onSubmit)}>
                <h2>Добро пожаловать</h2>

                <div>
                    {error && <p>{error}</p>}
                    <span>Ваше имя (латиницей)
                        <input placeholder='Алексей' type="text" {...register("name")}
                            onKeyPress={(event) => {
                                const regex = /^[A-Za-z]/;
                                if (!regex.test(event.key)) {
                                    event.preventDefault();
                                }
                            }} />
                    </span>
                    <span>Ваша фамилия (латиницей)
                        <input placeholder='Филатов' type="text" {...register("lastName")}
                            onKeyPress={(event) => {
                                const regex = /^[A-Za-z]/;
                                if (!regex.test(event.key)) {
                                    event.preventDefault();
                                }
                            }} />
                    </span>
                    <span>Номер телефона
                        <InputMask
                            placeholder='+7 (ХХХ) ХХХ-ХХ-ХХ'
                            mask="+7 (___) ___-__-__"
                            {...register("tel")}
                            replacement={{ _: /\d/ }}
                        />
                        {/* <input placeholder='+996 (###) 999 999' type="tel" {...register("tel")} /> */}
                    </span>
                   
                    <span>Электронная почта
                        <input placeholder='example@email.com' type="email" {...register("email" )}    onKeyPress={(event) => {
                            const regex = /^[A-Za-z0-9@._-]/;
                            if (!regex.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                        />
                    </span>
                    <span>Адрес
                        <input placeholder='Город, улица, дом, квартира' type="address" {...register("address")}
                            onKeyPress={(event) => {
                                const regex = /^[A-Za-z0-9@._-]/;
                                if (!regex.test(event.key)) {
                                    event.preventDefault();
                                }
                            }} />
                    </span>
                    <span>Введите пароль
                        <input placeholder='************' type="password" {...register("password",{ pattern: /^[A-Za-z0-9@._-]*$/,}) }    onKeyPress={(event) => {
                            const regex = /^[A-Za-z0-9@._-]/;
                            if (!regex.test(event.key)) {
                                event.preventDefault();
                            }
                        }}/>
                    </span>
                    <span>Повторите пароль
                        <input placeholder='************' type="password" {...register("repeatPassword",{ pattern: /^[A-Za-z0-9@._-]*$/,}) }   
                            onKeyPress={(event) => {
                                const regex = /^[A-Za-z0-9@._-]/;
                                if (!regex.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}/>
                    </span>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button type="submit"  >Создать аккаунт</button>
                    <p  className={s.pLogin}>
                    Уже есть аккаунт? <a href="/entrance">Войти</a>
                    </p>
    
                </div>
            </form>

        </div>
    )
}

export default page