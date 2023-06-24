import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'


export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}