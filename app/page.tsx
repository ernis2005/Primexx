import Image from "next/legacy/image";
import s from './page.module.scss';
import { CardsBlock2 } from '@/components/Cards/CardsBlock2/CardsBlock2';
import { TabelsBlock5 } from '@/components/Tabels/TabelsBlock5/page';
import { CardsBlock6 } from '@/components/Cards/CardsBlock6/CardsBlock6';
import Header from '@/components/Header/page';
import Footer from '@/components/Footer/page';

import {  getCountry, getRateTime } from './getData/getData';
import { CardsBlock3 } from '@/components/Cards/CardsBlock3/CardsBlock3';
import imag from '../public/images/bg.png'
import Link from "next/link";
import d from '../public/images/visa.svg'
import { FromInput } from "@/components/FromInput/FromInput";
import type { Metadata } from "next";
import RegisterButton from "@/components/RegisterButton/RegisterButton";
import { CardsBlock1 } from "@/components/Cards/CardsBlock1/CardsBlock1";
type Product = {
    id: number;
    title: string;
    amount: string;
    delivery_time: string;
    delivery: string;
};
type ProductCountry = {
    id:number;
    image:string;
    name:string;
    }
export const metadata: Metadata = {
    title: 'Primex',
    description: 'Дарим доступ к растущему миру возможностей! ',
    icons: [
        {
            rel: "icon",
            sizes: "any",
            url: "/logo1.jpg",
        },
    ],
}
const Home = async () => {
    const dataRate:Product[] = await getRateTime()
    const dataCountry:ProductCountry[] = await getCountry()
    return (
        <>
            <Header />
            <main className={`top ${s.main}`}>
                <div className={s.block1}>
                    <div className={s.bg}>
                        <Image
                            src={imag}
                            layout="fill"
                            objectFit="cover"
                            alt="hwllo"
                        />
                    </div>
                    <div className={` Contend ${s.block1Info}`}>
                        <h1>
                            Доставка от 5 дней <br />
                            из Турции и Америки
                        </h1>
                        <p>Наши решения дарят доступ к растущему миру возможностей</p>
                        <button>Хочу заказать</button>
                    </div>
                </div>
                <div className={`Contend ${s.block2}`}>
                    <p>Мы являемся сервисом по доставке ваших любимых брендов <br />
                    из любого американского или турецкого сайта и маркетплейса во все регионы России. 
                    </p>
                </div>
                <CardsBlock1 />
                <div></div>
                <div className={s.block3}>
                    <h3>Преимущества заказа из зарубежных сайтов</h3>
                    <p className={s.block3p}>Что делают привлекательными онлайн шоппинг на зарубежных сайтах?</p>
                    <div className={s.block2Image}>
                       
                    </div>
                    <div className={` Contend ${s.block2Info}`}>
                        <CardsBlock2 />
                    </div>
                </div>
                <div className={`Contend ${s.block3}`} >
                    <h3 style={{marginTop:'30px'}}>
                        Этапы работы
                    </h3>
                    <div>
                        <CardsBlock3 />
                    </div>
                    
                </div>
                <div></div>
                <div className={`Contend  ${s.block4} `}>
                    <h3>
                    Хотите выкупить товар самостоятельно <br />
                        <span>

                    и у вас есть зарубежная карта
                        </span>? <br /></h3>
                    <p>
                        Зарегистрируйтесь и получите адреса складов в <span>Турции</span> 
                         и   <span>Америке</span> <br />
                        для самостоятельных покупок
                    </p>
                    <div className={s.block4Images}>
                        <Image
                            src={'/images/visa.svg'}
                            layout="fill"
                            alt="hwllo"
                        />
                    </div>
                    <span>Данные адреса вы используете для доставки в интернет-магазинах, а мы получаем ваши посылки и пересылаем их вам.</span>
                    <RegisterButton/>
                </div>
                <div className={` Contend ${s.block5}`}>
                    <h3 >Тарифы и сроки</h3>
                    <div style={{overflow:'hidden'}}><TabelsBlock5 data={dataRate} /></div>

                    <button style={{margin:'30px auto 40px'}}>
                        <Link href={'/Page/rates'}>
                            Узнать подробнее
                        </Link>
                    </button>
                </div>
                <div className={`  ${s.block6}`}>
                    <h3>Магазины</h3>
                    <p className={s.testasd}>Доставляем из 3х стран:</p>
                    <div className={s.block6Card}>
                        <CardsBlock6 data={dataCountry} /> 
                    </div>
                    
                </div> 
                <div className={s.block7} >
                    <div className={s.block7Info}>
                        <h2>Ваш личный байер в мире
                            международных покупок</h2>
                        <p>Служба Primex поможет легко приобрести товары в зарубежных интернет-магазинах</p>
                        <p>Выкупим товары с сайтов за вас в тот же день - <span> быстро, легко и доступно</span></p>
                        <p className={s.xf23}>После заполнения заявки, байер сам
                            с вами свяжется с вами в течении
                            2-х часов в рабочее время.</p>
                    </div>
                    <div className={s.fromInput}><FromInput colors={"#333"} /></div>
                    <p className={s.fromInputp}>После заполнения заявки, байер сам
                            с вами свяжется с вами в течении  <br />
                            2-х часов в рабочее время.</p>
                </div>
            </main>
            <Footer />
        </>

    );
}

export default Home