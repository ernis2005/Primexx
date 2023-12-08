/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react'
import s from './page.module.scss'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import cm from 'classnames'

export const FAQAccordionPage = (data) => {

    const [state, setstate] = React.useState(99)
    const [isLoding, setIsLoding] = React.useState(false)
    const onClick = (id) => {
        if (id === state) {
            setstate(99)
        } else (
            setstate(id)
        )
    }

    
    if(data === undefined) return null
    return (
        <div className={s.header}>
            <h1 style={{height:"250px"}}>asdas1d</h1>

        </div>
    )
}

//{ data.data !== undefined  ? (
//     data.data.map((res, i) => (
//         <div className={s.card} key={i} onClick={() => onClick(i)}>
//             <div className={s.block1}>
//                 <p>
//                     {res.question}
//                 </p>
//                 <span className={cm(s.svg, {
//                     [s.svgAcc]: state === i
//                 })}><FiChevronDown />
//                 </span>
//             </div>
//             <div className={cm(s.block2, {
//                 [s.block2Acc]: state === i
//             })}>
//                 <ul>
//                     <li dangerouslySetInnerHTML={{__html:res.answer}}/>
//                 </ul>
//             </div>
//         </div>
//     ))
// ):null
// }