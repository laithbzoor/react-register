import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../comp/web/Navbar'
import Footer from './../comp/web/Footer';

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet/>
            <Footer />
        </>

    )
}
