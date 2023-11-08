"use client"
import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'
import React, { useEffect } from 'react'
import s from './page.module.scss'
import Link from 'next/link'
import { CardStory } from '@/components/Cards/CardStory/CardStory'

import { useDispatch } from 'react-redux'
import { getTrac } from '../redux/features/auth-slice'

const page =  () => {
    // const data = await getTrack()
    
    const dispatch = useDispatch()
    // let data = dispatch(getTrac())
    // console.log(data);
    useEffect(() => {

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const localStorages = localStorage
        const returnFormData = JSON.parse(localStorages.getItem("uliId"));
        if (returnFormData !== null) {
            let data = dispatch(getTrac(returnFormData))
            console.log(data.then(),'test');
        }
    }, [])
    // const returnFormData= await JSON.parse(localStorage.getItem("uliId"));
    // console.log(returnFormData,'const returnFormData= JSON.parse(localStorages.getItem("uliId"));');

    return (
        <div>
            <HeaderProfile />
            <div className={`Contend ${s.header}`}>
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
            </div>
        </div>
    )
}

export default page
