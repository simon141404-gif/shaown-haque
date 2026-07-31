import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebusNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shawon Haque | Full Stack Developer',
  description: 'Full Stack Developer crafting exceptional digital experiences with precision, passion, and cutting-edge technology.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Web Developer', 'Portfolio'],
  authors: [{ name: 'Shawon Haque' }],
  openGraph: {
    title: 'Shawon Haque | Full Stack Developer',
    description: 'Full Stack Developer crafting exceptional digital experiences with precision, passion, and cutting-edge technology.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebusNeue.variable}`}>
      <body className={inter.className}>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
