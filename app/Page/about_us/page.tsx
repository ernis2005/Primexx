import React from 'react'
import s from './page.module.scss'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import { BannerPages } from '@/components/BannerPages/BannerPages'
import { SwiperPageAboutUs } from '@/components/swiper/SwiperPageAboutUs/SwiperPageAboutUs'
const page = () => {
    return (
        <div>
            <Header />
            <div className={`top ${s.Header}`}>
                <BannerPages
                    name={'О Нас'}
                    info={'Узнайте о нас'}
                />
                <div className={`Contend ${s.contend}`}>
                    <h3>Добро пожаловать в Primex: ваш надежный партнер для экспресс-доставки <br />
                        из Турции и Амер</h3>
                    <p>Мы — логистическая компания Primex, и нашей гордостью является обеспечение оперативной и надежной доставки товаров из Турции и Америки в Россию. </p>
                    <p>Мы понимаем, как важно для вас получить свои товары в кратчайшие сроки, и именно поэтому мы сделали эту задачу своей основной миссией создавая условия для наших клиентов возможность совершать самостоятельные покупки, также с помощью байера</p>
                    <p></p>
                    <SwiperPageAboutUs/>
                    <p>Сотрудничая с Primex, вы получаете надежного партнера, который постарается превысить ваши ожидания. Мы гордимся тем, что наши клиенты могут полностью доверять нам в вопросах доставки и обработки товаров.</p>
                    <p>Сделайте первый шаг к быстрой и надежной доставке из Турции и Америки в Россию с нами!</p>
                    <p> </p>
                </div>
                <div></div>
                <div></div>
            </div>

            <Footer />
        </div>
    )
}

export default page
