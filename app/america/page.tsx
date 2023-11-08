// "use client"
import { BannerPages } from '@/components/BannerPages/BannerPages'
import Footer from '@/components/Footer/page'
import Header from '@/components/Header/page'
import React, { useEffect, useState } from 'react'
import s from './page.module.scss'
import { CardShop } from '@/components/Cards/CardShop/CardShop'
import { getShop } from '../getData/getData'
import { revalidatePath } from 'next/cache'
interface Peson {
    id: number,
    title: string,
    description: string,
    image: string,
    country: string,
    country_name: string,
    category: string,
    category_name: string
}
interface Type {
    data: Peson[]
}
const page = async () => {
    // const [data, setData] = useState<Type[]>()
    const dataId = { category__id: 1, country__id: 2 }
    // const onClick = (id: number) => {
    //     dataId.category__id = id
    //     // revalidatePath(`/america`)
    // }
    // useEffect(() => {
    //     console.log(data);
    // })
    // console.log(data);
    const data:Type[] = await getShop(dataId)
    console.log(data);
    return (
        <div>
            <Header />
            <div className={`top`}>
                <BannerPages
                    name={'Магазины Америки'}
                    info={'Подзаголовок'}
                />
                <div className={`Contend ${s.Header}`}>
                    <ul>
                        <li
                            // onClick={() => onClick(1)}
                        >Маркетплейсы</li>
                        <li >Универмаги</li>
                        <li>Одежда</li>
                        <li>Обувь</li>
                        <li>БАДы и витамины</li>
                    </ul>
                    {/* <p>{data.data.category_name}</p> */}
                    {/* <CardShop data={data} /> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
