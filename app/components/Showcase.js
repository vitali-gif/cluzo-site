'use client'
import { useState } from 'react'
import { CHANNELS, RESPONSE_BUCKETS, SOURCES, REPS, ils, num } from '../demo-data'

const maxLeads = Math.max(...RESPONSE_BUCKETS.map((b) => b.leads))
const maxSource = Math.max(...SOURCES.map((s) => s.leads))
const maxRep = Math.max(...REPS.map((r) => r.median))

const TABS = [
  {
    id: 'cost',
    tab: 'עלויות',
    title: 'מה עלה כל חוזה',
    text: 'ההוצאה מפייסבוק ומגוגל, מול הפגישות והחוזים שנרשמו ב-CRM. רואים איזה ערוץ מביא עסקאות ולא רק לידים זולים.',
    body: () => (
      <table className="sc__table">
        <thead>
          <tr><th>ערוץ</th><th>הוצאה</th><th>לליד</th><th>לפגישה</th><th>לחוזה</th></tr>
        </thead>
        <tbody>
          {CHANNELS.map((c) => (
            <tr key={c.name}>
              <th scope="row">{c.name}</th>
              <td>{ils(c.spend)}</td>
              <td>{ils(c.spend / c.leads)}</td>
              <td>{ils(c.spend / c.meetings)}</td>
              <td><strong>{ils(c.spend / c.contracts)}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
  {
    id: 'speed',
    tab: 'זמני תגובה',
    title: 'כמה מהר חוזרים ללידים',
    text: 'בפרויקט ההדגמה, 30 מתוך 51 הלידים שקיבלו מענה בתוך שעה הגיעו לפגישה. אחרי ארבע שעות, אף אחד.',
    body: () => (
      <ul className="sc__bars">
        {RESPONSE_BUCKETS.map((b) => (
          <li key={b.label} style={{ '--w': b.leads / maxLeads }}>
            <span className="sc__bar" aria-hidden="true" />
            <span className="sc__name">{b.label}</span>
            <span className="sc__val">{num(b.leads)} לידים · <strong>{num(b.meetings)} פגישות</strong></span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 'sources',
    tab: 'מקורות',
    title: 'מאיפה הגיעו העסקאות',
    text: 'כל מקור עם הלידים, הרלוונטיים, הפגישות והחוזים שלו. פורטל שמביא 19 לידים ואף לא אחד רלוונטי בולט מיד.',
    body: () => (
      <ul className="sc__bars">
        {SOURCES.map((s) => (
          <li key={s.name} style={{ '--w': s.leads / maxSource }}>
            <span className="sc__bar" aria-hidden="true" />
            <span className="sc__name">{s.name}</span>
            <span className="sc__val">{num(s.leads)} · {num(s.relevant)} רלוונטיים · <strong>{num(s.contracts)} חוזים</strong></span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 'team',
    tab: 'צוות',
    title: 'מי בצוות חוזר בזמן',
    text: 'זמן התגובה החציוני של כל איש מכירות וכמה לידים טיפל. בלי לבקש דוח ובלי לחכות לסוף החודש.',
    body: () => (
      <ul className="sc__bars sc__bars--team">
        {REPS.map((r) => (
          <li key={r.name} style={{ '--w': r.median / maxRep }}>
            <span className="sc__bar" aria-hidden="true" />
            <span className="sc__disc" aria-hidden="true">{r.initials}</span>
            <span className="sc__name">{r.name}</span>
            <span className="sc__val">{num(r.leads)} לידים · <strong>{r.median} דק׳</strong></span>
          </li>
        ))}
      </ul>
    ),
  },
]

export default function Showcase() {
  const [i, setI] = useState(0)
  const t = TABS[i]
  return (
    <div className="sc">
      <div className="sc__plate">
        <div className="sc__screen" data-ui key={t.id}>
          <p className="sc__screen-title">{t.title} <span>אופק ים · החודש</span></p>
          {t.body()}
        </div>
      </div>

      <div className="sc__text">
        <div>
          <h2 className="h2" data-rv>ככה זה נראה</h2>
          <div className="sc__tabs" role="tablist" aria-label="מסכים מהדשבורד" data-rv>
            {TABS.map((x, n) => (
              <button key={x.id} type="button" role="tab" aria-selected={n === i} onClick={() => setI(n)}>
                {x.tab}
              </button>
            ))}
          </div>
        </div>
        <div className="sc__copy" key={t.id + '-c'}>
          <h3>{t.title}</h3>
          <p>{t.text}</p>
        </div>
        <div className="sc__actions">
          <a className="cell cell--ink" href="#demo">בקשת הדגמה</a>
          <a className="cell cell--tone" href="/client">כניסה ללקוחות</a>
        </div>
      </div>
    </div>
  )
}
