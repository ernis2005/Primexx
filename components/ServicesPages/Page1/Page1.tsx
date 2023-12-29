import React from 'react'
import s from './page.module.scss'
import Image from 'next/legacy/image'
import {FAQAccordionId} from '../../Accordion/FAQAccordionId/FAQAccordionId'
export const Page1 = () => {
    return (
        <div className={`Contend ${s.header}`}>
            <div className={s.info}>
                <h2>Бесплатный склад</h2>
                <p>PRIMEX — сервис доставки товаров из зарубежных магазинов</p>
                <p className={s.p2}>Если у вас есть зарубежная банковская карта, совершайте самостоятельную покупку с помощью нашей услуги Mail forwarding.</p>
                <div className={s.Cardss}>
                    <div className={`${s.images}`}>
                        {/* <Image className={s.img}  src={'/images/uslug1.jpg'} layout='fill' objectFit='cover'/> */}
                        <div>
                            <p>Вы получаете свой личный адрес в США и Турции для покупок. Заказываете товары с разных сайтов, направляя их на наш склад.</p>
                            <p>Для этого Вам нужно всего лишь указать адрес нашего склада при оформлении заказа в интернет-магазине!</p>
                        </div>
                    </div>
                    <div className={`${s.images} `}>
                        {/* <Image className={s.img}  src={'/images/uslug2.jpg'} layout='fill' objectFit='cover' /> */}
                        <div>
                            <p>Мы принимаем ваши посылки и при необходимости, объединяем их в одну отправку. Это позволит вам сэкономить еще больше на доставке! Затем мы осуществляем пересылку прямо к вам домой.</p>
                            <p>А стоимость доставки приятно удивит вас. Также отслеживайте свои заказы в режиме реального времени в личном кабинете.</p>
                        </div>
                    </div>
                </div>
            </div>
            <span className={s.faq}>
                <h2>Часто задаваемые вопросы</h2>
                <FAQAccordionId id={1}  />
            </span>
            <div></div>
        </div>
    )
}
