
"use client"
import React, { useEffect, useState } from 'react'
import s from './page.module.scss'
import { FAQAccordionPage } from '@/components/Accordion/FAQAccordionPage/FAQAccordionPage'

import { SwiperServicesPages4 } from '@/components/swiper/SwiperServicesPages4/SwiperServicesPages4'
import { getFAQ } from '@/app/getData/getData'
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
            <FAQAccordionPage data={data} />

        </div>
    )
}
