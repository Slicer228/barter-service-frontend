import {Metadata} from 'next'
import {inter} from "@/fonts";


export const metadata = {
    title: 'GB',
    description: 'best barter service!',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}