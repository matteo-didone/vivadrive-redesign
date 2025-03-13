import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fleet Management - VivaDrive',
    description: 'Save up to 1000€ annually on a single fleet car',
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