import React from 'react'
import s from './page.module.scss'
import { BannerPages } from '@/components/BannerPages/BannerPages'
import Image from "next/legacy/image"
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import { getNewsId } from '@/app/getData/getData'
export const metadata = {
    title: "Новости",
    description: '',
    icons: [
        {
            rel: "icon",
            sizes: "any",
            url: "/logo1.jpg",
        },
    ],
}

const page = async ({ params: { id } }: { params: { id: number } }) => {

    const data = await getNewsId(id)


    return (
        <>
            <Header />
            <div style={{ marginTop: '124px' }} className={s.header}>
                <div className={s.Header}>
                    <Image src={data.image} layout="fill"
                        objectFit="cover"
                        alt="hwllo" />
                    <div className={`Contend ${s.block}`}>
                        <h2>{data.title}</h2>
                    
                    </div>
                </div>
                <div className={`Contend ${s.block}`}>
                    <div className={s.image}><Image src={data.image} layout="fill"
                        objectFit="cover"
                        alt="hwllo" /></div>
                    <div className={s.infp} dangerouslySetInnerHTML={{ __html: data.description + ` <p> Дата публикации:${data.created_at}</p>` }} />
                    <div></div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default page