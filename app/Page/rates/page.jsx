import { BannerPages } from '@/components/BannerPages/BannerPages'
import React from 'react'
import s from './page.module.scss'
import { Tabels2 } from '@/components/Tabels/TabelsPageRates/Tabels1/Tabels2'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import { getRate, getadditional_service } from '@/app/getData/getData'
import img from '../../../public/images/тарифы.png'
import { Tabels1 } from '@/components/Tabels/TabelsPageRates/Tabels1/Tabels1'

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
    const data = await getRate()
    const data1 = await getadditional_service()
    if (data===undefined || !data?.length===0 || data===null) {
        return  null
    }
    
    const uniqueData =data?.reduce((acc, current) => {
        const x = acc.find(item => item.country === current.country);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);
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
                    
                    {uniqueData?.map((res, i) => (
                        <div>
                            <h2>{res.country_name}</h2>
                            <Tabels1 data={res.country} />
                            
                            <span dangerouslySetInnerHTML={{ __html: res.country_description }} />
                        </div>
                    ))}
                    <div>
                        <h2>Дополнительные услуги</h2>
                        <Tabels2 data={data1} />
                        <p>Лира к рублю - 5 рублей.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default page

// {data?.map((res, i) => (
//     <div>
//         <h2>{res.country_name}</h2><Tabels1 data={res} />
//         <span>
            
//             <p>Отправка товаров происходит два раза в неделю. <br />
//             Коробки от обуви отдельно 1$. Груз от 100 килограмм по 14$  </p>
//             <p>Стоимость указана до склада Москвы. Далее передаем посылку до местной курьерской службы, таких как Сдэк, Boxberry, Яндекс и т.д.</p>
//         </span>
//     </div>
// ))}