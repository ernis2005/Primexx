import React from 'react'
import s from './page.module.scss'
type Product = {
    data:{
        id: number;
        title: string;
        amount: string;
        delivery_time: string;
        delivery: string;
        additionally: string
    }

};

type ProductList = Product[];
type ProductComponentProps = {
    data: ProductList;
};
export const Tabels1 = (data: Product) => {

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

                    <tr className={s.block2}>
                        <td>{data.data.title}</td>
                        <td >{data.data.amount}</td>
                        <td>{data.data.delivery_time}</td>
                        <td>{data.data.additionally}</td>
                    </tr>

                </thead>

            </table>
        </div>

    )
}
