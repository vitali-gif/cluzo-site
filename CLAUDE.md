# Cluzo site

האתר השיווקי של Cluzo by Vitas. מוגש בכתובת **https://reports.vitas.co.il/** (עמוד הבית),
דרך rewrite במאגר `vitas-reports` (משתנה `CLUZO_SITE_URL` ב-Vercel של הדשבורד). הדשבורד עצמו
(/admin, /client, /api) נשאר ב-`vitas-reports` — לא נוגעים בו מכאן.

Next.js 14 (App Router), בלי בסיס נתונים ובלי סודות בקוד.

## כללים

1. **עובדים רק על ענפים.** לא נוגעים ב-`main` ולא מעלים לפרודקשן בלי אישור מפורש של ויטלי.
2. **`npm run build` לפני כל דחיפה.**
3. **נכסים רק תחת `/site-assets`.** בכתובת האמיתית `/_next` שייך לדשבורד, ולכן:
   - קבצי JS/CSS מגיעים דרך `assetPrefix: '/site-assets/app'` (`next.config.js`)
   - תמונות, לוגואים וצילומי מסך נשמרים ב-`public/site-assets/` ומקושרים כ-`/site-assets/...`
   - קישור ל-`/logo.svg` או לכל נתיב אחר מחוץ ל-`/site-assets` יעבוד מקומית וישבר בפרודקשן.
4. **העמוד הוא גם העמוד שגוגל בודקת** (אימות מותג + Google Ads API). חייבים להישאר בו:
   השם "Cluzo by Vitas", הלוגו, ההסבר "How we use the Google Ads API", וקישורים ל-
   https://vitas.co.il/privacy ול-https://vitas.co.il/terms. `icon-512.png` שגוגל מכירה נשאר ב-vitas-reports.

## סקילים

ב-`.claude/skills` (הותקנו עם `npx skills add`, ראה `skills-lock.json`): Emil Kowalski, Impeccable, Taste.
ה-hooks של Impeccable כבויים — לא להדליק (`/impeccable hooks on`) בלי אישור.
