import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import s from './page.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getConsolidation } from '@/app/redux/features/getData';
import Image from 'next/legacy/image';

export const SwiperServicesPages4 =  () => {
    const data = [1, 2, 3, 4, 5, 6, 78, 9, 0,]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getConsolidation())
    },[])
    const {staus,error,consolidation}  = useSelector(state => state.consolidationReducer) 
    
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
            {consolidation?.map((res,i) => (
                <SwiperSlide key={i}>
                    <div className={s.Card}>
                        <Image  src={res.image} objectFit='cover' layout='fill' alt="Picture of the author" />
                        <span>
                            <h2>{res.title}</h2>
                            <p>{res.description }</p>
                        </span>
                    </div>
                </SwiperSlide>
            ))}


        </Swiper>
    </div>)
}
