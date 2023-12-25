
"use client"
import React, { useEffect, useState } from 'react'
import s from './page.module.scss'
import { FAQAccordionPage } from '@/components/Accordion/FAQAccordionPage/FAQAccordionPage'

import { SwiperServicesPages4 } from '@/components/swiper/SwiperServicesPages4/SwiperServicesPages4'
import { getFAQ } from '@/app/getData/getData'
import { useForm } from 'react-hook-form'
import Image from 'next/legacy/image'
import { useDispatch } from 'react-redux'
import { postConsolidation } from '@/app/redux/features/getData'
import { InputMask } from '@react-input/mask'
export const Page4 = () => {
  

    const { register,  reset, handleSubmit, watch, formState: { errors } } = useForm(
    );
    const dispatch = useDispatch()
    const onSubmit = (data) =>  {
        dispatch(postConsolidation(data))
        reset();
    }
     
    return (
        <div className={s.header}>
            <span className={s.span}>
                <h2>
                    Консолидация
                </h2>
                <p className={s.p2}>Компания ‘’Primex’’, готова предложить для карго компаний B2B решение.</p>
                <p className={s.p2}> Вы занимаетесь доставкой зарубежных посылок и вам нужен склад в Турции и США с опытными <br/> сотрудниками для приема посылок ваших клиентов? У нас есть решение!</p>
            </span>
            <div className={s.block12}>
                <h2 >Мы можем предложить</h2>
                <SwiperServicesPages4/>
                <button className={s.button}>Получить консультацию</button>
            </div>
      
            <div className={s.block222}>
                <h2 className={s.h22}>Часто задаваемые вопросы</h2>
                <FAQAccordionPage/>
            </div>
            
            
        </div>
    )
}
