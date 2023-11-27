"use client"
import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'
import React, { useEffect, useState } from 'react'
import s from './page.module.scss'
import Link from 'next/link'
import { CardStory } from '@/components/Cards/CardStory/CardStory'

import { useDispatch, useSelector } from 'react-redux'
import { getTrac } from '../redux/features/trac-get'

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
    console.log(data);
    return (
        <div>
            <HeaderProfile />
            {data.status === "loading" && <div>loading...</div>}
            {data.status === "failed" && <div className={`Contend ${s.error}`}> <p> {data.error}</p></div>}
            {data.status === "success" && <div className={`Contend ${s.header}`}>
                <div>
                    <span> <p>Актуальные заказы</p> <Link href={'/deliveryToRussia'}>
                        Оформить доставку по РФ
                    </Link></span>
                    <CardStory />   
                </div>
                <div>
                    <span><p>Предыдушие заказы</p></span>
                    <CardStory />
                </div>
            </div>}
        </div>
    )
}

export default page
