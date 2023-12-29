"use client"
import React, { useEffect, useState } from 'react'
import s from './style.module.scss'
import { Svg10 } from '@/components/svg/Header'
import { FromInput } from '@/components/FromInput/FromInput'
import { FAQAccordionPage } from '@/components/Accordion/FAQAccordionPage/FAQAccordionPage'
import { getFAQ } from '@/app/getData/getData'
import Image from 'next/legacy/image'
import FromInputPage3 from './FromInputPage3/FromInputPage3'
import { useForm } from 'react-hook-form'
import {FAQAccordionId} from '../../Accordion/FAQAccordionId/FAQAccordionId'
const Svg =() => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="30" fill="#F5F5F5"/>
        <circle cx="30" cy="30" r="11" stroke="#009345" strokeWidth="6"/>
    </svg>

)

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
            <div  className={s.blocks}>
                <span className={s.Info}>
                    <h2>Выкуп товара</h2>
                    <p>Оперативный байер выкупит за вас</p>
                </span>
                <div className={s.block1}>
                    <div className={s.block1Svgs}>
                        <Svg />
                        <Svg />
                        <Svg />
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
            </div>
            <div  className={s.blocks}>
                <h2>Оформление выкупа</h2>
                <div className={s.Block2}>
                    <div className={s.Block2Div}>
                        <FromInputPage3 colors={"#009345"} textcolor={"#fff"} />
                    </div>
                    <p>После заполнения заявки, байер сам с вами свяжется с вами <br />
                    в течении 2-х часов в рабочее время.</p>
                </div>
            </div>
            
            <div className={s.block3}>
                
                <h2>Часто задаваемые вопросы</h2> 
                <FAQAccordionId id={2}  />
            </div>
            <div></div>
        </div>
    )
}
