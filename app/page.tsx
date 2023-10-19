import Image from 'next/image';
import s from './page.module.scss';
import { CardsBlock1 } from '@/components/Cards/CardsBlock1/CardsBlock1';
import { CardsBlock2 } from '@/components/Cards/CardsBlock2/CardsBlock2';
import { TabelsBlock5 } from '@/components/Tabels/TabelsBlock5/page';
import { CardsBlock6 } from '@/components/Cards/CardsBlock6/CardsBlock6';

export default function Home() {
    return (
        <main className={s.main}>
          
            <div className={s.block1}>
                <div className={s.bg}>
                    <Image
                        src={'/images/bg.jfif'}
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
                <p>
          Мы являемся сервисом по доставке ваших любимых брендов <br />
          из любого американского или турецкого сайта и маркетплейса во все
          регионы России. <br />
          Предоставляем бесплатный склад. Оказываем услугу выкупа из сайтов по
          низкой комиссией.
                </p>
                <CardsBlock1 />
            </div>
       
            <div className={s.block3}>
                <h3>Преимущества заказа из зарубежных сайтов</h3>
                <p>Что делают привлекательными онлайн шоппинг на зарубежных сайтах?</p>
                <div className={s.block2Image}>
                    <Image
                        layout="fill"
                        alt="/"
                        objectFit="convers"
                        src={'/images/Background.png'}
                    />
                </div>
                <div className={` Contend ${s.block2Info}`}>
                    <CardsBlock2 />
                </div>
            </div>
            <div className={`Contend ${s.block3}`} >
                <h2>
                Этапы работы
                </h2>
            </div>
            <div className={`Contend  ${s.block4} `}>
                <h3>
          Хотите выкупить товар самостоятельно <br />и у вас есть зарубежная
          карта?
                </h3>
                <p>
          Зарегистрируйтесь и получите адреса складов в <span>Турции</span> и
                    <span>Америке</span> <br />
          для самостоятельных покупок
                </p>
                <div>
                    <Image
                        src={'/images/Background1.png'}
                  
                        width={700}
                        height={500}
                        alt="hwllo"
                    />
                </div>
                <span>Данные адреса вы используете для доставки в интернет-магазинах, а мы получаем ваши посылки и пересылаем их вам.</span>
                <button>Зарегистрироваться</button>
            </div>
            <div className={` Contend ${s.block5}`}>
                <h3>Тарифы и сроки</h3>
                <TabelsBlock5/>
                <button>Узнать подробнее</button>
            </div>
            <div className={` Contend ${s.block6}`}>
                <h3>Магазины</h3>
                <CardsBlock6/>
            </div>
            <div></div>
        </main>
    );
}
