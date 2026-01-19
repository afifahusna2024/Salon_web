import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant'
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: 'Main Avenue Ladies Beauty Salon | Luxury Beauty & Hair Care',
  description: 'Experience luxury beauty and hair care services at Main Avenue Ladies Beauty Salon. 20+ years of expertise in premium ladies beauty services including facials, hair treatments, waxing, and more.',
  keywords: 'beauty salon, ladies salon, hair care, facial, waxing, spa, Abu Dhabi, Al Khalidiya',
  openGraph: {
    title: 'Main Avenue Ladies Beauty Salon',
    description: 'Luxury Beauty & Hair Care for Modern Women',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#9b7bb8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
