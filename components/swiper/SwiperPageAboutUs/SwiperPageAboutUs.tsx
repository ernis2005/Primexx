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
    
        id:number,
        image:string
    
}
interface Types {
   data: Person[]
}
export const SwiperPageAboutUs = (data:Types) => {
    return (<div className={s.Block}>
        <Swiper
            slidesPerView={3.5}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                104: {
                    slidesPerView: 1,
                },
                556: {
                    slidesPerView: 1,
                },
                728: {
                    slidesPerView: 1.6,
                },
                876: {
                    slidesPerView: 2,
                },
                1104: {
                    slidesPerView: 2.4,
                },
                1254: {
                    slidesPerView: 2.5,
                },
                1264: {
                    slidesPerView: 3.5,
                },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {data.data.map((res) => (
                <SwiperSlide key={res.id}><div className={s.Card}>
                    <Image src={res.image} layout='fill' />
                </div></SwiperSlide>
            ))}
        </Swiper>
    </div>)
}
