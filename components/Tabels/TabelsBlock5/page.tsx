import React, { FC } from 'react'
import s from './page.module.scss'

type Product = {
    id: number;
    title: string;
    amount: string;
    delivery_time: string;
    delivery: string;
};

type ProductList = Product[];
type ProductComponentProps = {
    data: ProductList;
};


export const TabelsBlock5 = ({ data }: ProductComponentProps) => {


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
                    {data.length >= 0 ? (
                        data.map((res, index: React.Key) => (
                            <tr key={index}>
                                <td>{res.title}</td>
                                <td>{res.amount}</td>
                                <td>{res.delivery_time}</td>
                                <td>{res.delivery}</td>
                            </tr>
                        ))
                        
                    ) : (
                        <tr>
                            <td>   <h1>helloo</h1></td>
                        </tr>
                    )}
                </thead>
            </table>
        </div>

    )
}
