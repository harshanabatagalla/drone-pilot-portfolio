import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sankalpa Bandara',
  description: "Srilanka's best drone pilot",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dim">
      <body className={inter.className}>
        <NavBar />
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
