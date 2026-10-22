'use client'
import { useEffect, useState } from 'react'

// הטופס נשלח ל-FormSubmit (כמו בעמוד הקודם, לאותה כתובת), ו-FormSubmit מחזיר לכאן עם ?submitted=1.
export default function LeadForm() {
  const [sent, setSent] = useState(false)
  useEffect(() => {
    setSent(new URLSearchParams(location.search).get('submitted') === '1')
  }, [])

  if (sent) {
    return (
      <div className="coupon__done" role="status">
        <p className="coupon__done-title">קיבלנו, תודה.</p>
        <p>נחזור אליכם ביום העסקים הקרוב לתאם הדגמה.</p>
      </div>
    )
  }

  return (
    <form className="coupon__form" action="https://formsubmit.co/vitali@vitas.co.il" method="POST">
      <input type="hidden" name="_subject" value="בקשת הדגמה מ-reports.vitas.co.il" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://reports.vitas.co.il/?submitted=1#demo" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hp-trap" aria-hidden="true" />

      <div className="field-row">
        <label className="field"><span>שם מלא</span><input name="name" autoComplete="name" required /></label>
        <label className="field"><span>טלפון</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" placeholder="050-0000000" required /></label>
      </div>
      <label className="field"><span>שם הפרויקט או החברה</span><input name="business" autoComplete="organization" required /></label>
      <label className="field"><span>אימייל <em>(לא חובה)</em></span><input name="email" type="email" inputMode="email" autoComplete="email" dir="ltr" /></label>
      <button type="submit" onClick={(e) => { const f = e.currentTarget.form; if (f && f.checkValidity()) e.currentTarget.classList.add('is-sending') }}>
        <span>קבעו הדגמה</span>
      </button>
      <p className="form-note">נחזור אליכם ביום העסקים הקרוב. בלי מחירון ובלי התחייבות.</p>
    </form>
  )
}
