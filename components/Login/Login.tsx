
"use client"
import React, { useEffect } from 'react'
import { cookies } from "next/headers";
import Header from '../Header/page'
import Footer from '../Footer/page'
import { redirect } from 'next/navigation'
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
            <>
                <Header /><main style={{ marginTop: '124px' }}>
                    {children}
                </main><Footer /></>

        )
    }
}
const Login = ({ children }: Person) => {

    return (<Nav children={children} />
    )
}

export default Login