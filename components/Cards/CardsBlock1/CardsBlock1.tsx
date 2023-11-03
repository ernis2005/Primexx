import React from 'react'
import s from './page.module.scss'
import Image from "next/legacy/image"
import { getCardPag1 } from '@/app/getData/getData';
type Card = {
    id: number;
    title: string;
    description: string;
    image: string;
  };

export const CardsBlock1 =  async () => {
    const data:Card[] = await getCardPag1()
    
    return (
        <div className={s.Cards}>
            {  data.map((res,i)=> {
                return (
                    <div key={res.id} className={s.Card}>
                        <div className={s.bg}>
                            <Image
                                src={`${res.image}`}
                                layout="fill"
                                objectFit="cover"
                                alt="hwllo"
                            />
                        </div>
                        <div className={s.info}>
                            <h3>{res.title}</h3>
                            <p>{res.description}</p>
                        </div>
                    </div>
                )
            })
            }
           
        </div>
    )
}
