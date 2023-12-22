import React, { FC } from 'react'
import s from './page.module.scss'


export const  TabelsBlock5 = (data) => {
 

    return (
        <div>
            <table className={s.table} >
                <thead className={s.block1}>
                    <tr  className={s.block1tr} >
                        <th className={s.trrc}>Тариф</th>
                        <th>Цена
за кг</th>
                        <th>Срок </th>
                        <th className={s.trrc}>Отправка</th>
                    </tr>
                </thead>
                <thead className={s.block2} >
                    {data.data?.length >= 0 ? (
                        data.data?.map((res, index) => (
                            <tr key={index} className={s.block2tr}>
                                <td className={s.trrc}>{res.title}</td>
                                <td>{res.amount}</td>
                                <td>{res.delivery_time}</td>
                                <td className={s.trrc}>{res.delivery}</td>
                            </tr>
                        ))
                        
                    ) : (
                        <tr>
                            <td>   <h1>пусто </h1></td>
                        </tr>
                    )}
                </thead>
            </table>
        </div>

    )
}
