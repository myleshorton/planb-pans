'use client'

import { useReveal } from '../_components/hooks'
import { FAMILY_STORIES, FamilyStoryFull } from '../_components/FamilyStories'
import DeliverablePreview from '../_components/DeliverablePreview'
import { TalkToRachel } from '../_components/TalkToRachel'

// Public pricing page for planbforpans.com.
//
// Plan B is a non-profit (501(c)(3) application pending). The Vault tier stays
// free; the Synthesis is a paid concierge service ($397). Checkout itself lives
// on the app domain — CTAs link to app.planbforpans.com/checkout/start, where
// sign-in + Stripe happen.

const APP = 'https://app.planbforpans.com'

export default function PricingPage() {
  const head = useReveal()

  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* Hero */}
      <section
        style={{
          padding: '120px 24px 72px',
          borderBottom: '1px solid var(--rule)',
          background: 'var(--cream-light)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="bloom-float"
          style={{
            position: 'absolute',
            top: -180,
            right: -180,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(31,107,107,0.14) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div ref={head} className="pb-container reveal" style={{ position: 'relative', zIndex: 1, maxWidth: 1080 }}>
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            What it costs · Non-profit
          </p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(48px, 9vw, 104px)',
              fontWeight: 300,
              letterSpacing: '-0.028em',
              lineHeight: 0.96,
              margin: 0,
              color: 'var(--ink)',
              maxWidth: 1080,
            }}
          >
            One synthesis.{' '}
            <em style={{ color: 'var(--teal)' }}>One source of truth.</em>
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              maxWidth: 720,
              marginTop: 28,
            }}
          >
            Plan B is a non-profit. The Vault — labs, tracking, your first synthesis — stays
            free. The full <strong>Synthesis</strong> is a paid concierge service, because
            integrating a complex case takes hours of a real person&apos;s time. What you pay
            funds the work and free access for families who can&apos;t.
          </p>
          <p
            className="serif"
            style={{
              fontSize: 'clamp(18px, 2.1vw, 23px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.5,
              fontWeight: 400,
              marginTop: 24,
              maxWidth: 720,
            }}
          >
            Built by Rachel — a mom of three recovered PANS kids, not a doctor. Every recommendation is a
            question to bring to your practitioner.
          </p>
          <div style={{ marginTop: 28 }}>
            <TalkToRachel />
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section style={{ padding: '72px 24px 24px', background: 'var(--cream)' }}>
        <div className="pb-container" style={{ maxWidth: 1080 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 20,
            }}
          >
            {/* Vault — free */}
            <Tier
              eyebrow="Free entry"
              name="Vault"
              price="$0"
              unit="/month"
              items={[
                'Lab upload & storage',
                'Symptom + behavior tracking',
                'One baseline synthesis (self-serve)',
                '3 Minta questions / month',
                'Pediatric safety gates',
              ]}
              footnote="Start here. Get organized. Decide if you want the full Synthesis."
              ctaLabel="Start free →"
              ctaHref={`${APP}/intake`}
            />

            {/* Synthesis — flagship */}
            <Tier
              featured
              badge="The flagship"
              eyebrow="One-time service"
              name="Synthesis"
              price="$397"
              unit="one-time"
              items={[
                'Upload every lab, symptom log, prior treatment, practitioner letter',
                '90-minute onboarding call with Rachel',
                'Full integration — Yasko, Walsh, Buhner, Crista, Klinghardt, PANS Consortium, Frankovich/Murphy',
                'One PDF synthesis: what’s going on + what hasn’t been tried + what to bring to which practitioner',
                'Up to 4 hours of iteration support over 30 days',
                'One practitioner referral letter',
                '30 days of Minta access',
              ]}
              footnote="What only happens when someone who's done the homework spends 4–6 hours with your kid's full picture."
              ctaLabel="Book a Synthesis →"
              ctaHref={`${APP}/checkout/start?service=synthesis`}
            />

            {/* Continuous */}
            <Tier
              eyebrow="Ongoing"
              name="Continuous"
              price="$49"
              unit="/month"
              items={[
                'Keep Minta after your 30 days — ask anything, any time',
                'She evolves daily — fed new studies + learning across every family',
                'Symptom + lab trend monitoring with alerts',
                'Cross-kid pattern detection',
                'A quarterly synthesis refresh included',
              ]}
              footnote="Covers Minta’s AI cost. For families staying in active treatment. Cancel anytime."
              ctaLabel="Start Continuous →"
              ctaHref={`${APP}/checkout/start?service=continuous`}
            />
          </div>

          {/* Add-ons */}
          <div
            style={{
              marginTop: 28,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 16,
            }}
          >
            {[
              ['Additional synthesis', '$97', 'Refresh after 3–6 months as labs + symptoms shift.'],
              ['Additional kid (same family)', '$97', 'Sibling synthesis at family rate, coordinated across siblings.'],
              ['Practitioner letter', '$49', 'Extra referral letters for new specialists (one is included).'],
            ].map(([label, price, sub]) => (
              <div
                key={label}
                style={{
                  background: 'var(--paper)',
                  border: '1px solid var(--rule)',
                  borderRadius: 4,
                  padding: '20px 22px',
                }}
              >
                <p className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', margin: 0 }}>{label}</p>
                <p className="serif" style={{ fontSize: 30, fontWeight: 300, color: 'var(--ink)', margin: '6px 0 8px' }}>{price}</p>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-soft)', fontWeight: 300, margin: 0 }}>{sub}</p>
              </div>
            ))}
          </div>

          {/* Non-profit + scholarship note */}
          <div
            style={{
              marginTop: 28,
              background: 'var(--cream-soft)',
              border: '1px solid var(--rule)',
              borderRadius: 6,
              padding: 'clamp(20px, 3vw, 30px)',
              maxWidth: 760,
            }}
          >
            <p className="serif" style={{ fontSize: 'clamp(18px, 2.2vw, 23px)', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.4, fontWeight: 400, margin: '0 0 12px' }}>
              Can&apos;t afford the $397? No problem.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, margin: 0 }}>
              Cost should never be why your child doesn&apos;t get this. Every week, Rachel takes{' '}
              <strong style={{ color: 'var(--teal)' }}>one family at no cost</strong> — the full
              Synthesis. The waitlist is open and public, and the finished synthesis is published
              anonymized so we all learn from it.{' '}
              <a href="/waitlist" style={{ color: 'var(--teal)', fontWeight: 600 }}>Join the waitlist →</a>
            </p>
          </div>

          <div style={{ marginTop: 20, background: 'var(--cream-soft)', border: '1px solid var(--rule)', borderRadius: 6, padding: 'clamp(20px, 3vw, 30px)', maxWidth: 760 }}>
            <p className="serif" style={{ fontSize: 'clamp(18px, 2.2vw, 23px)', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.4, fontWeight: 400, margin: '0 0 12px' }}>
              A note on why Minta has a usage cost.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, margin: '0 0 12px' }}>
              Minta runs on the most advanced AI available — the same kind of engine researchers use — and{' '}
              <strong style={{ color: 'var(--ink)' }}>every conversation has a real cost to run.</strong> We give
              every family a chunk of Minta for free, but we&apos;re a small non-profit. We can&apos;t cover
              unlimited AI usage for everyone without the whole thing collapsing.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, margin: 0 }}>
              So past your free amount, Minta runs on credits — kept at the{' '}
              <strong style={{ color: 'var(--teal)' }}>smallest margin we can manage.</strong> It&apos;s simply the
              honest math of this new world. And the daily tracker — logging symptoms, foods, supplements — is
              always <strong style={{ color: 'var(--ink)' }}>completely free.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* What you actually receive — synthesis doc, tests-to-order, calendar */}
      <DeliverablePreview />

      {/* Proof — two anonymized families */}
      <section style={{ padding: '72px 24px 96px', background: 'var(--cream-light)', borderTop: '1px solid var(--rule)' }}>
        <div className="pb-container" style={{ maxWidth: 820 }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>What the Synthesis actually does</p>
          <h2 className="serif" style={{ fontSize: 'clamp(30px, 4.5vw, 52px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, color: 'var(--ink)', margin: '0 0 14px' }}>
            Two families. <em style={{ color: 'var(--teal)' }}>What we found.</em>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', fontWeight: 300, maxWidth: 640, marginBottom: 52 }}>
            Names anonymized. Details shared with permission.
          </p>

          {FAMILY_STORIES.map((s, i) => (
            <div key={s.id} id={s.id} style={{ scrollMarginTop: 100 }}>
              {i > 0 && <div style={{ width: 60, height: 1, background: 'var(--ink)', opacity: 0.2, margin: '56px auto' }} />}
              <FamilyStoryFull s={s} />
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: 64 }}>
            <a
              href={`${APP}/checkout/start?service=synthesis`}
              style={{
                display: 'inline-block',
                padding: '16px 32px',
                background: 'var(--teal)',
                color: 'var(--cream)',
                borderRadius: 6,
                textDecoration: 'none',
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: '0.01em',
              }}
            >
              Book a Synthesis — $397 →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function Tier({
  eyebrow, name, price, unit, items, footnote, ctaLabel, ctaHref, featured, badge,
}: {
  eyebrow: string; name: string; price: string; unit: string; items: string[]
  footnote: string; ctaLabel: string; ctaHref: string; featured?: boolean; badge?: string
}) {
  return (
    <div
      style={{
        background: 'var(--paper)',
        border: featured ? '2px solid var(--teal)' : '1px solid var(--rule)',
        borderRadius: 6,
        padding: 'clamp(24px, 3vw, 32px)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {badge && (
        <span
          className="mono"
          style={{
            position: 'absolute', top: -11, left: 24, background: 'var(--teal)', color: 'var(--cream)',
            fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 3, fontWeight: 600,
          }}
        >
          {badge}
        </span>
      )}
      <p className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-soft)', margin: 0 }}>{eyebrow}</p>
      <h2 className="serif" style={{ fontSize: 28, fontWeight: 400, color: 'var(--ink)', margin: '4px 0 10px' }}>{name}</h2>
      <p style={{ margin: '0 0 18px', display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span className="serif" style={{ fontSize: 44, fontWeight: 300, color: 'var(--ink)', letterSpacing: '-0.02em' }}>{price}</span>
        <span style={{ fontSize: 14, color: 'var(--ink-soft)', fontWeight: 300 }}>{unit}</span>
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'grid', gap: 9, flex: 1 }}>
        {items.map((it) => (
          <li key={it} style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-soft)', fontWeight: 300, paddingLeft: 18, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, top: 1, color: 'var(--teal)' }}>·</span>
            {it}
          </li>
        ))}
      </ul>
      <p style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--ink-soft)', fontStyle: 'italic', opacity: 0.85, margin: '0 0 18px' }}>{footnote}</p>
      <a
        href={ctaHref}
        style={{
          display: 'inline-block', textAlign: 'center', padding: '12px 18px',
          background: featured ? 'var(--teal)' : 'transparent',
          color: featured ? 'var(--cream)' : 'var(--teal)',
          border: featured ? '1px solid var(--teal)' : '1px solid var(--rule)',
          borderRadius: 6, textDecoration: 'none', fontSize: 14, fontWeight: 500,
        }}
      >
        {ctaLabel}
      </a>
    </div>
  )
}

