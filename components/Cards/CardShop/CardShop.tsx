import React from 'react'
import s from './page.module.scss'
export const CardShop = () => {
    const data = [1, 3, 4, 5, 6, 7, 878, 8,]
    return (
        <div className={s.Cards}>
            {data.map((res, i) => (
                <div key={i} className={s.Card}>
                    <div className={s.image}></div>
                    <div className={s.info}><h2>Walmart</h2>
                        <p>Онлайн маркетплейс
                            от знаменитой сети магазинов Walmart.</p></div>
                </div>
            ))}

        </div>
    )
}
