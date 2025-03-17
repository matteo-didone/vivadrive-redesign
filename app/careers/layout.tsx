import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Careers - VivaDrive',
    description: 'Join our team at VivaDrive and help shape the future of sustainable mobility. Explore current job openings and internship opportunities.',
}

export default function CareersLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>{children}</>
    )
}