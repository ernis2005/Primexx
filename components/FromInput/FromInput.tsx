/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react'
import s from './page.module.scss'
import type { SubmitHandler} from 'react-hook-form';
import { useForm } from 'react-hook-form'
import cm from 'classnames'
// type Inputs = {
//     email: string,
//     password:string,
//     exampleRequired: string
// }
interface colorType {
    colors:string
}
export const FromInput = ({colors}:colorType) => {
    const [index, setIndex]= useState(1)
    const  dataInput =[
        { name:"link",title:"Ссылка на товар: ", length:17 },
        { name:"Size",title:"Размер товара: ", length:15 },
        { name:"color",title:"Цвет: ", length:6},
        { name:"Quantity",title:"Количество: ", length:12},
        { name:"fullName",title:"ФИО: ", length:5},
        { name:"contacts",title:"Контакты: ", length:10},
        { name:"comments",title:"Комментарии: ", length:13},
    ]
    const onClicks = (index:number)=> {
        setIndex(index)
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<any>()
    const onSubmit: SubmitHandler<any> = (data) =>  {

        
    }
    return (
        <><form className={s.contend} onSubmit={handleSubmit(onSubmit)}>
            <span className={s.tabs}>
                <div style={{cursor:'pointer'}} className={cm(s.block1, {
                    [s.block2]: index === 1
                })} onClick={()=>onClicks(1)} >Турция</div>
                <div style={{cursor:'pointer'}}
                    className={cm(s.block1, {
                        [s.block2]: index === 2
                    })} onClick={()=>onClicks(2)} >Америка</div>
            </span>
            <div>
                {dataInput.map((res,i) => (
                    <input key={i} placeholder={res.title} {...register(`${res.name}`)} />
                ))}
                {errors.exampleRequired && <span>This field is required</span>}
                <button type="submit" style={{ backgroundColor: `${colors}`, color:'#fff'  }}>Отправить заявку</button>
            </div>
        </form>
        </>
    )
}
