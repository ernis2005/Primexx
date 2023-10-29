import { BannerPages } from '@/components/BannerPages/BannerPages'
import Footer from '@/components/Footer/page'
import Header from '@/components/Header/page'
import React from 'react'
import s from './page.module.scss'
import { CardShop } from '@/components/Cards/CardShop/CardShop'

const page = () => {
    return (
        <div>
            <Header />
            <div className={`top`}>
                <BannerPages
                    name={'Магазины Америки'}
                    info={' Подзаголовок'}
                />
                <div className={`Contend ${s.Header}`}>
                    <ul>
                        <li>Маркетплейсы</li>
                        <li>Универмаги</li>
                        <li>Одежда</li>
                        <li>Обувь</li>
                        <li>БАДы и витамины</li>
                    </ul>
                    <CardShop/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
