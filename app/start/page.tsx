import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start Here — Plan B for PANS',
  description:
    'Just found out it’s PANS, or you suspect it? Take a breath. Here are your first moves — and you don’t have to do them alone.',
}

const ink = 'var(--ink)'
const teal = 'var(--teal)'
const soft = 'var(--sand-dark)'
const sand = 'var(--sand)'

const STEPS = [
  {
    title: 'Understand what this is',
    body: 'PANS in plain language — what’s actually happening in your child’s brain, and why it’s treatable. A few minutes that make everything after it make sense.',
    cta: 'Read Understanding PANS',
    href: '/understanding-pans.html',
  },
  {
    title: 'Know the first moves',
    body: 'The protocol everyone starts with — calm the brain (anti-inflammatory) and treat the infection — plus the starter bloodwork and three ways to get it ordered.',
    cta: 'Open The Protocol',
    href: '/deconstructing-pans.html#protocol',
  },
  {
    title: 'See the whole map',
    body: 'Every driver, test, and treatment — and how they connect. Each piece has its own deep-dive guide for when you’re ready for it.',
    cta: 'Open the Full Map',
    href: '/deconstructing-pans.html',
  },
]

export default function StartHere() {
  return (
    <main style={{ background: 'var(--cream)', color: ink }}>
      <section style={{ padding: 'clamp(60px,10vw,116px) 24px clamp(32px,6vw,52px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 18px' }}>Start here</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(36px,7vw,62px)', lineHeight: 1.04, letterSpacing: '-0.02em', margin: '0 0 20px' }}>
            Just found out it’s PANS?<br />
            <em style={{ color: teal, fontStyle: 'italic' }}>Take a breath.</em>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: soft, maxWidth: 560, margin: '0 auto' }}>
            You’re in the right place, and you don’t have to figure this out alone. There’s a lot to learn — but you only need the <em>next</em> step. Here are your first three.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 24px clamp(40px,7vw,72px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {STEPS.map((s, i) => (
            <a key={s.title} href={s.href} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', textDecoration: 'none', background: '#fffdf7', border: `1px solid ${sand}`, borderRadius: 16, padding: 'clamp(22px,4vw,30px)' }}>
              <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 36, color: teal, fontWeight: 400, lineHeight: 1, flexShrink: 0 }}>{i + 1}</span>
              <span>
                <span style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 26, color: ink, margin: '0 0 6px', lineHeight: 1.1 }}>{s.title}</span>
                <span style={{ display: 'block', fontSize: 16, color: soft, lineHeight: 1.6, margin: '0 0 10px' }}>{s.body}</span>
                <span style={{ fontSize: 13.5, color: teal, fontWeight: 700, letterSpacing: '0.03em' }}>{s.cta} →</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 24px clamp(64px,10vw,110px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', background: 'linear-gradient(135deg, var(--teal), #24566a)', color: '#fdf8ee', borderRadius: 18, padding: 'clamp(28px,5vw,44px)', textAlign: 'center' }}>
          <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#bfe3df', margin: '0 0 14px' }}>Or don’t do it alone</p>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(26px,4.4vw,38px)', lineHeight: 1.15, margin: '0 0 14px' }}>Let Minta walk you through it.</p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: '#eaf4f2', maxWidth: 520, margin: '0 auto 22px' }}>
            Tell her what’s going on with your child and she’ll tell you what to do next — which tests to run, what to ask your doctor, and where to start. Free to begin.
          </p>
          <a href="https://app.planbforpans.com/signup" rel="noopener" style={{ display: 'inline-block', background: '#fff', color: '#1F6B6B', fontWeight: 800, fontSize: 15, padding: '14px 30px', borderRadius: 10, textDecoration: 'none' }}>Talk to Minta →</a>
        </div>
      </section>
    </main>
  )
}
