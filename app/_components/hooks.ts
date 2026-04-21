'use client'

import { useState, useEffect, useRef } from 'react'

const isLowPower = (): boolean => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return true
  if (window.matchMedia && window.matchMedia('(hover: none)').matches) return true
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
  if ((navigator as any).hardwareConcurrency && (navigator as any).hardwareConcurrency <= 4) return true
  return false
}

export function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in-view')
        })
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

export function useTick() {
  const [t, setT] = useState(0)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const slow = isLowPower()
    const intervalMs = slow ? 250 : 50
    const start = performance.now()
    const id = window.setInterval(() => {
      setT((performance.now() - start) / 1000)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [])
  return t
}
