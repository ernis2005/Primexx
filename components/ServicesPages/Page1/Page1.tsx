import React from 'react'
import s from './page.module.scss'
import Image from 'next/legacy/image'
import { FAQAccordionPage } from '@/components/Accordion/FAQAccordionPage/FAQAccordionPage'
export const Page1 = () => {
    return (
        <div className={`Contend ${s.header}`}>
            <div className={s.info}>
                <h2>Бесплатный склад</h2>
                <p>PRIMEX — сервис доставки товаров из зарубежных магазинов</p>
                <p className={s.p2}>Если у вас есть зарубежная банковская карта, совершайте самостоятельную покупку с помощью нашей услуги Mail forwarding.</p>
                <div className={s.Cards}>
                    <div>
                        <Image  src={'/images/aa22.jpeg'} layout='fill' objectFit='cover'/>
                        <p>Вы получаете свой личный адрес в США и Турции для покупок. Заказываете товары с разных сайтов, направляя их на наш склад.</p>
                        <p>Для этого Вам нужно всего лишь указать адрес нашего склада при оформлении заказа в интернет-магазине!</p>
                    </div>
                    <div>
                        <Image  src={'/images/aa22.jpeg'} layout='fill' objectFit='cover'/>
                        
                        <p>Мы принимаем ваши посылки и при необходимости, объединяем их в одну отправку. Это позволит вам сэкономить еще больше на доставке! Затем мы осуществляем пересылку прямо к вам домой.</p>
                        <p>А стоимость доставки приятно удивит вас. Также отслеживайте свои заказы в режиме реального времени в личном кабинете.</p>
                    </div>
                </div>
            </div>
            <div className={s.faq}>
                <h2>Часто задаваемые вопросы</h2>
                <FAQAccordionPage  />
            </div>
        </div>
    )
}
