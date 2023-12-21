/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from 'react'
import s from './style.module.scss'
import { CiAlarmOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md'
import { HeaderSvg } from '../svg/Header';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import cm from 'classnames'
import Menu from './menu/Menu';
import { LuUserSquare2 } from 'react-icons/lu'
import { ugetUsers } from '@/app/redux/features/auth-slice'
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation'
const Header = () => {
    const useName = useSelector((state) => state.authReducer.value.name)
    const isAuth = useSelector((state) => state.authReducer.value.isAuth)

    const page = usePathname();
    const [module1, setModule1] = React.useState(false)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     if (localStorage === 'is not defined') {
    //         const returnFormData = JSON.parse(localStorage?.getItem("uliId"));
    //         if (returnFormData !== null) {
    //             dispatch(ugetUsers(returnFormData))
    //         }
    //     }
    // }, [])
    useEffect(() => {
        const myData = Cookies.get('uliId');
        if (myData !== undefined) {
            dispatch(ugetUsers(myData))
            
        }
    }, []);
    return (
        <div className={s.Header}>
            <div className={s.menu0}>
                <div className={`Contend  ${s.menu0Info}`}>
                    <div className={s.menu0infoBlock1}>
                        <ul>
                            <li> <CiAlarmOn /> 09:00 - 20:00</li>
                            <li><BsTelephone /> <a href="tel:+996 770 710-170">+996 770 710-170</a>  </li>
                            <li><MdOutlineMailOutline /> <a href="mailto:primexcargo.org@gmail.com">primexcargo.org@gmail.com</a> </li>
                        </ul>
                    </div>
  
                    <div className={s.Login}>

                        <ul>

                            {isAuth !== true ? (<>
                                <li>
                                    <a href={'/entrance'}>
                                        Вход
                                    </a>
                                </li>
                                <span></span>
                                <li>
                                    <Link href={'/registration'}>Регистрация</Link> </li></>) : <li> <Link href={'/profile'} >   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M13.637 15.5176C12.4977 14.2452 10.8424 13.4444 9 13.4444C7.15764 13.4444 5.50215 14.2452 4.36285 15.5176M9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17ZM9 10.7778C7.52724 10.7778 6.33333 9.58387 6.33333 8.11111C6.33333 6.63835 7.52724 5.44444 9 5.44444C10.4728 5.44444 11.6667 6.63835 11.6667 8.11111C11.6667 9.58387 10.4728 10.7778 9 10.7778Z" stroke="#F5F5F5" strokeLinejoin="round" />
                            </svg> {useName}</Link></li>}
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
                <div className={s.className1}>
                    <ul>
                        <li>
                            <Link className={cm({
                                [s.active]: page === '/'
                            })} href={'/'}>
                        Главная
                            </Link>
                        </li>
                        <li>
                            <Link className={cm({
                                [s.active]: page === '/Page/services'
                            })} href={'/Page/services'}>
                        Услуги
                            </Link></li>
                        <li>
                            <Link 
                                className={
                                    cm({
                                        [s.active]: page === '/Page/rates'
                                    })
                                }
                                href={'/Page/rates'}>
                        Тарифы
                            </Link></li>
                        <li>
                            <Link className={
                                cm({
                                    [s.active]: page === '/Page/news'
                                })
                            
                            } href={'/Page/news'}>
                            Блог
                            </Link></li>
                        <li>
                            <Link className={
                                cm({
                                    [s.active]: page === '/Page/FAQ'
                                })
                            } href={'/Page/FAQ'}>
                        F.A.Q.
                            </Link></li>
                        <li>
                            <Link className={
                                cm({
                                    [s.active]: page === '/Page/about_us'
                                })
                            
                            } href={'/Page/about_us'}>
                        О нас
                            </Link></li>

                    </ul>
                    <div className={s.buttonSearch}>
                        <Link href={'/Page/tracking'} style={{ border: 'none' }}>
                            <AiOutlineSearch />
                            <p>Отследить товар</p>
                        </Link>
                    </div>
                    <button onClick={() => setModule1(true)}>
                        <AiOutlineMenu />
                    </button>

                </div>
               
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