import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - VivaDrive',
  description: 'Learn about VivaDrive\'s mission, team, and innovative approach to sustainable mobility solutions',
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>{children}</>
  )
}