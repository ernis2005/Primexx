"use client"

import React, { useEffect } from 'react'
import s from './page.module.scss'
import Header from '@/components/Header/page'

import { BannerPages } from '@/components/BannerPages/BannerPages'
import { SwiperPageAboutUs } from '@/components/swiper/SwiperPageAboutUs/SwiperPageAboutUs'
import RegisterButton from '@/components/RegisterButton/RegisterButton'
import { useDispatch, useSelector } from 'react-redux'
import { getabout } from '@/app/redux/features/about-us'
import Loading from '@/components/Loading/Loading'
import Footer from '@/components/Footer/page'
// export const metadata = {
//     title: "О Нас",
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
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getabout())
    }, [dispatch])
    const {aboutUs,status ,error} = useSelector((state) => state.aboutUsSlice)
   
    return (
        <div >
            <Header />
            <div className={`top ${s.Header}`}>
                <BannerPages
                    idPage={5}
                    name={'О нас'}
                    info={'Узнайте о нас'}
                />
                {status === 'loading' && <Loading/>}
                {status === 'failed' && <p style={{height:200}} >{error}</p>}
                {status === 'success' &&     <div className={`Contend ${s.contend}`}>
                    <button className={s.button}>Добро пожаловать в Primex: <br /> ваш надежный партнер для экспресс-доставки <br />
                из Турции и Америки в Россию!</button>
                    <p>Мы — логистическая компания Primex, и нашей гордостью является обеспечение оперативной и надежной доставки товаров из Турции и Америки в Россию.</p>
                    <p>Мы понимаем, как важно для вас получить свои товары в кратчайшие сроки, и именно поэтому мы сделали эту задачу своей основной миссией создавая условия для наших клиентов возможность совершать самостоятельные покупки, также с помощью байера</p>
                    <SwiperPageAboutUs data={aboutUs.data} />
                    <p>Сотрудничая с Primex, вы получаете надежного партнера, который постарается превысить ваши ожидания. Мы гордимся тем, что наши клиенты могут полностью доверять нам в вопросах доставки и обработки товаров.</p> 
                    <p>Сделайте первый шаг к быстрой и надежной доставке из Турции и Америки в Россию с нами!</p>
                    <RegisterButton/>
                </div>}
            
                <div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default page
