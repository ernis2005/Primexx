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
                `logo1.jpg/`,
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
