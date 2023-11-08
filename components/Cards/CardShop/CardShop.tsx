import React from 'react'
import s from './page.module.scss'
interface Peson  {
    id:number,
    title:string,
    description:string,
    image:string,
    country:string,
    country_name:string,
    category:string,

category_name:string
}
interface Type {
    data:Peson[]
}
export const CardShop = (data:Type[]) => {
   
    return (
        <div className={s.Cards}>
            {/* {data.map((res, i) => (
                <div key={i} className={s.Card}>
                    <div className={s.image}></div>
                    <div className={s.info}><h2>Walmart</h2>
                        <p>Онлайн маркетплейс
                            от знаменитой сети магазинов Walmart.</p></div>
                </div>
            ))} */}

        </div>
    )
}
