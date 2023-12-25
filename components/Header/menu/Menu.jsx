"use client"
import React from 'react'
import s from './page.module.scss'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import Link from 'next/link'
import { useAppSelector } from '@/app/redux/features/auth-slice'
import { CiAlarmOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md'
import Image from 'next/legacy/image'


const Menu = ({ setModule }) => {
    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)
    const useName = useAppSelector((state) => state.authReducer.value.name)
    
    return (
        <div className={s.module}>
            <div className={s.block1}>
                <div className={s.menu}>
                    <button onClick={() => setModule(false)}>
                        <AiOutlineClose /> 
                    </button>
                    <ul>
                        <li>
                            <Link onClick={() => setModule(false)} href={'/'}>
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setModule(false)} href={'/Page/services'}>
                                Услуги
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setModule(false)} href={'/Page/rates'}>
                                Тарифы
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setModule(false)} href={'/Page/news'}>
                            Блог
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setModule(false)} href={'/Page/FAQ'}>
                                F.A.Q.
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setModule(false)} href={'/Page/about_us'}>
                                О нас
                            </Link>
                        </li>
                        <li>
                        </li>
                    </ul>   
                </div>
                <div className={s.block2}>
                    <div className={s.block2Contend}>
                        <div className={s.Login}>

                            <ul>

                                {isAuth !== true ? (<><li>
                                    <a href={'/entrance'}>
                                        Вход
                                    </a>
                                </li>
                                <span></span><li> <Link href={'/registration'}>Регистрация</Link> </li></>) : <li> <Link className={s.flex} href={'/profile'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M13.637 15.5176C12.4977 14.2452 10.8424 13.4444 9 13.4444C7.15764 13.4444 5.50215 14.2452 4.36285 15.5176M9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17ZM9 10.7778C7.52724 10.7778 6.33333 9.58387 6.33333 8.11111C6.33333 6.63835 7.52724 5.44444 9 5.44444C10.4728 5.44444 11.6667 6.63835 11.6667 8.11111C11.6667 9.58387 10.4728 10.7778 9 10.7778Z" stroke="#F5F5F5" strokeLinejoin="round" />
                            </svg>{useName}</Link></li>}

                            </ul>
                        </div>
                        <div className={s.buttonSearch}>
                            <Link href={'/Page/tracking'} style={{ border: 'none' }}>
                                <AiOutlineSearch />
                                <p>Отследить товар</p>
                            </Link>
                        </div>
                        <div className={s.what}>
                            <p>Линия по вопросам доставки</p>
                            <button className={s.btn}>
                                <a href={"https://api.whatsapp.com/send?phone=905359749009"}>
                                    Написать <span>в WhatsApp</span>
                                </a></button>
                                    
                        </div>
                        <div className={s.menu0infoBlock1}>
                            <ul>
                                <li> <CiAlarmOn /> 09:00 - 20:00</li>
                                <li><BsTelephone /> <a href="tel:+996 770 710-170">+996 770 710-170</a>  </li>
                                <li><MdOutlineMailOutline /> <a href="mailto:primexcargo.org@gmail.com">primexcargo.org</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu