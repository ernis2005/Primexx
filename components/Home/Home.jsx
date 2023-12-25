"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { CardsBlock1 } from '../Cards/CardsBlock1/CardsBlock1'
import { CardsBlock2 } from '../Cards/CardsBlock2/CardsBlock2'
import { CardsBlock3 } from '../Cards/CardsBlock3/CardsBlock3'
import Image from 'next/legacy/image'
import RegisterButton from '../RegisterButton/RegisterButton'
import { FromInput } from '../FromInput/FromInput'
import Header from '../Header/page'
import s from '../../app/page.module.scss'
import Footer from '../Footer/page'
import { useDispatch, useSelector } from 'react-redux'
import { getCardPag1, getCountry, getRateTime } from '@/app/redux/features/about-home'

import { redirect } from 'next/navigation'
import { CardsBlock6 } from '../Cards/CardsBlock6/CardsBlock6'
import loading from './loading'
import Loading from './loading'
import { TabelsBlock5 } from '../Tabels/TabelsBlock5/page'


export default function HomeComponent() {

    const dispath = useDispatch()
    useEffect(()=> {
        dispath(getCardPag1())
        dispath(getCountry())
        dispath(getRateTime())
    },[dispath])
    
    const {card,rateTime,status,country,error} = useSelector((state) => state.aboutHomeSlice)
    if (status=== 'failed') {
        redirect('/404')
    }
    if (status === 'loading') {
        return <Loading/>
    }
    return status !== 'loading' && (
        <div>
          
            <div className={s.top}></div>
            {status === 'loading' && <Loading/>}
            {status === 'failed' && <p>{error}</p>}
            {status === 'success' && 
            
            <><Header /><main className={`top ${s.main}`}>

                <div className={s.block1}>
                    <div className={s.bg}>
                        <Image
                            src={'/images/bg.png'}
                            layout="fill"
                            objectFit="cover"
                            alt="hwllo" />
                    </div>
                    <div className={` Contend ${s.block1Info}`}>
                        <h1>
                                Доставка от 5 дней <br />
                                из Турции и Америки
                        </h1>
                        <p>Наши решения дарят доступ к растущему миру возможностей</p>
                        <button> <Link href={'/Page/services'}>Хочу заказать</Link> </button>
                    </div>
                </div>
                <div className={`Contend ${s.block2}`}>
                    <p>Мы являемся сервисом по доставке ваших любимых брендов <br />
                            из любого американского или турецкого сайта и маркетплейса во все регионы России.
                    </p>
                </div>
                <CardsBlock1 data={card.data} />
                <div></div>
                <div className={s.block3}>

                    <div className={s.block2Image}>
                        <h3>Преимущества заказа из зарубежных сайтов</h3>
                        <p className={s.block3p}>Что делают привлекательными онлайн шоппинг на зарубежных сайтах?</p>
                    </div>
                    <div className={` Contend ${s.block2Info}`}>
                        <CardsBlock2 />
                    </div>
                </div>
                <div></div>
                <div className={`Contend ${s.block3}`}>
                    <h3>
                            Этапы работы
                    </h3>
                    <div>
                        <CardsBlock3 />
                    </div>

                </div>
                <div></div>
                <div className={`Contend  ${s.block4} `}>
                    <h3>
                            Хотите выкупить товар самостоятельно <br />
                        <span>

                                и у вас есть зарубежная карта
                        </span>? <br /></h3>
                    <p>
                            Зарегистрируйтесь и получите адреса складов в <span>Турции</span>
                            и   <span>Америке</span> <br />
                            для самостоятельных покупок
                    </p>
                    <div className={s.block4Images}>
                        <Image
                            src={'/images/visa.svg'}
                            layout="fill"
                            alt="hwllo" />
                    </div>
                    <span>Данные адреса вы используете для доставки в интернет-магазинах, а мы получаем ваши посылки и пересылаем их вам.</span>
                    <RegisterButton />
                </div>
                <div className={` Contend ${s.block5}`}>
                    <h3>Тарифы и сроки</h3>
                    <div style={{ overflow: 'hidden' }}>
                        <TabelsBlock5 data={rateTime.data} />
                    </div>
                    <button>
                        <Link href={'/Page/rates'}>
                                Узнать подробнее
                        </Link>
                    </button>
                </div>
                <div className={`  ${s.block6}`}>
                    <h3>Магазины</h3>
                    <p className={s.testasd}>Доставляем из 3х стран:</p>
                    <div className={s.block6Card}>
                        <CardsBlock6 data={country.data} />
                    </div>

                </div>
                <div className={s.block7}>
                    <div className={s.block7Info}>
                        <h2>Ваш личный байер в мире
                                международных покупок</h2>
                        <p>Служба Primex поможет легко приобрести товары в зарубежных интернет-магазинах</p>
                        <p>Выкупим товары с сайтов за вас в тот же день - <span> быстро, легко и доступно</span></p>
                        <p className={s.xf23}>После заполнения заявки, байер сам
                                с вами свяжется с вами в течении
                                2-х часов в рабочее время.</p>
                    </div>
                    <div className={s.fromInput}><FromInput textcolor={"#001A0C"} colors={"#F5F5F5"} /></div>
                    <p className={s.fromInputp}>После заполнения заявки, байер сам <br />
                            с вами свяжется  <br />с вами в течении
                            2-х часов в рабочее время.</p>
                </div>
                <div className={s.topTop}></div>
            </main><Footer /></> }
        </div>
    )
}
