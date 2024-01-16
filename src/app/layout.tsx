import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Providers } from '@/components/providers/providers'
import { Footer, Navbar } from '@/components'
import './globals.css';
import 'animate.css';

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
      {/* TODO: Cambiar el estilo del scroll */}
      <body className={`${montserrat.className} overflow-y-auto overflow-x-hidden `}>
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
