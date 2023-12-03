
export const metadata = {
    title: "Отследить посылку",
    description: '',
    icons: [
        {
            rel: "icon",
            sizes: "any",
            url: "/logo1.jpg",
        },
    ],
}

export default function trackLayout({children}) {
    return (
        <main>
            {children}
        </main>
    )
}