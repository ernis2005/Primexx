import React from 'react'
import s from './page.module.scss'
type Product = {
    id: number;
    title: string;
    amount: string;
    delivery_time: string;
    delivery: string;
    additionally:string
};

type ProductList = Product[];
type ProductComponentProps = {
    data: ProductList;
};
export const Tabels2 = (data: ProductComponentProps) => {


    return (
        <div>
            <table className={s.table} >
                <thead className={s.block1}>
                    <tr  >
                        <th>Услуга</th>

                        <th style={{ width: "550px" }}>Стоимость</th>
                        <th>Дополнительно</th>
                    </tr>
                </thead>
                <thead className={s.block2} >
                    {data.data.map((res, index) => (
                        <tr className={s.block2} key={index}>
                            <td>{res.title}</td>
                            <td style={{ width: "550px" }}>{res.amount}</td>
                            <td>{res.additionally}</td>

                        </tr>
                    ))}
                </thead>

            </table>
        </div>
    )
}
