"use client"


import s from './page.module.scss'
import Image from "next/legacy/image"
import Link from 'next/link'

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
export const CardsBlock6 = () => {
    return (
        <div className={s.Cards}>
            {
                data.map((res) => (
                    <Link
                        href={{
                            pathname: '/shop',
                            query: { id: JSON.stringify(res.id) , name: res.name,img:res.image},
                        }}
                        className={s.Card}>
                        <Image className={s.img} alt='/' layout='fill' objectFit='cover' src={`${res.image}`} />
                        <p>{res.name}</p>
                    </Link>
                ))
            }
        </div>
    )
}
