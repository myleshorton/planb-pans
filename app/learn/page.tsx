// The Learn hub — home for every deconstructed modality. Each piece tells you
// what it is, the studies behind it, and (the part no one explains) HOW to
// actually access it. Cards link to live pages or mark "coming soon".

export const metadata = {
  title: 'Learn — Plan B for PANS',
  description:
    'Every PANS/Lyme treatment, deconstructed: what it is, the studies behind it, and — the part no one explains — how to actually access it and get help.',
}

const ink = '#2a2a26'
const teal = '#1F6B6B'
const soft = '#524d40'
const rule = '#e3dcc9'
const card = '#fffdf7'

type Item = { title: string; blurb: string; href?: string }

const LIVE: Item[] = [
  { title: 'Understanding PANS', blurb: 'Start here — what PANS actually is, in plain language for an exhausted parent.', href: '/understanding-pans.html' },
  { title: 'The Full Map', blurb: 'Every driver, test, and treatment for PANS — deconstructed and connected.', href: '/deconstructing-pans.html' },
  { title: 'Find Mold Yourself', blurb: 'The honest ERMI story + how to find and safely remediate mold without a predatory middleman.', href: '/find-mold.html' },
  { title: 'Phage Therapy', blurb: 'Viruses that kill bacteria and spare the gut — the real providers (Eliava), how to access, the evidence, and how to spot a quack.', href: '/phage.html' },
]

const COMING: Item[] = [
  { title: 'Lyme & Co-infections', blurb: 'The full kill-menu — and how to actually find a doctor, get tested, and access every option.' },
  { title: 'Hyperthermia & Clinics', blurb: 'Heat that kills Borrelia — which clinics, who qualifies, how to get in, what it costs.' },
  { title: 'Homeopathy', blurb: 'Classical, done right — and how to find a true-classical practitioner, not a modern imposter.' },
  { title: 'Biomagnetism', blurb: 'What it is, the honest evidence, and how to find a practitioner.' },
  { title: 'Methylation & Detox', blurb: 'The cleanup engine no specialist owns — testing, and how to interpret it.' },
  { title: 'IVIG & Immune Treatment', blurb: 'When it helps, what you need before you qualify, and how to fight for access.' },
]

export default function LearnPage() {
  return (
    <main style={{ background: '#faf6ec', color: ink }}>
      <section style={{ padding: 'clamp(56px, 9vw, 110px) 24px 36px', borderBottom: `1px solid ${rule}` }}>
        <div className="pb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 16px' }}>The Plan B Encyclopedia</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(34px, 6vw, 62px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
            Every treatment, deconstructed.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: soft, maxWidth: 680, margin: 0 }}>
            The hardest part isn&rsquo;t learning a treatment <em>exists</em> — it&rsquo;s figuring out <strong style={{ color: ink }}>how to actually get it</strong>, and how not to get burned. Most parents have no idea where to start. So each guide answers the same five things: <strong style={{ color: ink }}>what it is</strong>, <strong style={{ color: ink }}>the research behind it</strong>, <strong style={{ color: ink }}>the real risks</strong>, <strong style={{ color: ink }}>exactly how to access it</strong>, and <strong style={{ color: ink }}>how to tell a real practitioner from a quack.</strong>
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(36px, 6vw, 64px) 24px' }}>
        <div className="pb-container" style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {LIVE.map((it) => (
              <a key={it.title} href={it.href} style={{ display: 'block', textDecoration: 'none', background: card, border: `1.5px solid ${teal}`, borderRadius: 14, padding: '24px 24px 26px' }}>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 25, lineHeight: 1.1, color: ink, margin: '0 0 10px' }}>{it.title}</p>
                <p style={{ fontSize: 14.5, color: soft, lineHeight: 1.55, margin: '0 0 14px' }}>{it.blurb}</p>
                <span style={{ fontSize: 13, color: teal, fontWeight: 700, letterSpacing: '0.04em' }}>Read &rarr;</span>
              </a>
            ))}
          </div>

          <p style={{ fontSize: 13, color: teal, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, margin: 'clamp(36px, 6vw, 56px) 0 18px' }}>In the works — full how-to-access guides, with studies</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {COMING.map((it) => (
              <div key={it.title} style={{ background: '#fbf8f1', border: `1px solid ${rule}`, borderRadius: 12, padding: '18px 20px 20px', opacity: 0.92 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, marginBottom: 8 }}>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 21, color: ink, margin: 0 }}>{it.title}</p>
                  <span style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, color: teal, background: 'rgba(31,107,107,0.1)', padding: '3px 7px', borderRadius: 4, whiteSpace: 'nowrap' }}>Soon</span>
                </div>
                <p style={{ fontSize: 13.5, color: soft, lineHeight: 1.5, margin: 0 }}>{it.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
