'use client'

import { useEffect, useState } from 'react'

// Live "spots left" counter — reads real FOUNDING20 redemptions from the app's
// public endpoint. Falls back to the static "20 of 20" text on any hiccup, so
// the page never shows a broken or fake number.
export default function FoundingSpots() {
  const [remaining, setRemaining] = useState<number | null>(null)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    fetch('https://app.planbforpans.com/api/founding-spots')
      .then((r) => r.json())
      .then((d) => {
        if (typeof d?.remaining === 'number') {
          setRemaining(d.remaining)
          setOpen(Boolean(d.open))
        }
      })
      .catch(() => {})
  }, [])

  const text =
    remaining == null
      ? '20 of 20 founding spots left'
      : open
        ? `${remaining} of 20 founding spots left`
        : 'Founding spots are full — the synthesis is $397'

  return <p style={{ fontSize: 15, color: '#9a6a00', fontWeight: 800, margin: '10px 0 2px' }}>{text}</p>
}
