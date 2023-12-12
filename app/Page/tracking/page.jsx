"use client"
import React, { use, useEffect, useState } from 'react'
import s from './page.module.scss'
import { BannerPages } from '@/components/BannerPages/BannerPages'

import { useForm } from "react-hook-form"
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';
import ItemsStory from '@/components/ServicesPages/ItemsStory/ItemsStory';
import { useDispatch, useSelector } from 'react-redux'
import { Box, Modal } from '@mui/material'
import { getBaseparceId, getData } from '@/app/redux/features/baseparceId-get'
import { ItemsStorytR } from '@/components/ItemsStorytR/page'

const page = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const [dataGet, setDataGet] = useState([])
    const dispatch = useDispatch()
    
    const onSubmit = (data) => {
        dispatch(getBaseparceId(data.example))
        // eslint-disable-next-line no-redeclare
        
    };
    const data = useSelector(state => state.baseparceIReducer)
    
    
    return (
        <>
            <Header />
            <div className={`top ${s.Header}`}>
                <BannerPages
                    idPage={9}
                    name={'Отследить товар'}
                    info={'Отследить товар легко и просто!'}
                />

                <form className={`Contend ${s.Input}`}
                    onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Введите трек номер" {...register("example")} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button type="submit">Отследить</button>
                </form>
                
                {data.status === 'loading' && <div className='Contend'>Загрузка</div>}
                {data.status === 'failed' && <div className='Contend'>{data.error.message} </div>}
                {data.status === 'success' && <div className={s.blockasdsdas}  ><ItemsStorytR data={data.baseparceId.data}/></div>}
                <div style={{height:250}}>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default page


