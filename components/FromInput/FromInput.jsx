/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect, useState } from 'react'
import s from './page.module.scss'

import { useForm } from 'react-hook-form'
import cm from 'classnames'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { postPurchase_ordercreats } from '@/app/redux/features/purchaseOrdercreat'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// type Inputs = {
//     email: string,
//     password:string,
//     exampleRequired: string
// }

export const FromInput = ({colors,textcolor}) => {
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
        setCounterName(index)
    }
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    
    const  dispath  = useDispatch()
    const onSubmit = (data) =>  {
        
        const datas = [data,counterName]
        dispath(postPurchase_ordercreats(datas))
        reset();
    }
    const watchAllFields = watch();
    const dATA = useSelector((state) => state.purchaseOrdercreatSlice)
    useEffect(()=> {
        if (dATA.status  === 'success') {
            // Error('Вы успешно отправили запрос')
            toast.success('Успешно отправлено ', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        if (dATA.status  === 'failed') {
            toast.error('Не удалось отправить', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        
    },[dATA.status ])
    return (
        <>
            <ToastContainer
                className={s.ToastContainer}
                autoClose={1000}
                limit={1}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <form className={s.contend} onSubmit={handleSubmit(onSubmit)}>
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
