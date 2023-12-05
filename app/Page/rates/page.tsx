import { BannerPages } from '@/components/BannerPages/BannerPages'
import React from 'react'
import s from './page.module.scss'
import { Tabels1 } from '@/components/Tabels/TabelsPageRates/Tabels1/Tabels1'
import { Tabels2 } from '@/components/Tabels/TabelsPageRates/Tabels1/Tabels2'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import { getRate } from '@/app/getData/getData'
import img from '../../../public/images/тарифы.png'
type Product = {
    country: string;
    id: number;
    title: string;
    amount: string;
    delivery_time: string;
    delivery: string;
  
    additionally: string;
};

export const metadata = {
    title: "Тарифы и сроки",
    description: '',
    icons: [
        {
            rel: "icon",
            sizes: "any",
            url: "/logo1.jpg",
        },
    ],
}


const page = async () => {
    const data: Product[] = await getRate()
    console.log(data,'http://141.8.198.192/');
 
    return (
        <>
            <Header />
            <div style={{ marginTop: '124px' }} className={s.header}>

                <BannerPages
                    idPage={3}
                    name={'Тарифы и сроки'}
                    info={'Тарифы и сроки'}
                />
                <div className={`Contend ${s.contend}`}>
                    {/* <div><h2>Турция (Стамбул) - Россия (Москва)</h2></div> */}
                    
                    {data.map((res, i) => (
                        <div>
                            <h2>{res.country}</h2><Tabels1 data={res} />
                            <span>
                                <p>Отправка товаров происходит по пятницам. <br />
          Коробки от обуви отдельно 1$. Груз от 100 килограмм по 14$ </p>
                                <p>Стоимость указана до склада Москвы. Далее передаем посылку до местной курьерской службы,  <br /> таких как Сдэк, Boxberry, Яндекс и т.д.</p>
                            </span>
                        </div>
  
                    ))}
                      

                    <div>
                        <h2>Дополнительные услуги</h2>
                        <Tabels2 data={data} />
                        <p>Лира к рублю - 5 рублей.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default page