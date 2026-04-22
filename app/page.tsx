'use client'

import { useEffect, useRef, Fragment } from 'react'
import BucketSection from './_components/BucketSection'

export default function Home() {
  const revealRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('in-view')
        })
      },
      { threshold: 0.14, rootMargin: '-40px 0px' },
    )
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main ref={revealRef} style={{ background: 'var(--cream)' }}>
      {/* HERO — editorial split */}
      <section
        className="graph-paper"
        style={{
          minHeight: '94vh',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="bloom-float"
          style={{
            position: 'absolute',
            top: -220,
            right: -200,
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(31,107,107,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="bloom-float-alt"
          style={{
            position: 'absolute',
            bottom: -240,
            left: -220,
            width: 640,
            height: 640,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,203,182,0.45) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: 1240,
            width: '100%',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
            gap: 'clamp(40px, 6vw, 96px)',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left — text */}
          <div>
            <p className="eyebrow rise delay-1 caret" style={{ marginBottom: 22 }}>
              There is always a Plan B
            </p>

            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(52px, 9vw, 104px)',
                fontWeight: 300,
                letterSpacing: '-0.028em',
                lineHeight: 0.98,
                marginBottom: 30,
                color: 'var(--ink)',
              }}
            >
              <span className="word" style={{ animationDelay: '0.18s' }}>When</span>{' '}
              <span className="word" style={{ animationDelay: '0.30s' }}>standard</span>
              <br />
              <span
                className="word word-italic"
                style={{
                  fontStyle: 'italic',
                  color: 'var(--teal)',
                  fontWeight: 400,
                  animationDelay: '0.46s',
                }}
              >
                protocols
              </span>{' '}
              <span
                className="word word-italic"
                style={{
                  fontStyle: 'italic',
                  color: 'var(--teal)',
                  fontWeight: 400,
                  animationDelay: '0.58s',
                }}
              >
                fail.
              </span>
            </h1>

            <p
              className="rise delay-3"
              style={{
                fontSize: 19,
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: 580,
                marginBottom: 40,
              }}
            >
              A clinical synthesis engine for PANS, PANDAS, autism, and severe dysregulation.
              Plan B reads every modality on record — standard medicine, functional medicine,
              fringe protocols, live cohort data — and matches them against your kid&apos;s
              full intake.{' '}
              <em style={{ color: 'var(--ink)' }}>A protocol, not a guess.</em>
            </p>

            <div
              className="rise delay-4"
              style={{
                display: 'flex',
                gap: 14,
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://app.planbforpans.com/signup"
                target="_blank"
                rel="noopener"
                className="cta-teal"
                style={{ textDecoration: 'none' }}
              >
                Start your intake →
              </a>
              <a
                href="#listen"
                style={{
                  display: 'inline-block',
                  padding: '16px 32px',
                  fontFamily: 'var(--font-inter)',
                  fontSize: 11,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'var(--teal)',
                  border: '1px solid var(--sand)',
                  borderRadius: 4,
                  textDecoration: 'none',
                  background: 'transparent',
                }}
              >
                Listen to the podcast
              </a>
            </div>

            <p
              className="fade delay-6"
              style={{
                marginTop: 56,
                fontSize: 11,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--sand-dark)',
                fontWeight: 500,
              }}
            >
              ↓ &nbsp; What Plan B is
            </p>
          </div>

          {/* Right — silhouette as clinical figure */}
          <div
            className="fade delay-2 hero-portrait"
            style={{
              position: 'relative',
              paddingLeft: 24,
            }}
          >
            {/* Teal offset panel behind the image */}
            <div
              style={{
                position: 'absolute',
                top: 28,
                right: 28,
                bottom: -32,
                left: 52,
                background: 'var(--teal)',
                zIndex: 0,
              }}
            />
            {/* Vertical masthead strip */}
            <p
              className="mono"
              style={{
                position: 'absolute',
                top: 32,
                left: 2,
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                fontSize: 10,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
                zIndex: 2,
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}
            >
              FIG. 01 &middot; Subject P-0001 &middot; Plan B for PANS
            </p>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  position: 'relative',
                  background: 'var(--cream)',
                  border: '1px solid var(--ink)',
                  overflow: 'hidden',
                }}
              >
                {/* Light graph-paper inside the image frame */}
                <div
                  className="graph-paper"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.55,
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <img
                    src="/kid-silhouette.png"
                    alt="Clinical silhouette — representative subject, Plan B for PANS"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      mixBlendMode: 'multiply',
                      padding: '28px 40px 0',
                    }}
                  />
                </div>

                {/* Acute indicator, top-left */}
                <div
                  style={{
                    position: 'absolute',
                    top: 18,
                    left: 18,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    zIndex: 3,
                  }}
                >
                  <span className="pulse-dot" />
                  <span
                    className="mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.24em',
                      textTransform: 'uppercase',
                      color: '#a02020',
                      fontWeight: 700,
                    }}
                  >
                    Acute · Ongoing
                  </span>
                </div>

                {/* Anatomical symptom pins */}
                <div
                  className="mono"
                  style={{
                    position: 'absolute',
                    top: '20%',
                    left: '54%',
                    fontSize: 9,
                    color: 'var(--ink)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--teal)',
                      boxShadow: '0 0 0 3px rgba(31,107,107,0.15)',
                    }}
                  />
                  <span>Cognitive regression</span>
                </div>
                <div
                  className="mono"
                  style={{
                    position: 'absolute',
                    top: '36%',
                    left: '58%',
                    fontSize: 9,
                    color: 'var(--ink)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--teal)',
                      boxShadow: '0 0 0 3px rgba(31,107,107,0.15)',
                    }}
                  />
                  <span>Sensory overload</span>
                </div>
                <div
                  className="mono"
                  style={{
                    position: 'absolute',
                    top: '52%',
                    left: '22%',
                    fontSize: 9,
                    color: 'var(--ink)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span>OCD · Food fear</span>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--teal)',
                      boxShadow: '0 0 0 3px rgba(31,107,107,0.15)',
                    }}
                  />
                </div>
                <div
                  className="mono"
                  style={{
                    position: 'absolute',
                    top: '68%',
                    left: '60%',
                    fontSize: 9,
                    color: 'var(--ink)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--teal)',
                      boxShadow: '0 0 0 3px rgba(31,107,107,0.15)',
                    }}
                  />
                  <span>Rage · Meltdowns</span>
                </div>

                {/* Clinical caption — chart row style */}
                <div
                  style={{
                    background: 'var(--cream)',
                    borderTop: '1px solid var(--ink)',
                    padding: '18px 22px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <p
                    className="mono"
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--sand-dark)',
                      fontWeight: 600,
                      marginBottom: 10,
                    }}
                  >
                    Subject P-0001 · Intake summary
                  </p>
                  <dl
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr',
                      columnGap: 16,
                      rowGap: 6,
                      margin: 0,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                    }}
                  >
                    {[
                      ['Onset', 'Age 8.3 · overnight'],
                      ['Trigger', 'Strep + Myco IgG+'],
                      ['New symptoms', '12 in 6 weeks'],
                      ['Protocols tried', '4 · partial response'],
                    ].map(([k, v]) => (
                      <Fragment key={k}>
                        <dt
                          style={{
                            color: 'var(--sand-dark)',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            fontSize: 9,
                            alignSelf: 'center',
                            fontWeight: 500,
                          }}
                        >
                          {k}
                        </dt>
                        <dd
                          style={{
                            color: 'var(--ink)',
                            margin: 0,
                            fontWeight: 500,
                          }}
                        >
                          {v}
                        </dd>
                      </Fragment>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THESIS — stated plainly */}
      <section
        aria-label="Thesis"
        style={{
          background: 'var(--paper)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
          padding: '56px 24px',
        }}
      >
        <div
          className="pb-container"
          style={{
            maxWidth: 1080,
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: 'clamp(18px, 4vw, 40px)',
            alignItems: 'start',
          }}
        >
          <p
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--teal)',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              paddingTop: 6,
            }}
          >
            Our thesis
          </p>
          <p
            className="serif"
            style={{
              fontSize: 'clamp(28px, 4.2vw, 46px)',
              fontWeight: 300,
              letterSpacing: '-0.018em',
              lineHeight: 1.08,
              margin: 0,
              color: 'var(--ink)',
            }}
          >
            For the kids{' '}
            <em style={{ color: 'var(--teal)' }}>the system left behind</em> —
            a protocol{' '}
            <em style={{ color: 'var(--teal)' }}>the system couldn&apos;t build.</em>
          </p>
        </div>
      </section>

      {/* BUCKET — the problem */}
      <BucketSection />

      {/* STAKES — no 911 */}
      <section
        style={{
          background: 'var(--ink)',
          color: 'var(--cream)',
          padding: '80px 24px',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="graph-paper"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.04,
            pointerEvents: 'none',
          }}
        />
        <div
          className="pb-container"
          style={{ maxWidth: 900, position: 'relative', zIndex: 1 }}
        >
          <p
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#a02020',
              fontWeight: 700,
              marginBottom: 18,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span className="pulse-dot" />
            The stakes
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(34px, 6vw, 64px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.02,
              margin: 0,
              color: 'var(--cream)',
              maxWidth: 880,
            }}
          >
            There is no 911 to call when your kid gets bad. Psych hospitals rarely help.
          </h2>
          <p
            className="serif"
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontStyle: 'italic',
              color: 'var(--teal-light)',
              lineHeight: 1.35,
              fontWeight: 400,
              margin: '28px 0 0',
              maxWidth: 780,
            }}
          >
            This is where you go when there&apos;s no other place — for solutions.
          </p>
        </div>
      </section>

      {/* THE ENGINE — one synthesized system */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--paper)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1080 }}>
          <div style={{ marginBottom: 48, maxWidth: 900 }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              § 02 · The engine
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(36px, 6vw, 68px)',
                fontWeight: 300,
                letterSpacing: '-0.022em',
                lineHeight: 1,
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              One system.
              <br />
              <em style={{ color: 'var(--teal)' }}>Every facet feeds it.</em>
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                marginTop: 24,
                maxWidth: 720,
              }}
            >
              Parent forums have suggestions. Plan B builds a path. It reads every modality on
              record, every practitioner teaching, every cohort study we run, and every kid&apos;s
              full intake — and synthesizes them into a targeted protocol. The more families
              tracking, the more studies we fund, the faster every family gets to solutions.
            </p>
          </div>

          {/* Engine schematic */}
          <div
            className="engine-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              gap: 'clamp(20px, 4vw, 56px)',
              alignItems: 'stretch',
              marginBottom: 40,
            }}
          >
            {/* Inputs */}
            <div
              style={{
                border: '1px solid var(--ink)',
                padding: '26px 24px',
                position: 'relative',
              }}
            >
              <p
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.24em',
                  color: 'var(--sand-dark)',
                  fontWeight: 600,
                  marginBottom: 18,
                  textTransform: 'uppercase',
                }}
              >
                Inputs · What feeds it
              </p>
              {[
                'Every modality (standard · functional · fringe)',
                'Every practitioner teaching & published work',
                'Live cohort data from running case studies',
                'Your kid\u2019s full intake, onset story, labs',
                'Community questions and corrections',
              ].map((x, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '28px 1fr',
                    gap: 10,
                    alignItems: 'baseline',
                    padding: '10px 0',
                    borderTop: i === 0 ? 'none' : '1px solid var(--sand-light)',
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: 10,
                      color: 'var(--teal)',
                      letterSpacing: '0.12em',
                      fontWeight: 600,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    style={{
                      fontSize: 13.5,
                      color: 'var(--ink)',
                      lineHeight: 1.55,
                      fontWeight: 300,
                    }}
                  >
                    {x}
                  </span>
                </div>
              ))}
            </div>

            {/* Engine center */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 180,
                position: 'relative',
              }}
              aria-hidden="false"
            >
              <div
                className="engine-arrow-in"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: -40,
                  transform: 'translateY(-50%)',
                  width: 40,
                  height: 1,
                  background: 'var(--ink)',
                }}
              />
              <div
                className="engine-arrow-in"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 'calc(50% - 5px)',
                  left: -12,
                  width: 0,
                  height: 0,
                  borderTop: '5px solid transparent',
                  borderBottom: '5px solid transparent',
                  borderLeft: '8px solid var(--ink)',
                }}
              />
              <div
                style={{
                  background: 'var(--ink)',
                  color: 'var(--cream)',
                  padding: '36px 28px',
                  textAlign: 'center',
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  className="graph-paper"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.05,
                    pointerEvents: 'none',
                  }}
                />
                <p
                  className="mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: '0.28em',
                    color: 'var(--teal-light)',
                    fontWeight: 600,
                    marginBottom: 14,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  Synthesis engine
                </p>
                <p
                  className="serif"
                  style={{
                    fontSize: 28,
                    fontWeight: 300,
                    color: 'var(--cream)',
                    letterSpacing: '-0.015em',
                    lineHeight: 1,
                    margin: '0 0 8px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  Plan B
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: '#bbb3a2',
                    lineHeight: 1.7,
                    fontWeight: 300,
                    margin: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  Reads it all together.
                </p>
              </div>
              <div
                className="engine-arrow-out"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: -40,
                  transform: 'translateY(-50%)',
                  width: 40,
                  height: 1,
                  background: 'var(--ink)',
                }}
              />
              <div
                className="engine-arrow-out"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 'calc(50% - 5px)',
                  right: -12,
                  width: 0,
                  height: 0,
                  borderTop: '5px solid transparent',
                  borderBottom: '5px solid transparent',
                  borderLeft: '8px solid var(--ink)',
                }}
              />
            </div>

            {/* Outputs */}
            <div
              style={{
                border: '1px solid var(--ink)',
                padding: '26px 24px',
                position: 'relative',
              }}
            >
              <p
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.24em',
                  color: 'var(--sand-dark)',
                  fontWeight: 600,
                  marginBottom: 18,
                  textTransform: 'uppercase',
                }}
              >
                Outputs · What it produces
              </p>
              {[
                'Your kid\u2019s targeted protocol, not a guess',
                'Matched placement into a case study',
                'Referrals to practitioners whose work fits',
                'Real-time answers to your 2am questions',
                'Published cohort findings, for every family after',
              ].map((x, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '28px 1fr',
                    gap: 10,
                    alignItems: 'baseline',
                    padding: '10px 0',
                    borderTop: i === 0 ? 'none' : '1px solid var(--sand-light)',
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: 10,
                      color: 'var(--teal)',
                      letterSpacing: '0.12em',
                      fontWeight: 600,
                    }}
                  >
                    →
                  </span>
                  <span
                    style={{
                      fontSize: 13.5,
                      color: 'var(--ink)',
                      lineHeight: 1.55,
                      fontWeight: 300,
                    }}
                  >
                    {x}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback loop callout */}
          <div
            style={{
              borderTop: '1px dashed var(--sand)',
              paddingTop: 24,
              display: 'flex',
              gap: 16,
              alignItems: 'baseline',
              flexWrap: 'wrap',
            }}
          >
            <span
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: '0.24em',
                color: 'var(--teal)',
                fontWeight: 600,
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              ↺ Feedback loop
            </span>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.75,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                margin: 0,
                flex: 1,
                minWidth: 280,
              }}
            >
              Your family&apos;s journey feeds back into the library. The 100th family&apos;s
              read benefits from what the first 99 contributed. More people in → more studies
              funded → faster to solutions, for everyone.
            </p>
          </div>

          <p
            className="serif"
            style={{
              fontSize: 'clamp(24px, 3.4vw, 34px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.3,
              fontWeight: 400,
              margin: '48px 0 0',
              maxWidth: 800,
              borderLeft: '3px solid var(--teal)',
              paddingLeft: 22,
            }}
          >
            A protocol, not a guess.{' '}
            <span style={{ color: 'var(--teal)' }}>Compounding with every family.</span>
          </p>
        </div>
      </section>

      {/* THE WHY — mechanism questions */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--cream-light)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1000 }}>
          <div style={{ marginBottom: 36, maxWidth: 860 }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              § 03 · The why
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(34px, 5.6vw, 60px)',
                fontWeight: 300,
                letterSpacing: '-0.022em',
                lineHeight: 1,
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              Understanding the mechanism — <em style={{ color: 'var(--teal)' }}>so solutions get easier to craft.</em>
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                marginTop: 20,
                maxWidth: 720,
              }}
            >
              Plan B isn&apos;t only matching modalities to kids. It&apos;s pursuing the
              questions underneath — which behavior is which driver? Every added family,
              every added cohort, every added data point pushes these questions closer to
              answers.
            </p>
          </div>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              borderTop: '1px solid var(--ink)',
            }}
          >
            {[
              {
                n: 'Q1',
                q: 'Are these behaviors pathogen-driven?',
                s: 'When sudden OCD, rage, or regression appears — is the brain reacting to a specific infection? Which one, and in which kid?',
              },
              {
                n: 'Q2',
                q: 'Or are they symptoms of an inflamed brain?',
                s: 'Is the driver the pathogen itself, or the inflammation it provoked? Different answers mean different protocols.',
              },
              {
                n: 'Q3',
                q: 'Does strep have a personality? Does mold? Does lyme?',
                s: 'Do specific pathogens produce specific behavioral signatures? Does a kid picking their nose constantly mean parasites? Does a kid saying "I want to die" mean lyme? We&apos;re collecting the data to find out.',
              },
              {
                n: 'Q4',
                q: 'Which combinations load the bucket fastest?',
                s: 'Mold + strep + methylation stall + stress — what order? Which is the bottleneck for which kid?',
              },
              {
                n: 'Q5',
                q: 'Where does each modality actually fit?',
                s: 'Not &ldquo;does it work&rdquo; — where in the sequence does it belong, for which kind of kid?',
              },
            ].map((x) => (
              <li
                key={x.n}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr',
                  gap: 18,
                  padding: '26px 0',
                  borderBottom: '1px solid var(--sand)',
                  alignItems: 'baseline',
                }}
              >
                <span
                  className="mono"
                  style={{
                    fontSize: 12,
                    color: 'var(--teal)',
                    letterSpacing: '0.14em',
                    fontWeight: 600,
                    textAlign: 'right',
                    textTransform: 'uppercase',
                  }}
                >
                  {x.n}
                </span>
                <div>
                  <p
                    className="serif"
                    style={{
                      fontSize: 'clamp(22px, 2.8vw, 30px)',
                      fontStyle: 'italic',
                      color: 'var(--ink)',
                      fontWeight: 400,
                      lineHeight: 1.25,
                      marginBottom: 10,
                    }}
                  >
                    {x.q}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                    dangerouslySetInnerHTML={{ __html: x.s }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <p
            className="serif"
            style={{
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.35,
              fontWeight: 400,
              margin: '48px 0 0',
              maxWidth: 820,
              borderLeft: '3px solid var(--teal)',
              paddingLeft: 22,
            }}
          >
            The why is how the solution gets precise.{' '}
            <span style={{ color: 'var(--teal)' }}>
              Every family helps us answer it.
            </span>
          </p>
        </div>
      </section>

      {/* INSTALL */}
      <section style={{ padding: '120px 24px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              Put Plan B on your phone
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(34px, 6.5vw, 54px)',
                fontWeight: 300,
                letterSpacing: '-0.018em',
                marginBottom: 18,
                lineHeight: 1.1,
              }}
            >
              No app store. <em style={{ color: 'var(--teal)' }}>No download.</em>
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                maxWidth: 600,
                margin: '0 auto',
              }}
            >
              Plan B lives on your home screen like any other app. Updates automatically. Works
              offline for the daily tracker.
            </p>
          </div>

          <div
            className="reveal-stagger"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
              marginBottom: 48,
            }}
          >
            <InstallCard
              device="iPhone · Safari"
              steps={[
                <>Open <strong>app.planbforpans.com</strong> in Safari</>,
                <>Tap the <strong>Share</strong> button (square with arrow)</>,
                <>Scroll down, tap <strong>Add to Home Screen</strong></>,
                <>Tap <strong>Add</strong></>,
              ]}
            />
            <InstallCard
              device="Android · Chrome"
              steps={[
                <>Open <strong>app.planbforpans.com</strong> in Chrome</>,
                <>Tap the <strong>⋮</strong> menu (top right)</>,
                <>Tap <strong>Install app</strong> (or <strong>Add to Home screen</strong>)</>,
                <>Tap <strong>Install</strong></>,
              ]}
            />
          </div>

          <div className="reveal" style={{ textAlign: 'center' }}>
            <a
              href="https://app.planbforpans.com/signup"
              target="_blank"
              rel="noopener"
              className="cta-teal"
              style={{ textDecoration: 'none' }}
            >
              Open Plan B →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function InstallCard({ device, steps }: { device: string; steps: React.ReactNode[] }) {
  return (
    <div
      className="card-hover"
      style={{
        background: 'var(--paper)',
        border: '1px solid var(--sand)',
        borderRadius: 4,
        padding: 28,
      }}
    >
      <p className="eyebrow" style={{ marginBottom: 14 }}>
        {device}
      </p>
      <ol
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: 15,
          color: 'var(--ink)',
          lineHeight: 1.9,
          paddingLeft: 22,
          margin: 0,
          fontWeight: 300,
        }}
      >
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </div>
  )
}
