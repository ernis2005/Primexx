"use client"
import React, { useEffect, useState } from 'react'
import s from './style.module.scss'
import { CardServicesPage } from '@/components/Cards/CardServicesPage/CardServicesPage'
import { FAQAccordionPage } from '@/components/Accordion/FAQAccordionPage/FAQAccordionPage'
import { getFAQ } from '@/app/getData/getData'
import Cookies from 'js-cookie'
export const kye = Cookies.get('ulild')
export const Page6 =  () => {
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
        <div className={`  ${s.Header}   ` }>
            <div className={s.Info}>
                <h2>
                    Доставка коммерческих грузов <br />
                    из Турции в Россию
                </h2>
                <p>
                    Вы занимаетесь товаркой из Турции, либо вы селлер в маркетплейсах,
                    как ВБ, Озон? <br />
                    Вам нужно надёжно и выгодно перевезти свой груз? Вы попали точно по
                    адресу!
                </p>
                <span>
                    Мы занимаемся доставками самых разных грузов из Турции во все
                    регионы России, <br />
                    путём авиа и авто доставки под ключ, по самым выгодным ценам.
                </span>
            </div>
            <CardServicesPage />
            <div className={s.Info1}>
                <p>МЫ НЕ МОЖЕМ БЫТЬ ПРИЧИНОЙ ЗАДЕРЖКИ ДОСТАВКИ ГРУЗА <br />
                    В СЛУЧАЕ ПОЛИТИЧЕСКИХ, ЭКОНОМИЧЕСКИХ, ПРИРОДНЫХ, КЛИМАТИЧЕСКИХ ИЛИ ТАМОЖЕННЫХ ПОТРЯСЕНИЙ.
                </p>
                <p>НЕ НЕСЁМ ОТВЕТСТВЕННОСТЬ ЗА ЗАДЕРЖКУ
                    ГРУЗОВ В ТАКИХ ОБСТОЯТЕЛЬСТВАХ!</p>
            </div>
            {/* <h4>Этапы работы</h4>
            <ul className={s.ul}>
                <li>Прием груза</li>
                <li>Распределение по регионам</li>
                <li>Выдача груза</li>
                <li>Доставка в склад Москвы</li>
                <li>Подготовка к отправке</li>
                <li>Таможенное оформление</li>
            </ul> */}
            <FAQAccordionPage />
            <div></div>
        </div>
    )
}
