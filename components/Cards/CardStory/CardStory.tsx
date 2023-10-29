import React from 'react'
import s from './page.module.scss'
import Link from 'next/link'
export const CardStory = () => {
    
    return (
        <div className={s.Cards}>
            <Link href={'/story/1'}>
                <p># 123400000000</p>
                <span>Доставлен в пункт выдачи</span>
            </Link>
            <Link href={'/story/1'}>
                <p># 123400000000</p>
                <span>Доставлен в пункт выдачи</span>
            </Link>
            <Link href={'/story/1'}>
                <p># 123400000000</p>
                <span>Доставлен в пункт выдачи</span>
            </Link>
            <Link href={'/story/1'}>
                <p># 123400000000</p>
                <span>Доставлен в пункт выдачи</span>
            </Link>
            <Link href={'/story/1'}>
                <p># 123400000000</p>
                <span>Доставлен в пункт выдачи</span>
            </Link>

        </div>
    )
}
