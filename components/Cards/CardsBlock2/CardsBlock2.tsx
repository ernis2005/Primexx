import React from 'react'
import s from './page.module.scss'
import Image from 'next/legacy/image';

const data = [
    {
        id: 1,
        title: '01',
        tema: 'Доступно и удобно',
        text: ' Мы предоставляем быструю и надежную доставку во все регионы России, что делает покупки более доступными. <br> <br>  При необходимости выкупим товар за вас и предоставим бесплатный склад до дня отправки, а вы сможете отслеживать свою посылку с момента заказа до получения.',
        img: '/images/aq.1.jpg'
    },
    {
        id: 2,
        title: '02',
        tema: 'Широкий выбор товаров',
        text: 'Зарубежные сайты часто предлагают огромный ассортимент товаров и брендов, которые могут быть недоступны в местных магазинах.',
        img: '/images/aq2.jpg'
    },
    {
        id: 3,
        title: '03',
        tema: 'Конкуренто-способные цены',
        text: 'На зарубежных сайтах можно найти товары по более выгодным ценам, также есть различие в курсах валют, акции и промокоды.',
        img: '/images/aq3.jpg'
    },
    {
        id: 4,
        title: '04',
        tema: 'Удобство и выбор',
        text: ' Онлайн шоппинг позволяет вам сидя дома выкупать товары из любых сайтов и маркетплейсов. К тому же, возможность читать отзывы и сравнивать продукты делает процесс покупки более информированным.',
        img: '/images/aq4.jpg'
    },
]
export const CardsBlock2 = () => {
    return (
        <div className={s.saves}>
            {
                data?.map((el) => (
                    <div className={s.save}>
                        <div className={s.block}>
                            <Image className={s.img} src={el.img} alt="/" layout='fill' objectFit='cover' />
                            <div className={s.flex}>
                                <h1>{el.title}</h1>
                                <h3>{el.tema}</h3>
                            </div>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html:el.text}} />
                    </div>
                ))
            }
        </div>
    )
}
