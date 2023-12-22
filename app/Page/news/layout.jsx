
export const metadata = {
    title: "Блог ",
    description: '',
    icons: [
        {
            rel: "icon",
            sizes: "any",
            url: "/logo1.jpg",
        },
    ],
}

export default function storyLayout({children}) {
    return (
        <main>
            {children}
        </main>
    )
}