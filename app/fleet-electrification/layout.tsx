import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fleet Electrification - VivaDrive',
    description: 'Transform your fleet with AI-driven electrification solutions and comprehensive electric vehicle management',
}

export default function FleetElectrificationLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>{children}</>
    )
};