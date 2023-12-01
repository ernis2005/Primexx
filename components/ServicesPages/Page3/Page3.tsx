"use client"
import React, { useEffect, useState } from 'react'
import s from './style.module.scss'
import { Svg10 } from '@/components/svg/Header'
import { FromInput } from '@/components/FromInput/FromInput'
import { FAQAccordionPage } from '@/components/Accordion/FAQAccordionPage/FAQAccordionPage'
import { getFAQ } from '@/app/getData/getData'

export const Page3 = () => {
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
        <div className={` ${s.Header}`}>
            <span>
                <h2>Выкуп товара</h2>
                <p>Оперативный байер выкупит за вас</p>
            </span>
            <div className={s.block1}>
                <div className={s.block1Svgs}>
                    <Svg10 />
                    <Svg10 />
                    <Svg10 />
                    <div>
                    </div>
                </div>
                <div className={s.block1info}>
                    <p>Оставьте нам ссылку <br />
                        на нужный товар</p>
                    <p>Оплатите заказ <br />
                        российской картой</p>
                    <p>Получите посылку <br />
                        не выходя из дома</p>
                </div>
            </div>
            <h2>Оформление выкупа</h2>
            <div className={s.Block2}>
                <div>
                    <FromInput colors={"#333"} />
                </div>
                <p>После заполнения заявки, байер сам с вами свяжется с вами <br />
                    в течении 2-х часов в рабочее время.</p>
            </div>
            <h2>Часто задаваемые вопросы</h2>
            <div className={s.block3}>
                <FAQAccordionPage data={data} />
            </div>
            <div></div>
        </div>
    )
}
