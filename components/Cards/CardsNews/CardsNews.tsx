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
    const datas = [1, 2, 3, 4, 5, 67, 8, 9, 0]
    const slice = data?.slice(0, noOFElement);
    const data4length = datas.length;
    const LoadMore = () => {
        setNoOFElement(noOFElement + 6);
    };

    return (
        <div className={s.Header}>
            <div className={s.Cards}>
                {slice.map((res, i) => (
                    <div key={i} className={s.Card}>
                        <Link href={`/Page/news/${res.id}`} >
                            <Image src={res.icon_card} layout="fill"
                                objectFit="cover"
                                alt="hwllo" />
                            <div className={s.info}>
                                <HeaderSvg />
                                <div className={s.block} >
                                    <p>
                                        {res.title_card}
                                    </p>
                                    <span>
                                        {res.description_card}
                                    </span>
                                </div>
                            </div>
                        </Link>

                    </div>
                ))}

            </div>
            <button onClick={() => LoadMore()} className={cm(s.button)}>
                Смотреть еще
            </button>
        </div>

    )
}
