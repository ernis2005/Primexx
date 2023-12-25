import { FromInput } from '@/components/FromInput/FromInput'
import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'
import React from 'react'
import s from './page.module.scss'
import FromInputPage3 from '@/components/ServicesPages/Page3/FromInputPage3/FromInputPage3'
const page = () => {
    return (
        <div>
            <HeaderProfile />
            <div className={`Contend ${s.block}`}>
                <h2>Оформить выкуп</h2>
                <div>
                    <FromInputPage3 colors={"#009345"} textcolor={"#fff"}/>
                </div>
                <p>После заполнения заявки, байер сам с вами свяжется с вами <br />
                    в течении 2-х часов в рабочее время</p>
            </div>
        </div>
    )
}

export default page