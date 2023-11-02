import React from 'react'
import s from './page.module.scss'
interface Person {
    rate:string,price:string,deliveryPeriod:string,dispatch:string,
}
const data:Person[] = [
    {rate:"Турция Cтандарт",price:"$9.5",deliveryPeriod:"3-5 дней",dispatch:"Вес округляется от 1 кг"},
]
export const Tabels1 = () => {
    return (
        <div>
            <table className={s.table} >
                <thead className={s.block1}>
                    <tr  >
                        <th>Тариф</th>
                        <th>Стоимость за кг.</th>
                        <th>Срок доставки</th>
                        <th>Дополнительно</th>
                    </tr>
                </thead>
                <thead className={s.block2} >
                    {data.map((res,index)=> (
                        <tr  className={s.block2} key={index}>
                            <td>{res.rate}</td>
                            <td >{res.price}</td>
                            <td>{res.deliveryPeriod}</td>
                            <td>{res.dispatch}</td>
                        </tr>
                    ))}
                </thead>
      
            </table>
        </div>
  
    )
}
