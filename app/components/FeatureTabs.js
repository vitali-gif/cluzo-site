'use client'
import { useState } from 'react'
import { CHANNELS, RESPONSE_BUCKETS, SOURCES, REPS, ils, num } from '../demo-data'

const maxBucket = Math.max(...RESPONSE_BUCKETS.map((b) => b.leads))
const maxSource = Math.max(...SOURCES.map((s) => s.leads))
const maxRep = Math.max(...REPS.map((r) => r.median))

const ITEMS = [
  {
    id: 'cost',
    title: 'עלות לליד, לפגישה ולחוזה',
    text: 'ההוצאה מפייסבוק ומגוגל מול הפגישות והחוזים שנרשמו ב-CRM. רואים איזה ערוץ מביא עסקאות, ולא רק לידים זולים.',
    ui: () => (
      <>
        <p className="card__title">מה עלה כל חוזה <span className="tag">החודש</span></p>
        <table className="tbl">
          <thead><tr><th>ערוץ</th><th>הוצאה</th><th>לליד</th><th>לפגישה</th><th>לחוזה</th></tr></thead>
          <tbody>
            {CHANNELS.map((c) => (
              <tr key={c.name}>
                <th scope="row">{c.name}</th>
                <td>{ils(c.spend)}</td>
                <td>{ils(c.spend / c.leads)}</td>
                <td>{ils(c.spend / c.meetings)}</td>
                <td><b className="blue">{ils(c.spend / c.contracts)}</b></td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 'speed',
    title: 'זמני התגובה של הצוות',
    text: 'בפרויקט ההדגמה, 30 מתוך 51 הלידים שקיבלו מענה בתוך שעה הגיעו לפגישה. אחרי ארבע שעות, אף אחד.',
    ui: () => (
      <>
        <p className="card__title">מהירות תגובה מול פגישות <span className="tag">החודש</span></p>
        <ul className="hbars">
          {RESPONSE_BUCKETS.map((b) => (
            <li key={b.label}>
              <span className="hbars__label">{b.label}</span>
              <span className="hbars__track"><span style={{ '--w': b.leads / maxBucket }} /><span className="hbars__hit" style={{ '--w': b.meetings / maxBucket }} /></span>
              <span className="hbars__val">{num(b.meetings)}/{num(b.leads)}</span>
            </li>
          ))}
        </ul>
        <p className="card__note"><i className="lg lg--a" />לידים <i className="lg lg--b" />הגיעו לפגישה</p>
      </>
    ),
  },
  {
    id: 'sources',
    title: 'מקורות הלידים',
    text: 'כל מקור עם הלידים, הרלוונטיים, הפגישות והחוזים שלו. פורטל שמביא 19 לידים ואף לא אחד רלוונטי בולט מיד.',
    ui: () => (
      <>
        <p className="card__title">מאיפה הגיעו העסקאות <span className="tag">החודש</span></p>
        <ul className="hbars">
          {SOURCES.map((s) => (
            <li key={s.name}>
              <span className="hbars__label">{s.name}</span>
              <span className="hbars__track"><span style={{ '--w': s.leads / maxSource }} /><span className="hbars__hit" style={{ '--w': s.relevant / maxSource }} /></span>
              <span className="hbars__val">{num(s.contracts)} חוזים</span>
            </li>
          ))}
        </ul>
        <p className="card__note"><i className="lg lg--a" />לידים <i className="lg lg--b" />רלוונטיים</p>
      </>
    ),
  },
  {
    id: 'team',
    title: 'כל איש מכירות, בנפרד',
    text: 'זמן התגובה החציוני של כל אחד וכמה לידים טיפל. בלי לבקש דוח ובלי לחכות לסוף החודש.',
    ui: () => (
      <>
        <p className="card__title">צוות המכירות <span className="tag">חציון זמן תגובה</span></p>
        <ul className="reps">
          {REPS.map((r) => (
            <li key={r.name}>
              <span className="avatar">{r.initials}</span>
              <span className="reps__name"><b>{r.name}</b><small>{num(r.leads)} לידים</small></span>
              <span className="reps__track"><span style={{ '--w': r.median / maxRep }} className={r.median > 120 ? 'is-slow' : ''} /></span>
              <b className="reps__val">{r.median} דק׳</b>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'pdf',
    title: 'דוח PDF חודשי',
    text: 'בתחילת כל חודש דוח מסודר, מוכן להנהלה, לשותפים ולבנק המלווה.',
    ui: () => (
      <div className="pdf">
        <div className="pdf__page">
          <div className="pdf__head"><img src="/site-assets/brand/cluzo/cluzo-logo-light.svg" alt="" width="90" height="32" /><span>דוח חודשי</span></div>
          <p className="pdf__title">אופק ים</p>
          <div className="pdf__kpis">
            <div><small>לידים</small><b>143</b></div>
            <div><small>פגישות</small><b>24</b></div>
            <div><small>חוזים</small><b>5</b></div>
            <div><small>עלות לחוזה</small><b>₪7,825</b></div>
          </div>
          <ul className="pdf__rows">
            <li><span>פייסבוק</span><span>60 לידים · 3 חוזים</span></li>
            <li><span>גוגל</span><span>39 לידים · 1 חוזה</span></li>
            <li><span>פורטל נדל״ן ב׳</span><span>4 לידים · 1 חוזה</span></li>
          </ul>
        </div>
      </div>
    ),
  },
]

export default function FeatureTabs() {
  const [open, setOpen] = useState(0)
  const item = ITEMS[open]
  return (
    <div className="feat">
      <div className="feat__list">
        {ITEMS.map((it, i) => (
          <div key={it.id} className={'acc' + (i === open ? ' is-open' : '')}>
            <button type="button" className="acc__btn" aria-expanded={i === open} onClick={() => setOpen(i)}>
              <span>{it.title}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            <div className="acc__body"><p>{it.text}</p></div>
          </div>
        ))}
      </div>
      <div className="feat__ui">
        <div className="card card--ui" data-ui key={item.id}>{item.ui()}</div>
      </div>
    </div>
  )
}
