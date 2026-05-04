import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

/* Rule 04 – Font Discipline: Inter 700 display / Inter 400–500 body / JetBrains Mono */
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ARCOPAN | EU EPC Cold Storage Solutions',
  description:
    'ARCOPAN is an EU EPC company delivering turnkey cold storage systems, insulated panels, condensing units, and warehouse solutions across Europe.',
  keywords:
    'cold storage, insulated panels, EPC, condensing units, evaporators, cold room doors, modular cold rooms, warehouse racking, EU, industrial refrigeration',
  openGraph: {
    title: 'ARCOPAN | EU EPC Cold Storage Solutions',
    description:
      'Turnkey cold storage engineering, procurement, and construction. ISO 9001:2015 · CE · EN 14509.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
