
export const metadata = {
    title: "Оследить посылку",
    description: '',
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