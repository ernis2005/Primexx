
"use client"
import React, { useEffect, useState } from 'react'
import s from './page.module.scss'
import { FAQAccordionPage } from '@/components/Accordion/FAQAccordionPage/FAQAccordionPage'

import { SwiperServicesPages4 } from '@/components/swiper/SwiperServicesPages4/SwiperServicesPages4'
import { getFAQ } from '@/app/getData/getData'
import { useForm } from 'react-hook-form'
import Image from 'next/legacy/image'
export const Page4 = () => {
    const [isloding, useIsLoding] = useState(false)
    const [data, useData] = useState()
    async function getData() {
        getFAQ().then((res) => {
            useData(res)
        })
        setInterval(() => {
            useIsLoding(true)
        }, 100)
    }
  

    useEffect(() => {
        getData()
    }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return isloding && (
        <div className={s.header}>
            <span>
                <h2>
                    Консолидация
                </h2>
                <p>Компания ‘’Primex’’, готова предложить для карго компаний B2B решение.</p>
                <p> Вы занимаетесь доставкой зарубежных посылок и вам нужен склад в Турции и США с опытными сотрудниками для приема посылок ваших клиентов? У нас есть решение!</p>
            </span>
            <SwiperServicesPages4/>
            <div className={s.block1}>
                <Image src={'/images/aq4.jpg'} layout='fill' objectFit='cover'/>
                <h2>Получить консультацию</h2>
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <input placeholder='Фамилия и имя' {...register("name", { required: true })} />
                    <input placeholder='Номер телефона' {...register("phone", { required: true })} />
                    
                    <button>Отправить</button>
                </form>
                <p>После заполнения заявки, байер сам с вами свяжется с вами <br />
                в течении 2-х часов в рабочее время.</p>
            </div>
            {/* <div >
                <FAQAccordionPage data={data} />
            </div> */}
            
        </div>
    )
}
