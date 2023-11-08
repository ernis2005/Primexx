import React from 'react'
import s from './page.module.scss'
import { Svg10 } from '@/components/svg/Header'
import Link from 'next/link'
const ItemsStory = () => {
    return (
        <div className={s.BlockINfo}>
            <ul className={s.Items}>

                <li >
                    <Svg10 />
                    <p className={s.s}></p>
                    <div>
                        <p>Формируется</p>
                        <span>10 октября, 2023</span>
                    </div>
                </li>
                <li>
                    <p className={s.s}></p>
                    <Svg10 />
                    <div>
                        <p>В пути</p>
                        <span>10 октября, 2023</span>
                    </div>
                </li>    <li>

                    <Svg10 />
                    <p className={s.s}></p>
                    <div>
                        <p>Прибыл рейс</p>
                        <span>10 октября, 2023</span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <div>
                        <p>Сортируется на складе</p>
                        <span>10 октября, 2023</span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <div>
                        <p>Готов к выдаче</p>
                        <span>10 октября, 2023</span>
                    </div>
                </li>    <li>
                    <Svg10 />
                    <div>
                        <p>Выдан</p>
                        <span>10 октября, 2023</span>
                    </div>
                </li>
            </ul>
            <div className={s.block2}>
                <h2>Заказ #12340000000</h2>
                <div>
                    <span>
                        <p >Статус заказа:</p>
                        <h4>Успешно выдан</h4>
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
                <button><Link href={'/deliveryToRussia'}>Оформить доставку по РФ</Link> </button>
            </div>
        </div>)
}

export default ItemsStory
