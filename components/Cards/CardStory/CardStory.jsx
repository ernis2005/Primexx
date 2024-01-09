import React from 'react'
import s from './page.module.scss'
import Link from 'next/link'
export const CardStory = ({data}) => {
    console.log(data,'carsdData');
    
    return (
        <div className={s.Cards}>
            {data.map((item, index) => {    
                return (
                    <Link 
                        href={item.status_label !== 'Выдан' ? `/story/${item.track_code}` : '#'}
                        
                        key={index}>
                        {item.is_ordered === false ? <p></p> :(<spna className={s.is_ordered}>Доставка на дом оформлена <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M11.25 7.5L8.25 10.5L6.75 9M9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9C15.75 12.7279 12.7279 15.75 9 15.75Z" stroke="#009345" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></spna>)}
                        
                        <spma>
                            <p># {item.track_code}</p>
                            <span>{item.status_label}</span>
                        </spma></Link>
                        
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