import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devops Multan - We Build Ideas Into Scalable Digital Realities',
  description: 'Devops Multan builds custom web & mobile apps, cloud infrastructure, and full-stack digital solutions for startups and enterprises.',
  keywords: 'software development, web development, mobile apps, cloud infrastructure, digital solutions, startup, enterprise',
  authors: [{ name: 'Devops Multan' }],
  openGraph: {
    title: 'Devops Multan - We Build Ideas Into Scalable Digital Realities',
    description: 'Custom web & mobile apps, cloud infrastructure, and full-stack digital solutions for startups and enterprises.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devops Multan - We Build Ideas Into Scalable Digital Realities',
    description: 'Custom web & mobile apps, cloud infrastructure, and full-stack digital solutions for startups and enterprises.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 