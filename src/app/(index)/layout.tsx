import type {Metadata} from "next";
import "../globals.css";
import localFont from 'next/font/local'
import TransitionLayout from "@/src/app/components/TransitionLayout";

const neuehaasunica = localFont({
    src: [
        {
            path: './../fonts/neuehaasunica/Neue-Haas-Unica-W1G-Regular.woff',
            weight: '400',
            style: 'normal'

        },
        {
            path: './../fonts/neuehaasunica/Neue-Haas-Unica-W1G-Medium.woff',
            weight: '500',
            style: 'normal'

        },
        {
            path: './../fonts/neuehaasunica/Neue-Haas-Unica-W1G-Italic.woff',
            weight: '400',
            style: 'italic'

        },
    ],
    variable: '--font-neuehaasunica',
})

const offbit = localFont({
    src: [
        {
            path: './../fonts/offbit/OffBit-101Bold.woff',
            weight: '700',
            style: 'normal'

        },
    ],
    variable: '--font-offbit',
})

const favoritmono = localFont({
    src: [
        {
            path: './../fonts/favoritmono/Favorit-Mono-Regular.woff',
            weight: '400',
            style: 'normal'

        },
    ],
    variable: '--font-favoritmono',
})


export const metadata: Metadata = {
    title: "Alex Luowan",
    description: "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${favoritmono.variable} ${neuehaasunica.variable} ${offbit.variable} antialiased`}
        >
        <TransitionLayout>
            {children}
        </TransitionLayout>

        </body>
        </html>
    );
}
