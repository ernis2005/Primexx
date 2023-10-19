"use client"
import React from 'react'
import s from './page.module.scss'
import {FiChevronDown, FiChevronUp}  from 'react-icons/fi'
import cm from 'classnames'
export const FAQAccordionPage = () => {
    const [state, setstate] = React.useState<number>(99)
    const onClick = (id: number) => {
        if (id === state) {
            setstate(99)
        } else (
            setstate(id)
        )
    }
    const  data = [1,2,3]
    return (
        <div className={s.header}>
            {data.map((res,i)=> (
                <div className={s.card} onClick={()=>onClick(i)}>
                    <div className={s.block1}>
                        <p>
  Часто задаваемый вопрос
                        </p>
                        <span className={cm(s.svg ,{
                            [s.svgAcc] : state ===i
                        })}><FiChevronDown/>
                        </span>
      
                    </div>
                    <div className={cm(s.block2,{
                        [s.block2Acc]: state ===i
                    })}>
                        <ul>
                            <li><p>1.</p> <span>Перед тем, как начать создавать FAQ, нужно определить, какие вопросы могут возникнуть у ваших пользователей. Это может быть сложно, потому что вы не знаете, что именно они хотят узнать. Однако, вы можете использовать свой опыт и знания, чтобы предположить, какие вопросы могут быть наиболее актуальными.</span></li>
                            <li><p>2.</p> <span>После того, как вы определили основные вопросы, создайте структуру для вашего FAQ. Обычно FAQ состоит из нескольких разделов, каждый из которых отвечает на определенный вопрос. Например, вы можете создать разделы для общих вопросов, технических вопросов, вопросов о ценах и т. д.</span></li>
                            <li><p>3.</p> <span>Теперь, когда у вас есть структура, можно приступить к написанию ответов на вопросы. Важно, чтобы ответы были точными и полными, но при этом не слишком длинными.</span></li>
                        </ul>
                    </div>
                </div> 
            ))}
          
           
        </div>
    )
}
