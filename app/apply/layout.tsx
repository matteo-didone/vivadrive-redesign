import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply for a Position - VivaDrive',
  description: 'Join our team at VivaDrive and help build the future of sustainable mobility solutions.',
}

export default function ApplyLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>{children}</>
  )
}