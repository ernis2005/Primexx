
"use client"
import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'
import React, { useEffect } from 'react'
import s from './page.module.scss'
import { Form, useForm,reset } from 'react-hook-form'
import { postDeliveryOrder } from '../getData/getData';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const page = (params ) => {
    const  id = params.searchParams.id
    
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
        
        // Error('Вы успешно отправили запрос')
        toast.success('Успешно отправлено ', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        
    }
    const watchAllFields = watch();


    return (
        <div>
            
            <ToastContainer
                className={s.ToastContainer}
                autoClose={1000}
                limit={1}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
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
                    <input placeholder={'Город, улица, дом, квартира'} {...register(`FullAddress`)} />
                    <input placeholder={'Комментарий'} {...register(`Comment`)} />
                    <button type="submit"   disabled={!watchAllFields.Comment}>Оставить заявку</button>
                </form>
            </div >
        </div >
    )
}

export default page
