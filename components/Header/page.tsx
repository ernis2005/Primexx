"use client"
import type { FC } from 'react';
import React, { useEffect } from 'react'
import s from './style.module.scss'
import { CiAlarmOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md'
import { HeaderSvg } from '../svg/Header';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import Link from 'next/link';
import { AutoLogin, useAppSelector } from '@/app/redux/features/auth-slice';
import { useDispatch } from 'react-redux';
import cm from 'classnames'
import Menu from './menu/Menu';
const Header: FC = () => {
    const useName = useAppSelector((state) => state.authReducer.value.name)
    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)
    const [module1, setModule1] = React.useState(false)
    const dispatch = useDispatch()
    useEffect(() => {

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const localStorages: any = localStorage
        const returnFormData = JSON.parse(localStorages.getItem("uliId"));
        if (returnFormData !== null) {
            dispatch(AutoLogin(returnFormData))
        }
    }, [])
    return (
        <div className={s.Header}>
            <div className={s.menu0}>
                <div className={`Contend  ${s.menu0Info}`}>
                    <div className={s.menu0infoBlock1}>
                        <ul>
                            <li> <CiAlarmOn /> 09:00 - 20:00</li>
                            <li><BsTelephone /> <a href="tel:+996 770 710-170">+996 770 710-170</a>  </li>
                            <li><MdOutlineMailOutline /> <a href="mailto:info@primex.kg">info@primex.kg</a> </li>
                        </ul>
                    </div>
                    <div className={s.Login}>

                        <ul>

                            {isAuth !== true ? (<><li>
                                <a href={'/entrance'}>
                                    Вход
                                </a>
                            </li><span></span><li>Регистрация</li></>) : <li> <Link href={'/profile'} >{useName}</Link></li>}

                        </ul>
                    </div>
                </div>
            </div>
            <div className={`Contend ${s.menu1}`}>
                <div>
                    <Link href={'/'}>
                        <HeaderSvg />
                    </Link>

                </div>
                <ul >
                    <li>
                        <Link href={'/'}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link href={'/page/services'}>
                            Услуги
                        </Link></li>
                    <li>
                        <Link href={'/page/rates'}>
                            Тарифы
                        </Link></li>
                    <li>
                        <Link href={'/page/news'}>
                            Новости
                        </Link></li>
                    <li>
                        <Link href={'/page/FAQ'}>
                            F.A.Q.
                        </Link></li>
                    <li>
                        <Link href={'/page/about_us'}>
                            О нас
                        </Link></li>
                    <li>
                        <Link href={'#'}>
                            Контакты
                        </Link></li>
                </ul>
                <div className={s.buttonSearch}>
                    <Link href={'/page/tracking'} style={{ border: 'none' }}>
                        <AiOutlineSearch />
                        <p>Отследить товар</p>
                    </Link>
                </div>
                <button onClick={() => setModule1(true)}>
                    <AiOutlineMenu />
                </button>

            </div>
            <div className={cm(s.accNone, {
                [s.acc]: module1 === true
            })}>
                <Menu setModule={setModule1} />
            </div>
        </div>
    )
}

export default Header