import { BannerPages } from '@/components/BannerPages/BannerPages'
import React from 'react'
import s from './page.module.scss'
import { CardsNews } from '@/components/Cards/CardsNews/CardsNews'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
const page = () => {
    return (
        <>
            <Header />
            <div  className={`top ${s.Header}`}>
                <BannerPages
                    name={'Новости'}
                    info={'Узнайте что у нас нового'}
                />
                <div className={`Contend ${s.block}`}>
                    <CardsNews/>
                </div>
            </div>
            <Footer />
        </>
    
    )
}

export default page