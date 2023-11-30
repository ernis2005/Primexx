import Header from '@/components/Header/page'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/page'
import Login from '@/components/Login/Login'
import { ReduxProider } from './redux/provider'
import { StyledEngineProvider } from '@mui/material/styles';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Primex',
    description: 'Дарим доступ к растущему миру возможностей! ',
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
