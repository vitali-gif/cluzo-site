'use client'
import { useState } from 'react'

export const CALC_DEFAULTS = { leads: 300, cpl: 320, missed: 15 }
export const yearlyLoss = ({ leads, cpl, missed }) => Math.round(leads * (missed / 100) * cpl * 12)

const FIELDS = [
  { key: 'leads', label: 'לידים בחודש', min: 20, max: 2000, step: 10, fmt: (v) => v.toLocaleString('en-US') },
  { key: 'cpl', label: 'עלות ממוצעת לליד', min: 50, max: 1500, step: 10, fmt: (v) => '₪' + v.toLocaleString('en-US') },
  { key: 'missed', label: 'לידים שלא חזרו אליהם בתוך שעה', min: 0, max: 60, step: 1, fmt: (v) => v + '%' },
]

// הדבר החי בעמוד: המבקר מזין את המספרים שלו ורואה כמה כסף פרסום הולך על לידים שאף אחד לא חזר אליהם בזמן.
export default function Calculator({ heading, how }) {
  const [v, setV] = useState(CALC_DEFAULTS)
  const total = yearlyLoss(v)
  const digits = String(total).length

  return (
    <>
      <div className="calc__top">
        {heading}
        <div className="calc__ui" data-ui>
          {FIELDS.map((f) => (
            <label key={f.key} className="calc__field">
              <span className="calc__row">
                <span>{f.label}</span>
                <output>{f.fmt(v[f.key])}</output>
              </span>
              <input
                type="range"
                min={f.min}
                max={f.max}
                step={f.step}
                value={v[f.key]}
                onChange={(e) => setV({ ...v, [f.key]: Number(e.target.value) })}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="calc__bottom">
        <p className="calc__label">כסף פרסום שהולך על לידים שלא טופלו</p>
        <p className="calc__figure" aria-live="polite" style={{ "--d": Math.max(7, digits) }}>
          <bdi>{total.toLocaleString('en-US')}</bdi>
          <span className="calc__unit">₪ בשנה</span>
        </p>
        {how}
      </div>
    </>
  )
}
