import React from 'react'
import s from './loadin.module.scss'
import { HeaderSvg, Svg10 } from '../svg/Header'
const Loading = () => {
    return (
        <div className={s.Block2} >
            <span className={s.loader} >
                <HeaderSvg />
                <span className={s.loadersd} ></span>
            </span>
        </div>
    )
}

export default Loading
