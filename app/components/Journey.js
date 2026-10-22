'use client'
import { useEffect, useRef, useState } from 'react'
import { RESPONSE_BUCKETS, REPS, num } from '../demo-data'

// מהלך החתימה של העמוד: מסע של ליד אחד. קו כחול נמתח לאורך הגלילה, וליד כל תחנה
// המונה בצד מראה כמה כסף פרסום "עלה" הליד עד אותו שלב (המספרים: פרויקט ההדגמה, פייסבוק + גוגל).
const STATIONS = [
  {
    id: 'ad',
    when: 'יום רביעי, 21:40',
    title: 'נועה רואה מודעה',
    text: 'קמפיין 4 חדרים בפייסבוק. היא מקליקה, מסתכלת על התוכניות, וסוגרת את הטלפון.',
    cost: 0,
    costLabel: 'עוד לא עלה כלום',
    ui: 'ad',
  },
  {
    id: 'lead',
    when: 'יום שישי, 14:02',
    title: 'היא משאירה פרטים',
    text: 'עכשיו היא ליד. אחד מ-143 החודש, ו-40 מהם בכלל לא רלוונטיים. Cluzo יודע מאיזה מקור הגיע כל אחד.',
    cost: 316,
    costLabel: 'עלות לליד',
    ui: 'lead',
  },
  {
    id: 'hour',
    when: 'השעה הראשונה',
    title: 'כאן נקבע הכל',
    text: 'מי שקיבל מענה בתוך שעה הגיע לפגישה ב-59% מהמקרים. אחרי ארבע שעות: אף אחד מתוך 34.',
    cost: 316,
    costLabel: 'אותו ליד, השעון רץ',
    ui: 'hour',
  },
  {
    id: 'meeting',
    when: 'יום שלישי, 17:30',
    title: 'פגישה במשרד המכירות',
    text: 'רונית חזרה אליה אחרי 37 דקות. עכשיו נועה יושבת מול הדמיות ומחירון.',
    cost: 1739,
    costLabel: 'עלות לפגישה',
    ui: 'meeting',
  },
  {
    id: 'contract',
    when: 'שלושה שבועות אחר כך',
    title: 'חוזה חתום',
    text: 'דירה ב-2.37 מיליון ₪. עלות הפרסום שהביאה אותה: 0.33% מהמחיר. ועכשיו יודעים בדיוק איזה שקל עשה את זה.',
    cost: 7825,
    costLabel: 'עלות לחוזה',
    ui: 'contract',
  },
]

const maxBucket = Math.max(...RESPONSE_BUCKETS.map((b) => b.leads))

function StationUI({ kind }) {
  if (kind === 'ad') return (
    <div className="j-ui j-ui--ad">
      <span className="j-ad__img" aria-hidden="true"><svg viewBox="0 0 64 48"><path d="M8 40V20l12-8 12 8v20M36 40V12l10-6 10 6v28M4 40h56" /></svg></span>
      <div><b>אופק ים · 4 חדרים</b><small>ממומן · פייסבוק</small></div>
    </div>
  )
  if (kind === 'lead') return (
    <div className="j-ui j-ui--lead">
      <span className="j-dot" /><div><b>ליד חדש · פייסבוק</b><small>נועה ל. · 052-•••-••41</small></div><span className="j-chip">רלוונטי</span>
    </div>
  )
  if (kind === 'hour') return (
    <ul className="j-ui j-ui--hour">
      {RESPONSE_BUCKETS.slice(0, 4).map((b) => (
        <li key={b.label}>
          <span>{b.label}</span>
          <span className="j-track"><span style={{ '--w': b.leads / maxBucket }} /><span className="j-hit" style={{ '--w': b.meetings / maxBucket }} /></span>
          <b>{num(b.meetings)}/{num(b.leads)}</b>
        </li>
      ))}
    </ul>
  )
  if (kind === 'meeting') return (
    <ul className="j-ui j-ui--reps">
      {REPS.slice(0, 3).map((r) => (
        <li key={r.name}><span className="avatar avatar--sm">{r.initials}</span><span>{r.name}</span><b className={r.median > 90 ? 'warn' : 'ok'}>{r.median} דק׳</b></li>
      ))}
    </ul>
  )
  return (
    <div className="j-ui j-ui--contract">
      <div><small>מחיר הדירה</small><b>₪2,373,000</b></div>
      <div><small>עלות פרסום לחוזה</small><b className="blue">₪7,825</b></div>
    </div>
  )
}

export default function Journey() {
  const root = useRef(null)
  const [active, setActive] = useState(0)
  const line = useRef(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = innerHeight
      const p = Math.min(1, Math.max(0, (vh * 0.55 - r.top) / r.height))
      // ישירות על הקו (transform), לא דרך משתנה CSS על כל הסקשן — אחרת כל הילדים מחושבים מחדש בכל פריים
      if (line.current) line.current.style.transform = `scaleY(${reduce ? 1 : p})`
      const items = el.querySelectorAll('.j-station')
      let a = 0
      items.forEach((it, i) => { if (it.getBoundingClientRect().top < vh * 0.6) a = i })
      setActive((prev) => (prev === a ? prev : a))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    return () => { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [])

  const s = STATIONS[active]
  return (
    <div className="journey" ref={root}>
      <div className="journey__meter" aria-live="polite">
        <p className="journey__meter-label">{s.costLabel}</p>
        <p className="journey__meter-fig"><bdi>₪{s.cost.toLocaleString('en-US')}</bdi></p>
        <ol className="journey__steps" aria-hidden="true">
          {STATIONS.map((x, i) => <li key={x.id} className={i <= active ? 'is-on' : ''} />)}
        </ol>
        <p className="journey__meter-note">פרסום בפייסבוק ובגוגל, מחולק לפי התוצאה ב-CRM</p>
      </div>

      <div className="journey__track">
        <span className="journey__line" aria-hidden="true"><span ref={line} /></span>
        <ol className="journey__list">
          {STATIONS.map((x, i) => (
            <li key={x.id} className={'j-station' + (i <= active ? ' is-on' : '')}>
              <span className="j-node" aria-hidden="true" />
              <p className="j-when">{x.when}</p>
              <h3>{x.title}</h3>
              <p className="j-text">{x.text}</p>
              <StationUI kind={x.ui} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
