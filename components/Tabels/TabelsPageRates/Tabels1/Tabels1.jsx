import React from 'react'
import s from './Tabels1.module.scss'
import { getRate } from '@/app/getData/getData';

export const Tabels1 = async (data) => {
    const getTabel = await getRate()
    const filterData = await getTabel.filter((res) => res.country === data.data)
    console.log(filterData,'dara');


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
                        filterData?.map((res,index)=>(
                            <tr className={s.block2} key={index}>
                                <td>{res.title}</td>
                                <td>{res.amount}</td>
                                <td>{res.delivery_time}</td>
                                {index % 4 === 0 && <td rowSpan={4} className={s.td4} dangerouslySetInnerHTML={{ __html: res.country_add_standard }}/>}</tr>
                                
                        ))

                    }
                </tbody>

            </table>
        </div>

    )
}

