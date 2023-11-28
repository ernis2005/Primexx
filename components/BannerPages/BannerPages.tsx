import React from 'react'
import s from './page.module.scss'
import Image from 'next/legacy/image'

import img2 from '../../public/images/faq.png'


interface Person {
    name:string,
    info:string,
    idPage:string | number,
}

export const BannerPages = ({name,info,idPage}:Person) => {
    const images = [
        { img: "/images/bg.png", id: 1 },
        { img: "/images/carson.png", id: 2 },
        { img: "/images/тарифы.png", id: 3 },
        { img: "/images/faq.png", id: 4 },
        { img: "/images/о нас.png", id: 5 },
        { img: "/images/news.png", id: 6 },
    ]
    return (
        <div className={s.Header}>
             {images.filter((res, index) => res.id === idPage).map((res, index) => (<Image src={res.img} alt="" layout='fill' objectFit='cover' /> ))}
            <div className={`Contend ${s.block}`}>
                <h2>{name}</h2>
                <p>{info}</p>
            </div>
        </div>
    )
}
