"use client"
import React, { use, useEffect, useState } from 'react'
import s from './page.module.scss'
import { HeaderSvg } from '@/components/svg/Header'
import { AiOutlineMenu } from 'react-icons/ai'
import { HeaderProfile } from '@/components/HeaderProfile/HeaderProfile'

import { set, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Modal } from '@mui/material'
import { fetchPasswordPatch } from '../redux/features/password-patch'
import {saveChanges} from '../redux/features/save-changes'
import cm  from 'classnames'
import Image from 'next/legacy/image'


const profile = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const  [page , setPage] = useState(1)
    const  [newPassword , setnewPassword] = useState()
    const [oldPassword , setoldPassword] = useState()
    useEffect(() => {    
        if(open === true){
            document.body.style.overflow = 'hidden'
        }
    }, [open])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isDirty },
    } = useForm()
    const user = useSelector((state) => state.authReducer.value)
    const onSubmit = (data) => {   
        let  useUnfo = data

        if(useUnfo.name.length <= 1){
            useUnfo.name = user.name
        }
        if(useUnfo.tel.length <= 1){
            useUnfo.tel = user.tel
        }
        if(useUnfo.address.length <= 1){
            useUnfo.address = user.address
        }
        dispatch(saveChanges(useUnfo))
    }
    const style = {
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        p: 4,
    }
    const dispatch = useDispatch()
    const onPassword = () => {
        if(newPassword  ===  oldPassword){
            alert('Пароли не должны совпадать')
        } else if (newPassword !== oldPassword){
            setnewPassword('')
            setoldPassword('')
            dispatch(fetchPasswordPatch({oldPassword , newPassword}))
        }
    }
    const { status,error }  = useSelector((state) => state.passwordReducer)
    
    useEffect(()=> {
        if(status === 'success'){
            setOpen(false)
            document.body.style.overflow = 'auto'
        }   
    },[status])
    useEffect(()=> {
        if(status === 'failed'){
            const div = document.getElementById('error')
            setTimeout(() => {
                div.style.display = 'none'
            }, 3000);
        }
        if(status === 'success'){
            handleClose()    
        }
    },[status])
    return (
        <div>
            <HeaderProfile />
            <div className={`Contend ${s.blocks}`}>
                <div className={s.block1}>
                    <div className={s.code_logistic}>
                        <h2>Добро пожаловать,{user.name}</h2>
                        <p>Клиентский код: {user.code_logistic} </p>
                    
                    </div>    
                
                    <form className={` ${s.Input}`}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <span>
                            <p>Фамилия и имя</p>
                            <input defaultValue={`${user.name}`} {...register("name")} />
                        </span>
                        <span>
                            <p>Номер телефона</p>
                            <input  defaultValue={user.tel.replace(/^(\d{3})(\d{3})(\d{3})$/, '+996 ($1) $2-$3')}
                                {...register("tel")}   maxLength={11}/>
                        </span>
                        <span>
                            <p>Адрес  </p>
                            
                            <input defaultValue={`${user.address}`} {...register("address")} />
                        </span>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <button 
                            className={cm(s.button, isDirty && s.buttonActive)}
                            type="submit">Сохранить изменения</button>
                    
                    </form>
                    <button onClick={handleOpen} className={s.buttonPo} >Cменить пароль</button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <div className={s.module}>
                                {status === 'failed' && <p className={s.errors} id='error'>{error?.message}</p>
                                }
                                <input value={oldPassword} onChange={(e)=>setoldPassword(e.target.value)}  onInput={(e) => {
                                    const re = /[а-яА-ЯёЁ]/g;
                                    if (re.test(e.target.value)) {
                                        e.target.value = e.target.value.replace(re, '');
                                    }
                                }}  placeholder="Старый пароль" />
                                <input value={newPassword} onChange={(e)=>setnewPassword(e.target.value)}    
                                    onInput={(e) => {
                                        const re = /[а-яА-ЯёЁ]/g;
                                        if (re.test(e.target.value)) {
                                            e.target.value = e.target.value.replace(re, '');
                                        }
                                    }}
                                    placeholder="Новый пароль" />
                                <button onClick={()=>onPassword()}> 
                                Сохранить
                                </button>
                            </div>
                         
                        </Box>
                    </Modal>
                </div>
                <div className={s.block2}>
                    <h2>
                   Ваш адрес склада</h2>
                    <div className={s.countrys}>
                        <ul className={s.countrysUl}>
                            <li  onClick={()=>setPage(1)} className={cm( s.isActive, {
                                [s.countrysUlActive]: page === 1
                            })}>
                                <span><Image src={'/images/countrys/img1.jpg'} layout='fill' objectFit='cover'/></span>
                                <p>
                         США
                                </p>
                            </li>
                            <li  onClick={()=>setPage(2)} className={cm( s.isActive, {
                                [s.countrysUlActive]: page === 2
                            })}>
                                <span><Image src={'/images/countrys/iamg2.png'} layout='fill' objectFit='cover'/></span>
                                <p>Турция
                                </p>
                            </li>
                            <li  onClick={()=>setPage(3)} className={cm( s.isActive, {
                                [s.countrysUlActive]: page === 3
                            })}>
                                <span><Image src={'/images/countrys/img3.png'} layout='fill' objectFit='cover'/></span>
                                <p>
                                Китай
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={cm(s.PageCountrys ,{
                        [s.testActive]: page === 1
                    })}>
                        <p>467 Carson drive, Bear, Delaware(DE) ,19701, +13027722737</p>
                        <div className={s.testActiveUl}>
                            <p className={s.green}>На сайтах магазинов адрес заполняется <br/>
                        следующим образом:</p>
                            <ul>
                                <li>
                                    <h3>First Name (ваше имя):</h3>
                                    <p> {user.first_name}PR</p>
                                </li>
                                <li>
                                    <h3>Last Name (ваша фамилия):</h3>
                                    <p> {user.last_name}
                                    </p>
                                </li>
                                <li>
                                    <h3>Address line 1 (адрес склада):</h3>
                                    <p>467 Carson Drive {user.code_logistic}
                                    </p>
                                </li>
                                <li>
                                    <h3>Address line 2 (номер дома):</h3>
                                    <p>PR
                                    </p>
                                </li>
                                <li>
                                    <h3>City (город):</h3>
                                    <p>Bear
                                    </p>
                                </li>
                                <li>
                                    <h3>State (штат):</h3>
                                    <p>Delaware (DE)
                                    </p>
                                </li>
                                <li>
                                    <h3>Zip code (индекс):</h3>
                                    <p>19701
                                    </p>
                                </li>
                                <li>
                                    <h3>Phone (телефон):</h3>
                                    <p>+1 302 7722737
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={cm(s.PageCountrys ,{
                        [s.testActive]: page === 2
                    })}>
                    
                        <p>Türkiye, İstanbul, Hemşire Sokak 17/C, Fatih Kumpkapı, Nişanca mahallesi, 34130, +905359749009</p>
                        <div className={s.testActiveUl}>
                            <p className={s.green}>На сайтах магазинов адрес заполняется <br/>
                    следующим образом:</p>
                            <ul>
                                <li>
                                    <h3>Adynyz (ваше имя):</h3>
                                    <p>
                                        {user.first_name}PR
                                    </p>
                                </li>
                                <li>
                                    <h3>Soyadiniz (ваша фамилия):</h3>
                                    <p> <p> {user.last_name}
                                    </p>
                                    </p>
                                </li>
                                <li>
                                    <h3>Mahalle 1 (адрес склада):</h3>
                                    <p>Nisanca Mah
                                    </p>
                                </li>
                                <li>
                                    <h3>Adres 2 (номер дома):</h3>
                                    <p>Hemsire Sok 17/C {user.code_logistic}
                                    </p>
                                </li>
                                <li>
                                    <h3>Ilce (город):</h3>
                                    <p>Kumkapi/Fatih
                                    </p>
                                </li>
                                <li>
                                    <h3>Sehir (штат):</h3>
                                    <p>Istanbul
                                    </p>
                                </li>
                                <li>
                                    <h3>Posts kodu (индекс):</h3>
                                    <p>34130
                                    </p>
                                </li>
                                <li>
                                    <h3>Telefon (телефон):</h3>
                                    <p>+905359749009
                                    </p>
                                </li>

                                <li>
                                    <h3>Ulke (cтрана):</h3>
                                    <p>Turkiye
                                    </p>
                                </li>

                            </ul>
                        </div></div>
                    <div className={cm(s.PageCountrys ,{
                        [s.testActive]: page === 3
                    })}>
                    
                        {/* <p>467 Carson drive, Bear, Delaware(DE) ,19701, +13027722737</p> */}
                        <div className={s.testActiveUl}>
                            <p className={s.green}>На сайтах магазинов адрес заполняется <br/>
                    следующим образом:</p>
                            <ul>
                                <li>
                                    <h3>名 (ваше имя):</h3>
                                    {/* <p>
                                AkmoorPR
                                    </p> */}
                                </li>
                                <li>
                                    <h3>
                                    姓  (ваша фамилия):</h3>
                                    {/* <p>Nurueva
                                    </p> */}
                                </li>
                                <li>
                                    <h3>地址第一行 (адрес склада):</h3>
                                    {/* <p>467 Carson Drive
                                    </p> */}
                                </li>
                                <li>
                                    <h3>地址行2 (номер дома):</h3>
                                    {/* <p>PR
                                    </p> */}
                                </li>
                                <li>
                                    <h3>城市 (город):</h3>
                                    {/* <p>Bear
                                    </p> */}
                                </li>
                                <li>
                                    <h3>狀態 (штат):</h3>
                                    {/* <p>Delaware (DE)
                                    </p> */}
                                </li>
                                <li>
                                    <h3>郵遞區號 (индекс):</h3>
                                    {/* <p>19701
                                    </p> */}
                                </li>
                                <li>
                                    <h3>電話 (телефон):</h3>
                                    {/* <p>+1 302 7722737
                                    </p> */}
                                </li>

                            </ul>
                        </div></div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default profile
// {status === 'failed' && <div>{error.messeg}</div>
// }