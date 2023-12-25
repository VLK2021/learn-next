import {Poppins} from 'next/font/google';

import './ShowStyle.css'


const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin']
})


export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={poppins.className}>
        <h1>Top information</h1>

        {children}
        </body>
        </html>
    )
}
