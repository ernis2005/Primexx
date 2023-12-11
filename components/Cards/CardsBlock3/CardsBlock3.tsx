/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-constant-condition */
"use client"
import React, { createRef, useEffect, useRef, useState } from 'react'
import s from './page.module.scss'
import { Svg10 } from '@/components/svg/Header'
export const CardsBlock3 = () => {
    const [scr, setScr] = useState(0)

    const refComponent: React.MutableRefObject<any> = useRef();
    const onScroll = () => {
        let test = 1411
        const heiScr = window.innerWidth
        if (heiScr <= 594) {
            test = 1900
        }
        if (heiScr <= 562) {
            test = 1500
        }
        const winScr: number = document.documentElement.scrollTop - test;
        const height = refComponent.current.getBoundingClientRect().height;
        const scrlled = (winScr / height) * 70
        setScr(scrlled)
    }

    useEffect(() => {
        // eslint-disable-next-line no-constant-condition
        addEventListener("scroll", onScroll)
        return () => removeEventListener("scroll", onScroll)
    },)
    return (
        <div className={s.Header} ref={refComponent}>
            <div className={s.Card}>
                <h3 className={s.p1}>01</h3>

                <span >
                    <h2>Регистрация</h2>
                    <p>Чтобы начать работу с нами, необходимо пройти быструю регистрацию</p>
                </span>
            </div>
            <div className={s.Card}>
                <span className={s.s2}>
                    <h2>Выбор товара</h2>
                    <p>Необходимо выбрать товар из любого турецкого
или американского сайта маркетплейса.</p>
                </span>


                <h3 className={s.p2}>02</h3>
            </div>
            <div className={s.Card}>
                <h3 className={s.p1}>03</h3>

                <span >
                    <h2>Оформление заказа</h2>
                    <p>Оставьте ссылки на товар, ожидайте SMS
от менеджера, оплатите российской картой.</p>
                </span>
            </div>
            <div className={s.Card}>
                <span className={s.s2}>
                    <h2>Выкуп товара</h2>
                    <p>Выкупим вами выбранный товар в тот же день.</p>
                </span>


                <h3 className={s.p2}>04</h3>
            </div>
            <div className={s.Card}>
                <h3 className={s.p1}>05</h3>

                <span >
                    <h2>Прием и отправка</h2>
                    <p>Принимаем ваши посылки, консолидируем
и переупаковываем.</p>
                </span>
            </div>
            <div className={s.Card}>
                <span className={s.s2}>
                    <h2>Доставляем до ваших рук</h2>
                    <p>Доставляем  во все регионы России. До вашего адреса или до ближайшего пункта выдачи.</p>
                </span>


                <h3 className={s.p2}>06</h3>
            </div>
            <div>   </div>
            <div className={s.test}>
                <div style={{ height: `${scr}%`, }}>

                </div>
                <span>
                    <Svg10 />
                    <Svg10 />
                    <Svg10 />
                    <Svg10 />
                    <Svg10 />
                    <Svg10 />
                </span>
            </div>
            <button className={s.btn_bar}>Благодаря нашей трекинг системе отслеживайте ваши посылки на каждом этапе</button>
        </div>
    )
}
