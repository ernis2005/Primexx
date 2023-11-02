/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react'
import s from './page.module.scss'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import cm from 'classnames'

export const FAQAccordionPage = ({data}) => {
    const [state, setstate] = React.useState(99)
    const [isLoding, setIsLoding] = React.useState(false)
    const onClick = (id) => {
        if (id === state) {
            setstate(99)
        } else (
            setstate(id)
        )
    }
    setTimeout(() => {
        setIsLoding(true)
    }, 100)

    return (
        <div className={s.header}>
            {isLoding === true ? (

                data.map((res, i) => (
                    <div className={s.card} key={i} onClick={() => onClick(i)}>
                        <div className={s.block1}>
                            <p>
                                {res.name}
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
                                <li> {res.title}</li>
                            </ul>
                        </div>
                    </div>
                ))

            ) : null}

        </div>
    )
}
