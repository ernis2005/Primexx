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

const profile = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
        formState: { errors },
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
            <div className='Contend'>
                <div className={s.block1}>
                    <h2>Добро пожаловать,{user.name}</h2>
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
                        <button type="submit">Сохранить изменения</button>
                    
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
            </div>
        </div>
    );
}

export default profile
// {status === 'failed' && <div>{error.messeg}</div>
// }