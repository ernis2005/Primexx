import React from 'react'
import s from './page.module.scss'
import { redirect } from 'next/dist/server/api-utils'
interface Peson {
    name:string,
    title:string,
    price:string,
    forAPlace:string,
    deadlines:string
}
export const CardServicesPage = () => {
    const  data:Peson[] = [
        {name:"Авиа 3",title:"Является одним из самых быстрых способов доставки грузов. Грузы могут быть доставлены за считанные дни, что особенно важно для срочных поставок.",price:"$8 за к.г",forAPlace:"$10",deadlines:"3-5 дней"},
        {name:"Авиа + Авто",title:"Второй вид доставки воздушным путём, отличается сроком и тарифом.",price:"$7.5 за к.г",forAPlace:"$10",deadlines:"6-7 дней"},
        {name:"Авто перевозки",title:"Автодоставка подходит для широкого спектра грузовых объемов и размеров, более бюджетная в сравнении с другими видами транспорта, особенно при регулярной перевозки.",price:"$8 за к.г",forAPlace:"бесплатное",deadlines:"12- 18 дней"},
    ]
    return (
        <div className={s.Cards}>
            {
                data.map((res,i)=> (
                    <div key={i} className={s.Card}>
                        <div className={s.block1}>
                            <h2>{res.name}</h2>
                            <p>{res.title}</p>
                        </div>
                       
                        <ul className={s.ul}>
                            <li>
                                <p>Стоимость:</p> 
                                <span>{res.price}</span>
                            </li>
                            <li>
                                <p>За место:</p>
                                <span>{res.forAPlace}</span>
                            </li>
                            <li>
                                <p>Сроки:</p> 
                                <span>{res.deadlines}</span>
                            </li>
                        </ul>
                     
                    </div>
                ))
            }
            
        </div>
    )
}
