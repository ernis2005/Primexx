import React from 'react'
import s from './page.module.scss'
import { BannerPages } from '@/components/BannerPages/BannerPages'
const page = () => {
    return (
        <div className={s.Header}>
            <BannerPages
                name={'Отследите товар'}
                info={'Отследить товар легко и просто!'}
            />
            <div className={`Contend ${s.Input}`}>
                <input placeholder="Введите трек номер" type="text" />
                <button>Отследить</button>
            </div>
            <div className={`Contend ${s.contends}`}>
                <h2>
                    Информация о доставке</h2>
                <div className={s.block2}>
                </div></div>

        </div>
    )
}

export default page