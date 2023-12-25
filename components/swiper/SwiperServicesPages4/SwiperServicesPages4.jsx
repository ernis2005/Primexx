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
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                100:{
                    slidesPerView: 1.4,
                    spaceBetween:10
                },
                393:{
                    slidesPerView: 1.4,
                },
                524:{
                    slidesPerView: 1.8,
                    spaceBetween:30
                },
                
                692:{
                    slidesPerView: 3.2,
                },
                982:{
                    slidesPerView: 3.2,
            
            
                },
                1190: {
                    slidesPerView: 3.6,
                },
                1200: {
                    slidesPerView: 4,
                
                },
            }}
            className={s.swiperCard}
        >
            {consolidation?.map((res,i) => (
                <SwiperSlide className={s.Card} key={i}>
                    
                    <Image  src={res.image} objectFit='cover' layout='fill' alt="Picture of the author" />
                    <span>
                        <h2>{res.title}</h2>
                        <p className={s.swiperp}>{res.description }</p>
                    </span>
                    
                </SwiperSlide>
            ))}
        
        </Swiper>
    </div>)
}
