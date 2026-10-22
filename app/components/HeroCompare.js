'use client'
import { useEffect, useRef, useState } from 'react'
import { CHANNELS, ils } from '../demo-data'

// ה"וואו" של הפתיחה: לפי עלות לליד שני הערוצים נראים כמעט אותו דבר; לפי עלות לחוזה — פי שניים.
// מתחלף לבד פעם אחת אחרי שנייה וחצי, ואחר כך לפי בחירת המבקר.
const VIEWS = {
  lead: { label: 'עלות לליד', of: (c) => c.spend / c.leads, note: 'כמעט אותו מחיר. נראה שאין הבדל.' },
  contract: { label: 'עלות לחוזה', of: (c) => c.spend / c.contracts, note: 'גוגל יקר פי 2.1 לכל דירה שנמכרה.' },
}

export default function HeroCompare() {
  const [view, setView] = useState('lead')
  const touched = useRef(false)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => { if (!touched.current) setView('contract') }, 1800)
    return () => clearTimeout(t)
  }, [])
  const v = VIEWS[view]
  const values = CHANNELS.map((c) => v.of(c))
  const max = Math.max(...values)
  const pick = (k) => { touched.current = true; setView(k) }

  return (
    <div className="cmp-card" data-ui>
      <div className="cmp-card__top">
        <div>
          <p className="cmp-card__title">אופק ים · החודש</p>
          <p className="cmp-card__sub">פרויקט הדגמה</p>
        </div>
        <div className="seg" role="tablist" aria-label="מה מודדים">
          {Object.entries(VIEWS).map(([k, x]) => (
            <button key={k} type="button" role="tab" aria-selected={view === k} onClick={() => pick(k)}>{x.label}</button>
          ))}
        </div>
      </div>

      <div className="cmp-bars">
        {CHANNELS.map((c, i) => (
          <div key={c.name} className={'cmp-bar cmp-bar--' + i}>
            <b className="cmp-bar__val" key={view} aria-live="polite">{ils(values[i])}</b>
            <span className="cmp-bar__col"><span style={{ '--h': values[i] / max }} /></span>
            <span className="cmp-bar__name">{c.name}</span>
          </div>
        ))}
      </div>

      <p className={'cmp-card__note' + (view === 'contract' ? ' is-alert' : '')}>{v.note}</p>
    </div>
  )
}
