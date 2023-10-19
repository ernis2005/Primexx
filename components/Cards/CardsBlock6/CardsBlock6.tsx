import React from 'react'
import s from './page.module.scss'
import Image from 'next/image'
interface Peson {
    name:string,
    image:string
}
const data:Peson[] = [
    {name:"Магазины Турции",image:'images/card2.jfif'},
    {name:"Магазины Америки",image:'images/card.jfif'}
] 
export const CardsBlock6 = () => {
    return (
        <div  className={s.Cards}>
            {
                data.map((res)=> (
                    <div className={s.Card}>
                        <Image alt='/'  layout='fill' src={`/${res.image}`}/>
                      
                        <div>
                            <p>{res.name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
