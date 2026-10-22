'use client'
import { useEffect, useRef, useState } from 'react'
import { PERIODS, ils, num } from '../demo-data'

// הקטע מהדשבורד בפתיחה. התקופות מתחלפות לאט (כמו אור שזז בחדר) עד שהמבקר בוחר אחת בעצמו.
export default function HeroPanel() {
  const [active, setActive] = useState(0)
  const auto = useRef(true)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      if (!auto.current || document.hidden) return
      setActive((i) => (i + 1) % PERIODS.length)
    }, 6400)
    return () => clearInterval(id)
  }, [])

  const pick = (i) => {
    auto.current = false
    setActive(i)
  }

  return (
    <div className="hp" data-ui>
      <div className="hp__head">
        <div>
          <p className="hp__project">אופק ים</p>
          <p className="hp__client">נוף אדמה בע״מ · פרויקט הדגמה</p>
        </div>
        <div className="hp__tabs" role="tablist" aria-label="תקופה">
          {PERIODS.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={i === active ? 'is-on' : ''}
              onClick={() => pick(i)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hp__stage">
        {PERIODS.map((p, i) => (
          <div key={p.id} className={'hp__layer' + (i === active ? ' is-on' : '')} aria-hidden={i !== active}>
            <dl className="hp__kpis">
              <div><dt>הוצאת פרסום</dt><dd>{ils(p.spend)}</dd></div>
              <div><dt>לידים</dt><dd>{num(p.leads)}</dd></div>
              <div><dt>פגישות שהתקיימו</dt><dd>{num(p.meetings)}</dd></div>
              <div><dt>חוזים</dt><dd>{num(p.contracts)}</dd></div>
            </dl>

            <p className="hp__label">עלות לכל שלב, פייסבוק וגוגל</p>
            <ul className="hp__rows">
              {[
                ['ליד', p.perLead, p.paidLeads, 'לידים'],
                ['פגישה', p.perMeeting, p.paidMeetings, 'פגישות'],
                ['חוזה', p.perContract, p.paidContracts, 'חוזים'],
              ].map(([name, cost, count, unit]) => (
                <li key={name} style={{ '--w': Math.max(0.14, cost / p.perContract) }}>
                  <span className="hp__bar" aria-hidden="true" />
                  <span className="hp__name">עלות ל{name}</span>
                  <span className="hp__count">{num(count)} {unit}</span>
                  <strong className="hp__cost">{ils(cost)}</strong>
                </li>
              ))}
            </ul>

            <p className="hp__foot">
              זמן תגובה חציוני <strong>{p.medianResponse} דק׳</strong>
              <span className="hp__dot" aria-hidden="true" />
              לידים בלי מענה <strong>{num(p.noResponse)}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
