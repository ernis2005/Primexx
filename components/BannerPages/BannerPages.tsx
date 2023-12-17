import React from 'react'
import s from './page.module.scss'
import Image from 'next/legacy/image'

import img2 from '../../public/images/faq.png'
import Link from 'next/link'


interface Person {
    name: string,
    info: string,
    idPage: string | number,
}

export const BannerPages = ({ name, info, idPage }: Person) => {
    const images = [
        { img: "/images/bg.png", id: 1 },
        { img: "/images/carson.png", id: 2 },
        { img: "/images/tarif.jpg", id: 3 },
        { img: "/images/faq.png", id: 4 },
        { img: "/images/daun1.jpg", id: 5 },
        { img: "/images/news.png", id: 6 },
        { img: '/images/Amerika1.png', id: 7 },
        { img: '/images/AMERIKA.png', id: 8 },
        { img: '/images/tovar1.jpg', id: 9 }
    ]
    return (
        <div className={s.Header}>
            {
                images.filter((res, index) =>
                    res.id === idPage).map((res, index) =>
                    (<Image src={res.img} alt="" layout='fill' objectFit='cover' key={index} />
                    ))
            }
            <div className={`Contend ${s.block}`}>
                <h2>{name}</h2>
                <p>{info}</p>
            </div>
        </div>
    )
}
