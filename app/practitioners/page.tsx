'use client'

import { useReveal } from '../_components/hooks'

export default function PractitionersPage() {
  const head = useReveal()
  const ask = useReveal()
  const get = useReveal()
  return (
    <main style={{ background: 'var(--cream)' }}>
      {/* Header */}
      <section
        style={{
          padding: '120px 24px 80px',
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
            width: 520,
            height: 520,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(31,107,107,0.14) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          ref={head}
          className="pb-container reveal"
          style={{ position: 'relative', zIndex: 1, maxWidth: 1080 }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            For practitioners
          </p>
          <h1
            className="serif"
            style={{
              fontSize: 'clamp(48px, 9vw, 108px)',
              fontWeight: 300,
              letterSpacing: '-0.028em',
              lineHeight: 0.96,
              margin: 0,
              color: 'var(--ink)',
              maxWidth: 1000,
            }}
          >
            Calling all <em style={{ color: 'var(--teal)' }}>practitioners.</em>
          </h1>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.7,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              maxWidth: 720,
              marginTop: 28,
            }}
          >
            Hope is fleeting. Families want results. If your modality is actually moving the
            needle for these kids, we need your practice in the case studies — and families
            need to find you.
          </p>
        </div>
      </section>

      {/* The deal */}
      <section
        style={{ padding: '100px 24px', background: 'var(--cream)' }}
      >
        <div
          ref={ask}
          className="pb-container reveal"
          style={{ maxWidth: 960 }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: 56,
              alignItems: 'start',
            }}
            className="practitioner-grid"
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: 20 }}>
                The deal
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: 'clamp(34px, 5.4vw, 58px)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  color: 'var(--ink)',
                  margin: 0,
                }}
              >
                Trade secrets.
                <br />
                <em style={{ color: 'var(--teal)' }}>
                  Together we get out.
                </em>
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.9,
                  color: 'var(--ink-soft)',
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                PANS, PANDAS, autism, and severe dysregulation are not solved in any single
                practice. The gut person needs the methylation person needs the mold person
                needs the nervous-system person. No one has the whole picture alone.
              </p>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.9,
                  color: 'var(--ink-soft)',
                  fontWeight: 300,
                  marginTop: 18,
                }}
              >
                Plan B exists to do the synthesis — to read each kid&apos;s full story and
                suggest the modalities, sequence, and practitioners most likely to help. That
                works only if the best practitioners are in the loop.
              </p>
              <p
                className="serif"
                style={{
                  fontSize: 22,
                  fontStyle: 'italic',
                  color: 'var(--ink)',
                  margin: '24px 0 0',
                  fontWeight: 400,
                  lineHeight: 1.35,
                  borderLeft: '3px solid var(--teal)',
                  paddingLeft: 20,
                }}
              >
                Proven methods. Proven practitioners.{' '}
                <span style={{ color: 'var(--teal)' }}>Real results.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we're asking for */}
      <section
        style={{
          padding: '100px 24px',
          background: '#141414',
          color: 'var(--cream)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1080 }}>
          <p
            className="eyebrow"
            style={{ color: 'var(--teal-light)', marginBottom: 22 }}
          >
            § What we&apos;re asking for
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(34px, 5.6vw, 58px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: 'var(--cream)',
              marginBottom: 48,
              maxWidth: 760,
            }}
          >
            Three things. Simple.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 24,
            }}
          >
            {[
              {
                n: '01',
                t: 'Your protocols + teachings',
                b: 'The materials you already share with patients — write-ups, lectures, webinars, published work. Plan B reads and synthesizes it (with permission) so every family using Plan B can benefit from the framework you&apos;ve built.',
              },
              {
                n: '02',
                t: 'Case-study participation',
                b: 'Let us track a cohort of your patients (de-identified, consent-based) to see what your approach actually moves across 5–10 kids. You get the same read. Families everywhere get the pattern.',
              },
              {
                n: '03',
                t: 'Willingness to take referrals',
                b: 'When Plan B sees a kid whose profile matches what your practice treats well, it tells the family you&apos;re a practitioner worth reaching. You never pay for a referral. You just say yes to new intakes.',
              },
            ].map((c) => (
              <div
                key={c.n}
                style={{
                  borderTop: '1px solid rgba(246,241,231,0.2)',
                  paddingTop: 22,
                }}
              >
                <p
                  className="serif"
                  style={{
                    fontSize: 46,
                    lineHeight: 0.9,
                    color: 'var(--teal-light)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    marginBottom: 14,
                  }}
                >
                  {c.n}
                </p>
                <p
                  className="serif"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: 'var(--cream)',
                    margin: 0,
                    marginBottom: 12,
                  }}
                >
                  {c.t}
                </p>
                <p
                  style={{
                    fontSize: 13.5,
                    color: '#bbb3a2',
                    lineHeight: 1.75,
                    fontWeight: 300,
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: c.b }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section
        style={{ padding: '100px 24px', background: 'var(--cream)' }}
      >
        <div ref={get} className="pb-container reveal" style={{ maxWidth: 960 }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            What you get
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(34px, 5.4vw, 58px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: 'var(--ink)',
              margin: 0,
              marginBottom: 40,
              maxWidth: 780,
            }}
          >
            If your modality works, <em style={{ color: 'var(--teal)' }}>Plan B will know.</em>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {[
              {
                t: 'Targeted referrals',
                b: 'Plan B routes families to your practice when your modality is the right match for their kid — with the clinical context already loaded.',
              },
              {
                t: 'Published case study findings',
                b: 'Your cohort\u2019s patterns get surfaced in our open research. With your name if you want it. Without, if you don&apos;t.',
              },
              {
                t: 'Plan B\u2019s read on your patients',
                b: 'Your patients\u2019 Plan B analyses — full intake, timeline, modality response — are available to you (with their consent) to inform their care.',
              },
              {
                t: 'Peer visibility',
                b: 'When Plan B sees patterns across practitioners — where your work sequences well with a colleague\u2019s — we surface that, with permission. The silos stop being silos.',
              },
            ].map((c) => (
              <div
                key={c.t}
                style={{
                  background: 'var(--paper)',
                  border: '1px solid var(--sand)',
                  borderRadius: 4,
                  padding: 22,
                }}
              >
                <p
                  className="serif"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: 'var(--ink)',
                    marginBottom: 10,
                  }}
                >
                  {c.t}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: 'var(--ink-soft)',
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                  dangerouslySetInnerHTML={{ __html: c.b }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application */}
      <section
        style={{
          padding: '120px 24px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          textAlign: 'center',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 700 }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            Apply to partner
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: 24,
              color: 'var(--ink)',
            }}
          >
            The families can&apos;t wait.{' '}
            <em style={{ color: 'var(--teal)' }}>Neither can we.</em>
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.85,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              marginBottom: 36,
              maxWidth: 580,
              margin: '0 auto 36px',
            }}
          >
            Email us with your practice name, modality focus, approximate PANS/PANDAS/autism
            case volume, and what you&apos;re most curious to learn from a shared dataset.
            We&apos;ll respond within a week.
          </p>
          <a
            href="mailto:rachel@planbforpans.com?subject=Practitioner%20partnership%20inquiry"
            className="cta-teal"
            style={{ textDecoration: 'none' }}
          >
            Email rachel@planbforpans.com →
          </a>
        </div>
      </section>
    </main>
  )
}
