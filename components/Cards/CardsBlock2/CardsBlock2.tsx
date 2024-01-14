import React from 'react'
import s from './page.module.scss'
import Image from 'next/legacy/image';

const data = [
    {
        id: 1,
        title: '01',
        tema: 'Доступно и удобно',
        text: ' Мы предоставляем быструю и надежную доставку во все регионы России, что делает покупки более доступными.  ',
        img: '/images/aq.11.jpg'
    },
    {
        id: 2,
        title: '02',
        tema: 'Широкий выбор товаров',
        text: 'Зарубежные сайты часто предлагают огромный ассортимент товаров и брендов, которые могут быть недоступны в местных магазинах.',
        img: '/images/card202.jpg'
    },
    {
        id: 3,
        title: '03',
        tema: 'Конкуренто-способные цены',
        text: 'На зарубежных сайтах можно найти товары по более выгодным ценам, также есть различие в курсах валют, акции и промокоды.',
        img: '/images/aq33.jpg'
    },
    {
        id: 4,
        title: '04',
        tema: 'Удобство и выбор',
        text: ' Онлайн шоппинг позволяет вам сидя дома выкупать товары из любых сайтов и маркетплейсов. К тому же, возможность читать отзывы и сравнивать продукты делает процесс покупки более информированным.',
        img: '/images/aa44.jpg'
    },
]
export const CardsBlock2 = () => {
    return (
        <div className={s.saves}>
            {
                data?.map((el) => (
                    <div className={s.save}>
                        <div className={s.block}>
                            <Image className={s.img} src={el.img} style={{top:'-50px'}} alt="/" layout='fill' objectPosition={'top'} objectFit='cover' />
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
