import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'
import React from 'react'
import s from './page.module.scss'
import { Svg10 } from '@/components/svg/Header'
import ItemsStory from '@/components/ServicesPages/ItemsStory/ItemsStory'
const page = () => {
    return (
        <div>
            <HeaderProfile />

            <div className={`Contend ${s.block}`}>
                <h2>Информация о доставке</h2>
                <ItemsStory/>
            </div>
        </div>
    )
}

export default page
