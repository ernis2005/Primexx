"use client"
import React from 'react'
import s from './page.module.scss'
import { Svg10 } from '@/components/svg/Header'
import Link from 'next/link'
import cm from 'classnames'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
export const ItemsStorytR = (data) => {


    const res = data.data[0]
    const fromattedData = (res)=> {
        if (res !== null) {
            const datenew = new Date(res);
            const date = format(datenew,'dd MMMM yyyy',{ locale: ru })
            return date
            
        }}
    return (
        <div className={s.BlockINfo}>
            <ul className={s.Items}>
                <li >
                    <Svg10 />
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 1,
                    })}></p>
                    <div>
                        <p>Прибыл на склад, <br></br>
                        готов к отправке</p>
                        <span>
                            {fromattedData(res.created_at)}
                        </span>
                    </div>
                </li>
                <li >
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 2,
                    })}></p>
                    <Svg10 />
                    <div>
                        <p>В пути</p>
                        <span>
                        
                            {fromattedData(res.sent_to_moscow_at)}
                        </span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 3,
                    })}></p>
                    <div>
                        <p>Прибыл на склад Москвы</p>
                        <span>
                            {fromattedData(res.arrived_at)}
                        
                        </span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 4,
                    })}></p>
                    <div>
                        <p>Сортировка посылок</p>
                        <span>
                            {fromattedData(res.sorted_at)}
                        </span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 5,
                    })}></p>
                    <div>
                        <p>Отправлен по адресу</p>
                        <span>
                            {fromattedData(res.sent_to_client_at)}
                        </span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <p className={cm(s.asdasda, {
                        [s.s]: res.status >= 6,
                    })}></p>
                    <div>
                        <p>Успешно вручен</p>
                        <span>
                            {fromattedData(res.delivered_at)}
                        </span>
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
                        <p >Вес составил:</p>
                        <h4>{res.weight} кг.</h4>
                    </span>
                    <span>
                        <p >Плановая дата <br/> доставки:</p>
                        <h4>
                            {fromattedData(res.estimated_date)}
                        </h4>
                    </span>
                    <span>
                        <p >Пункт выдачи:</p>
                        <h4>{res.sent_to_client_at}</h4>
                    </span>
                </div>
            </div>
        </div>)
}
