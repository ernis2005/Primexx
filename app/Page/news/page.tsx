import { BannerPages } from '@/components/BannerPages/BannerPages'
import React from 'react'
import s from './page.module.scss'
import { CardsNews } from '@/components/Cards/CardsNews/CardsNews'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import { getNews } from '@/app/getData/getData'
import type { NewsCard, NewsCardList } from './type'
import image from '../../../public/images/carson.png'

export const metadata = {
    title: "Новости",
    description: '',
    icons: [
        {
            rel: "icon",
            sizes: "any",
            url: "/logo1.jpg",
        },
    ],
}

const page = async () => {
    const data: NewsCard[] = await getNews()


    return (
        <>
            <Header />
            <div className={`top ${s.Header}`}>
                <BannerPages
                    idPage={6}
                    name={'Новости'}
                    info={'Узнайте что у нас нового'}
                />
                <div className={`Contend ${s.block}`}>
                    {data.length === 0 ? <div className={s.noData}>
                      
                        <h1 style={{height:250}}>Новостей нет</h1>   
                    </div> : <CardsNews data={data} />
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page