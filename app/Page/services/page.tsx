import { BannerPages } from '@/components/BannerPages/BannerPages';
import React from 'react';
import s from './page.module.scss';
import { CardServicesPage } from '@/components/Cards/CardServicesPage/CardServicesPage';
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';
const page = () => {
    return (
        <>
            <Header />
            <div style={{marginTop:'124px'}} className={s.Header}>
                <BannerPages
                    name={'Наши услуги'}
                    info={'Что мы можем и что Вы можете ожидать от нас'}
                />
                <div className={`Contend ${s.block}`}>
                    <ul className={s.Navigation}>
                        <li>Доставка</li>
                        <li>Бесплатный склад</li>
                        <li>Выкуп товара</li>
                        <li>Отслеживание</li>
                        <li>Консолидация</li>
                        <li>Доставка коммерческих грузов</li>
                    </ul>
                    <div className={s.Info}>
                        <h2>
            Доставка коммерческих грузов <br />
            из Турции в Россию
                        </h2>
                        <p>
            Вы занимаетесь товаркой из Турции, либо вы селлер в маркетплейсах,
            как ВБ, Озон? <br />
            Вам нужно надёжно и выгодно перевезти свой груз? Вы попали точно по
            адресу!
                        </p>
                        <span>
            Мы занимаемся доставками самых разных грузов из Турции во все
            регионы России, <br />
            путём авиа и авто доставки под ключ, по самым выгодным ценам.
                        </span>
                    </div>
                    <CardServicesPage/>
                    <div className={s.Info1}>
                        <p>МЫ НЕ МОЖЕМ БЫТЬ ПРИЧИНОЙ ЗАДЕРЖКИ ДОСТАВКИ ГРУЗА <br />
В СЛУЧАЕ ПОЛИТИЧЕСКИХ, ЭКОНОМИЧЕСКИХ, ПРИРОДНЫХ, КЛИМАТИЧЕСКИХ ИЛИ ТАМОЖЕННЫХ ПОТРЯСЕНИЙ.
                        </p>
                        <p>НЕ НЕСЁМ ОТВЕТСТВЕННОСТЬ ЗА ЗАДЕРЖКУ
ГРУЗОВ В ТАКИХ ОБСТОЯТЕЛЬСТВАХ!</p>
                    </div>
                    <h4>Этапы работы</h4>
                    <ul className={s.ul}>
                        <li>Прием груза</li>
                        <li>Распределение по регионам</li>
                        <li>Выдача груза</li>
                        <li>Доставка в склад Москвы</li>
                        <li>Подготовка к отправке</li>
                        <li>Таможенное оформление</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
        
    );
};

export default page;
