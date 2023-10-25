import React from 'react'
import s from './page.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
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
                    <li> Заказать выкуп</li>
                    <li>Отследить посылку</li>
                    <li>История посылок</li>
                    <li>Профиль</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu