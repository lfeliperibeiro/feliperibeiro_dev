import './globals.css'
import type { Metadata } from 'next'

import { Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

const bai = BaiJamjuree({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Felipe Ribeiro',
  description: 'Senior Frontend Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bai.className}>{children}</body>
    </html>
  )
}
