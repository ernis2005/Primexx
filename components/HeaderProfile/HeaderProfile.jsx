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
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'
export const HeaderProfile = () => {
    const [module, setModule] = React.useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        const myData = Cookies.get('uliId');
        
        if (myData !== undefined) {
            dispatch(ugetUsers(myData))
            
        }
    }, [])

    const page = usePathname();
    const  ex = async () => {
        Cookies.remove('uliId');
        window.location.href = "/";
        window.location.reload();
    }

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
                            <Link className={cm(s.dddd,{
                                [s.accLinc] : page === '/order'
                            })} href={'/order'}>
                                Заказать выкуп
                            </Link>
                        </li>
                        <li>
                            <Link className={cm(s.ddd,{
                                [s.accLinc] : page === '/track'
                            })} href={'/track'}>
                                Отследить посылку
                            </Link>
                        </li>
                        <li>
                            <Link className={cm(s.ff , {
                                [s.accLinc] : page === '/story'
                            })} href={'/story'}>
                                История посылок
                            </Link>
                        </li>
                        <li>
                            <Link className={cm(s.fff , {
                                [s.accLinc] : page === '/profile'
                            })} href={'/profile'}>
                                Профиль
                            </Link>
                        </li>
                        <li>
                            <a onClick={ex} className={s.liRi} href='/' >
                            Выйти из учетной записи
                            </a>
                        </li>
                    </ul>
                    <button onClick={() => setModule(true)}>
                        <AiOutlineMenu />
                    </button>

                </nav>

            </div>
            <div className={cm(s.accNone, {
                [s.acc]: module === true
            })}>
                <Menu setModule={setModule} />
            </div>

        </>

    )
}
