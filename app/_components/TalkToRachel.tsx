'use client'

import { CALENDLY_URL } from './site-links'

// "Talk to Rachel first — free 15 min" intro-call CTA. The booking link lives in
// site-links.ts — one swap when the scheduler is live.
export { CALENDLY_URL }

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
