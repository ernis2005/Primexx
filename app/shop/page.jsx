"use client"
import { BannerPages } from '@/components/BannerPages/BannerPages'
import Footer from '@/components/Footer/page'
import Header from '@/components/Header/page'
import React, { useEffect, useState } from 'react'
import s from './page.module.scss'

import { CardShop } from '@/components/Cards/CardShop/CardShop'
import { useDispatch, useSelector } from 'react-redux'
import { getShop } from '../redux/features/shop-get'
import Loading from '@/components/Loading/Loading'
import Image from 'next/legacy/image'
const page = (params) => {
    console.log(params, 'params');
    const [category, setCategory] = useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getShop({ category__id: category, country__id: params.searchParams.id }))
    }, [dispatch, category])
    const data = useSelector((state) => state.shopReducer)
    const infoPage = {
        title: 'Магазины Америки',
        subTitle: 'Подзаголовок'

    }
    return (
        <div>
            <Header />
            <div className={`top`}>
                
                <div className={s.Header1}>
                
                    <Image src={params.searchParams.img} alt="" layout='fill' objectFit='cover' />
                
                    <div className={`Contend ${s.block}`}>
                        <h2>Магазины {params.searchParams.name}</h2>
                        <p>Подзаголовок</p>
                    </div>
                </div>
                <div className={`Contend ${s.Header}`}>
                    <ul>
                        <li
                            onClick={() => setCategory(1)}
                        >Маркетплейсы</li>
                        <li
                            onClick={() => setCategory(2)}
                        >Универмаги</li>
                        <li onClick={() => setCategory(3)}>Одежда</li>
                        <li onClick={() => setCategory(4)}>Обувь</li>
                        <li onClick={() => setCategory(5)}>БАДы и витамины</li>
                    </ul>
                    {
                        data.status === 'success' && <div>
                            {data.shop.length === 0 && <div style={{ margin: '0 auto', height: '250px' }}>Нет данных</div>}
                            <CardShop data={data.shop} />
                        </div>}
                    {
                        data.status === 'loading' && <Loading />
                    }
                    {
                        data.status === 'failed' && <div>{data.error}</div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default page


