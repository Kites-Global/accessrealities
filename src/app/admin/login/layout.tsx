import React from 'react'
import BootstrapClient from '../../(site)/components/BootstrapClient';
import { Geist, Geist_Mono, Roboto } from 'next/font/google';
import "../../(site)/globals.css"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


const roboto = Roboto(
    {
        variable: "--Roboto",
        subsets: ["latin"],
    }
)

function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}>
            <BootstrapClient />
            <body>
                {children}
            </body>
        </html>
    )
}

export default AdminLayout


