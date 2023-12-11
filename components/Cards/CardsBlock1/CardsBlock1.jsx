import React from 'react'
import s from './page.module.scss'
import Image from "next/legacy/image"
import { getCardPag1 } from '@/app/getData/getData';


// const datadata = [
//     {
//         id: 1,
//         img: '/images/а1.jpg',
//         title:'01',
//         text: 'Оперативно обеспечиваем наших клиентов эффективными решениями на каждом этапе работы.'
//     },
//     {
//         id: 2,
//         img: '/images/a2.jpg',
//         title: '02',
//         text: 'Возможность самостоятельно выкупить, используя наш бесплатный склад'
//     },
//     {
//         id: 3,
//         img: '/images/а3.jpg',
//         title:'03',
//         text: 'Отслеживание посылки с момента заказа до получения.'
//     },
//     {
//         id: 4,
//         img: '/images/а4.jpg',
//         title: '04',
//         text: 'В форс-мажорных ситуациях компенсируем потери.'
//     }
// ]


export const CardsBlock1 = async () => {
    const datadata= await getCardPag1()
    return (
        <div className={s.wrap}>
            <div className={s.cards}>
                {datadata.length >= 0 ? (
                    datadata.map((res, i) => {
                        return (
                            <div key={res.id} className={s.card}>
                                <Image
                                    src={`${res.image}`}
                                    layout="fill"
                                    objectFit="cover"
                                    alt="hwllo"
                                />
                                <h1>{res.title}</h1>
                                <div className={s.info}>
                                    <h3>{res.description}</h3>
                                </div>
                            </div>
                        )
                    }
                    )
                ) : null}
            </div>
        </div>
    )
}
