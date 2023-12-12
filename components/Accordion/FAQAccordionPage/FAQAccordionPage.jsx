/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from 'react'
import s from './page.module.scss'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import cm from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { getFAQ } from '@/app/redux/features/getData'

export const FAQAccordionPage = () => {
    const [state, setstate] = React.useState(99)
    const [isLoding, setIsLoding] = React.useState(false)
    const onClick = (id) => {
        if (id === state) {
            setstate(99)
        } else (
            setstate(id)
        )
    }
    const dispatch = useDispatch()
    useEffect(() => {  
        dispatch(getFAQ())
    }
    , [])
    const {status,FAQData,error} = useSelector((state) => state.consolidationReducer)
    
    return (
        <div className={s.header}>
            {status === 'loading' ? <div>loading...</div> : null}
            {status === 'failed' ? <div>{error}</div> : null}
            {status === 'success' ? (
                <div className={s.FAQCArd}>
                    {FAQData !== undefined  ? (

                        FAQData?.map((res, i) => (
                            <div className={s.card} key={i} onClick={() => onClick(i)}>
                                <div className={s.block1}>
                                    <p>
                                        {res.question}
                                    </p>
                                    <span className={cm(s.svg, {
                                        [s.svgAcc]: state === i
                                    })}><FiChevronDown />
                                    </span>
                                </div>
                                <div className={cm(s.block2, {
                                    [s.block2Acc]: state === i
                                })}>
                                    <ul>
                                        <li dangerouslySetInnerHTML={{__html:res.answer}}/>
                                    </ul>
                                </div>
                            </div>
                        ))
                    ):null
                    }
                </div>
            ) : null}
        
        </div>
    )
}

//{ data?.data !== undefined  ? (
//     data?.data.map((res, i) => (
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