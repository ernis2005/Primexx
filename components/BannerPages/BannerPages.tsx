import React from 'react'
import s from './page.module.scss'
interface Person {
    name:string,
    info:string
}
export const BannerPages = ({name,info}:Person) => {
    return (
        <div className={s.Header}>
            <div className={`Contend ${s.block}`}>
                <h2>{name}</h2>
                <p>{info}</p>
            </div>
        </div>
    )
}
