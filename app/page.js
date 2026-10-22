// עמוד הבית של reports.vitas.co.il הוא גם העמוד שגוגל בודקת באימות המותג
// (Brand Verification) ובבקשה לרמת Basic של Google Ads API. לכן חייבים להישאר בו:
// השם "Cluzo by Vitas", הלוגו, הסקשן "How we use the Google Ads API" (באנגלית, כמו
// שגוגל קראה אותו), וקישורים ל-vitas.co.il/privacy ול-vitas.co.il/terms.
// icon-512.png שגוגל מכירה נשאר ב-vitas-reports/public/brand/cluzo — לא להזיז.
//
// המבנה והעיצוב: .taste-skill/direction.json (כיוון "One motif" — הסמל של Cluzo הוא המוטיב).
// המספרים בקטעי הדשבורד: app/demo-data.js (פרויקט ההדגמה "אופק ים").
import Motif from './components/Motif'
import HeroPanel from './components/HeroPanel'
import Calculator from './components/Calculator'
import Showcase from './components/Showcase'
import LeadForm from './components/LeadForm'
import Reveal from './components/Reveal'

export const metadata = {
  title: 'Cluzo by Vitas — דשבורד שיווק ומכירות ליזמי נדל״ן',
  description:
    'פייסבוק, גוגל וה-CRM בדשבורד אחד: עלות לליד, לפגישה ולחוזה, זמני תגובה של אנשי המכירות, מקורות הלידים ודוח PDF חודשי. Cluzo by Vitas, מבית VITAS Digital Marketing.',
}

const A = '/site-assets/brand/cluzo'

export default function Home() {
  return (
    <>
      <Reveal />

      {/* ═══ פתיחה: הכרטיס ליד הדשבורד ═══ */}
      <header className="hero" id="top">
        <div className="hero__card">
          <Motif className="hero__motif" />
          <img className="hero__logo" src={`${A}/cluzo-logo-light.svg`} alt="Cluzo by Vitas" width="236" height="83" />
          <div className="hero__body">
            <h1 className="hero__title">תדעו מה מוכר דירות</h1>
            <p className="hero__sub">
              Cluzo מחבר את פייסבוק, גוגל וה-CRM לדשבורד אחד: כמה עלה כל ליד, כל פגישה וכל חוזה, וכמה מהר
              הצוות שלכם חוזר ללידים.
            </p>
            <a className="btn" href="#demo">בקשת הדגמה</a>
          </div>
          <nav className="hero__links" aria-label="ניווט">
            <a href="#features">מה מקבלים</a>
            <a href="#calc">המחשבון</a>
            <a href="#screens">ככה זה נראה</a>
            <a href="/client">כניסה ללקוחות</a>
          </nav>
        </div>
        <div className="hero__room">
          <HeroPanel />
        </div>
      </header>

      <main>
        {/* ═══ מה מפסידים ═══ */}
        <section className="loss" aria-labelledby="loss-h">
          <h2 className="h2" id="loss-h" data-rv>מה הולך לאיבוד כשלא רואים</h2>
          <p className="loss__text" data-rv style={{ '--i': 1 }}>
            ‏19 לידים מפורטל{' '}
            <span className="thumb thumb--chip" data-ui aria-hidden="true"><b>0</b>/19</span>, אף לא אחד רלוונטי. ליד
            משישי{' '}
            <span className="thumb thumb--clock" data-ui aria-hidden="true">14:02</span>{' '}
            שחיכה לראשון. ואיש מכירות{' '}
            <span className="thumb thumb--disc" data-ui aria-hidden="true">מל</span>{' '}
            שחזר כשהלקוח כבר קנה.
          </p>
          <p className="loss__note" data-rv style={{ '--i': 2 }}>
            בדשבורד כל אחד מהם מופיע לבד, עוד באותו שבוע, ולא בסיכום של סוף הרבעון.
          </p>
        </section>

        {/* ═══ מה מקבלים ═══ */}
        <section className="board" id="features" aria-labelledby="features-h">
          <div className="tile tile--head" data-rv>
            <h2 className="h2" id="features-h">מה מקבלים</h2>
          </div>

          <div className="tile tile--dates" data-rv style={{ '--i': 1 }}>
            <div className="mag mag--dates" data-ui aria-hidden="true">
              <span className="chip is-on">החודש</span>
              <span className="chip">חודש קודם</span>
              <span className="chip">רבעון</span>
              <span className="chip">מתחילת השיווק</span>
            </div>
            <div className="tile__cap"><h3>כל טווח תאריכים, מיד</h3><p>שבוע, חודש, רבעון או מתחילת השיווק. בלי לחכות לטעינה.</p></div>
          </div>

          <div className="tile tile--cost" data-rv style={{ '--i': 2 }}>
            <div className="mag mag--cost" data-ui aria-hidden="true">
              <span className="mag__label">עלות לחוזה</span>
              <span className="mag__fig">₪7,825</span>
            </div>
            <div className="tile__cap"><h3>עלות לליד, לפגישה ולחוזה</h3><p>לפי ערוץ, ולא רק מה שפייסבוק מדווח.</p></div>
          </div>

          <div className="tile tile--pdf" data-rv style={{ '--i': 3 }}>
            <div className="mag mag--pdf" data-ui aria-hidden="true">
              <span className="pdf__brand"><Motif className="pdf__mark" /> דוח חודשי</span>
              <span className="pdf__title">אופק ים</span>
              <span className="pdf__row"><span>לידים</span><b>143</b></span>
              <span className="pdf__row"><span>פגישות</span><b>24</b></span>
              <span className="pdf__row"><span>חוזים</span><b>5</b></span>
            </div>
            <div className="tile__cap"><h3>דוח PDF חודשי</h3><p>מוכן להנהלה, לשותפים ולבנק המלווה.</p></div>
          </div>

          <div className="tile tile--sources" data-rv style={{ '--i': 1 }}>
            <div className="mag mag--sources" data-ui aria-hidden="true">
              <span className="src-row"><span className="src">Facebook</span><span className="src">Google Ads</span></span>
              <span className="src-row"><span className="src">BMBY</span><span className="src">Salesforce</span><span className="src">Zoho</span><span className="src">Fireberry</span></span>
            </div>
            <div className="tile__cap"><h3>פייסבוק, גוגל וה-CRM במקום אחד</h3><p>BMBY, ‏Salesforce, ‏Zoho או Fireberry. מתעדכן לבד כמה פעמים ביום.</p></div>
          </div>

          <div className="tile tile--speed" data-rv style={{ '--i': 2 }}>
            <div className="mag mag--speed" data-ui aria-hidden="true">
              <span className="disc">רא</span>
              <span className="mag__fig">37 דק׳</span>
            </div>
            <div className="tile__cap"><h3>זמן תגובה לכל איש מכירות</h3><p>וכמה לידים לא קיבלו מענה בכלל.</p></div>
          </div>

          <div className="tile tile--share" data-rv style={{ '--i': 3 }}>
            <div className="mag mag--share" data-ui aria-hidden="true">
              <span className="share__row"><span>פורטל נדל״ן א׳</span><b>19 לידים</b></span>
              <span className="share__row share__row--zero"><span>רלוונטיים</span><b>0</b></span>
            </div>
            <div className="tile__cap"><h3>מקורות הלידים</h3><p>איזה מקור מביא עסקאות, ואיזה רק כמות.</p></div>
          </div>

          <div className="tile tile--compare" data-rv style={{ '--i': 4 }}>
            <div className="mag mag--compare" data-ui aria-hidden="true">
              <span className="cmp"><span>פגישות</span><b>24</b><em>23 בחודש הקודם</em></span>
              <span className="cmp"><span>עלות לפגישה</span><b>₪1,739</b><em>₪2,393 בחודש הקודם</em></span>
            </div>
            <div className="tile__cap"><h3>השוואה לחודש הקודם</h3><p>כל מספר ליד הקודם שלו, כדי לראות לאן זה הולך.</p></div>
          </div>
        </section>

        {/* ═══ פס הצילום: האתר שכל ליד מיועד לו ═══ */}
        <figure className="band" data-rv>
          <div className="band__frame">
          <img
            src="/site-assets/photos/tel-aviv-crane-tower.jpg"
            alt="מגדל מגורים חדש ועגורן מעל בניין ישן בתל אביב"
            width="1920"
            height="1272"
            loading="lazy"
          />
          </div>
        </figure>

        {/* ═══ המחשבון ═══ */}
        <section className="calc" id="calc" aria-labelledby="calc-h">
          <Calculator
            heading={<h2 className="calc__q" id="calc-h" data-rv>כמה עולה ליד שלא חזרו אליו?</h2>}
            how={
              <p className="calc__how" data-rv style={{ '--i': 2 }}>
                לידים בחודש, כפול האחוז שלא חזרו אליהם בתוך שעה, כפול העלות לליד, כפול 12 חודשים. זה רק כסף
                הפרסום, עוד לפני הדירות שלא נמכרו.
              </p>
            }
          />
        </section>

        {/* ═══ ככה זה נראה ═══ */}
        <section className="screens" id="screens" aria-label="ככה זה נראה בדשבורד">
          <Showcase />
        </section>

        {/* ═══ בקשת הדגמה ═══ */}
        <section className="contact" id="demo" aria-labelledby="demo-h">
          <div className="coupon" data-rv>
            <div className="coupon__side">
              <h2 className="coupon__title" id="demo-h">בקשת<br />הדגמה</h2>
              <p>
                20 דקות על פרויקט ההדגמה, ואחריהן הצעה מותאמת לפרויקט שלכם. בלי מחירון ובלי התחייבות.
              </p>
            </div>
            <LeadForm />
          </div>
        </section>

        {/* ═══ For Google reviewers — אל תמחקו, ראו הערה בראש הקובץ ═══ */}
        <section className="api" lang="en" dir="ltr" aria-labelledby="api-h">
          <h2 className="api__title" id="api-h">How we use the Google Ads API</h2>
          <div className="api__cols">
            <p>
              Cluzo by Vitas is a proprietary reporting dashboard built by VITAS Digital Marketing. It consolidates
              campaign performance data from multiple advertising platforms - including Meta Ads (Facebook / Instagram)
              and Google Ads - into a single, unified interface that agencies and advertisers use to track spend,
              leads, cost-per-lead, and ad creative performance across all their clients and projects in real time.
            </p>
            <p>
              Cluzo by Vitas uses the Google Ads API in <strong>read-only mode</strong> to retrieve campaign, ad group,
              ad, and performance metrics for the Google Ads accounts that our MCC manages. Retrieved data is
              transformed into a common schema - identical to the schema used for Meta Ads data - and stored in a
              Supabase Postgres database. Users of the platform view the data through the web dashboard; the API
              itself is never exposed directly to end users or clients.
            </p>
            <p>
              The API is called either on demand by a logged-in agency employee (via a &quot;Refresh&quot; button) or
              automatically by scheduled jobs a few times a day, so that each client&apos;s report stays current. We
              do not create, modify, pause, or delete campaigns through the API - all campaign management is done by
              our team directly in the Google Ads UI. Refresh tokens are stored as encrypted environment variables in
              Vercel and are never written to source code or logs.
            </p>
          </div>
        </section>
      </main>

      {/* ═══ סגירה: הסמל בגדול ═══ */}
      <footer className="foot">
        <div className="foot__mark">
          <img className="foot__logo" src={`${A}/cluzo-logo-dark.svg`} alt="Cluzo by Vitas" width="1600" height="560" loading="lazy" />
        </div>
        <div className="foot__cols">
          <nav aria-label="העמוד">
            <a href="#features">מה מקבלים</a>
            <a href="#calc">המחשבון</a>
            <a href="#screens">ככה זה נראה</a>
            <a href="#demo">בקשת הדגמה</a>
          </nav>
          <nav aria-label="כניסה">
            <a href="/client">כניסה ללקוחות</a>
            <a href="/admin">כניסת צוות</a>
          </nav>
          <nav aria-label="מסמכים">
            <a href="https://vitas.co.il/privacy">מדיניות פרטיות (Privacy Policy)</a>
            <a href="https://vitas.co.il/terms">תנאי שימוש (Terms of Service)</a>
          </nav>
          <div className="foot__contact">
            <a href="mailto:vitali@vitas.co.il">vitali@vitas.co.il</a>
            <span>Cluzo by Vitas, מבית VITAS Digital Marketing</span>
          </div>
        </div>
        <p className="foot__credits">
          צילום:{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Tel_aviv_landscape_crane_construction_site_public_domain_16.jpg">Tel aviv landscape crane construction site 16</a>
          , Equalhuman,{' '}
          <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.en">CC0</a>, דרך Wikimedia Commons.
        </p>
        <div className="foot__last">
          <span>© 2026 VITAS Digital Marketing</span>
          <a className="btn btn--sm" href="#demo">בקשת הדגמה</a>
        </div>
      </footer>
    </>
  )
}
