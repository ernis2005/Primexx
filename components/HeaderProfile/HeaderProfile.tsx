"use client"
import React, { useEffect } from 'react'
import { HeaderSvg } from '../svg/Header'
import s from './page.module.scss'
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import Menu from './menu/Menu'
import cm from 'classnames'
import { AutoLogin, useAppSelector } from '@/app/redux/features/auth-slice'
import { useDispatch } from 'react-redux'
export const HeaderProfile = () => {
    const  [module,setModule]= React.useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const localStorages: any =  localStorage  
        const  returnFormData =JSON.parse(localStorages.getItem("uliId"));
        if (returnFormData  !== null) {
            dispatch(AutoLogin(returnFormData))
        }
    }, [])

    return (
        <>
            <div className='Contend'>
                <nav className={s.nav}>
                    <div>
                        <Link href={'/'}>
                            <HeaderSvg />
                        </Link>

                    </div>
                    <ul>
                        <li> <Link href={'/order'}>Заказать выкуп</Link> </li>
                        <li> <Link href={'/track'}>
                        Отследить посылку
                        </Link></li>
                        <li>История посылок</li>
                        <li> <Link href={'/profile'}>
                        Профиль
                        </Link> </li>
                    </ul>
                    <button onClick={()=>setModule(true) }>
                        <AiOutlineMenu />
                    </button>

                </nav>

            </div>
            <div className={cm(s.accNone, {
                [s.acc]:module===true
            })}>
                <Menu  setModule={setModule}/>
            </div>

        </>

    )
}
