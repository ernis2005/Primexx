import Header from '@/components/Header/page'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Login from '@/components/Login/Login'
import { ReduxProider } from './redux/provider'
import { StyledEngineProvider } from '@mui/material/styles';
const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
    return {
        title: 'ЭКСПРЕСС ДОСТАВКА ПОСЫЛОК ИЗ ТУРЦИИ И США',
        description: 'Сервис по доставке ваших любимых брендов из любого Американского и Турецкого сайта и маркетплейса в Россию. Бесплатный склад для байеров. Удобный личный кабинет ',
        openGraph: {
            images: [
                `https://www.google.com/url?sa=i&url=https%3A%2F%2Fkartin.papik.pro%2Fcveti%2F3898-kartinki-dlja-profilja-cvety-69-foto.html&psig=AOvVaw3Eu_cvnTzns8FJTSKuCCsq&ust=1704360798825000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOig8vL0wIMDFQAAAAAdAAAAABAD`,
            ],
        },
    };
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <StyledEngineProvider>
                <body className={inter.className}>
                    <ReduxProider>
                        <Login children={children} />
                    </ReduxProider>
                </body>
            </StyledEngineProvider>
        </html>
    )
}
