'use client';
import React, { useEffect, useState } from 'react';
import s from './style.module.scss';
import { CardServicesPage } from '@/components/Cards/CardServicesPage/CardServicesPage';
import { FAQAccordionPage } from '@/components/Accordion/FAQAccordionPage/FAQAccordionPage';
import { getFAQ } from '@/app/getData/getData';
import Cookies from 'js-cookie';
import { FAQAccordionId } from '@/components/Accordion/FAQAccordionId/FAQAccordionId';
export const kye = Cookies.get('ulild');
export const Page6 = () => {
    const [isloding, useIsLoding] = useState(false);
    const [data, useData] = useState();
    async function getData() {
        getFAQ().then((res) => {
            useData(res);
        });

        setInterval(() => {
            useIsLoding(true);
        }, 100);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        isloding && (
            <div className={`  ${s.Header}   `}>
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
                    <span>
            Компенсация: Авиа 30$ за кг. <br className={s.br1} /> Авто 20$ за кг{' '}
                        <br />В случае потери груза или форс мажорных ситуацих, компенсируем
            в таком размере вне зависимости от стоимости товара.
                    </span>
                </div>
                <CardServicesPage />
                <div className={s.Info1}>
                    <p>
            Мы не можем быть причиной задержки доставки груза <br />в случае
            политических, экономических, природных, климатических или таможенных
            потрясений.
                    </p>
                    <p>
            Не несём ответственность за задержку грузов в таких обстоятельствах!
                    </p>
                </div>
                <div className={s.StagesWork}>
                    <div>
                        <h2>Этапы работы</h2>
                        <ul className={s.Work}>
                            <div className={s.linia} />
                            <li>
                                {' '}
                                <div className={s.svg} /> Прием груза
                            </li>
                            <li>
                                {' '}
                                <div className={s.svg} />
                Распределение по регионам
                            </li>
                            <li>
                                {' '}
                                <div className={s.svg} />
                Выдача груза
                            </li>
                            <li>
                                {' '}
                                <div className={s.svg} />
                Доставка в склад Москвы
                            </li>
                            <li>
                                {' '}
                                <div className={s.svg} />
                Подготовка к отправке
                            </li>
                            <li>
                                {' '}
                                <div className={s.svg} />
                Таможенное оформление
                            </li>
                        </ul>
                    </div>
                    <div className={s.block2}>
                        <span>
                            <h2>Дополнительные услуги</h2>
                            <ul className={s.services}>
                                <li>
                                    <p>Упаковка грузов:</p>{' '}
                                    <span className={s.servicesp1}>$10 за одно место</span>
                                </li>
                                <li>
                                    <p>
                    Передача денег <br /> поставщику:{' '}
                                    </p>{' '}
                                    <span className={s.servicesp2}> 1% от общей суммы</span>
                                </li>
                                <li>
                                    <p>
                    Проверка на брак перед
                                        <br /> отправкой в Россию:
                                    </p>{' '}
                                    <span className={s.dsasad}> $0.2 за штуку</span>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>

                <h2 className={s.faqH2}> Часто задаваемые вопросы</h2>
                <div className={s.FAQAccordionPage}>
                    <FAQAccordionId id={4} />
                </div>
                <div></div>
            </div>
        )
    );
};
