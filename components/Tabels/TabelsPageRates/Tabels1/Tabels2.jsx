import React from 'react'
import s from './page.module.scss'

export const Tabels2 = (data) => {
    return (
        <div>
            {data.rate.data?.length === 0 ? <div className={s.noData}>Нет данных</div> :  <table className={s.table} >
                <thead className={s.block1}>
                    <tr  >
                        <th>Услуга</th>

                        <th >Стоимость</th>
                        <th>Дополнительно</th>
                    </tr>
                </thead>
                <thead className={s.block2} >
                    {data.rate.data?.map((res, index) => (
                        <tr className={s.block2} key={index}>
                            <td className={s.td1}>{res.service}</td>
                            <td className={s.td2} >{res.price}</td>
                            <td className={s.td11}>{res.description}</td>

                        </tr>
                    ))}
                </thead>

            </table> } 
          
        </div>
    )
}
