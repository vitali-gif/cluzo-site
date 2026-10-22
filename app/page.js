// עמוד הבית של reports.vitas.co.il הוא גם העמוד שגוגל בודקת באימות המותג
// (Brand Verification) ובבקשה לרמת Basic של Google Ads API. לכן חייבים להישאר בו:
// השם "Cluzo by Vitas", הלוגו, הסקשן "How we use the Google Ads API" (באנגלית, כמו
// שגוגל קראה אותו), וקישורים ל-vitas.co.il/privacy ול-vitas.co.il/terms.
// icon-512.png שגוגל מכירה נשאר ב-vitas-reports/public/brand/cluzo — לא להזיז.
//
// הקונספט: "תעקבו אחרי השקל. עד המפתח." — העמוד הולך בעקבות ליד אחד מהמודעה ועד החוזה.
// הסגנון: SaaS לפי הרפרנסים של ויטלי; הביקורת: .impeccable/critique/.
// המספרים: app/demo-data.js (פרויקט ההדגמה "אופק ים"). הוכחות לדוגמה: components/SampleProof.js.
import HeroCompare from './components/HeroCompare'
import Journey from './components/Journey'
import Calculator from './components/Calculator'
import LeadForm from './components/LeadForm'
import Reveal from './components/Reveal'
import { SampleLogos, SampleStatsQuote } from './components/SampleProof'
import { SOURCES, REPS, num } from './demo-data'

export const metadata = {
  title: 'Cluzo by Vitas — תעקבו אחרי השקל, עד המפתח',
  description:
    'Cluzo עוקב אחרי כל שקל פרסום של פרויקט נדל״ן: דרך הליד, השיחה הראשונה והפגישה במשרד המכירות, עד החוזה החתום. עלות לחוזה, זמני תגובה של הצוות, מקורות שמבזבזים כסף ודוח חודשי להנהלה ולבנק.',
}

const A = '/site-assets/brand/cluzo'
const portal = SOURCES.find((s) => s.name === 'פורטל נדל״ן א׳')

export default function Home() {
  return (
    <>
      <Reveal />

      <header className="nav-wrap">
        <nav className="nav" aria-label="ראשי">
          <a href="#top" className="nav__logo"><img src={`${A}/cluzo-logo-dark.svg`} alt="Cluzo by Vitas" width="104" height="36" /></a>
          <div className="nav__links">
            <a href="#journey">המסע של ליד</a>
            <a href="#findings">מה תגלו</a>
            <a href="#calc">מחשבון</a>
            <a href="/client">כניסה ללקוחות</a>
          </div>
          <a href="#demo" className="nav__cta">קבעו הדגמה</a>
        </nav>
      </header>

      <main id="top">
        {/* ═══ HERO ═══ */}
        <section className="hero">
          <div className="hero__glow" aria-hidden="true" />
          <div className="wrap hero__grid">
            <div className="hero__text">
              <h1 data-rv>
                תעקבו אחרי השקל.
                <br />
                <span className="hl">עד המפתח.</span>
              </h1>
              <p className="hero__sub" data-rv style={{ '--i': 1 }}>
                Cluzo עוקב אחרי כל שקל פרסום של הפרויקט: דרך הליד, השיחה הראשונה והפגישה במשרד המכירות, עד החוזה
                החתום. ככה יודעים מה באמת מכר כל דירה, ומה רק עלה כסף.
              </p>
              <div className="hero__cta" data-rv style={{ '--i': 2 }}>
                <a href="#demo" className="btn btn--primary">קבעו הדגמה</a>
                <a href="#journey" className="btn btn--ghost">לכו בעקבות ליד אחד</a>
              </div>
              <p className="hero__fine" data-rv style={{ '--i': 3 }}>
                הקמה מלאה על ידינו · מתחבר ל-BMBY, Salesforce, Zoho ו-Fireberry
              </p>
            </div>
            <div className="hero__visual" data-rv style={{ '--i': 2 }}>
              <HeroCompare />
              <div className="float float--a" aria-hidden="true">
                <small>לידים בלי מענה החודש</small>
                <b>16</b>
              </div>
              <div className="float float--b" aria-hidden="true">
                <small>{portal.name}</small>
                <b>{num(portal.leads)} לידים · {num(portal.relevant)} רלוונטיים</b>
              </div>
            </div>
          </div>
        </section>

        <SampleLogos />

        {/* ═══ THE PROBLEM ═══ */}
        <section className="problem" aria-labelledby="problem-h">
          <div className="wrap problem__in">
            <h2 id="problem-h" data-rv>
              פייסבוק סופר לידים. <span className="nw">ה-CRM</span> סופר חוזים.
              <br />
              <span className="muted">אף אחד לא סופר מה קרה באמצע.</span>
            </h2>
            <p data-rv style={{ '--i': 1 }}>
              ובאמצע הולך הכסף: ליד שחיכה ארבע שעות, פורטל שמביא כמות בלי עסקאות, קמפיין שנראה זול עד שמגיעים
              לחוזה. Cluzo רואה את כל הדרך, ומראה לכם איפה היא נשברת.
            </p>
          </div>
        </section>

        {/* ═══ JOURNEY (signature) ═══ */}
        <section className="sec" id="journey" aria-labelledby="journey-h">
          <div className="wrap">
            <div className="sec__head">
              <h2 id="journey-h" data-rv>המסע של ליד אחד</h2>
              <p className="sec__lead" data-rv style={{ '--i': 1 }}>
                נועה היא ליד מפרויקט ההדגמה. ככה Cluzo רואה אותה, מהקליק הראשון ועד שהיא מקבלת מפתח.
              </p>
            </div>
            <Journey />
          </div>
        </section>

        {/* ═══ FINDINGS ═══ */}
        <section className="sec sec--tint" id="findings" aria-labelledby="findings-h">
          <div className="wrap">
            <div className="sec__head">
              <h2 id="findings-h" data-rv>מה תגלו בשבוע הראשון</h2>
              <p className="sec__lead" data-rv style={{ '--i': 1 }}>
                דברים שכבר קורים אצלכם, ושאף מערכת שיש לכם היום לא מראה.
              </p>
            </div>

            <div className="bento">
              <article className="tile tile--wide" data-rv>
                <div className="tile__text">
                  <h3>הערוץ ה"זול" הוא היקר</h3>
                  <p>לפי עלות לליד, פייסבוק וגוגל כמעט זהים. לפי עלות לחוזה, גוגל יקר פי 2.1. רק החיבור ל-CRM חושף את זה.</p>
                </div>
                <div className="tile__ui" data-ui aria-hidden="true">
                  <div className="pair"><small>עלות לליד</small><span><b>₪307</b><b>₪331</b></span></div>
                  <div className="pair pair--alert"><small>עלות לחוזה</small><span><b>₪6,133</b><b>₪12,900</b></span></div>
                  <div className="pair__legend"><span>פייסבוק</span><span>גוגל</span></div>
                </div>
              </article>

              <article className="tile" data-rv style={{ '--i': 1 }}>
                <div className="tile__text">
                  <h3>מי בצוות חוזר בזמן</h3>
                  <p>חציון זמן התגובה של כל איש מכירות. בלי לבקש דוח, בלי לחכות לסוף החודש.</p>
                </div>
                <ul className="tile__ui reps" data-ui aria-hidden="true">
                  {REPS.map((r) => (
                    <li key={r.name}><span className="avatar avatar--sm">{r.initials}</span><span>{r.name}</span><b className={r.median > 120 ? 'warn' : 'ok'}>{r.median} דק׳</b></li>
                  ))}
                </ul>
              </article>

              <article className="tile" data-rv style={{ '--i': 2 }}>
                <div className="tile__text">
                  <h3>מקורות ששורפים תקציב</h3>
                  <p>פורטל שהביא 19 לידים ואף לא אחד רלוונטי. בדשבורד הוא בולט מיד, עוד לפני החידוש הבא.</p>
                </div>
                <ul className="tile__ui srcs" data-ui aria-hidden="true">
                  {SOURCES.slice(0, 4).map((s) => (
                    <li key={s.name} className={s.relevant === 0 ? 'is-zero' : ''}>
                      <span>{s.name}</span><b>{num(s.relevant)}/{num(s.leads)}</b>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="tile tile--wide tile--dark" data-rv style={{ '--i': 1 }}>
                <div className="tile__text">
                  <h3>הדוח שההנהלה והבנק מבקשים</h3>
                  <p>בתחילת כל חודש: כמה עלתה כל דירה שנמכרה ואיזה ערוץ באמת מכר. מוכן לשליחה לשותפים ולבנק המלווה.</p>
                </div>
                <div className="tile__ui pdf" data-ui aria-hidden="true">
                  <div className="pdf__page">
                    <div className="pdf__head"><img src={`${A}/cluzo-logo-light.svg`} alt="" width="80" height="28" /><span>דוח חודשי</span></div>
                    <p className="pdf__title">אופק ים</p>
                    <div className="pdf__kpis">
                      <div><small>חוזים</small><b>5</b></div>
                      <div><small>עלות לחוזה</small><b>₪7,825</b></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
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
                    <h2 id="calc-h">כמה עולה לכם השעה הראשונה?</h2>
                    <p>כל ליד שלא קיבל מענה בתוך שעה הוא כסף פרסום ששילמתם עליו ונתתם לו ללכת. הזיזו את הסמנים לפי הפרויקט שלכם.</p>
                  </div>
                }
                how={
                  <p className="calc__how">
                    לידים בחודש × האחוז שלא קיבלו מענה בתוך שעה × העלות לליד × 12. זה רק כסף הפרסום. דירה אחת שלא
                    נמכרה שווה הרבה יותר.
                  </p>
                }
              />
            </div>
          </div>
        </section>

        {/* ═══ HOW WE START ═══ */}
        <section className="sec sec--tint" aria-labelledby="start-h">
          <div className="wrap">
            <div className="sec__head">
              <h2 id="start-h" data-rv>אתם לא נוגעים בכלום</h2>
              <p className="sec__lead" data-rv style={{ '--i': 1 }}>
                אנחנו מחברים, בונים ומתחזקים. אתם פותחים את הדשבורד ומקבלים תשובות.
              </p>
            </div>
            <ol className="start">
              <li data-rv>
                <b>שיחת היכרות</b>
                <p>20 דקות על פרויקט ההדגמה, ואחר כך על הפרויקט שלכם: מה המקורות, איזה CRM, מי בצוות.</p>
              </li>
              <li data-rv style={{ '--i': 1 }}>
                <b>הקמה וחיבור</b>
                <p>אנחנו מחברים את פייסבוק, גוגל וה-CRM, בהרשאת קריאה בלבד. אף אחד לא משנה לכם קמפיין או ליד.</p>
              </li>
              <li data-rv style={{ '--i': 2 }}>
                <b>הדשבורד שלכם</b>
                <p>פרויקט לכל דשבורד, גישה לכם, לשותפים או להנהלה, ודוח PDF בתחילת כל חודש.</p>
              </li>
            </ol>
            <div className="addons" data-rv>
              <p>ואם רוצים יותר:</p>
              <span>ליווי וניתוח חודשי של המספרים</span>
              <span>ניהול הקמפיינים בפייסבוק ובגוגל</span>
            </div>
            <SampleStatsQuote />
          </div>
        </section>

        {/* ═══ DEMO ═══ */}
        <section className="sec demo" id="demo" aria-labelledby="demo-h">
          <div className="demo__glow" aria-hidden="true" />
          <div className="wrap demo__in">
            <div className="demo__text">
              <h2 id="demo-h" data-rv>כמה עלה החוזה האחרון שלכם?</h2>
              <p data-rv style={{ '--i': 1 }}>
                אם אין לכם תשובה מדויקת, זה בדיוק הזמן לדבר. נראה לכם את פרויקט ההדגמה, ונבנה הצעה לפרויקט שלכם.
              </p>
              <ul className="checks" data-rv style={{ '--i': 2 }}>
                <li>הקמה וחיבור מלא על ידינו</li>
                <li>הרשאת קריאה בלבד לפייסבוק, לגוגל ול-CRM</li>
                <li>בלי מחירון ובלי התחייבות</li>
              </ul>
            </div>
            <div className="card demo__form" data-rv style={{ '--i': 1 }}>
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <div className="foot__top">
            <div className="foot__brand">
              <img src={`${A}/cluzo-logo-dark.svg`} alt="Cluzo by Vitas" width="150" height="52" loading="lazy" />
              <p>תעקבו אחרי השקל, עד המפתח. מבית VITAS Digital Marketing.</p>
            </div>
            <nav aria-label="העמוד">
              <b>האתר</b>
              <a href="#journey">המסע של ליד</a>
              <a href="#findings">מה תגלו</a>
              <a href="#calc">מחשבון</a>
              <a href="#demo">קבעו הדגמה</a>
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

          {/* For Google reviewers — אל תמחקו, ראו הערה בראש הקובץ */}
          <section className="api" lang="en" dir="ltr" aria-labelledby="api-h">
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
          </section>

          <div className="foot__last">
            <span>© 2026 VITAS Digital Marketing</span>
            <span>המספרים בדשבורדים שבאתר לקוחים מפרויקט ההדגמה של Cluzo.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
