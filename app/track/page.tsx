
"use client"
import React from 'react'
import s from './page.module.scss'
import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'
import { useForm } from 'react-hook-form'
type Inputs = {
    name: string
    tel: string
    eamil: string
    exampleRequired: string
}
const page = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    return (
        <div>
            <HeaderProfile />

            <div className={`Contend ${s.block}`}>
                <h2>Отследить товар</h2>
                <form className={` ${s.Input}`}
                // onSubmit={handleSubmit(onSubmit)}
                >
                    <input placeholder={`Введите трек номер:`} type='number' {...register("name")} />
                    <button type="submit">Отследить</button>
                </form>
            </div>
        </div>
    )
}

export default page