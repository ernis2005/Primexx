import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'
import React from 'react'
import s  from './page.module.scss'
import Link from 'next/link'
import { CardStory } from '@/components/Cards/CardStory/CardStory'

const page = () => {
    return (
        <div>
            <HeaderProfile />
            <div className={`Contend ${s.header}`}>
                <div>
                    <span> <p>Актуальные заказы</p> <Link href={'#'}>
                    Оформить доставку по РФ
                    </Link></span>
                    <CardStory/>
                </div>
                <div>
                    <span><p>Предыдушие заказы</p></span>
                    <CardStory/>
                </div>
            </div>
        </div>
    )
}

export default page
