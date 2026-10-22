'use client'
import { useEffect, useRef, useState } from 'react'
import { PERIODS, SOURCES, DAYS, ils, num } from '../demo-data'

const maxDay = Math.max(...DAYS.map((d) => d.leads))
const topSources = SOURCES.slice(0, 5)
const maxSource = Math.max(...topSources.map((s) => s.leads))
const NAV = ['סקירה', 'קמפיינים', 'לידים', 'צוות המכירות', 'דוחות']

// הדשבורד בפתיחה, בנוי מהמספרים של פרויקט ההדגמה. התקופות מתחלפות לבד עד שהמבקר בוחר אחת.
export default function HeroDashboard() {
  const [active, setActive] = useState(0)
  const auto = useRef(true)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      if (auto.current && !document.hidden) setActive((i) => (i + 1) % PERIODS.length)
    }, 5200)
    return () => clearInterval(id)
  }, [])
  const p = PERIODS[active]
  const pick = (i) => { auto.current = false; setActive(i) }

  return (
    <div className="dash" data-ui>
      <aside className="dash__side" aria-hidden="true">
        <img src="/site-assets/brand/cluzo/cluzo-logo-light.svg" alt="" width="110" height="38" />
        <ul>
          {NAV.map((n, i) => <li key={n} className={i === 0 ? 'is-on' : ''}><span className="dash__ico" />{n}</li>)}
        </ul>
        <div className="dash__proj"><span className="dash__avatar">אי</span><div><b>אופק ים</b><small>נוף אדמה בע״מ</small></div></div>
      </aside>

      <div className="dash__main">
        <div className="dash__top">
          <div>
            <p className="dash__title">סקירת פרויקט</p>
            <p className="dash__sub">פרויקט הדגמה · נתונים קבועים</p>
          </div>
          <div className="seg" role="tablist" aria-label="תקופה">
            {PERIODS.map((x, i) => (
              <button key={x.id} type="button" role="tab" aria-selected={i === active} onClick={() => pick(i)}>{x.label}</button>
            ))}
          </div>
        </div>

        <div className="kpis" key={p.id}>
          <div className="kpi kpi--brand"><span>הוצאת פרסום</span><b>{ils(p.spend)}</b><small>פייסבוק + גוגל</small></div>
          <div className="kpi"><span>לידים</span><b>{num(p.leads)}</b><small>{num(p.relevant)} רלוונטיים</small></div>
          <div className="kpi"><span>פגישות</span><b>{num(p.meetings)}</b><small>{ils(p.perMeeting)} לפגישה</small></div>
          <div className="kpi"><span>חוזים</span><b>{num(p.contracts)}</b><small>{ils(p.perContract)} לחוזה</small></div>
        </div>

        <div className="dash__grid">
          <div className="panel">
            <div className="panel__head"><b>לידים ופגישות לפי יום</b><span className="legend"><i className="lg lg--a" />לידים<i className="lg lg--b" />פגישות</span></div>
            <div className="chart" aria-hidden="true">
              {DAYS.map((d) => (
                <div key={d.day} className="chart__col">
                  <div className="chart__bars">
                    <span className="chart__bar" style={{ '--h': d.leads / maxDay }} />
                    <span className="chart__bar chart__bar--b" style={{ '--h': d.meetings / maxDay }} />
                  </div>
                  <small>{d.day}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="panel">
            <div className="panel__head"><b>מקורות לידים</b></div>
            <ul className="srcs">
              {topSources.map((s) => (
                <li key={s.name} style={{ '--w': s.leads / maxSource }}>
                  <span className="srcs__name">{s.name}</span>
                  <span className="srcs__track"><span /></span>
                  <b>{num(s.leads)}</b>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
