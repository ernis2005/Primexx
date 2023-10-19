import Header from '@/components/Header/page'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/page'

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
            <body className={inter.className}>
                <Header/>
                <main style={{marginTop:'124px'}}>
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    )
}
