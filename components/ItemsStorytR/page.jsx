import React from 'react'
import cm from 'classnames'
import s from './page.module.scss'
import { Svg10 } from '@/components/svg/Header'
import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils'
export const ItemsStorytR = (data) => {
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
                        <span>{res.created_at?.slice(0, 10)}</span>
                    </div>
                </li>
                <li>
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 2,
                    })}></p>
                    <Svg10 />
                    <div>
                        <p>В пути</p>
                        <span>{res.sent_to_moscow_at?.slice(0, 10)}</span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 3,
                    })}></p>
                    <div>
                        <p>Прибыл рейс</p>
                        <span>{res.arrived_at?.slice(0, 10)}</span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 4,
                    })}></p>
                    <div>
                        <p>Сортируется на складе</p>
                        <span>{res.sorted_at?.slice(0, 10)}</span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 5,
                    })}></p>
                    <div>
                        <p>Отправлен по адресу</p>
                        <span>{res.sent_to_client_at?.slice(0, 10)}</span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 6,
                    })}></p>
                    <div>
                        <p>Выдан</p>
                        <span>{res.delivered_at?.slice(0, 10)}</span>
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
                        <h4>{res.sent_to_client_at}</h4>
                    </span>
                </div>
            </div>
        </div>
    )
}
