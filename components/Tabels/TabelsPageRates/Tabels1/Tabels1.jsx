"use client"
import React from 'react'
import s from './Tabels1.module.scss'
import { getRate } from '@/app/getData/getData';
import { useSelector } from 'react-redux';

export const Tabels1 =  (data) => {
    const { rate,  } = useSelector((state) => state.rateSlice)

    const filterData =  rate.data?.filter((res) => res.country === data.rate)
    return (
        <div>
            <table className={s.table} >
                <thead className={s.block1}>
                    <tr>
                        <th>Тариф</th>
                        <th>Стоимость за кг.</th>
                        <th>Срок доставки</th>
                        <th>Дополнительно</th>
                    </tr>
                </thead>
                <tbody className={s.block2} >
                    {
                        filterData?.map((res,index)=> {
                            const htmlContent = index !== 4 ? res.country_add_standard : res.country_add_express;
                            return(
                                <tr className={s.block2} key={index}>
                                    <td  className={s.tbw300}>{res.title}</td>
                                    <td>{res.amount}</td>
                                    <td>{res.delivery_time}</td>
                                    {index % 4 === 0 && <td   rowSpan={4} className={s.td4} dangerouslySetInnerHTML={{ __html:htmlContent}}/>}</tr>
                                
                            )
                        })

                    }
                </tbody>

            </table>
        </div>

    )
}

