'use client'

import { useEffect, useRef, useState, Fragment } from 'react'
import BucketSection from './_components/BucketSection'
import MethodSection from './_components/MethodSection'

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
            <p
              className="rise delay-1"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--sand-dark)',
                fontWeight: 500,
                marginBottom: 26,
              }}
            >
              A non-profit for PANS, PANDAS, autism &amp; severe dysregulation
            </p>

            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(50px, 8.8vw, 100px)',
                fontWeight: 300,
                letterSpacing: '-0.028em',
                lineHeight: 1,
                marginBottom: 16,
                color: 'var(--ink)',
              }}
            >
              <span className="word" style={{ animationDelay: '0.16s' }}>When</span>{' '}
              <span className="word" style={{ animationDelay: '0.24s' }}>there&apos;s</span>{' '}
              <span
                className="word"
                style={{
                  fontStyle: 'italic',
                  color: 'var(--teal)',
                  fontWeight: 400,
                  animationDelay: '0.34s',
                }}
              >
                no 911 to call.
              </span>
            </h1>
            <p
              className="rise delay-2"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(22px, 3vw, 34px)',
                fontWeight: 400,
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
                lineHeight: 1.25,
                color: 'var(--teal)',
                margin: 0,
                marginBottom: 32,
              }}
            >
              Plan B is your answer.
            </p>

            <p
              className="rise delay-3"
              style={{
                fontSize: 19,
                color: 'var(--ink-soft)',
                lineHeight: 1.75,
                fontWeight: 300,
                maxWidth: 600,
                marginBottom: 20,
              }}
            >
              <em style={{ color: 'var(--ink)', fontStyle: 'normal', fontWeight: 600 }}>
                Welcome.
              </em>{' '}
              You aren&apos;t meant to navigate the complexities of PANS/PANDAS alone. Plan B
              is a non-profit, and{' '}
              <em style={{ color: 'var(--teal)', fontStyle: 'normal', fontWeight: 600 }}>
                Ada
              </em>{' '}
              is our bot. She synthesizes every research-backed treatment approach and modality
              alongside your child&apos;s unique history — to cut through the noise and help
              you find what your kid specifically needs.
            </p>
            <p
              className="rise delay-3 serif"
              style={{
                fontSize: 'clamp(15px, 1.55vw, 17px)',
                color: 'var(--ink)',
                lineHeight: 1.55,
                fontStyle: 'italic',
                fontWeight: 400,
                maxWidth: 580,
                marginBottom: 40,
                borderLeft: '2px solid var(--teal)',
                paddingLeft: 16,
              }}
            >
              The bot is still learning. Today it offers thoughtful suggestions shaped to your
              kid. Soon — as every family who joins adds their story —{' '}
              <span style={{ color: 'var(--teal)' }}>
                a real protocol emerges for every child.
              </span>
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
                href="https://app.planbforpans.com/try"
                target="_blank"
                rel="noopener"
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
                Try Plan B — ask a question →
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


                {/* Symptoms dispersed around the head — annotated-diagram style */}
                {[
                  { top: '16%', left: '50%', text: 'OCD' },
                  { top: '26%', left: '42%', text: 'ARFID' },
                  { top: '38%', left: '52%', text: 'Agoraphobia' },
                ].map((pin) => (
                  <div
                    key={pin.text}
                    style={{
                      position: 'absolute',
                      top: pin.top,
                      left: pin.left,
                      zIndex: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 7,
                      pointerEvents: 'none',
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: 'var(--teal)',
                        boxShadow: '0 0 0 3px rgba(31,107,107,0.3)',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="mono"
                      style={{
                        fontSize: 10.5,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--cream)',
                        fontWeight: 600,
                        lineHeight: 1,
                        textShadow: '0 1px 3px rgba(0,0,0,0.55)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {pin.text}
                    </span>
                  </div>
                ))}

                {/* Caption — Rachel's voice */}
                <div
                  style={{
                    background: 'var(--cream)',
                    borderTop: '1px solid var(--ink)',
                    padding: '22px 24px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(17px, 1.95vw, 21px)',
                      fontStyle: 'italic',
                      fontWeight: 400,
                      color: 'var(--ink)',
                      lineHeight: 1.45,
                      marginBottom: 12,
                    }}
                  >
                    &ldquo;My son was eight when he told me he wanted to die. The doctors
                    didn&apos;t have an answer. Neither did I. I spent two years at 2am —
                    alone, researching every modality anyone said had helped — and then
                    piecing it together across a dozen practices none of which talked to each
                    other. Plan B is what I wish I&apos;d had.&rdquo;
                  </p>
                  <p
                    className="label-tracked"
                    style={{ color: 'var(--teal)', fontWeight: 600 }}
                  >
                    Rachel Johnson · Founder
                  </p>
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
          <div>
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
              A <em style={{ color: 'var(--teal)' }}>path out of the fire</em> —
              built from every modality, every family,{' '}
              <em style={{ color: 'var(--teal)' }}>every hard-won answer.</em>
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                marginTop: 18,
                maxWidth: 760,
              }}
            >
              <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Today:</strong> a real
              understanding of every option out there.{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Tomorrow:</strong> the
              path itself. The bot is learning which modalities actually work for which
              symptoms — sharpening with every family who joins, every cohort we run,
              together.
            </p>
            <p
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--sand-dark)',
                fontWeight: 500,
                marginTop: 18,
                paddingTop: 14,
                borderTop: '1px solid var(--sand-light)',
              }}
            >
              Built by a mother &middot; Trained by every family &middot; Published openly
            </p>
          </div>
        </div>
      </section>

      {/* COMPOUNDING PROMISE — it gets better the more of us join */}
      <section
        style={{
          padding: '64px 24px',
          background: 'var(--cream)',
          borderBottom: '1px solid var(--rule)',
          textAlign: 'center',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 900 }}>
          <p
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--teal)',
              fontWeight: 600,
              marginBottom: 16,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span aria-hidden="true">↺</span> Compounding promise
          </p>
          <p
            className="serif"
            style={{
              fontSize: 'clamp(26px, 4.2vw, 44px)',
              fontWeight: 300,
              fontStyle: 'italic',
              letterSpacing: '-0.015em',
              lineHeight: 1.2,
              margin: 0,
              color: 'var(--ink)',
            }}
          >
            It gets better with every family who joins.{' '}
            <span style={{ color: 'var(--teal)' }}>
              Over time — together — we build the way out.
            </span>
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
            There&apos;s no 911 for this. When your kid is in crisis, the emergency system has no answer for what&apos;s actually driving it underneath.
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
              full intake — and synthesizes them into a real starting place. The more
              families tracking, the more cohort studies we fund, the faster the real paths
              emerge — together.
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
                'Live cohort data from running cohort studies',
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
'A starting place shaped to your kid\u2019s specific profile',
                'Matched placement into a cohort study',
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
            A real starting place, not silence.{' '}
            <span style={{ color: 'var(--teal)' }}>
              Sharpened with every family. Together we get out.
            </span>
          </p>
        </div>
      </section>

      {/* THE CENTER — intake + tracker + troubleshooting */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--cream)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1080 }}>
          <div style={{ marginBottom: 44, maxWidth: 920 }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              § 03 · The center
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(38px, 6.2vw, 72px)',
                fontWeight: 300,
                letterSpacing: '-0.024em',
                lineHeight: 0.98,
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              The tracker <em style={{ color: 'var(--teal)' }}>is</em> Plan B.
            </h2>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '32px 0 0',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                maxWidth: 800,
              }}
            >
              {[
                'The doctor willing to talk at 2am — for free.',
                "The friend who'll help you troubleshoot when you're out of options and can't sleep.",
                'The specialist who knows every modality — and will help you figure out your next lane.',
              ].map((line) => (
                <li
                  key={line}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '24px 1fr',
                    gap: 14,
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: 12,
                      color: 'var(--teal)',
                      letterSpacing: '0.12em',
                      fontWeight: 700,
                    }}
                  >
                    →
                  </span>
                  <span
                    className="serif"
                    style={{
                      fontSize: 'clamp(19px, 2.2vw, 24px)',
                      fontStyle: 'italic',
                      fontWeight: 400,
                      color: 'var(--ink)',
                      lineHeight: 1.4,
                    }}
                  >
                    {line}
                  </span>
                </li>
              ))}
            </ul>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                marginTop: 36,
                maxWidth: 760,
              }}
            >
              Every answer Plan B gives starts from your kid&apos;s full story — captured in
              intake, extended daily by the tracker. Without that, there&apos;s nothing to
              synthesize. With it, the engine works for your kid specifically, and sharpens
              every time you come back.
            </p>
            <p
              className="serif"
              style={{
                fontSize: 'clamp(15px, 1.55vw, 17px)',
                lineHeight: 1.5,
                color: 'var(--ink)',
                fontStyle: 'italic',
                fontWeight: 400,
                marginTop: 22,
                maxWidth: 720,
                borderLeft: '2px solid var(--teal)',
                paddingLeft: 16,
              }}
            >
              The bot is still learning — today it offers suggestions. Soon, with every family
              who joins,{' '}
              <span style={{ color: 'var(--teal)' }}>
                a real protocol emerges for every child.
              </span>
            </p>
          </div>

          {/* Live view of the tracker — sees it before reads about it */}
          <div
            style={{
              margin: '0 calc(-1 * clamp(12px, 2vw, 24px)) 56px',
            }}
          >
            <MethodSection />
          </div>

          {/* Four blocks — intake → tracker → bot troubleshoots → sharpens */}
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 0,
              borderTop: '1px solid var(--ink)',
            }}
          >
            {[
              {
                n: '01',
                tag: 'Intake',
                title: 'The whole story, captured once.',
                body: "Pregnancy, birth, environment, diet. Every medication ever tried, every supplement, every modality. Every symptom, every flare, every weird behavior that nobody else took seriously. Labs, tests, imaging. The onset story — told in your own words, in conversation with the bot, at your pace. About twenty minutes in one sitting, or broken up across days. It all saves as you go.",
              },
              {
                n: '02',
                tag: 'After intake, the tracker opens',
                title: 'Daily check-ins. Thirty seconds before bed.',
                body: "Once your intake is in, the tracker takes over — from your phone, every day. Tap a mood rating (0&ndash;10). Log any med change, new supplement, dose tweak. Rate each symptom you care about — OCD, rage, sleep, tics, food aversion, anxiety — on the same 0&ndash;10 scale. When a new weird behavior shows up (a tic, a food fear, a rage episode, a 2am wake-up), tag it the moment you see it. Free text for context when you need it: <em>&lsquo;meltdown at 4pm, right after screen time and missed lunch.&rsquo;</em> <br/><br/>Saturday gives you a weekly rollup — bar charts for every symptom, a timeline of every med change, all your flare notes in one place. Patterns you couldn&apos;t see before start to jump out: <em>rage was 8/10 Monday, 3/10 Wednesday — what changed? The binder dose, probably.</em> Six weeks in, the pattern is visible in a way no memory, no folder of doctor notes, no stack of Google tabs could ever hold.",
              },
              {
                n: '03',
                tag: 'The bot reads both',
                title: 'Troubleshoots from the full record, 2am included.',
                body: "The bot already has your intake. Now it has every day you&apos;ve logged. Ask anything — <em>&lsquo;why did we have a bad week?&rsquo;</em>, <em>&lsquo;is this new symptom concerning?&rsquo;</em>, <em>&lsquo;what should we try next?&rsquo;</em> — and it reads the whole record before answering. It runs correlations across meds, symptoms, timing, triggers: <em>&lsquo;Rage spiked the week you raised guanfacine AND started the new binder. Tics ticked up same week — may be rebound. Pause the binder at half-dose for 10 days to isolate which one is the driver.&rsquo;</em> Specific to your kid. Grounded in your data. Not generic advice.",
              },
              {
                n: '04',
                tag: 'It sharpens',
                title: 'We&rsquo;re teaching the bot to spot patterns.',
                body: "Your kid&apos;s data (consent-based, de-identified) joins every other family&apos;s data in the library. As stories come in, the bot is learning which modalities actually work for which symptoms — spotting the patterns no single family can see alone. Every successful story teaches it what to suggest. Every failed one teaches it what not to. Every cohort run adds signal. The read you get today is only as sharp as what the first families contributed. The read the hundredth family gets is sharper still.",
              },
            ].map((s) => (
              <li
                key={s.n}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(60px, 80px) 1fr',
                  gap: 'clamp(18px, 3vw, 36px)',
                  padding: '32px 0',
                  borderBottom: '1px solid var(--sand)',
                  alignItems: 'baseline',
                }}
              >
                <div>
                  <p
                    className="serif"
                    style={{
                      fontSize: 48,
                      fontWeight: 300,
                      color: 'var(--teal)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                      margin: 0,
                      marginBottom: 6,
                    }}
                  >
                    {s.n}
                  </p>
                  <p
                    className="mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.2em',
                      color: 'var(--sand-dark)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                    }}
                  >
                    {s.tag}
                  </p>
                </div>
                <div>
                  <p
                    className="serif"
                    style={{
                      fontSize: 'clamp(22px, 2.8vw, 30px)',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.2,
                      color: 'var(--ink)',
                      marginBottom: 12,
                    }}
                    dangerouslySetInnerHTML={{ __html: s.title }}
                  />
                  <p
                    style={{
                      fontSize: 15,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                    dangerouslySetInnerHTML={{ __html: s.body }}
                  />
                </div>
              </li>
            ))}
          </ol>

          <p
            className="serif"
            style={{
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.35,
              fontWeight: 400,
              margin: '40px 0 0',
              maxWidth: 800,
              borderLeft: '3px solid var(--teal)',
              paddingLeft: 22,
            }}
          >
            Nothing works without your intake. Nothing sharpens without your log.{' '}
            <span style={{ color: 'var(--teal)' }}>This is where the compounding lives.</span>
          </p>

          {/* A day with the tracker — concrete example */}
          <div
            style={{
              marginTop: 48,
              padding: '32px 30px',
              background: '#141414',
              color: 'var(--cream)',
              border: '1px solid var(--ink)',
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
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--teal-light)',
                  fontWeight: 700,
                  marginBottom: 10,
                }}
              >
                A day with the tracker
              </p>
              <p
                className="serif"
                style={{
                  fontSize: 'clamp(24px, 3.2vw, 32px)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                  margin: 0,
                  marginBottom: 24,
                  color: 'var(--cream)',
                  maxWidth: 700,
                }}
              >
                Thirty seconds at a time. Six weeks of these and the pattern finally becomes
                visible.
              </p>

              <div style={{ display: 'grid', gap: 8, maxWidth: 640 }}>
                {[
                  { t: '07:12', k: 'Mood', v: '4 / 10 · Woke up anxious', c: '#d4a24a' },
                  { t: '08:30', k: 'Symptom', v: 'New tic — throat clear', c: '#c76a4a' },
                  { t: '12:00', k: 'Food', v: 'Lunch refusal · tagged ARFID', c: '#c76a4a' },
                  { t: '15:10', k: 'Rage', v: '8 / 10 · triggered by screen time', c: '#c76a4a' },
                  { t: '19:00', k: 'Dose', v: 'Binder · 1/2 scoop', c: '#5aa19f' },
                  { t: '22:45', k: 'Note', v: '30s before bed · day logged', c: '#bbb3a2' },
                ].map((r, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '56px 80px 1fr',
                      gap: 14,
                      alignItems: 'center',
                      padding: '10px 12px',
                      border: '1px solid rgba(246,241,231,0.1)',
                    }}
                  >
                    <span
                      className="mono"
                      style={{ fontSize: 11, color: '#8a8373', letterSpacing: '0.08em' }}
                    >
                      {r.t}
                    </span>
                    <span
                      className="mono"
                      style={{
                        fontSize: 10,
                        color: r.c,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                      }}
                    >
                      {r.k}
                    </span>
                    <span style={{ fontSize: 13.5, color: '#eee', lineHeight: 1.4 }}>{r.v}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 26,
                  paddingTop: 20,
                  borderTop: '1px solid rgba(246,241,231,0.15)',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: 18,
                  alignItems: 'baseline',
                }}
              >
                <p
                  className="mono"
                  style={{
                    fontSize: 10,
                    color: 'var(--teal-light)',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Saturday →
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: '#d4cbb6',
                    lineHeight: 1.75,
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  Weekly roll-up: rage spiked Mon &amp; Wed — both after binder increases.
                  Food refusals clustered around screen-time days. ARFID tagged 5x this week
                  (up from 2 last week). A pattern you couldn&apos;t see before becomes
                  visible in a way no memory could hold.
                </p>
              </div>
            </div>
          </div>

          {/* The usage loop */}
          <div
            style={{
              marginTop: 48,
              padding: '32px 30px',
              background: 'var(--paper)',
              border: '1px solid var(--ink)',
              position: 'relative',
            }}
          >
            <p
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
                fontWeight: 700,
                marginBottom: 18,
              }}
            >
              Use · Share · Use again
            </p>
            <p
              className="serif"
              style={{
                fontSize: 'clamp(22px, 2.8vw, 28px)',
                fontWeight: 400,
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
                lineHeight: 1.3,
                color: 'var(--ink)',
                margin: 0,
                marginBottom: 16,
                maxWidth: 780,
              }}
            >
              The more you log — what&apos;s failing, what&apos;s working — the faster the bot
              sees your kid&apos;s patterns and the path out.
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                color: 'var(--ink-soft)',
                fontWeight: 300,
                margin: 0,
                maxWidth: 780,
              }}
            >
              Make this your trusted advisor while you&apos;re waiting six weeks for the next
              intake appointment — or when the $2,000 half-hour consult isn&apos;t an option.
              Every log adds to your kid&apos;s picture <em>and</em> the library that helps the
              next family. Use it. Share it. Come back.
            </p>
          </div>

          <div style={{ marginTop: 36 }}>
            <a
              href="https://app.planbforpans.com/signup"
              target="_blank"
              rel="noopener"
              className="cta-teal"
              style={{ textDecoration: 'none' }}
            >
              Start your intake →
            </a>
          </div>
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

      {/* PRIVACY PROMISE — three lines */}
      <section
        style={{
          padding: '80px 24px',
          background: 'var(--paper)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1080 }}>
          <p
            className="eyebrow"
            style={{ marginBottom: 28, textAlign: 'center' }}
          >
            Our promise on your kid&apos;s data
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {[
              {
                k: 'Yours, always',
                v: "Your kid's intake, logs, and conversations are your data. We don't sell it. We don't share it with advertisers, insurance, or schools.",
              },
              {
                k: 'Deleted on request',
                v: 'One click and everything your family put into Plan B is gone — from the tracker, the chat, the aggregate library. No questions asked.',
              },
              {
                k: 'Never shared without consent',
                v: "Aggregate patterns (de-identified) help the next family's read — but only if you opt in. No consent, no contribution. Default is private.",
              },
            ].map((c) => (
              <div
                key={c.k}
                style={{
                  borderTop: '1px solid var(--ink)',
                  paddingTop: 18,
                }}
              >
                <p
                  className="serif"
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: 'var(--teal)',
                    fontStyle: 'italic',
                    marginBottom: 10,
                  }}
                >
                  {c.k}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: 'var(--ink-soft)',
                    fontWeight: 300,
                  }}
                >
                  {c.v}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: 13,
              color: 'var(--sand-dark)',
              textAlign: 'center',
              marginTop: 28,
              fontStyle: 'italic',
            }}
          >
            Read the full{' '}
            <a
              href="/privacy"
              style={{ color: 'var(--teal)', textDecoration: 'underline' }}
            >
              privacy policy
            </a>
            .
          </p>
        </div>
      </section>

      {/* HOW TO START — 3 steps */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--cream)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1080 }}>
          <div style={{ marginBottom: 44, textAlign: 'center' }}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              How to start
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(34px, 5.4vw, 54px)',
                fontWeight: 300,
                letterSpacing: '-0.018em',
                lineHeight: 1.05,
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              Three steps.{' '}
              <em style={{ color: 'var(--teal)' }}>Nothing else to figure out.</em>
            </h2>
          </div>
          <div
            className="how-start-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0,
              borderTop: '1px solid var(--ink)',
              borderBottom: '1px solid var(--ink)',
            }}
          >
            {[
              {
                n: '01',
                t: 'Do the intake',
                b: "Twenty minutes, or break it across days. Pregnancy, birth, triggers, meds, symptoms, everything you&apos;ve tried. The more detail, the sharper Ada&apos;s read.",
                eta: '~20 min',
              },
              {
                n: '02',
                t: 'Log daily',
                b: 'Thirty seconds before bed. Mood rating, med changes, new symptoms, flare notes. Six weeks in, the pattern becomes visible.',
                eta: '30 sec / day',
              },
              {
                n: '03',
                t: 'Ask Ada anything',
                b: "2am meltdown, new symptom, stuck on protocol choice — Ada has your full record and runs the correlations a single visit can&apos;t.",
                eta: 'anytime',
              },
            ].map((s, i, arr) => (
              <div
                key={s.n}
                style={{
                  padding: '32px 28px',
                  borderRight: i < arr.length - 1 ? '1px solid var(--sand)' : 'none',
                  position: 'relative',
                }}
              >
                <p
                  className="serif"
                  style={{
                    fontSize: 52,
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    color: 'var(--teal)',
                    margin: 0,
                    marginBottom: 12,
                  }}
                >
                  {s.n}
                </p>
                <p
                  className="serif"
                  style={{
                    fontSize: 26,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.15,
                    color: 'var(--ink)',
                    margin: 0,
                    marginBottom: 14,
                  }}
                >
                  {s.t}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: 'var(--ink-soft)',
                    fontWeight: 300,
                    marginBottom: 14,
                  }}
                  dangerouslySetInnerHTML={{ __html: s.b }}
                />
                <p
                  className="mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    color: 'var(--sand-dark)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                  }}
                >
                  {s.eta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON — why Plan B vs. the alternatives */}
      <section
        style={{
          padding: '100px 24px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 1100 }}>
          <div style={{ marginBottom: 44, maxWidth: 880 }}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              What makes Plan B different
            </p>
            <h2
              className="serif"
              style={{
                fontSize: 'clamp(34px, 5.4vw, 54px)',
                fontWeight: 300,
                letterSpacing: '-0.018em',
                lineHeight: 1.05,
                margin: 0,
                color: 'var(--ink)',
              }}
            >
              You&apos;ve already tried the other places.
            </h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: 14,
                minWidth: 720,
              }}
            >
              <thead>
                <tr style={{ borderBottom: '1px solid var(--ink)' }}>
                  {['', 'Facebook groups', 'PANS forums', 'Doctor visits', 'Plan B'].map(
                    (h, i) => (
                      <th
                        key={i}
                        className="mono"
                        style={{
                          padding: '16px 12px',
                          fontSize: 10,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: i === 4 ? 'var(--teal)' : 'var(--sand-dark)',
                          fontWeight: 700,
                          textAlign: i === 0 ? 'left' : 'center',
                        }}
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  ['2am access', '✓', '✓', '—', '✓'],
                  ['Specific to YOUR kid', '—', '—', '✓', '✓'],
                  ['Reads every modality together', '—', '—', '—', '✓'],
                  ['Remembers your kid&apos;s full history', '—', '—', 'partial', '✓'],
                  ['Gets sharper with every family', '—', '—', '—', '✓'],
                  ['Cost', 'free', 'free', '$300–$2,000 per visit', 'free'],
                  ['Data belongs to', 'Meta', 'forum owner', 'their chart', 'you'],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: '1px solid var(--sand-light)',
                    }}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          padding: '14px 12px',
                          fontSize: j === 0 ? 14 : 13,
                          color:
                            j === 4
                              ? 'var(--teal)'
                              : j === 0
                              ? 'var(--ink)'
                              : 'var(--ink-soft)',
                          fontWeight: j === 0 ? 500 : 400,
                          textAlign: j === 0 ? 'left' : 'center',
                          fontFamily:
                            j > 0 && (cell === '✓' || cell === '—') ? 'var(--font-mono)' : 'inherit',
                        }}
                        dangerouslySetInnerHTML={{ __html: cell }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            className="serif"
            style={{
              fontSize: 'clamp(20px, 2.6vw, 26px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: 1.4,
              fontWeight: 400,
              margin: '36px 0 0',
              maxWidth: 780,
              borderLeft: '3px solid var(--teal)',
              paddingLeft: 22,
            }}
          >
            Parent forums have suggestions. Doctors see their slice. Plan B is the only place
            that holds <span style={{ color: 'var(--teal)' }}>everything together</span> —
            your kid, every modality, every family&apos;s story.
          </p>
        </div>
      </section>

      {/* VOICES — social proof placeholder */}
      <section
        style={{
          padding: '80px 24px',
          background: 'var(--cream)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 960 }}>
          <p className="eyebrow" style={{ marginBottom: 24, textAlign: 'center' }}>
            Voices · From the families using Plan B
          </p>
          <div
            style={{
              padding: '48px 30px',
              textAlign: 'center',
              border: '1px dashed var(--sand)',
              borderRadius: 4,
              background: 'var(--paper)',
            }}
          >
            <p
              className="serif"
              style={{
                fontSize: 'clamp(22px, 3vw, 28px)',
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.4,
                fontWeight: 400,
                marginBottom: 16,
                maxWidth: 620,
                margin: '0 auto 16px',
              }}
            >
              Our first families are joining now.
            </p>
            <p
              style={{
                fontSize: 15,
                color: 'var(--ink-soft)',
                lineHeight: 1.75,
                fontWeight: 300,
                maxWidth: 560,
                margin: '0 auto 24px',
              }}
            >
              As stories come in — breakthroughs, stalls, real journeys — we&apos;ll share
              them here (with consent). If you&apos;re using Plan B and want yours included,{' '}
              <a
                href="mailto:rachel@planbforpans.com?subject=Plan%20B%20story"
                style={{ color: 'var(--teal)', textDecoration: 'underline' }}
              >
                email Rachel
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE — stay in the loop */}
      <section
        style={{
          padding: '80px 24px',
          background: 'var(--cream-light)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
      >
        <div className="pb-container" style={{ maxWidth: 680, textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            Stay in the loop
          </p>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(28px, 4.4vw, 42px)',
              fontWeight: 300,
              letterSpacing: '-0.018em',
              lineHeight: 1.1,
              marginBottom: 20,
              color: 'var(--ink)',
            }}
          >
            Not ready yet? <em style={{ color: 'var(--teal)' }}>Stay in touch.</em>
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: 'var(--ink-soft)',
              fontWeight: 300,
              marginBottom: 28,
              maxWidth: 520,
              margin: '0 auto 28px',
            }}
          >
            Monthly update on what Ada&apos;s learning, which cohort studies are running,
            and what&apos;s emerging. No spam. One-click unsubscribe.
          </p>
          <NewsletterForm />
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

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    const subject = encodeURIComponent('Subscribe to Plan B updates')
    const body = encodeURIComponent(`Please add me to the Plan B mailing list: ${email.trim()}`)
    window.location.href = `mailto:rachel@planbforpans.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }
  if (submitted) {
    return (
      <p
        className="serif"
        style={{
          fontSize: 18,
          fontStyle: 'italic',
          color: 'var(--teal)',
          fontWeight: 400,
        }}
      >
        Your email client just opened. Send that email and you&apos;re on the list.
      </p>
    )
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        gap: 10,
        maxWidth: 440,
        margin: '0 auto',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        style={{
          flex: '1 1 220px',
          padding: '14px 16px',
          fontSize: 15,
          border: '1px solid var(--sand)',
          borderRadius: 4,
          background: 'var(--paper)',
          color: 'var(--ink)',
          fontFamily: 'var(--font-inter)',
          outline: 'none',
        }}
      />
      <button
        type="submit"
        className="cta-teal"
        style={{ border: 'none', cursor: 'pointer', flexShrink: 0 }}
      >
        Subscribe →
      </button>
    </form>
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
