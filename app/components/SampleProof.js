// ⚠️ הוכחות לדוגמה בלבד — שמות, לוגואים, מספרים וציטוט מומצאים, לבקשת ויטלי, עד שיגיעו האמיתיים.
// מוצגות רק בגרסאות בדיקה של Vercel (VERCEL_ENV=preview) או כש-SHOW_SAMPLE_PROOF=1 בזמן build.
// ברירת המחדל היא לא להציג — כך הוכחות מומצאות לא יעלו לאתר החי בטעות, גם אם משתני Vercel חסרים.
// להחלפה בהוכחות אמיתיות: לערוך את הקבועים כאן ולמחוק את התנאי.
const SHOW = process.env.SHOW_SAMPLE_PROOF === '1' || process.env.VERCEL_ENV === 'preview'

export const SAMPLE_DEVELOPERS = ['אבן תכלת', 'גבעות הים', 'מגדלי ארגמן', 'קרן נוף', 'שדרות לבנה', 'אורות העמק']
const SAMPLE_STATS = [
  { value: '38', label: 'פרויקטים פעילים' },
  { value: '₪1.2 מיליארד', label: 'בעסקאות שנמדדו עד החוזה' },
  { value: '62 אלף', label: 'לידים שעברו במערכת השנה' },
]
const SAMPLE_QUOTE = {
  text: 'שנתיים מדדנו עלות לליד. בשבוע הראשון עם Cluzo ראינו שהערוץ ה"זול" שלנו הכי יקר לכל דירה שנמכרה, והעברנו תקציב.',
  name: 'מיכל א.',
  role: 'סמנכ״לית שיווק, מגדלי ארגמן',
}

function Mark({ i }) {
  const shapes = [
    <path key="a" d="M4 20L14 4l10 16z" />,
    <circle key="b" cx="14" cy="12" r="9" />,
    <path key="c" d="M5 4h18v16H5z" />,
    <path key="d" d="M14 3l10 9-10 9-10-9z" />,
    <path key="e" d="M4 20V8l10-5 10 5v12z" />,
    <path key="f" d="M4 12a10 10 0 0 1 20 0v8H4z" />,
  ]
  return <svg viewBox="0 0 28 24" aria-hidden="true" className="sp-logo__mark">{shapes[i % shapes.length]}</svg>
}

export function SampleLogos() {
  if (!SHOW) return null
  return (
    <section className="sp-logos" aria-label="יזמים שעובדים עם Cluzo (דוגמה)">
      <p className="sp-logos__title">יזמים שכבר יודעים כמה עלה כל חוזה</p>
      <div className="sp-logos__row">
        {SAMPLE_DEVELOPERS.map((n, i) => (
          <span key={n} className="sp-logo"><Mark i={i} />{n}</span>
        ))}
      </div>
    </section>
  )
}

export function SampleStatsQuote() {
  if (!SHOW) return null
  return (
    <div className="sp-proof">
      <dl className="sp-stats">
        {SAMPLE_STATS.map((s) => (
          <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
        ))}
      </dl>
      <figure className="sp-quote">
        <blockquote>“{SAMPLE_QUOTE.text}”</blockquote>
        <figcaption><span className="avatar">מא</span><span><b>{SAMPLE_QUOTE.name}</b><small>{SAMPLE_QUOTE.role}</small></span></figcaption>
      </figure>
    </div>
  )
}
