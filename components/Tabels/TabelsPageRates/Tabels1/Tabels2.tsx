import React from 'react'
import s from './page.module.scss'
type Product = {
    id: number;
    title: string;
    amount: string;
    price: string;
    description: string;
    service:string
};

type ProductList = Product[];
type ProductComponentProps = {
    data: ProductList;
};
export const Tabels2 = (data: ProductComponentProps) => {


    return (
        <div>
            {data.data.length === 0 ? <div className={s.noData}>Нет данных</div> :  <table className={s.table} >
                <thead className={s.block1}>
                    <tr  >
                        <th>Услуга</th>

                        <th >Стоимость</th>
                        <th>Дополнительно</th>
                    </tr>
                </thead>
                <thead className={s.block2} >
                    {data.data.map((res, index) => (
                        <tr className={s.block2} key={index}>
                            <td className={s.td1}>{res.service}</td>
                            <td >{res.price}</td>
                            <td className={s.td1}>{res.description}</td>

                        </tr>
                    ))}
                </thead>

            </table> }
          
        </div>
    )
}
