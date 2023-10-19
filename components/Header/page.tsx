
import type { FC } from 'react';
import React from 'react'
import s from './style.module.scss'
import { CiAlarmOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md'
import { HeaderSvg } from '../svg/Header';
import { AiOutlineSearch } from 'react-icons/ai'
import Link from 'next/link';

const Header: FC = () => (
    <div className={s.Header}>
        <div className={s.menu0}>
            <div className={`Contend  ${s.menu0Info}`}>
                <div className={s.menu0infoBlock1}>
                    <ul>
                        <li> <CiAlarmOn /> 09:00 - 20:00</li>
                        <li><BsTelephone />+996 770 710-170</li>
                        <li><MdOutlineMailOutline />info@primex.kg</li>
                    </ul>
                </div>
                <div className={s.Login}>
                    <ul>
                        <li>Вход</li>
                        <span></span>
                        <li>Регистрация</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={`Contend ${s.menu1}`}>
            <div>
                <HeaderSvg />
            </div>
            <ul >
                <li>
                    <Link href={'/'}>
                        Главная
                    </Link>
                </li>
                <li>
                    <Link href={'/Page/services'}>
                        Услуги
                    </Link></li>
                <li>
                    <Link href={'#'}>
                        Тарифы
                    </Link></li>
                <li>
                    <Link href={'/Page/news'}>
                        Новости
                    </Link></li>
                <li>
                    <Link href={'#'}>
                        F.A.Q.
                    </Link></li>
                <li>
                    <Link href={'#'}>
                        О нас
                    </Link></li>
                <li>
                    <Link href={'#'}>
                        Контакты
                    </Link></li>
            </ul>
            <div className={s.buttonSearch}>
                <AiOutlineSearch />
                <p>Отследить товар</p>
            </div>
        </div>
    </div>
)

export default Header