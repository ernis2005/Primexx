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
        {name:"Авиа 3",title:"",price:"$8 за к.г",forAPlace:"$",deadlines:""},
        {name:"Авиа + Авто",title:"",price:"",forAPlace:"",deadlines:""},
        {name:"",title:"",price:"",forAPlace:"",deadlines:""},
    ]
    return (
        <div className={s.Cards}>
            
            
            <div  className={s.Card}>
                <div className={s.block1}>
                    <h2>Авиа 3</h2>
                    <p>Является одним из самых быстрых способов доставки грузов. Грузы могут быть доставлены за считанные дни, что особенно важно для срочных поставок.</p>
                </div>
                       
                <ul className={s.ul}>
                    <li>
                        <p>Стоимость:</p> 
                        <span>$8 за к.г</span>
                    </li>
                    <li>
                        <p>За место:</p>
                        <span className={s.ulspan2}>$10</span>
                    </li>
                    <li>
                        <p>Сроки:</p> 
                        <span>3-5 дней</span>
                    </li>
                </ul>
                     
            </div><div  className={s.Card}>
                <div className={s.block1}>
                    <h2>Авиа + Авто</h2>
                    <p>Второй вид доставки воздушным путём, отличается сроком и тарифом.</p>
                </div>
                       
                <ul className={s.ul}>
                    <li>
                        <p>Стоимость:</p> 
                        <span>$7.5 за к.г</span>
                    </li>
                    <li>
                        <p>За место:</p>
                        <span className={s.ulspan2}>$10</span>
                    </li>
                    <li>
                        <p>Сроки:</p> 
                        <span>6-7 дней</span>
                    </li>
                </ul>
                     
            </div>
            <div  className={s.Card}>
                <div className={s.block1}>
                    <h2>Авто перевозки</h2>
                    <p>Автодоставка подходит для широкого спектра грузовых объемов и размеров, более бюджетная в сравнении с другими видами транспорта, особенно при регулярной перевозки.</p>
                </div>
                       
                <ul className={s.ul}>
                    <li>
                        <p>Стоимость:</p> 
                        <span>$8 за к.г</span>
                    </li>
                    <li>
                        <p>За место:</p>
                        <span>бесплатное</span>
                    </li>
                    <li>
                        <p>Сроки:</p> 
                        <span>12- 18 дней</span>
                    </li>
                </ul>
                     
            </div>
        </div>
    )
}
