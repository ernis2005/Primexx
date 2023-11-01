import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'
import React from 'react'
import s from './page.module.scss'
const page = () => {
    return (
        <div>
            <HeaderProfile />
            <div className={`Contend ${s.header}`}>'
                <h2>Оформить доставку по РФ</h2>
                <p>Данная форма предназначена для оформления заявки
                    на доставку из склада по Российской Федерации</p>
            </div>
        </div>
    )
}

export default page
