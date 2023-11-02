import React from 'react'
import s from './page.module.scss'
import Image from "next/legacy/image"
import Link from 'next/link'
interface Peson {
    name:string,
    image:string,
    linck:string,
}
const data:Peson[] = [
    {name:"Магазины Турции",image:'images/card2.jfif',linck:"/turkey"},
    {name:"Магазины Америки",image:'images/card.jfif',linck:"/america"}
] 
export const CardsBlock6 = () => {
    return (
        <div  className={s.Cards}>
            {
                data.map((res)=> (
                    <Link href={res.linck} className={s.Card}>
                        <Image alt='/'  layout='fill' objectFit='cover' src={`/${res.image}`}/>
                        <div>
                            <p>{res.name}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
