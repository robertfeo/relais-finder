import { Toaster } from '@/components/ui/toaster'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RelaisFinder',
  description: 'Find a specific relay based on its specifications',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
