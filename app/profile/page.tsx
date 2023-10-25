"use client"
import React from 'react'
import s from './page.module.scss'
import { HeaderSvg } from '@/components/svg/Header'
import { AiOutlineMenu } from 'react-icons/ai'
import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'
import { useAppSelector } from '../redux/features/auth-slice'
import { useForm } from 'react-hook-form'
type Inputs = {
    name: string
    tel: string
    eamil: string
    exampleRequired: string
}

const profile = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const user = useAppSelector((state) => state.authReducer.value)
    console.log(user);
    return (
        <div>
            <HeaderProfile />
            <div className='Contend'>
                <div className={s.block1}>
                    <h2>Добро пожаловать,{user.name}</h2>
                    <form className={` ${s.Input}`}
                    // onSubmit={handleSubmit(onSubmit)}
                    >
                        <span>
                            <p>Фамилия и имя</p>
                            <input defaultValue={`${user.name}`} {...register("name")} />
                        </span>
                        <span>
                            <p>Номер телефона</p>
                            <input  defaultValue={user.tel.replace(/^(\d{3})(\d{3})(\d{3})$/, '+996 ($1) $2-$3')}
                                // defaultValue={`${user.tel}`} 
                                {...register("tel")} />
                        </span>
                        <span>
                            <p>Адрес электронной почты</p>
                            <input defaultValue={`${user.eamil}`} {...register("eamil")} />
                        </span>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <button type="submit">Сохранить изменения</button>
                        <button type="submit">Cменить пароль</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default profile