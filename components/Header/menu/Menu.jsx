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
                <button onClick={() => setModule(false)}>
                    <AiOutlineClose />
                </button>
                <ul>
                    <ul >
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
                                Новости
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
                </ul>   
                <div className={s.block2}>
                    <div className={s.block2Contend}>
                        <div className={s.Login}>

                            <ul>

                                {isAuth !== true ? (<><li>
                                    <a href={'/entrance'}>
                                        Вход
                                    </a>
                                </li><span></span><li>Регистрация</li></>) : <li> <Link href={'/profile'} >{useName}</Link></li>}

                            </ul>
                        </div>
                        <div className={s.buttonSearch}>
                            <Link href={'/Page/tracking'} style={{ border: 'none' }}>
                                <AiOutlineSearch />
                                <p>Отследить товар</p>
                            </Link>
                        </div>
                        <div className={s.menu0infoBlock1}>
                            <ul>
                                <li> <CiAlarmOn /> 09:00 - 20:00</li>
                                <li><BsTelephone /> <a href="tel:+996 770 710-170">+996 770 710-170</a>  </li>
                                <li><MdOutlineMailOutline /> <a href="mailto:primexcargo.org@gmail.com">primexcargo.org</a> </li>
                            </ul>
                        </div>
                        <ul className={s.socialMedia}>
                            <Link href={'https://www.instagram.com/primex_ec?igshid=OGQ5ZDc2ODk2ZA=='}>
                                <Image src={'/images/Instagram.svg'} alt="" width={30} height={30} />
                            </Link>
                            <Link href={'https://vk.com/primex_ec'}>
                                <Image src={'/images/Vector.svg'} alt="" width={30} height={30} />
                            </Link>
                            <Link href={'https://www.tiktok.com/@primex_ec?_t=8iBRh0XfVhO&_r=1'}>
                                <Image src={'/images/tit_tok.svg'} alt="" width={30} height={30} />
                            </Link>
                            <Link href={'https://www.youtube.com/@primex_ec'}>
                                <Image src={'/images/youtube (Stroke).svg'} alt="" width={30} height={30} />
                            </Link>
                
                            <Link href={'https://t.me/primexecchat'}>
                                <Image src={'/images/Telegram.svg'} alt="" width={30} height={30} />
                            </Link>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu