/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import React, { useEffect, useState } from "react";
import s from './page.module.scss'
import Image from 'next/image';
import Link from 'next/link'
import { HeaderSvg } from '../svg/Header';
import { useSelector } from "react-redux";
import { getCoy } from "@/app/getData/getData";


const Footer =   () => {
    const [ data, setData] = useState<any>()
    const [loding, setLoding] = useState(false)

    const getData =  async ()=>  {
        await getCoy().then(res => setData(res))
        await setLoding(false)
   
    }
    useEffect(()=> {
        getData()    
    },[])
    
    return   (
        <footer className={s.footer} >
            <div className={`  ${s.blocks}`}>
                <div className={s.block1}>
                    <div className={s.block1Logo}>

                        <Link href={'/'}>
                            <HeaderSvg />
                        </Link>
                        <p>Дарим доступ к растущему <br />
                            миру возможностей! </p>
                    </div>
                    <ul className={s.block1ButtonWha}>
                        <li>
                            <Link href={'/Page/about_us'}>
                                    Горячая линия по <br/> вопросам доставки
                            </Link></li>
                        <li>
                            <button className={s.btn}>
                                <a href={"https://api.whatsapp.com/send?phone=905359749009"}>
                                    Написать <span>в WhatsApp</span>
                                </a></button>
                                    
                        </li>
                    </ul>
                    <div className={s.block1Sc}>
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
                    </div>
                    <ul className={`${s.footer_end_topes}`}>
                        <li>
                            <Link href={'/Page/about_us'}>
                                    Горячая линия по вопросам доставки
                            </Link></li>
                        <li>
                            <button className={s.btn}> <a href={"https://api.whatsapp.com/send?phone=905359749009"}> Написать <span>в WhatsApp</span></a></button>
                        </li>
                    </ul>
                </div>
                <div className={s.block2}>
                    <ul className={s.navigation}>
                        <li>
                            <p>Страницы</p>
                        </li>
                        <li>
                            <Link href={'/Page/services'}>
                                    Услуги
                            </Link></li>
                        <li >
                            <Link href={'/Page/rates'}>
                                Тарифы и сроки
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
                        <li>
                            <Link href={''}>Контакты</Link>
                        </li>
                    </ul>

                    <div className={s.blockChat}>
                        <div className={s.Chat}>
                            <p>
                        Горячая линия по <br /> вопросам доставки
                            </p>
                    
                            <a href={"https://api.whatsapp.com/send?phone=905359749009"}>
                                <button> Написать</button>
                            </a>
                        </div>

                        <ul className={s.blockChatUl}>
                            <li><p>Дополнительно</p>
                            </li>
                            <li>
                                <Link href={'/Page/about_us'}>Отзывы клиентов</Link>
                            </li>
                            {data?.filter((res:any) => {

                                return res.name !== 'Китай' }
                            ).map((res:any)=> (
                                
                                <li>
                                    <Link    href={{
                                        pathname: '/shop',
                                        query: { id: JSON.stringify(res.id), name: res.name, img: res.image },
                                    }}>Магазины {res.name}
                                    </Link>
                                </li>
                                
                            ))}
                        </ul>

                    </div>
                </div>
                
                <div className={s.Sc}>
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
                </div>
            </div>
            
        </footer>
    )
}
export default Footer
