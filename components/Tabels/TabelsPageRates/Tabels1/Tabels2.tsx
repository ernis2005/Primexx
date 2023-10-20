import React from 'react'
import s from './page.module.scss'
interface Person {
    rate:string,price:string,deliveryPeriod:string,
}
export const Tabels2 = () => {
    
    const data:Person[] = [
        {rate:"Турция Cтандарт",price:"$9.5",deliveryPeriod:"Проверка содержимого вашей покупки",},
        {rate:"Турция Cтандарт",price:"$9.5",deliveryPeriod:"Проверка содержимого вашей покупки",},
        {rate:"Турция Cтандарт",price:"$9.5",deliveryPeriod:"Проверка содержимого вашей покупки",},
        {rate:"Турция Cтандарт",price:"$9.5",deliveryPeriod:" ------",},
        {rate:"Турция Cтандарт",price:"$9.5",deliveryPeriod:" ------",},

        {rate:"Турция Cтандарт",price:"$9.5",deliveryPeriod:" ------",},


    ]
    return (
        <div>
            <table className={s.table} >
                <thead className={s.block1}>
                    <tr  >
                        <th>Услуга</th>
                      
                        <th>Срок доставки</th>
                        <th>Дополнительно</th>
                    </tr>
                </thead>
                <thead className={s.block2} >
                    {data.map((res,index)=> (
                        <tr  className={s.block2} key={index}>
                            <td>{res.rate}</td>
                            <td>{res.price}</td>
                            <td>{res.deliveryPeriod}</td>
                        
                        </tr>
                    ))}
                </thead>
  
            </table>
        </div>
    )
}
