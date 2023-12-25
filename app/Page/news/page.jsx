"use client"

import { BannerPages } from '@/components/BannerPages/BannerPages'
import React, { useEffect } from 'react'
import s from './page.module.scss'
import { CardsNews } from '@/components/Cards/CardsNews/CardsNews'
import Header from '@/components/Header/page'
import { getNews } from '@/app/getData/getData'
import image from '../../../public/images/carson.png'
import { useDispatch, useSelector } from 'react-redux'
import { getaboutBlog } from '@/app/redux/features/about-blog'
import Loading from '@/components/Loading/Loading'
import Footer from '@/components/Footer/page'

// export const metadata = {
//     title: "Блог",
//     description: '',
//     icons: [
//         {
//             rel: "icon",
//             sizes: "any",
//             url: "/logo1.jpg",
//         },
//     ],
// }

const page =  () => {
    // const data: NewsCard[] = await getNews()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getaboutBlog())
    }, [dispatch])
    const {aboutBlog,status ,error}  = useSelector((state) => state.aboutBlogSlice)
   
    return (
        <>
            <Header />
            <div className={`top ${s.Header}`}>
                <BannerPages
                    idPage={6}
                    name={'Блог'}
                    info={'Все о международном шоппинге'}
                />
                {status === 'loading' && <Loading/>}
                {status === 'failed' && <p style={{height:200}} >{error}</p>}
                {status === 'success' &&<div className={`Contend ${s.block}`}>
                    {aboutBlog?.length === 0 ? <div className={s.noData}>
                        <h1 style={{height:250}}>Новостей нет</h1>   
                    </div> : <CardsNews data={aboutBlog} />
                    }
                </div>  }
                <div>
                        
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page