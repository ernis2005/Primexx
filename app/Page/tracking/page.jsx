"use client"
import React, { useState } from 'react'
import s from './page.module.scss'
import { BannerPages } from '@/components/BannerPages/BannerPages'

import { useForm } from "react-hook-form"
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';
import ItemsStory from '@/components/ServicesPages/ItemsStory/ItemsStory';
import { getBaseparcelsId } from '@/app/getData/getData';


const page = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
     const  [data ,setData] = useState()
    const [loading,setLoading] = useState(false)
const onSubmit =  (data) => {

   const dataBase =  getBaseparcelsId(data.example)
 dataBase.then((res)=> setData(res))
 setLoading(true)
  
};
console.log(data);

    return (
        <>
            <Header />
            <div className={`top ${s.Header}`}>
                <BannerPages
                    name={'Отследите товар'}
                    info={'Отследить товар легко и просто!'}
                />

                <form className={`Contend ${s.Input}`}
                onSubmit={handleSubmit(onSubmit)}
                >
                    <input placeholder="Введите трек номер" {...register("example")} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button type="submit">Отследить</button>
                </form>
                {loading === true  ? (
                     <p>
                        data ok
                     </p>
                ): (<p> loading...</p>)
                }

                {/* <div className={`Contend ${s.contends}`}>
                    <h2>
                        Информация о доставке</h2>
                    <ItemsStory/>

                </div> */}

            </div>
            <Footer />
        </>

    )
}

export default page