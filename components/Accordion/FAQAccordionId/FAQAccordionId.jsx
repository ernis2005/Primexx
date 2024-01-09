/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from 'react'
import s from './page.module.scss'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import cm from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { getFAQ ,getFAQId} from '@/app/redux/features/getData'

export const FAQAccordionId = (id) => {

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
    const {status,FAQData} = useSelector((state) => state.consolidationReducer)
    return (
        <div className={s.header}>
            {status === 'loading' ? <div style={{height:200}}>loading...</div> : null}
            {status === 'failed' ? <div style={{height:200}}> error</div> : null}
            {status === 'success' ? (
                <div className={s.FAQCArd}>
                    {FAQData.filter((res) => res.service_title === id.id)?.length !== 0  ? (
                
                        FAQData.filter((res) => res.service_title === id.id).map((res, i) => (
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
                    ):(<h1 style={{height:'30vh',display:'flex',justifyContent:'center',alignItems:'center'}}> нет вопросов</h1>)
                    }
                </div>
            ) : null}
        </div>
    )
}
