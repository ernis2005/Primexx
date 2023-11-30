"use client"
import React, { useState } from 'react'
import s from './page.module.scss'
import { BannerPages } from '@/components/BannerPages/BannerPages'

import { useForm } from "react-hook-form"
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';
import ItemsStory from '@/components/ServicesPages/ItemsStory/ItemsStory';
import { getBaseparcelsId } from '@/app/getData/getData';
import { useDispatch, useSelector } from 'react-redux'
const page = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    // const  [data ,setData] = useState()
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(getBaseparcelsId(data.example))
    };

    const data = useSelector(state => state.baseparceIReducer)
    console.log(data, 'data');
    return (
        <>
            <Header />
            <div className={`top ${s.Header}`}>
                <BannerPages
                    name={'Отследите товар'}
                    info={'Отследить товар легко и просто!'}
                />

                <form className={`Contend ${s.Input}`}
                    onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Введите трек номер" {...register("example")} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button type="submit">Отследить</button>
                </form>
                {data.status === 'loading' && <div>Загрузка</div>}
                {data.status === 'failed' && <div>{data.error}</div>}
                {
                    data.status === 'success' && 
                    <div className={`Contend ${s.contends}`}>
                        <ItemsStory data={data.baseparceId} />
                    </div>
                }  
           
             
            </div>
            <Footer />
        </>

    )
}

export default page

