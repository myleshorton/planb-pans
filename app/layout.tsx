import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plan B for PANS & PANDAS',
  description: 'Alternative modalities and hope when standard protocols fail',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <nav style={{ borderBottom: '1px solid #e8e8e8', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '28px', fontWeight: 700, letterSpacing: '0.1em', color: '#111' }}>
            PLAN B
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="/" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', textDecoration: 'none' }}>Home</a>
            <a href="/case-studies" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', textDecoration: 'none' }}>Case Studies</a>
            <a href="/about" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', textDecoration: 'none' }}>About</a>
            <a href="/contact" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', textDecoration: 'none' }}>Contact</a>
          </div>
        </nav>
        {children}
        <style>{`
          :root {
            --font-cormorant: 'Cormorant', Georgia, serif;
            --font-inter: 'Inter', sans-serif;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: var(--font-inter);
            background-color: #fff;
            color: #111;
          }
        `}</style>
      </body>
    </html>
  )
}
