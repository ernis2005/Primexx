import  React from 'react'
import s from './page.module.scss'
import Image from 'next/legacy/image';
import Link from 'next/link';
interface Person {
    id: number,
    title: string,
    description: string,
    image: string,
    country: number,
    country_name: string,
    category: number,
    category_name: string,
    url:string,
}

type DataArray = Person[];

export const CardShop = ({ data }: { data: DataArray; }) => {
   
    
    return (
        <div className={s.Cards}>
            {data.map((res: Person, i: number) => (
                <Link href={res.url} target='_blank' key={i} className={s.Card}>
                    <div className={s.image}>
                        <Image src={res.image} layout='fill' objectFit='cover' />
                    </div>
                    <div className={s.info}>
                        <h2>{res.title}</h2>
                        <p  dangerouslySetInnerHTML={{__html: res.description}}/>
                    </div>
                </Link>
            ))}
        </div>
    )
}

