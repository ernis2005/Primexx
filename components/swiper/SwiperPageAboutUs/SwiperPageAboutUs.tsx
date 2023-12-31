"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import s from './page.module.scss'
import Image from 'next/legacy/image';
interface Person {

    id: number,
    image: string

}
interface Types {
    data: Person[]
}
export const SwiperPageAboutUs = (data: Types) => {
    return (<div className={s.Block}>
        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                100:{
                    slidesPerView: 2.5,
                    spaceBetween:15,
                },
                496:{
                    slidesPerView: 2.5,
                },
                579:{
                    slidesPerView: 3.4,
                },
                717:{
                    slidesPerView: 3.3,
                },
                855: {
                    slidesPerView: 4.1,
                },
                960:{
                    spaceBetween:30,
                },
                1200: {
                    slidesPerView: 5.5,
                    
                },
                1300:{
                    slidesPerView: 5.99 ,
                }
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {data.data.map((res) => (
                <SwiperSlide className={s.Card} key={res.id}>
                    <Image src={res.image} objectFit='cover' layout='fill' />
                </SwiperSlide>
            ))}
            <SwiperSlide></SwiperSlide>
            
        </Swiper>
    
    </div>)
}
