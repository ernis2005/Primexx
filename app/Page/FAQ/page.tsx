import { BannerPages } from '@/components/BannerPages/BannerPages'
import React from 'react'
import s from './page.module.scss'

import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import { FAQAccordionPage } from '@/components/Accordion/FAQAccordionPage/FAQAccordionPage'
import { getFAQ } from '@/app/getData/getData'
export const metadata = {
    title: "ПОЧЕМУ КАРТА ДЛЯ ОПЛАТЫ НЕ ПРОХОДИТ ПРИ ВЫКУПЕ С САЙТА?",
    description: 'Часто задаваемые вопросы о заказе и доставке зарубежных сайтов',
    icons: [
        {
            rel: "icon",
            sizes: "any",
            url: "/logo1.jpg",
        },
    ],
    openGraph: {
        images: [
            `/logo1.jpg`,
        ],
    },
}

const page = async () => {
    return (
        <>
            <Header />
            <div  className={` top ${s.header}`}>
                <BannerPages
                    idPage={4}
                    name={'Часто задаваемые вопросы'}
                    info={'Найдите ответ на ваш вопрос'}
                />
                <div className={`Contend ${s.block}`}>
                    <FAQAccordionPage  />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default page 