import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Internships - VivaDrive',
    description: 'Discover internship opportunities at VivaDrive and start your career in sustainable mobility. Apply today and grow with our innovative team.',
}

export default function InternshipsLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>{children}</>
    )
}