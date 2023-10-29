"use client"
import React, { useState } from 'react'
import s from './page.module.scss'
import Image from 'next/image'
import { HeaderSvg } from '@/components/svg/Header'
import cm from 'classnames'
import Link from 'next/link'
export const CardsNews = () => {
    const [noOFElement, setNoOFElement] = useState(6);
    const data = [1,2,3,4,5,67,8,9,0  ]
    const slice =  data.slice(0, noOFElement);
    const data4length =  data.length;
    const  LoadMore = () => {
        setNoOFElement(noOFElement + 6);
    };

    return (
        <div className={s.Header}>
            <div className={s.Cards}>
                {slice.map((res,i)=> (
                    <div key={i} className={s.Card}>
                        <Link href={'/page/news/1'} >
                            <Image  src={'/images/Card2.jpg'} layout="fill"
                                objectFit="cover"
                                alt="hwllo"/>
                            <div className={s.info}>
                                <HeaderSvg/>
                                <div  className={s.block} >
                                    <p>
      New Balence 
                                    </p>
                                    <span>
             Секреты выгодно шоппинг
                                    </span>
                                </div>
                            </div>
                        </Link>
                      
                    </div>
                ))}
        
            </div>
            <button  onClick={()=>LoadMore()} className={cm(s.button)}>
            Смотреть еще
            </button>
        </div>
     
    )
}
