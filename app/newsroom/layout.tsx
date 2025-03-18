import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newsroom - VivaDrive',
  description: 'Stay updated with the latest news, articles, and announcements from VivaDrive. Discover how we\'re transforming sustainable mobility and making an impact.',
}

export default function NewsroomLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>{children}</>
  )
}