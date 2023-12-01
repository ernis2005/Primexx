
"use client"
import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'
import React from 'react'
import s from './page.module.scss'
import { Form, useForm,reset } from 'react-hook-form'
import { postDeliveryOrder } from '../getData/getData';

const page = (params ) => {
    const  id = params.searchParams.id
    console.log(id,'id');
    const {
        register,
        handleSubmit,
        watch,
        
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit= (data) => {
        postDeliveryOrder(data,id)
        reset();
    }
    const watchAllFields = watch();

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
                    <button type="submit"   disabled={!watchAllFields.Comment}>Оставить заявку</button>
                </form>
            </div >
        </div >
    )
}

export default page
