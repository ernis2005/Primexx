
"use client"
import React from 'react'

import Header from '../Header/page'
import Footer from '../Footer/page'
import { redirect,  } from 'next/navigation'
interface Person {
    children: React.ReactNode
}

 
const Nav = ({ children }: Person) => {

    if (window.location.pathname === '/entrance') {
        return (
            <main >
                {children}
            </main>
        )
    } else {
        return (

            <main >
                {children}
            </main>
          
        )
    }
}
const Login = ({ children }: Person) => {
    
    return (<Nav children={children} />
    )
}

export default Login