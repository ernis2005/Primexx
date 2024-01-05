// export const metadata = {
//     title: "Магазины ",
//     description: '',
//     icons: [
//         {
//             rel: "icon",
//             sizes: "any",
//             url: "/logo1.jpg",
//         },
//     ],
// }
export async function generateMetadata({ params, searchParams }) {
    console.log(params,searchParams,'params');
    return {
        title: 'ЭКСПРЕСС ДОСТАВКА ПОСЫЛОК ИЗ ТУРЦИИ И США',
        description: 'Сервис по доставке ваших любимых брендов из любого Американского и Турецкого сайта и маркетплейса в Россию. Бесплатный склад для байеров. Удобный личный кабинет ',
        openGraph: {
            images: [
                `logo1.jpg`,
            ],
        },
    };
}

export default function RegistrationLayout({children}) {
    return (
        <main>
            {children}
        </main>
    )
}