import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RelaisFinder',
  description: 'Find a specific relay based on its specifications',
  rel: 'manifest',
}

export default function RootLayout({ children }) {

  return (
    <html className='overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-zinc-50 scrollbar-thumb-rounded' lang="en">
      <head />
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  )
}
