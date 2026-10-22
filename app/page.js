// עמוד הבית של reports.vitas.co.il הוא גם העמוד שגוגל בודקת באימות המותג
// (Brand Verification) ובבקשה לרמת Basic של Google Ads API. לכן חייבים להישאר בו:
// השם "Cluzo by Vitas", הלוגו, הסקשן "How we use the Google Ads API" (באנגלית, כמו
// שגוגל קראה אותו), וקישורים ל-vitas.co.il/privacy ול-vitas.co.il/terms.
// icon-512.png שגוגל מכירה נשאר ב-vitas-reports/public/brand/cluzo — לא להזיז.
//
// הסגנון: לפי שלושת הרפרנסים של ויטלי (SaaS: כותרת במרכז, זוהר כחול, דשבורד גדול עם כרטיסים צפים).
// המספרים בקטעי הדשבורד: app/demo-data.js (פרויקט ההדגמה "אופק ים").
import HeroDashboard from './components/HeroDashboard'
import FeatureTabs from './components/FeatureTabs'
import Calculator from './components/Calculator'
import LeadForm from './components/LeadForm'
import Reveal from './components/Reveal'
import { REPS } from './demo-data'

export const metadata = {
  title: 'Cluzo by Vitas — דשבורד שיווק ומכירות ליזמי נדל״ן',
  description:
    'פייסבוק, גוגל וה-CRM בדשבורד אחד: עלות לליד, לפגישה ולחוזה, זמני תגובה של אנשי המכירות, מקורות הלידים ודוח PDF חודשי. Cluzo by Vitas, מבית VITAS Digital Marketing.',
}

const A = '/site-assets/brand/cluzo'
const INTEGRATIONS = ['Facebook', 'Instagram', 'Google Ads', 'BMBY', 'Salesforce', 'Zoho', 'Fireberry']

function Bolt() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="ico"><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg>
  )
}

export default function Home() {
  return (
    <>
      <Reveal />

      <header className="nav-wrap">
        <nav className="nav" aria-label="ראשי">
          <a href="#top" className="nav__logo"><img src={`${A}/cluzo-logo-dark.svg`} alt="Cluzo by Vitas" width="104" height="36" /></a>
          <div className="nav__links">
            <a href="#how">איך זה עובד</a>
            <a href="#features">יכולות</a>
            <a href="#calc">מחשבון</a>
            <a href="/client">כניסה ללקוחות</a>
          </div>
          <a href="#demo" className="nav__cta">בקשת הדגמה</a>
        </nav>
      </header>

      <main id="top">
        {/* ═══ HERO ═══ */}
        <section className="hero">
          <div className="hero__glow" aria-hidden="true" />
          <div className="wrap hero__text">
            <p className="badge" data-rv><Bolt />דשבורד שיווק ומכירות ליזמי נדל״ן</p>
            <h1 data-rv style={{ '--i': 1 }}>
              כל דירה שנמכרה
              <br />
              התחילה <span className="hl">בליד</span>
            </h1>
            <p className="hero__sub" data-rv style={{ '--i': 2 }}>
              Cluzo מחבר את פייסבוק, גוגל וה-CRM למסך אחד, ומראה לכם את כל הדרך: מהמודעה, דרך השיחה עם איש
              המכירות, ועד החוזה.
            </p>
            <div className="hero__cta" data-rv style={{ '--i': 3 }}>
              <a href="#demo" className="btn btn--dark">בקשת הדגמה</a>
              <a href="#how" className="btn btn--light">איך זה עובד</a>
            </div>
          </div>

          <div className="wrap hero__stage" data-rv style={{ '--i': 4 }}>
            <HeroDashboard />

            <div className="float float--lead" aria-hidden="true">
              <span className="float__dot" />
              <div>
                <b>ליד חדש מפייסבוק</b>
                <small>קמפיין 4 חדרים · לפני 2 דק׳</small>
              </div>
              <span className="avatar avatar--sm">רא</span>
            </div>
            <div className="float float--speed" aria-hidden="true">
              <small>זמן תגובה חציוני</small>
              <b>98 דק׳</b>
              <span className="float__bar"><span style={{ '--w': 0.42 }} /></span>
              <small>16 לידים בלי מענה החודש</small>
            </div>
          </div>
        </section>

        {/* ═══ INTEGRATIONS ═══ */}
        <section className="logos" aria-labelledby="logos-h">
          <p id="logos-h" className="logos__title">מתחבר למערכות שכבר עובדות אצלכם</p>
          <div className="logos__row">
            {INTEGRATIONS.map((n) => <span key={n} className="logos__item">{n}</span>)}
          </div>
        </section>

        {/* ═══ THE STORY: how it works ═══ */}
        <section className="sec" id="how" aria-labelledby="how-h">
          <div className="wrap">
            <div className="sec__head">
              <p className="badge" data-rv><Bolt />איך זה עובד</p>
              <h2 id="how-h" data-rv style={{ '--i': 1 }}>
                השיווק מביא לידים.
                <br />
                <span className="blue">Cluzo מראה מה קורה אחריהם.</span>
              </h2>
              <p className="sec__lead" data-rv style={{ '--i': 2 }}>
                היום ההוצאה יושבת בפייסבוק ובגוגל, הלידים ב-CRM, והשיחות אצל אנשי המכירות. אף אחד לא רואה את
                התמונה המלאה, ולכן קשה לדעת מה באמת מוכר דירות.
              </p>
            </div>

            <div className="steps">
              <article className="step" data-rv>
                <div className="step__ui" data-ui aria-hidden="true">
                  <div className="hub">
                    <span className="hub__core"><img src={`${A}/cluzo-symbol.svg`} alt="" width="40" height="40" /></span>
                    {['Facebook', 'Google', 'BMBY', 'Salesforce', 'Zoho', 'Fireberry'].map((n, i) => (
                      <span key={n} className={`hub__node hub__node--${i}`}>{n}</span>
                    ))}
                  </div>
                </div>
                <h3>מחברים את המקורות</h3>
                <p>פייסבוק, גוגל וה-CRM שלכם מתחברים פעם אחת. מכאן הנתונים מתעדכנים לבד כמה פעמים ביום.</p>
              </article>

              <article className="step" data-rv style={{ '--i': 1 }}>
                <div className="step__ui" data-ui aria-hidden="true">
                  <ul className="funnel">
                    <li style={{ '--w': 1 }}><span>לידים</span><b>143</b></li>
                    <li style={{ '--w': 0.72 }}><span>רלוונטיים</span><b>103</b></li>
                    <li style={{ '--w': 0.4 }}><span>פגישות</span><b>24</b></li>
                    <li style={{ '--w': 0.2 }}><span>חוזים</span><b>5</b></li>
                  </ul>
                </div>
                <h3>כל ליד נמדד עד החוזה</h3>
                <p>רואים כמה עלה ליד, כמה עלתה פגישה במשרד המכירות, וכמה עלתה דירה שנחתמה.</p>
              </article>

              <article className="step" data-rv style={{ '--i': 2 }}>
                <div className="step__ui" data-ui aria-hidden="true">
                  <ul className="mini-reps">
                    {REPS.slice(0, 3).map((r) => (
                      <li key={r.name}>
                        <span className="avatar avatar--sm">{r.initials}</span>
                        <span>{r.name}</span>
                        <b className={r.median > 90 ? 'warn' : 'ok'}>{r.median} דק׳</b>
                      </li>
                    ))}
                  </ul>
                </div>
                <h3>הצוות נמדד על מהירות</h3>
                <p>כמה מהר כל איש מכירות חוזר לליד. כי ליד שחיכה ארבע שעות כבר דיבר עם פרויקט אחר.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ═══ FEATURES ═══ */}
        <section className="sec sec--tint" id="features" aria-labelledby="feat-h">
          <div className="wrap">
            <div className="sec__head sec__head--start">
              <p className="badge" data-rv><Bolt />יכולות</p>
              <h2 id="feat-h" data-rv style={{ '--i': 1 }}>כל מה שצריך כדי להחליט על תקציב</h2>
            </div>
            <FeatureTabs />
          </div>
        </section>

        {/* ═══ CALCULATOR ═══ */}
        <section className="sec" id="calc" aria-labelledby="calc-h">
          <div className="wrap">
            <div className="calc" data-rv>
              <div className="calc__glow" aria-hidden="true" />
              <Calculator
                heading={
                  <div className="calc__intro">
                    <p className="badge badge--dark"><Bolt />מחשבון</p>
                    <h2 id="calc-h">כמה עולה ליד שלא חזרו אליו?</h2>
                    <p>הזיזו את הסמנים לפי הפרויקט שלכם. החישוב נעשה בדפדפן, שום דבר לא נשלח.</p>
                  </div>
                }
                how={
                  <p className="calc__how">
                    לידים בחודש × האחוז שלא חזרו אליהם בתוך שעה × העלות לליד × 12 חודשים. זה רק כסף הפרסום, עוד לפני
                    הדירות שלא נמכרו.
                  </p>
                }
              />
            </div>
          </div>
        </section>

        {/* ═══ DEMO ═══ */}
        <section className="sec demo" id="demo" aria-labelledby="demo-h">
          <div className="demo__glow" aria-hidden="true" />
          <div className="wrap demo__in">
            <div className="demo__text">
              <p className="badge" data-rv><Bolt />בקשת הדגמה</p>
              <h2 id="demo-h" data-rv style={{ '--i': 1 }}>רוצים לראות את המספרים של הפרויקט שלכם?</h2>
              <p data-rv style={{ '--i': 2 }}>
                נעבור יחד על פרויקט ההדגמה, ואחר כך נשלח הצעה מותאמת לפרויקט שלכם. בלי מחירון ובלי התחייבות.
              </p>
              <ul className="checks" data-rv style={{ '--i': 3 }}>
                <li>חיבור לפייסבוק, לגוגל ול-CRM שלכם</li>
                <li>דשבורד לכל פרויקט, וגישה ללקוח או לשותפים</li>
                <li>דוח PDF בתחילת כל חודש</li>
              </ul>
            </div>
            <div className="card demo__form" data-rv style={{ '--i': 2 }}>
              <LeadForm />
            </div>
          </div>
        </section>

        {/* ═══ For Google reviewers — אל תמחקו, ראו הערה בראש הקובץ ═══ */}
        <section className="api" lang="en" dir="ltr" aria-labelledby="api-h">
          <div className="wrap">
            <h2 className="api__title" id="api-h">How we use the Google Ads API</h2>
            <div className="api__cols">
              <p>
                Cluzo by Vitas is a proprietary reporting dashboard built by VITAS Digital Marketing. It consolidates
                campaign performance data from multiple advertising platforms - including Meta Ads (Facebook /
                Instagram) and Google Ads - into a single, unified interface that agencies and advertisers use to track
                spend, leads, cost-per-lead, and ad creative performance across all their clients and projects in real
                time.
              </p>
              <p>
                Cluzo by Vitas uses the Google Ads API in <strong>read-only mode</strong> to retrieve campaign, ad
                group, ad, and performance metrics for the Google Ads accounts that our MCC manages. Retrieved data is
                transformed into a common schema - identical to the schema used for Meta Ads data - and stored in a
                Supabase Postgres database. Users of the platform view the data through the web dashboard; the API
                itself is never exposed directly to end users or clients.
              </p>
              <p>
                The API is called either on demand by a logged-in agency employee (via a &quot;Refresh&quot; button)
                or automatically by scheduled jobs a few times a day, so that each client&apos;s report stays current.
                We do not create, modify, pause, or delete campaigns through the API - all campaign management is done
                by our team directly in the Google Ads UI. Refresh tokens are stored as encrypted environment variables
                in Vercel and are never written to source code or logs.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <div className="foot__top">
            <div className="foot__brand">
              <img src={`${A}/cluzo-logo-dark.svg`} alt="Cluzo by Vitas" width="150" height="52" loading="lazy" />
              <p>דשבורד שיווק ומכירות ליזמי נדל״ן, מבית VITAS Digital Marketing.</p>
            </div>
            <nav aria-label="העמוד">
              <b>האתר</b>
              <a href="#how">איך זה עובד</a>
              <a href="#features">יכולות</a>
              <a href="#calc">מחשבון</a>
              <a href="#demo">בקשת הדגמה</a>
            </nav>
            <nav aria-label="כניסה">
              <b>כניסה</b>
              <a href="/client">כניסה ללקוחות</a>
              <a href="/admin">כניסת צוות</a>
            </nav>
            <nav aria-label="מסמכים">
              <b>מסמכים</b>
              <a href="https://vitas.co.il/privacy">מדיניות פרטיות (Privacy Policy)</a>
              <a href="https://vitas.co.il/terms">תנאי שימוש (Terms of Service)</a>
              <a href="mailto:vitali@vitas.co.il">vitali@vitas.co.il</a>
            </nav>
          </div>
          <div className="foot__last">
            <span>© 2026 VITAS Digital Marketing</span>
            <span>המספרים בדשבורדים שבאתר לקוחים מפרויקט ההדגמה של Cluzo.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
