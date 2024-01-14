import React from 'react'
import s from './page.module.scss'
import Link from 'next/link'
export const CardStory = ({data}) => {
    
    return (
        <div className={s.Cards}>
            {data.map((item, index) => {    
                return (
                    <Link 
                        href={item.status_label !== 'Выдан' ? `/story/${item.track_code}` : '#'}
                        key={index}>
                        <p># {item.track_code}</p>
                        <span>{item.status_label}</span>
                    </Link>
                )
            }) }
    

        </div>
    )
}
// <Link href={'/story/1'}>
//     <p># 123400000000</p>
//     <span>Доставлен в пункт выдачи</span>
// </Link>
// <Link href={'/story/1'}>
//     <p># 123400000000</p>
//     <span>Доставлен в пункт выдачи</span>
// </Link>
// <Link href={'/story/1'}>
//     <p># 123400000000</p>
//     <span>Доставлен в пункт выдачи</span>
// </Link>
// <Link href={'/story/1'}>
//     <p># 123400000000</p>
//     <span>Доставлен в пункт выдачи</span>
// </Link>
// <Link href={'/story/1'}>
//     <p># 123400000000</p>
//     <span>Доставлен в пункт выдачи</span>
// </Link>