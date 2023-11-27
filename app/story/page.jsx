"use client"
import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'
import React, { useEffect, useState } from 'react'
import s from './page.module.scss'
import Link from 'next/link'
import { CardStory } from '@/components/Cards/CardStory/CardStory'

import { useDispatch, useSelector } from 'react-redux'
import { getTrac } from '../redux/features/trac-get'
import Loading from '@/components/Loading/Loading'
const page = () => {
    // const [data, setData] = useState([])
    const dispatch = useDispatch()
    const getItem = async () => {

    }
    // console.log(data);
    useEffect(() => {
        const localStorages = localStorage
        const returnFormData = JSON.parse(localStorages.getItem("uliId"));
        dispatch(getTrac(returnFormData))

    }, [])
    const data = useSelector(state => state.tracReducer)
    console.log(data.trac, 'data');
    return (
        <div>
            <HeaderProfile />
            {data.status === "failed" && <div className={`Contend ${s.error}`}> <p> {data.error}</p></div>}
            {data.status === "loading" && <Loading /> }
            {data.status === "success" && <div className={`Contend ${s.header}`}>
                <div>
                
                    <span> <p>Актуальные заказы</p> <Link href={'/deliveryToRussia'}>
                        Оформить доставку по РФ
                    </Link></span>
                    <CardStory data={data.trac} />   
                </div>
                <div>
                    <span><p>Предыдушие заказы</p></span>
                    <CardStory data={data.trac} />   
                </div>
            </div>}
        </div>
    )
}

export default page