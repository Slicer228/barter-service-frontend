import {Metadata} from 'next'
import styles from '@/app/fonts.module.css'

export const metadata = {
    title: 'GB',
    description: 'best barter service!',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={styles.mainFont}>{children}</body>
        </html>
    )
}