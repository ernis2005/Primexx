
export const metadata = {
    title: "ЦЕНЫ НА ДОСТАВКУ ГРУЗОВ ИЗ ТУРЦИИ И АМЕРИКИ В РОССИЮ",
    description: 'Сколько стоит доставка в Россию? Тарифы на доставку товаров из Турции и США. Оптимальные варианты маршрутов доставки',
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