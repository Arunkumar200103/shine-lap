import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Shine Computer Printer CCTV | Premium IT Solutions',
    template: '%s | Shine Computer Printer CCTV',
  },
  description: 'Premium computer sales, printer services, CCTV installation, and 24/7 IT support. Trusted by 500+ clients. Your one-stop IT solutions partner.',
  keywords: ['computer sales', 'printer services', 'CCTV installation', 'IT support', 'laptop', 'desktop', 'networking'],
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Navbar />
        <div className="min-h-screen pt-16">
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
