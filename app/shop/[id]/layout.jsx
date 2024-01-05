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

import { getCoyId } from "@/app/getData/getData";

// }
export async function generateMetadata({ params,  }) {

    const data = await getCoyId(params.id)
 
    return {
        title: data[0].name,
        description: data[0].description,
        openGraph: {
            images: [
                `${data[0].image}`,
            ],
        },
        icons: [
            {
                rel: "icon",
                sizes: "any",
                url: "/logo1.jpg",
            },
        ],
    };
}

export default function RegistrationLayout({children}) {
    return (
        <main>
            {children}
        </main>
    )
}