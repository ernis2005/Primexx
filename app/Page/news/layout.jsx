
export const metadata = {
    title: "БЛОГ О МЕЖДУНАРОДНОМ ШОППИНГЕ, ЛАЙФХАКИ БАЙЕРОВ ",
    description: 'Тут все секреты о международном шоппинге, лайфхаки байера, разбор сайтов, магазины, скидки, промокоды',
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