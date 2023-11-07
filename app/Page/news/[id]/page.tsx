import React from 'react'
import s from './page.module.scss'
import { BannerPages } from '@/components/BannerPages/BannerPages'
import Image from "next/legacy/image"
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import { getNewsId } from '@/app/getData/getData'
const page =  async({ params: { id } }:{params:{id:number}}) => {
   
    const data = await getNewsId(id)

    
    return (
        <>
            <Header />
            <div style={{marginTop:'124px'}} className={s.header}>
                <BannerPages
                    name={`${data.title}`}
                    info={' '}
                />
                <div className={`Contend ${s.block}`}>
                    <div className={s.image}><Image  src={data.image} layout="fill"
                        objectFit="cover"
                        alt="hwllo"/></div>
                    <div className={s.infp}  dangerouslySetInnerHTML={{__html: data.description+ ` <p> Дата публикации:${data.created_at}</p>`}}/>
                    {/* <p>В современном мире логистика играет одну из ключевых ролей в развитии бизнеса, поскольку она обеспечивает эффективное перемещение товаров от производителя к потребителю. В условиях постоянно растущей конкуренции и усиления требований к качеству предоставляемых услуг, оптимизация логистики становится важным фактором успеха для компаний. В этом посте мы рассмотрим ключевые преимущества и возможности, которые предоставляют современные технологии для оптимизации логистических процессов.</p>
                        <p>Одним из основных преимуществ является возможность автоматизации процессов управления логистикой. Использование специализированных IT-решений позволяет автоматизировать процессы планирования, управления и контроля за транспортировкой грузов, что значительно снижает затраты на логистические услуги. Также, использование таких решений позволяет оптимизировать маршруты доставки, учитывая различные факторы, такие как загруженность дорог, время доставки и стоимость услуг перевозчиков.</p>
                        <p>Еще одним важным преимуществом является возможность отслеживания движения грузов в режиме реального времени. Это позволяет контролировать процесс доставки на каждом этапе и быстро реагировать на возникающие проблемы. Кроме того, современные технологии позволяют автоматизировать процесс сбора и обработки информации о движении грузов, что позволяет сократить время на принятие решений и повысить эффективность работы логистического отдела.</p>
                        <p>Современные технологии также предоставляют возможность интеграции с другими бизнес-процессами.</p>
                        <p>Дата публикации: 08.10.2</p> */}
                    {/* </div> */}
                   
                    <div></div>
                </div>
            </div>
            <Footer />
        </>
      
    )
}

export default page