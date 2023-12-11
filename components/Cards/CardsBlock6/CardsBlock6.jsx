"use client"


import s from './page.module.scss'
import Image from "next/legacy/image"
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

const data = [
    {
        id: 1,
        name: "Турция",
        image: '/images/магазин1.jpg',
        linck: "/turkey"
    },
    {
        id: 2,
        name: "Америка",
        image: '/images/магазин2.jpg',
        linck: "/america"
    },
    {
        id: 3,
        name: 'Китай',
        image: '/images/магазин3.jpg',
        linck: "/china"
    }
]

export const CardsBlock6 = (ProductCountry) => {
    return (
        <div className={s.Cards}>
           

            {ProductCountry.data?.length >= 0 && 
                ProductCountry.data?.map((res ,index) => (
                    <Link
                        href={{
                            pathname: '/shop',
                            query: { id: JSON.stringify(res.id) , name: res.name,img:res.image},
                        }}
                        key={index}
                        className={s.Card}>
                        <Image className={s.image} alt='/' layout='fill' objectFit='cover' src={res.image} />
                        <p>{res.name}</p>
                    </Link>
                ))}
                
        </div>
    )
}
