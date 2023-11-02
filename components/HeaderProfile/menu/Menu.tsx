import React from 'react'
import s from './page.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
interface Peson {
    setModule: React.Dispatch<React.SetStateAction<boolean>>
}
const Menu = ({ setModule }: Peson) => {
    return (
        <div className={s.module}>
            <div className={s.block1}>
                <button onClick={() => setModule(false)}>
                    <AiOutlineClose />
                </button>
                <ul>
                    <li> <Link href={'/order'}>Заказать выкуп</Link> </li>
                    <li> <Link href={'/track'}>
                        Отследить посылку
                    </Link></li>
                    <li> <Link href={'/story'}>История посылок</Link> </li>
                    <li> <Link href={'/profile'}>
                        Профиль
                    </Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu