export const metadata = {
    title: "Магазины ",
    description: '',
    icons: [
        {
            rel: "icon",
            sizes: "any",
            url: "/logo1.jpg",
        },
    ],
}

export default function RegistrationLayout({children}) {
    return (
        <main>
            {children}
        </main>
    )
}