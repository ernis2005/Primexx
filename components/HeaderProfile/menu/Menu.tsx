import React from 'react'
import s from './page.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import Cookies from 'js-cookie'
interface Peson {
    setModule: React.Dispatch<React.SetStateAction<boolean>>
}
const Menu = ({ setModule }: Peson) => {
    const  ex = async () => {
        Cookies.remove('uliId');
        window.location.href = "/";
        window.location.reload();
    }
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
                    <li>
                        <a onClick={ex} className={s.liRi} href='/' >
                            Выйти из аккаунта
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu