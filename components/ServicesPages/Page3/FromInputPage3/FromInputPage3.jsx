/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react'
import s from './page.module.scss'

import { useForm } from 'react-hook-form'
import cm from 'classnames'
import { postPurchase_ordercreat } from '@/app/getData/getData'
import { useRouter } from 'next/navigation'

// type Inputs = {
//     email: string,
//     password:string,
//     exampleRequired: string
// }

const FromInputPage3 = ({colors,textcolor}) => {
    const [index, setIndex]= useState(1)
    const [counterName, setCounterName] = useState( {id:1,name:'Турция'})
    const  dataInput =[
        { name:"url",title:"Ссылка на товар: ebay.com/itm/284526855467 ", length:17 },
        { name:"size",title:"Размер товара: XS, M, L, 37, 38 ", length:15 },
        { name:"color",title:"Цвет: Зеленый, White, Ocean Blue ", length:6},
        { name:"quantity",title:"Количество: 1, 20, 48 ", length:12},
        { name:"fullname",title:"ФИО: Булгаков Александр Петрович ", length:5},
        { name:"contact",title:"Контакты: +8 (499) 123-45-67 ", length:10},
        { name:"comment",title:"Комментарии: Прошу упаковать по крепче ", length:13},
    ]
    const onClicks = (index)=> {
        setIndex(index.id)
        setCounterName(index.name)
    }
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) =>  {
        postPurchase_ordercreat(data,counterName)
        reset();
    }
    const watchAllFields = watch();

    return (
        <><form className={s.contend} onSubmit={handleSubmit(onSubmit)}>
            <span className={s.tabs}>
                <div style={{cursor:'pointer'}} className={cm(s.block1, {
                    [s.block2]: index === 1
                })} onClick={()=>onClicks(
                    {id:1,name:'Турция'}
                )}  >Турция</div>
                <div style={{cursor:'pointer'}}
                    className={cm(s.block1, {
                        [s.block2]: index === 2
                    })} onClick={()=>onClicks(
                        {id:2,name:'Америка'}
                    )} >Америка</div>
            </span>
            <div>
                {dataInput.map((res,i) => (
                    <input key={i} placeholder={res.title} {...register(`${res.name}`)} />
                ))}
                {errors.exampleRequired && <span>This field is required</span>}
                <button className={s.btn_white} style={{backgroundColor:colors,color:textcolor}}  type="submit" disabled={!watchAllFields.comment}>Отправить заявку</button>
            </div>
        </form>
        </>
    )
}
export default FromInputPage3