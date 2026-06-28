// Plan B pricing — this page is about tokens. Plan B runs on tokens: units of
// Minta's time that cover the actual AI cost. About $20 covers roughly 5 months
// for most families. Pay-as-you-go, nothing recurring. The Synthesis is included;
// tokens cover ongoing Minta. Non-profit — no family is ever turned away for cost.

export const metadata = {
  title: 'Pricing | Plan B for PANS',
  description:
    'Plan B runs on tokens — units of Minta’s time that cover the actual AI cost. About $20 covers roughly 5 months for most families. Pay-as-you-go, nothing recurring. Your Synthesis is included.',
}

const ink = '#2a2a26'
const teal = '#1F6B6B'
const soft = '#524d40'
const rule = '#e3dcc9'
const card = '#fffdf7'

// Token packs — pay-as-you-go, bigger packs go a little further per dollar.
const PACKS: { price: string; covers: string; note: string }[] = [
  { price: '$20', covers: '≈ 5 months', note: 'For most families' },
  { price: '$50', covers: 'goes further', note: '≈ 10% more generous per dollar' },
  { price: '$100', covers: 'goes furthest', note: '≈ 15% more generous per dollar' },
]

export default function PricingPage() {
  return (
    <main style={{ background: '#faf6ec', color: ink }}>
      {/* Hero — tokens */}
      <section style={{ padding: 'clamp(56px, 9vw, 110px) 24px 40px', borderBottom: `1px solid ${rule}` }}>
        <div className="pb-container" style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 16px' }}>Pricing</p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(34px, 6vw, 62px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
            Plan B runs on tokens.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: soft, maxWidth: 680, margin: 0 }}>
            Tokens are simply units of Minta&rsquo;s time — they cover the actual AI cost, nothing more.
            A little goes a long way: <strong style={{ color: ink }}>about $20 covers roughly 5 months</strong> for
            most families. <strong style={{ color: ink }}>Pay-as-you-go — no subscription, nothing recurring.</strong>
          </p>
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: soft, maxWidth: 680, margin: '14px 0 0' }}>
            Your Synthesis is included; tokens cover ongoing Minta.
          </p>
        </div>
      </section>

      {/* The token packs */}
      <section style={{ padding: 'clamp(44px, 7vw, 80px) 24px clamp(20px, 3vw, 32px)' }}>
        <div className="pb-container" style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 20px' }}>Top up when you run low</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
            {PACKS.map((p) => (
              <div key={p.price} style={{ background: card, border: `1px solid ${rule}`, borderRadius: 14, padding: '26px 26px 28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 'clamp(44px, 7vw, 56px)', lineHeight: 1, color: ink, margin: '0 0 10px' }}>{p.price}</div>
                <p style={{ fontSize: 16, color: teal, fontWeight: 700, margin: '0 0 6px' }}>{p.covers}</p>
                <p style={{ fontSize: 14, color: soft, lineHeight: 1.55, margin: 0 }}>{p.note}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 26 }}>
            <a href="https://app.planbforpans.com" style={{ display: 'inline-block', background: teal, color: '#fffdf7', fontSize: 16, fontWeight: 700, padding: '14px 34px', borderRadius: 9, textDecoration: 'none' }}>Top up in the app →</a>
          </div>
          <p style={{ fontSize: 13.5, color: soft, lineHeight: 1.6, margin: '18px 0 0', maxWidth: 620 }}>
            Can&rsquo;t swing the $20? <strong style={{ color: ink }}>No family is ever turned away because of cost.</strong>{' '}
            <a href="https://app.planbforpans.com/sponsor" style={{ color: teal, fontWeight: 700, textDecoration: 'none', borderBottom: `2px solid rgba(31,107,107,0.32)`, paddingBottom: 1 }}>Ask about a sponsored top-up →</a>
          </p>
        </div>
      </section>

      {/* How tokens work — the plain explanation */}
      <section style={{ padding: 'clamp(20px, 3vw, 28px) 24px clamp(36px, 5vw, 56px)' }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto', background: card, border: `1px solid ${rule}`, borderRadius: 14, padding: '26px 28px' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 10px' }}>How tokens work</p>
          <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.7, margin: '0 0 12px' }}>
            Plan B runs on the most advanced — and most expensive — AI there is. Tokens are how that
            cost gets covered, plainly: <strong style={{ color: ink }}>each message with Minta uses some</strong>, and you only
            pay for what you actually use. Nothing is recurring; you top up when you run low.
          </p>
          <p style={{ fontSize: 15.5, color: soft, lineHeight: 1.7, margin: 0 }}>
            The scale is gentle — <strong style={{ color: ink }}>about $20 covers roughly 5 months</strong> for a typical family.
            The bigger the top-up, the better the rate: the <strong style={{ color: ink }}>$50</strong> is about 10% more generous
            per dollar than the $20, and the <strong style={{ color: ink }}>$100</strong> about 15% more.
          </p>
        </div>
      </section>

      {/* Support the studies — pay it forward (brief) */}
      <section style={{ padding: '0 24px clamp(36px, 5vw, 56px)' }}>
        <div className="pb-container" style={{ maxWidth: 760, margin: '0 auto', background: '#f1efe2', border: `1.5px solid ${teal}`, borderRadius: 16, padding: 'clamp(24px, 4vw, 34px)', textAlign: 'center' }}>
          <p style={{ color: teal, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 12px' }}>Pay it forward</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: 'clamp(26px, 4.4vw, 38px)', lineHeight: 1.1, color: ink, margin: '0 0 12px' }}>
            Support the studies
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: soft, maxWidth: 560, margin: '0 auto' }}>
            Plan B is a non-profit. If it helped your family and you&rsquo;re able, a gift goes straight to the work — funding the cohort studies and a sponsored top-up for the next family.
          </p>
          <a href="https://app.planbforpans.com/donate" style={{ display: 'inline-block', marginTop: 20, background: teal, color: '#fffdf7', fontSize: 16, fontWeight: 700, padding: '13px 32px', borderRadius: 9, textDecoration: 'none' }}>Donate / Support the studies →</a>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ padding: '0 24px 88px' }}>
        <div className="pb-container" style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 12.5, color: soft, fontStyle: 'italic', margin: 0, textAlign: 'center' }}>
            Plan B gives you direction — not medical advice or treatment. Your licensed medical team makes all clinical decisions. See our <a href="/terms" style={{ color: teal }}>Terms &amp; Medical Disclaimer</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
