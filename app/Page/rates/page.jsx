"use client"

import { BannerPages } from '@/components/BannerPages/BannerPages'
import React, { useEffect } from 'react'
import s from './page.module.scss'
import { Tabels2 } from '@/components/Tabels/TabelsPageRates/Tabels1/Tabels2'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import img from '../../../public/images/тарифы.png'
import { Tabels1 } from '@/components/Tabels/TabelsPageRates/Tabels1/Tabels1'
import { useDispatch, useSelector } from 'react-redux'

import Loading from '@/components/Loading/Loading'
import { getrate,  } from '@/app/redux/features/about-rates'
import {getservice} from '@/app/redux/features/about-rates'
// export const metadata = {
//     title: "Тарифы и сроки",
//     description: '',
//     icons: [
//         {
//             rel: "icon",
//             sizes: "any",
//             url: "/logo1.jpg",
//         },
//     ],
// }


const page = () => {
    // const rate =  getRate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getrate(),getservice())
    }, [dispatch])
    const { status, rate, error, additional_service } = useSelector((state) => state.rateSlice)

    if (rate===undefined || !rate?.length===0 || rate===null) {
        return  null
    }

    const uniqueData =rate.reduce((acc, current) => {
        const x = acc.find(item => item.country === current.country);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);


    return (
        <>
            <Header />
            <div style={{ marginTop: '124px' }} className={s.header}>
                <BannerPages
                    idPage={3}
                    name={'Тарифы и сроки'}
                    info={'Тарифы и сроки'}
                />
                <div className={`Contend ${s.contend}`}>
                    {status === 'loading' && <Loading />}
                    {status === 'failed' && <p style={{ height: 200 }} >{error}</p>}
                    {status === 'success' && <>
                        {uniqueData?.map((res, i) => (
                            <div>
                                <h2>{res.country_name}</h2>
                                <Tabels1 rate={res.country} />

                                <span dangerouslySetInnerHTML={{ __html: res.country_description }} />
                            </div>
                        ))}
                        <div>
                            <h2>Дополнительные услуги</h2>
                            <Tabels2 rate={additional_service} />
                            <p>Лира к рублю - 5 рублей.</p>
                        </div>
                    </>
                    }
                    
                </div>
            </div>
            <Footer />
        </>)}

export default page
// 
