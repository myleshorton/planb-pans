'use client'

import { useEffect, useState } from 'react'

function Wordmark({ size = 22, dark = false }: { size?: number; dark?: boolean }) {
  const ink = dark ? '#F6F1E7' : '#141414'
  const teal = '#1F6B6B'
  return (
    <a href="#top" style={{ textDecoration: 'none', display: 'inline-block' }}>
      <p
        className="serif"
        style={{
          fontFamily: 'var(--serif)',
          fontSize: size,
          fontWeight: 400,
          color: ink,
          lineHeight: 1,
          margin: 0,
          letterSpacing: '-0.01em',
        }}
      >
        Plan B <span style={{ fontStyle: 'italic', fontWeight: 300, color: teal }}>for PANS</span>
      </p>
      <p
        style={{
          fontSize: 8,
          letterSpacing: '0.38em',
          textTransform: 'uppercase',
          color: dark ? 'rgba(246,241,231,0.55)' : 'var(--mute)',
          marginTop: 6,
          marginBottom: 0,
          fontFamily: 'var(--sans)',
          fontWeight: 500,
        }}
      >
        Research · Tracker · Podcast
      </p>
    </a>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [
    { label: 'Problem', href: '#problem' },
    { label: 'Tracker', href: '#method' },
    { label: 'Research', href: '#research' },
    { label: 'About', href: '#about' },
    { label: 'Podcast', href: '#podcast' },
  ]

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: scrolled ? 'rgba(246,241,231,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px) saturate(1.1)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px) saturate(1.1)' : 'none',
        borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
        transition: 'all 300ms ease',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 40px', gap: 32 }}
      >
        <Wordmark size={22} />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="nav-links">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              style={{
                fontSize: 10.5,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              {it.label}
            </a>
          ))}
          <a href="#start" className="btn btn-teal" style={{ padding: '13px 22px' }}>
            Start Free <span className="arr">→</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer style={{ background: '#0f0f0f', color: '#aaa' }}>
      <div className="container" style={{ padding: '56px 40px 40px' }}>
        <div
          className="footer-grid"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, alignItems: 'start' }}
        >
          <div>
            <Wordmark size={22} dark />
            <p style={{ fontSize: 13, color: '#8a8373', marginTop: 20, lineHeight: 1.7, maxWidth: 360, fontWeight: 300 }}>
              Private data. Public insights. A research project and free tracker for PANS/PANDAS families — not a clinic, not a protocol. Built by a mom.
            </p>
          </div>
          {[
            { head: 'The App', links: ['Intake', 'Weekly check-in', 'Daily tracker', 'Request link'] },
            { head: 'Research', links: ['Cohort threads', 'Knowledge base', 'Modality catalog', 'Open insights'] },
            { head: 'More', links: ['Podcast', 'Newsletter', 'Contact', 'Press'] },
          ].map((col) => (
            <div key={col.head}>
              <p className="eyebrow" style={{ color: '#4f8f8f', marginBottom: 18 }}>
                {col.head}
              </p>
              {col.links.map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{ display: 'block', fontSize: 13, color: '#cfc8b9', textDecoration: 'none', padding: '5px 0', fontWeight: 300 }}
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="rule-soft" style={{ marginTop: 48, marginBottom: 20, background: '#222' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#666', fontWeight: 300 }}>
          <span>© 2026 Rachel Taylor. Research, tracker, and podcast.</span>
          <span style={{ fontFamily: 'var(--mono)' }}>v. 0.4 · built in public</span>
        </div>
      </div>
    </footer>
  )
}
