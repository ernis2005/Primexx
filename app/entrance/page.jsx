/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from 'react'
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

const page = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [email, setEmail] = React.useState()
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
        if (status === 'failed') {
            setInterval(() => { 
                document.getElementById('error').style.display = 'none'
            },1500);
        }
    }, [status])
    useEffect(() => {
        if (isAuth === true) {
            redirect('/')
        }
    }, [isAuth])
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        p: 4,
    }
    const router = useRouter()
    const postEmail = () => {
        
        codeSend(email)
        router.push('/restorePassword');
        // redirect('/restorePassword')
        
    }
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
                    {error && <p id='error'>Не правильно ввели пароль или логин</p>}
                    <span>Электронная почта
                        <input style={{marginTop:8}} placeholder='example@email.com' type="email" {...register("email")} />
                    </span>
                    <span>Пароль
                        <p onClick={() => handleOpen()}>
                            забыли пароль?
                        </p>
                        <input style={{marginTop:8}} placeholder='************' type="password" {...register("password")} />

                    </span>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button type="submit">Войти</button>

                    <p className={s.link}>Нет аккаунта? <Link href={'/registration'}>
                        Создать аккаунт
                    </Link></p>

                </div>
            </form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={s.module}>
                        <span>Электронная почта
                            <input onChange={(e) => setEmail(e.target.value)} placeholder='email' type="email" />
                        </span>
                        <button onClick={() => postEmail()} >Отправить</button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default page