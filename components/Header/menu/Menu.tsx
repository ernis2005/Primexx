import React from 'react'
import s from './page.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
interface Peson {
    setModule: React.Dispatch<React.SetStateAction<boolean>>
}
const Menu = ({setModule}: Peson) => {
    return (
        <div className={s.module}>
            <div className={s.block1}>
                <button onClick={()=>setModule(false)}>
                    <AiOutlineClose/>
                </button>
                <ul>
                    <ul >
                        <li>
                            <Link href={'/'}>
                            Главная
                            </Link>
                        </li>
                        <li>
                            <Link href={'/page/services'}>
                            Услуги
                            </Link></li>
                        <li>
                            <Link href={'/page/rates'}>
                            Тарифы
                            </Link></li>
                        <li>
                            <Link href={'/page/news'}>
                            Новости
                            </Link></li>
                        <li>
                            <Link href={'/page/FAQ'}>
                            F.A.Q.
                            </Link></li>
                        <li>
                            <Link href={'#'}>
                            О нас
                            </Link></li>
                        <li>
                            <Link href={'#'}>
                            Контакты
                            </Link></li>
                    </ul>
                </ul>
                <div className={s.block2}>
                    hello
                </div>
            </div>
        </div>
    )
}

export default Menu