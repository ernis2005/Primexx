
"use client"
import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'
import React, { useEffect } from 'react'
import s from './page.module.scss'
import { Form, useForm,reset } from 'react-hook-form'
import { postDeliveryOrder } from '../getData/getData';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux'
const page = (params ) => {
    const  id =  JSON.parse(params.searchParams.id);
 
    // console.log(typeof(id));
    console.log(id);
    const typeOF = typeof(id)
    const {
        register,
        handleSubmit,
        watch,
        
        reset,
        formState: { errors },
    } = useForm()
    const user = useSelector((state) => state.authReducer.value)
   
    const onSubmit= (data) => {
        const cod = user.code_logistic
        postDeliveryOrder(data,id,cod)

    
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
                    <spna className={s.tracCod}>Трек Код :  {typeOF == 'object' && id.map((res)=> <p>{res}</p>)} {typeOF == 'string' && id} </spna>
                    <input placeholder={'ФИО'} {...register(`Fullname`)} />
                    <input placeholder={'Номер телефона'} {...register(`PhoneNumber`)} />
                    <input placeholder={'Клиентский код'}   defaultValue={user.code_logistic} />
                    <input placeholder={'Город, улица, дом, квартира'} {...register(`FullAddress`)} />
                    <input placeholder={'Комментарий'} {...register(`Comment`)} />
                    <button type="submit"   disabled={!watchAllFields.Comment}>Оставить заявку</button>
                </form>
            </div >
        </div >
    )
}

export default page
