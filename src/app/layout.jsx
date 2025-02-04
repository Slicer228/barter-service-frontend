import {Metadata} from 'next'

import './globals.css'

export const metadata = {
    title: 'GB',
    description: 'best barter service!',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}