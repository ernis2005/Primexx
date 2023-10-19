import { BannerPages } from '@/components/BannerPages/BannerPages'
import React from 'react'
import s from './page.module.scss'
import { FAQAccordionPage } from '@/components/Accordion/FAQAccordionPage/FAQAccordionPage'
const page = () => {
    return (
        <div className={s.header}>
            <BannerPages
                name={'Часто задаваемые вопросы'}
                info={'Найдите ответ на ваш вопрос'}
            />
            <div className={`Contend ${s.block}`}>
                <FAQAccordionPage/>
            </div>
        </div>
    )
}

export default page