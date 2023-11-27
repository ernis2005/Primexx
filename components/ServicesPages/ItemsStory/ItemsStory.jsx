import React from 'react'
import s from './page.module.scss'
import { Svg10 } from '@/components/svg/Header'
import Link from 'next/link'
import cm from 'classnames'
// {
//     status: 3,
//     status_label: 'Сортируется на складе',
//     created_at: '2023-11-27T13:45:10.514061+06:00',
//     sent_to_moscow_at: '2023-11-27T15:01:26.163645+06:00',
//     arrived_at: '2023-11-27T18:15:32.837186+06:00',
//     sorted_at: null,
//     sent_to_client_at: null,
//     delivered_at: null,
//     track_code: '9856833624418',
//     client_code: 'P-42117',
//     phone: '77996706200',
//     price: '9.50',
//     weight: '1.000',
//     cost_usd: '9.50',
//     cost_rub: 874,
//     flight_code: 'C/MOS/27/11/23'
//   }
const ItemsStory = (data) => {
    console.log(data, 'data');
    const res = data.data[0]
    return (
        <div className={s.BlockINfo}>
            <ul className={s.Items}>
                <li >
                    <Svg10 />
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 1,
                    })}></p>
                    <div>
                        <p>Формируется</p>
                        <span>10 октября, 2023</span>
                    </div>
                </li>
                <li>
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 2,
                    })}></p>
                    <Svg10 />
                    <div>
                        <p>В пути</p>
                        <span>10 октября, 2023</span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 3,
                    })}></p>
                    <div>
                        <p>Прибыл рейс</p>
                        <span>10 октября, 2023</span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 4,
                    })}></p>
                    <div>
                        <p>Сортируется на складе</p>
                        <span>10 октября, 2023</span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 5,
                    })}></p>
                    <div>
                        <p>Готов к выдаче</p>
                        <span>10 октября, 2023</span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 6,
                    })}></p>
                    <div>
                        <p>Выдан</p>
                        <span>10 октября, 2023</span>
                    </div>
                </li>
            </ul>
            <div className={s.block2}>
                <h2>Заказ #{res.track_code}</h2>
                <div>
                    <span>
                        <p >Статус заказа:</p>
                        <h4>{res.status_label}</h4>
                    </span>
                    <span>
                        <p >Плановая дата доставки:</p>
                        <h4>10 октября, 2023</h4>
                    </span>
                    <span>
                        <p >Пункт выдачи:</p>
                        <h4>354340, г. Сочи, ул. Кирова, дом 20, кв. 56</h4>
                    </span>
                </div>
                <button className={cm(s.button, {
                    [s.button2]: res.status < 3,
                })}><Link href={'/deliveryToRussia'}>Оформить доставку по РФ</Link> </button>
            </div>
        </div>)
}
export default ItemsStory