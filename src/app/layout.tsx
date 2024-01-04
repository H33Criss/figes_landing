import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers/providers'
import { Footer, Navbar } from '@/components'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} overflow-y-scroll `}>
        <Providers>
          <div className="dark min-h-screen text-foreground bg-background">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>

  )
}
