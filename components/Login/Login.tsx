
import React from 'react'

import Header from '../Header/page'
import Footer from '../Footer/page'
import { redirect,  } from 'next/navigation'
import type { Metadata } from 'next'
interface Person {
    children: React.ReactNode
}

 
// const Nav = ({ children }: Person) => {

//     if (window.location.pathname === '/entrance') {
//         return (
//             <main >
//                 {children}
//             </main>
//         )
//     } else {
//         return (

//             <main >
//                 {children}
//             </main>
          
//         )
//     }
// }
export const metadata: Metadata = {
    title: 'Primex',
    description: 'Дарим доступ к растущему миру возможностей! ',
    icons: [
        {
            rel: "icon",
            sizes: "any",
            url: "/logo1.jpg",
        },
    ],
}
const Login = ({ children }: Person) => {
    
    return (
        
        <main >
            {children}
        </main>
    )
}

export default Login