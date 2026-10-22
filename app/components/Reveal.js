'use client'
import { useEffect } from 'react'

// כניסה לכל חלק בכל סקשן: כותרת, טקסט ואז התמונה, בהפרש של 70ms.
// התוכן גלוי גם בלי סקריפט: ההסתרה מתחילה רק כש-<html> מקבל את המחלקה js.
export default function Reveal() {
  useEffect(() => {
    window.__rv = true
    const items = [...document.querySelectorAll('[data-rv]')]
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.01 }
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return null
}
