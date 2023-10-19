import { BannerPages } from '@/components/BannerPages/BannerPages'
import React from 'react'
import s from './page.module.scss'
import { CardsNews } from '@/components/Cards/CardsNews/CardsNews'
const page = () => {
    return (
        <div className={s.Header}>
            <BannerPages
                name={'Новости'}
                info={'Узнайте что у нас нового'}
            />
            <div className={`Contend ${s.block}`}>
                <CardsNews/>
            </div>
        </div>
    )
}

export default page