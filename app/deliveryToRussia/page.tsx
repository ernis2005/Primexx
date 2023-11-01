
"use client"
import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'
import React from 'react'
import s from './page.module.scss'
import type { SubmitHandler} from 'react-hook-form';
import { Form, useForm } from 'react-hook-form'
interface fromType {
    Fullname:string;
    PhoneNumber:string;
    ClientCode:string;
    FullAddress:string;
    Comment:string;
}
const page = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<fromType>()
    const onSubmit: SubmitHandler<fromType> = (data) => {

        console.log(data);

    }
    return (
        <div>
            <HeaderProfile />
            <div className={`Contend ${s.header}`}>
                <span>
                    <h2>Оформить доставку по РФ</h2>
                    <p>Данная форма предназначена для оформления заявки <br />
                        на доставку из склада по Российской Федерации</p>
                </span>
                <form className={s.from} onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder={'ФИО'} {...register(`Fullname`)} />
                    <input placeholder={'Номер телефона'} {...register(`PhoneNumber`)} />
                    <input placeholder={'Клиентский код'} {...register(`ClientCode`)} />
                    <input placeholder={'Полный адрес'} {...register(`FullAddress`)} />
                    <input placeholder={'Комментарий'} {...register(`Comment`)} />
                    <button type="submit" >Оставить заявку</button>
                </form>
            </div >
        </div >
    )
}

export default page
