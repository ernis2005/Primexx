export const metadata = {
    title: "Регистрация",
    description: 'test ',
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

export default function RegistrationLayout({children}) {
    return (
        <main>
            {children}
        </main>
    )
}