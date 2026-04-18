import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plan B for PANS — A free tracker + research project',
  description: "A free companion to the Plan B for PANS podcast. Log your kid's symptoms, meds, and treatments — any modality, any approach — and let the data show what's actually moving the needle.",
  openGraph: {
    title: 'Plan B for PANS',
    description: 'Free tracker + research project for PANS families. Private data. Public insights.',
    url: 'https://planbforpans.com',
    siteName: 'Plan B for PANS',
    images: [{ url: '/rachel-podcast.jpg', width: 640, height: 640 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
