"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import s from './page.module.scss'
export const SwiperPageAboutUs = () => {
    return (<div className={s.Block}>
        <Swiper
            slidesPerView={3.5}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                104:{
                    slidesPerView: 1,
                },
                556:{
                    slidesPerView: 1,
                },
                728:{
                    slidesPerView: 1.6,
                },
                876:{
                    slidesPerView: 2,
                },
                1104:{
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
            <SwiperSlide><div className={s.Card}>
                ФОТО
                ОТЗЫВОВ1</div></SwiperSlide>
            <SwiperSlide><div className={s.Card}>
                ФОТО
                ОТЗЫВОВ</div></SwiperSlide>     <SwiperSlide><div className={s.Card}>
                    ФОТО
                    ОТЗЫВОВ2</div></SwiperSlide>     <SwiperSlide><div className={s.Card}>
                        ФОТО
                        ОТЗЫВОВ3</div></SwiperSlide>     <SwiperSlide><div className={s.Card}>
                            ФОТО
                            ОТЗЫВОВ4</div></SwiperSlide>     <SwiperSlide><div className={s.Card}>
                                ФОТО
                                ОТЗЫВОВ5</div></SwiperSlide>     <SwiperSlide><div className={s.Card}>
                                    ФОТО
                                    ОТЗЫВОВ6</div></SwiperSlide>
        </Swiper>
    </div>)
}
