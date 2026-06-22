'use client'

// "Talk to Rachel first — free 15 min" intro-call CTA.
//
// ┌─────────────────────────────────────────────────────────────────────┐
// │  TODO: PLACEHOLDER. When Calendly (or Google Appointments) is set up, │
// │  replace CALENDLY_URL below with the real booking link — that's the   │
// │  ONLY change needed; every "Talk to Rachel" button reads from here.   │
// └─────────────────────────────────────────────────────────────────────┘
export const CALENDLY_URL = '#' // e.g. 'https://calendly.com/plan-b-rachel/15min'

export function TalkToRachel({ variant = 'outline' }: { variant?: 'outline' | 'quiet' }) {
  const isPlaceholder = CALENDLY_URL === '#'

  if (variant === 'quiet') {
    return (
      <a
        href={CALENDLY_URL}
        {...(isPlaceholder ? { 'aria-disabled': true } : {})}
        style={{
          color: 'var(--teal)',
          fontSize: 15,
          fontWeight: 500,
          textDecoration: 'underline',
          textUnderlineOffset: 4,
        }}
      >
        Talk to Rachel first — free 15 min →
      </a>
    )
  }

  return (
    <a
      href={CALENDLY_URL}
      {...(isPlaceholder ? { 'aria-disabled': true } : {})}
      style={{
        display: 'inline-block',
        padding: '16px 30px',
        background: 'transparent',
        color: 'var(--teal)',
        border: '1px solid var(--teal)',
        borderRadius: 6,
        textDecoration: 'none',
        fontSize: 15,
        fontWeight: 500,
      }}
    >
      Talk to Rachel first — free 15 min →
    </a>
  )
}
