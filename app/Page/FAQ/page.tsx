import { BannerPages } from '@/components/BannerPages/BannerPages'
import React from 'react'
import s from './page.module.scss'

import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import { FAQAccordionPage } from '@/components/Accordion/FAQAccordionPage/FAQAccordionPage'
import { getFAQ } from '@/app/getData/getData'

const page = async () => {
    const data = await getFAQ()

 
    return (
        <>
            <Header />
            <div style={{ marginTop: '124px' }} className={s.header}>
                <BannerPages
                    name={'Часто задаваемые вопросы'}
                    info={'Найдите ответ на ваш вопрос'}
                />
                <div className={`Contend ${s.block}`}>
                    <FAQAccordionPage data={data} />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default page 