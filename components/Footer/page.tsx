import React from "react";
import s from './page.module.scss'
import Image from 'next/image';
import Link from 'next/link'
import { HeaderSvg } from '../svg/Header';


const Footer = () => {
    
    return (
        <footer className={`${s.footer}`}>
            <div className={s.wrap}>
                <div className={s.grid}>
                    <div className={s.footer_start}>
                        <Link href={'/'}>
                            <HeaderSvg />
                        </Link>
                        <h3>Дарим доступ к растущему <br />
                            миру возможностей! </h3>
                        <ul className={`${s.footer_end_topes} ${s.footer_end_top}`}>
                            <li>
                                <Link href={'/Page/about_us'}>
                                    Горячая линия по вопросам доставки
                                </Link></li>
                            <li>
                                <Link href={'/Page/about_us'}>
                                    <button className={s.btn}>Написать <span>в WhatsApp</span></button>
                                </Link></li>
                        </ul>
                        <div className={s.footer_icons}>
                            <Link href={''}>
                                <Image src={'/images/Instagram.svg'} alt="" width={30} height={30} />
                            </Link>
                            <Link href={''}>
                                <Image src={'/images/Vector.svg'} alt="" width={30} height={30} />
                            </Link>
                            <Link href={''}>
                                <Image src={'/images/tit_tok.svg'} alt="" width={30} height={30} />
                            </Link>
                            <Link href={''}>
                                <Image src={'/images/youtube (Stroke).svg'} alt="" width={30} height={30} />
                            </Link>
                            <Link href={''}>
                                <Image src={'/images/WhatsApp.svg'} alt="" width={30} height={30} />
                            </Link>
                            <Link href={''}>
                                <Image src={'/images/Telegram.svg'} alt="" width={30} height={30} />
                            </Link>
                        </div>
                    </div>

                    <div className={s.flex}>
                        <ul className={s.footer_midle}>
                            <li>
                                <Link href={'/'}>
                                Страницы
                                </Link>
                            </li>
                            <li>
                                <Link href={'/Page/services'}>
                                Услуги
                                </Link></li>
                            <li>
                                <Link href={'/Page/rates'}>
                                Тарифы
                                </Link></li>
                            <li>
                                <Link href={'/Page/news'}>
                                Новости
                                </Link></li>
                            <li>
                                <Link href={'/Page/FAQ'}>
                                F.A.Q.
                                </Link></li>
                            <li>
                                <Link href={'/Page/about_us'}>
                                О нас
                                </Link></li>
                        </ul>

                        <div className={s.footer_end}>
                            <ul className={s.footer_end_top}>
                                <li style={{width:'300px'}}>
                                    <Link href={'/Page/about_us'} >
                                    Горячая линия по вопросам доставки
                                    </Link></li>
                                <li>
                                    <Link href={'/Page/about_us'}>
                                        <button className={s.btn}>Написать </button>
                                    </Link></li>
                            </ul>

                            <ul className={s.footer_end_bottom}>
                                <li>
                                    <Link href={''}>Дополнительно</Link>
                                </li>
                                <li>
                                    <Link href={''}>Отзывы клиентов</Link>
                                </li>
                                <li>
                                    <Link href={''}>Магазины Турции</Link>
                                </li>
                                <li>
                                    <Link href={''}>Магазины Америки</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer