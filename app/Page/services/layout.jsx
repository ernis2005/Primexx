
export const metadata = {
    title: "УСЛУГА ВЫКУПА И ДОСТАВКА ИЗ США /ТУРЦИИ",
    description: 'Выкуп товаров, консолидация ваших посылок и доставка во все регионы России. Личный адрес в США и Турции. B2B решение для карго компании',
    icons: [
        {
            rel: "icon",
            sizes: "any",
            url: "/logo1.jpg",
        },
    ],
    openGraph: {
        images: [
            `/logo1.jpg`,
        ],
    },
}

export default function storyLayout({children}) {
    return (
        <main>
            {children}
        </main>
    )
}