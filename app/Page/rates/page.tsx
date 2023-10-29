import { BannerPages } from '@/components/BannerPages/BannerPages'
import React from 'react'
import s from './page.module.scss'
import { Tabels1 } from '@/components/Tabels/TabelsPageRates/Tabels1/Tabels1'
import { Tabels2 } from '@/components/Tabels/TabelsPageRates/Tabels1/Tabels2'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'

const page = () => {
    return (
        <>
            <Header />
            <div style={{ marginTop: '124px' }} className={s.header}>
                <BannerPages
                    name={'Тарифы и сроки'}
                    info={'Тарифы и сроки'}
                />
                <div className={`Contend ${s.contend}`}>
                    {/* <div><h2>Турция (Стамбул) - Россия (Москва)</h2></div> */}
                    <div><h2>США (Делавэр) - Россия (Москва)</h2><Tabels1 />
                        <span>
                            <p>Отправка товаров происходит по пятницам. <br />
                                Коробки от обуви отдельно 1$. Груз от 100 килограмм по 14$ </p>
                            <p>Стоимость указана до склада Москвы. Далее передаем посылку до местной курьерской службы,  <br /> таких как Сдэк, Boxberry, Яндекс и т.д.</p>
                        </span>

                    </div>
                    <div>
                        <h2>Дополнительные услуги</h2>
                        <Tabels2 />
                        <p>Лира к рублю - 5 рублей.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default page