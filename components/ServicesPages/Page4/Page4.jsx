
"use client"
import React, { useEffect, useState } from 'react'
import s from './page.module.scss'
import { FAQAccordionPage } from '@/components/Accordion/FAQAccordionPage/FAQAccordionPage'

import { SwiperServicesPages4 } from '@/components/swiper/SwiperServicesPages4/SwiperServicesPages4'
import { getFAQ } from '@/app/getData/getData'
import { useForm } from 'react-hook-form'
import Image from 'next/legacy/image'
import { useDispatch, useSelector } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { InputMask } from '@react-input/mask'
import { postConsolidationS, postConsolidationss } from '@/app/redux/features/consolidation-slice'
import { FAQAccordionId } from '@/components/Accordion/FAQAccordionId/FAQAccordionId'
export const Page4 = () => {
  
  
    const { register,  reset, handleSubmit, watch, formState: { errors } } = useForm(
    );
    const dispatch = useDispatch()
    const onSubmit = (data) =>  {
        dispatch(postConsolidationS(data))
        reset();
    } 
    const DATA  = useSelector((state) => state.consolidationSlice)  
    useEffect(()=> {
        if (DATA.status === 'success') {
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
        if (DATA.status === 'failed') {
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
        
    },[DATA.status])
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
            <div className={s.header}>
                <span className={s.span}>
                    <h2>
                    Консолидация
                    </h2>
                    <p className={s.p2}>Компания ‘’Primex’’, готова предложить для карго компаний B2B решение.</p>
                    <p className={s.p2}> Вы занимаетесь доставкой зарубежных посылок и вам нужен склад в Турции и США с опытными <br/> сотрудниками для приема посылок ваших клиентов? У нас есть решение!</p>
                </span>
                <div className={s.block12}>
                    <h2 >Мы можем предложить</h2>
             
                    <SwiperServicesPages4/>
           

                </div>
                <div className={s.block1}>
                    <div>
                        <h2>  Получить консультацию  </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder='Фамилия и имя' {...register("name", { required: true })} />
       
                            <InputMask
                                placeholder='Номер телефона'
                                mask="+7 (___) ___-__-__"
                                {...register("phone", { required: true })}
                                replacement={{ _: /\d/ }}
                            />
                            <button type='submit' style={{background:"#fff"}}>Отправить</button>
                        </form>
                        <p>После заполнения заявки, байер сам с вами свяжется с вами <br />
    в течении 2-х часов в рабочее время.</p>
   
                    </div>
                </div>
                <div className={s.block222}>
                    <h2 className={s.h22}>Часто задаваемые вопросы</h2>
                    <FAQAccordionId id={'Консолидация'}  />
                </div>
            
            
            </div>
        </>
        
    )
}
