"use client"
import React, { useState } from 'react'
import s from './page.module.scss'
import Image from "next/legacy/image"
import { HeaderSvg } from '@/components/svg/Header'
import cm from 'classnames'
import Link from 'next/link'
import type { NewsCardList } from '@/app/Page/news/type'
type NewsCard = {
    id: number;
    title_card: string;
    description_card: string;
    icon_card: string;
  };
interface Person {
    data: NewsCard[]
}
export const CardsNews = ({ data }: Person) => {
    
    
    const [noOFElement, setNoOFElement] = useState(6);
    const slice = data?.slice(0, noOFElement);
    const data4length = data?.length;
    const LoadMore = () => {
        setNoOFElement(noOFElement + 6);
    };

    return (
        <div className={s.Header}>
            <div className={s.Cards}>
                {slice?.map((res, i) => (
                    <div key={i} className={s.Card}>
                        <Link href={`/Page/news/${res.id}`} >
                            <Image src={res.icon_card} layout="fill"
                                objectFit="cover"
                                alt="hwllo" />
                        </Link>

                    </div>
                ))}

            </div>
            {data4length <= 6 ? null : <button onClick={() => LoadMore()} className={cm(s.button, { [s.buttonNone]: data4length <= noOFElement })}>
                Смотреть еще
            </button>}
        </div>
    )
}
