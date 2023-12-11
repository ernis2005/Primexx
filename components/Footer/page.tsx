import React from 'react'
import s from './page.module.scss'
import Image from 'next/image';
import img from '../../public/images/Vector.svg'
import tikTok from '../../public/images/tit_tok.svg'
import what from '../../public/images/WhatsApp.svg'
import telegram from '../../public/images/Telegram.svg'
import youtube from '../../public/images/youtube (Stroke).svg'
import insta from '../../public/images/Instagram.svg'
import Link from 'next/link'
import { HeaderSvg } from '../svg/Header';
const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={`${s.container} ${s.cards}`} >
                    <div className={s.primex}>
                        <h3><HeaderSvg /></h3>
                        <p>Дарим доступ к растущему <br />
                            миру возможностей! </p>
                        <div className={`${s.none} flex`}>
                            <Link href={'https://www.instagram.com/'}>
                                <Image className={s.img} src={insta} alt='' />
                            </Link>
                            <Link href={'https://vk.com/'}>
                                <Image className={s.img} src={img} alt='' />
                            </Link>
                            <Link href={'https://www.tiktok.com/'}>
                                <Image className={s.img} src={tikTok} alt='' />
                            </Link>
                            <Link href={'https://www.youtube.com/watch?v=oLPgYSNerik&list=RDMM&index=21'}>
                                <Image className={s.img} src={youtube} alt='' />
                            </Link>
                            <Link href={'https://www.whatsapp.com/?lang=ru_RU'}>
                                <Image className={s.img} src={what} alt='' />
                            </Link>
                            <Link href={'https://web.telegram.org/k/'}>
                                <Image className={s.img} src={telegram} alt='' />
                            </Link>
                        </div>
                    </div>
                    <div className={s.cards}>
                        <div>
                            <ul className={s.ul_bar}>
                                <li>
                                    <Link href={'/'}>
                                        Главная
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/Page/services'}>
                                        Услуги
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/Page/rates'}>
                                        Тарифы и сроки
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/Page/news'}>
                                        Новости
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/Page/FAQ'}>
                                        F.A.Q.
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/Page/about_us'}>
                                        О нас
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <ul className={s.ul_bars}>
                               <div className={s.litop}>
                               <li >Горячая линия по вопросам  доставки</li>
                                <li>
                                    <button className={s.btn}>
                                        Написать <span> WhatsApp</span>
                                    </button>
                                </li>
                               </div>
                               <ul className={s.ul_barskan}>
                                <li>
                                    <Link href={'/'}>
                                        Главная
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/Page/services'}>
                                        Услуги
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/Page/rates'}>
                                        Тарифы и сроки
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/Page/news'}>
                                        Новости
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/Page/FAQ'}>
                                        F.A.Q.
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/Page/about_us'}>
                                        О нас
                                    </Link>
                                </li>

                            </ul>
                                <li>Дополнительно</li>
                                <li>
                                    <Link href={'/Page/about_us'}>
                                        Отзывы клиентов
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/turkey'}>
                                        Магазины Турции
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/america'}>
                                        Магазины Америки
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${s.block} between`}>
                            <Link href={'https://www.instagram.com/'}>
                                <Image className={s.img} src={insta} alt='' />
                            </Link>
                            <Link href={'https://vk.com/'}>
                                <Image className={s.img} src={img} alt='' />
                            </Link>
                            <Link href={'https://www.tiktok.com/'}>
                                <Image className={s.img} src={tikTok} alt='' />
                            </Link>
                            <Link href={'https://www.youtube.com/watch?v=oLPgYSNerik&list=RDMM&index=21'}>
                                <Image className={s.img} src={youtube} alt='' />
                            </Link>
                            <Link href={'https://www.whatsapp.com/?lang=ru_RU'}>
                                <Image className={s.img} src={what} alt='' />
                            </Link>
                            <Link href={'https://web.telegram.org/k/'}>
                                <Image className={s.img} src={telegram} alt='' />
                            </Link>
                        </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer