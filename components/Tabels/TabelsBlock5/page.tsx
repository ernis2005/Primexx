import React from 'react'
import s from './page.module.scss'
interface Person {
    rate:string,price:string,deliveryPeriod:string,dispatch:string,
}
const data:Person[] = [
    {rate:"Турция Cтандарт",price:"$9.5",deliveryPeriod:"3-5 дней",dispatch:"5 раз в неделю"},
    {rate:"Турция Экспресс",price:"$12",deliveryPeriod:"1-2 дня",dispatch:"2 раза в неделю"},
    {rate:"Америка",price:"$16",deliveryPeriod:"14-16 дней",dispatch:"1 раз в неделю"},
]
export const TabelsBlock5 = () => {
    return (
        <div>
            <table className={s.table} >
                <thead className={s.block1}>
                    <tr  >
                        <th>Тариф</th>
                        <th>Стоимость за кг.</th>
                        <th>Срок доставки</th>
                        <th>Отправка</th>
                    </tr>
                </thead>
                <thead className={s.block2} >
                    {data.map((res,index)=> (
                        <tr  key={index}>
                            <td>{res.rate}</td>
                            <td>{res.price}</td>
                            <td>{res.deliveryPeriod}</td>
                            <td>{res.dispatch}</td>
                        </tr>
                    ))}
                </thead>
      
            </table>
        </div>
  
    )
}
