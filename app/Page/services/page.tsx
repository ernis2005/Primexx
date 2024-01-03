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
import { Page4 } from '@/components/ServicesPages/Page4/Page4';
import { Page1 } from '@/components/ServicesPages/Page1/Page1';
const page = () => {
    const [navigationIndex, setNavigationIndex] = React.useState(0)
    const NavigationData = [ "Бесплатный склад", "Выкуп товара", "Консолидация", "Доставка коммерческих грузов"]

    return (
        <>
            <Header />
            <div className={` top ${s.Header}`}>
                <BannerPages
                    idPage={2}
                    name={'Наши услуги'}
                    info={'Что мы можем и что Вы можете ожидать от нас'}
                />
                <div className={` ${s.block}`}>

                    <ul className={`Contend ${s.Navigation}`}>
                        {NavigationData.map((res, i) => (<li key={i} onClick={() => setNavigationIndex(i)} className={cm(s.accli, { [s.accliAcc]: navigationIndex === i })} >{res}</li>))}
                    </ul>
                    {/* <div className={cm(s.accNone, {
                        [s.accs]: navigationIndex === 0
                    })}>
                        <Page1 />
                    </div>
                    <div className={cm(s.accNone, {
                        [s.accs]: navigationIndex === 1
                    })}>
                        <Page3 />
                    </div>
                    <div className={cm(s.accNone, {
                        [s.accs]: navigationIndex === 2
                    })}>
                        <Page4 />
                    </div>
                    <div className={cm(s.accNone, {
                        [s.accs]: navigationIndex === 3
                    })}>
                        <Page6 />
                    </div> */}
                    <div></div>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default page;
