import React from 'react'
import s from './page.module.scss'
import Image from 'next/image'
interface Peson {
    index: string;
    info: string;  
}
const data:Peson[] = [
    {index:'01',info:"Наша компания использует современные технологии для оптимизации маршрутов доставки,  чтобы наши клиенты получали свои заказы  в срок."},
    {index:'02',info:"Мы постоянно следим за развитием индустрии и внедряет инновационные технологии и методы управления логистическими процессами."},
    {index:'03',info:"Наша команда предоставляет клиентам персонализированные решения и услуги, учитывая их уникальные потребности и особенности бизнеса."},
    {index:'04',info:"Компания активно работает над уменьшением экологического воздействия своей деятельности."}
]
export const CardsBlock1 = () => {
    return (
        <div className={s.Cards}>
            {  data.map((res,i)=> {
                return (
                    <div key={i} className={s.Card}>
                        <div className={s.bg}>
                            <Image
                                src={'/images/bg1.jfif'}
                                layout="fill"
                                objectFit="cover"
                                alt="hwllo"
                            />
                        </div>
                        <div className={s.info}>
                            <h3>{res.index}</h3>
                            <p>{res.info}</p>
                        </div>
                    </div>
                )
            })
            }
           
        </div>
    )
}
