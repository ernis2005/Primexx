"use client"
import React from 'react'
import s from './page.module.scss'
import { BannerPages } from '@/components/BannerPages/BannerPages'
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form"
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';

type Inputs = {
  example: string
  exampleRequired: string
}

const page = () => { 
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    // const onSubmit: SubmitHandler<Inputs> = (data) => ();
    
    return (
        <>
            <Header />
            <div style={{marginTop:'124px'}} className={s.Header}>
                <BannerPages
                    name={'Отследите товар'}
                    info={'Отследить товар легко и просто!'}
                />
                <div >
                    <form className={`Contend ${s.Input}`} 
                    // onSubmit={handleSubmit(onSubmit)}
                    >
                        <input defaultValue="Введите трек номер" {...register("example")} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <button type="submit">Отследить</button>
                    </form>
                </div>
                <div className={`Contend ${s.contends}`}>
                    <h2>
                    Информация о доставке</h2>
                    <div className={s.block2}>
                    </div>
                </div>

            </div>
            <Footer />
        </>
      
    )
}

export default page