import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plan B for PANS & PANDAS',
  description: 'A coordination layer for parents when standard protocols fail. Synthesized from specialists who rarely talk to each other.',
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
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header
          style={{
            borderBottom: '1px solid var(--sand)',
            padding: '22px 24px',
            background: 'var(--cream)',
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24,
            }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 22,
                  fontWeight: 400,
                  color: 'var(--ink)',
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                Plan B{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--teal)' }}>
                  for PANS
                </span>
              </p>
            </Link>
            <nav style={{ display: 'flex', gap: 26, alignItems: 'center' }}>
              <NavLink href="/case-studies">Case Studies</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <a
                href="https://app.planbforpans.com/signup"
                target="_blank"
                rel="noopener"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--cream)',
                  background: 'var(--teal)',
                  padding: '10px 18px',
                  fontWeight: 600,
                  borderRadius: 4,
                  textDecoration: 'none',
                }}
              >
                Start →
              </a>
            </nav>
          </div>
        </header>
        {children}
        <footer
          style={{
            borderTop: '1px solid var(--sand)',
            padding: '48px 24px',
            background: 'var(--cream-light)',
            color: 'var(--sand-dark)',
          }}
        >
          <div style={{ maxWidth: 1280, margin: '0 auto', fontSize: 13, lineHeight: 1.8 }}>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 20,
                fontWeight: 400,
                color: 'var(--ink)',
                marginBottom: 10,
              }}
            >
              Plan B <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>for PANS</span>
            </p>
            <p>A non-profit coordination layer for parents navigating PANS, PANDAS, autism, and severe dysregulation. Built from the specialists who rarely talk to each other.</p>
            <p style={{ marginTop: 16, fontSize: 12, color: 'var(--sand-dark)' }}>
              © {new Date().getFullYear()} Plan B for PANS · <Link href="/privacy" style={{ color: 'var(--sand-dark)', textDecoration: 'underline' }}>Privacy</Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: 'var(--font-inter)',
        fontSize: 11,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'var(--sand-dark)',
        fontWeight: 500,
        textDecoration: 'none',
      }}
    >
      {children}
    </Link>
  )
}
