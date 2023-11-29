import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'
import React from 'react'
import s from './page.module.scss'
import { Svg10 } from '@/components/svg/Header'

import { getBaseparcelsId } from '@/app/getData/getData'
import ItemsStory from '@/components/ServicesPages/ItemsStory/ItemsStory'

const page = async ({ params: { id } }) => {
    const getDatas = await getBaseparcelsId(id)
    console.log(getDatas[0], 'getDatas'    );
    
    return (
        <div>
            <HeaderProfile />
            <div className={`Contend ${s.block}`}>
                <h2>Информация о доставке</h2>
                <ItemsStory data={getDatas[0]}/>
            </div>
        </div>
    )
}

export default page
