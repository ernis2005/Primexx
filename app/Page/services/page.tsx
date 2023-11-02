"use client"
import { BannerPages } from '@/components/BannerPages/BannerPages';
import React from 'react';
import s from './page.module.scss';
import { CardServicesPage } from '@/components/Cards/CardServicesPage/CardServicesPage';
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';
import { Page6 } from '@/components/ServicesPages/Page6/Page6';
import cm from 'classnames'
import { Page3 } from '@/components/ServicesPages/Page3/Page3';
const page = () => {
    const [navigationIndex, setNavigationIndex] = React.useState(4)
    const NavigationData = ["Доставка", "Бесплатный склад", "Выкуп товара", "Консолидация", "Доставка коммерческих грузов"]
    return (
        <>
            <Header />
            <div className={` top ${s.Header}`}>
                <BannerPages
                    name={'Наши услуги'}
                    info={'Что мы можем и что Вы можете ожидать от нас'}
                />
                <div className={`Contend ${s.block}`}>

                    <ul className={s.Navigation}>
                        {NavigationData.map((res, i) => (<li key={i} onClick={() => setNavigationIndex(i)} className={cm(s.accli, { [s.accliAcc]: navigationIndex === i })} >{res}</li>))}
                    </ul>
                    <div className={cm(s.accNone, {
                        [s.acc]: navigationIndex === 2
                    })}>
                        <Page3 />
                    </div>
                    <div className={cm(s.accNone, {
                        [s.acc]: navigationIndex === 4
                    })}>
                        <Page6 />
                    </div>
                    <div></div>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default page;
