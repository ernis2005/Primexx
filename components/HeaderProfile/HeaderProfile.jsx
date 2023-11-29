"use client"
import React, { useEffect } from 'react'
import { HeaderSvg } from '../svg/Header'
import s from './page.module.scss'
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import Menu from './menu/Menu'
import cm from 'classnames'
import { useDispatch } from 'react-redux'
import { ugetUsers } from '@/app/redux/features/auth-slice'
export const HeaderProfile = () => {
    const  [module,setModule]= React.useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        const localStorages =  localStorage  
        const  returnFormData =JSON.parse(localStorages.getItem("uliId"));
        if (returnFormData  !== null) {
            dispatch(ugetUsers(returnFormData))
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
                        <li> 
                            <Link href={'/order'}>
                                Заказать выкуп
                            </Link> 
                            </li>
                        <li> 
                            <Link href={'/track'}>
                        Отследить посылку
                            </Link>
                        </li>
                        <li> 
                            <Link href={'/story'}>
                                История посылок
                            </Link> 
                        </li>
                        <li> 
                            <Link href={'/profile'}>
                                    Профиль
                            </Link> 
                        </li>
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
