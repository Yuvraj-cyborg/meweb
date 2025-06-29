import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import './prism.css'
import Header from '@/components/Header'
import { Analytics } from "@vercel/analytics/next"
import { PostHogProvider } from 'posthog-js/react'

const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ['400', '500'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Yuvraj Portfolio',
  description: 'Computer Science Student and Web Developer',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.className} container mx-auto px-4 max-w-2xl pt-16`}>
        <div className='w-full flex justify-center mb-8'>
          <div className='shadow-md rounded-lg '>
          <Header/>
          </div>
        </div>
        <main className="prose prose-neutral max-w-none">
          <PostHogProvider apiKey={process.env.NEXT_PUBLIC_POSTHOG_KEY || ''}>
          {children}
          </PostHogProvider>
          <Analytics />
        </main>
      </body>
    </html>
  )
}