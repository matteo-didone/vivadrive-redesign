import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us - VivaDrive',
    description: 'Get in touch with VivaDrive for inquiries about our sustainable mobility solutions, customer support, or partnership opportunities.',
}

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>{children}</>
    )
}