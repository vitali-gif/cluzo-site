/** @type {import('next').NextConfig} */

// האתר מוגש בכתובת reports.vitas.co.il דרך rewrite מהמאגר vitas-reports
// (Next.js multi-zones). שם, /_next/* שייך לדשבורד — לכן כל הנכסים של האתר
// יושבים תחת /site-assets: קבצי ה-JS/CSS דרך assetPrefix (/site-assets/app),
// והתמונות ב-public/site-assets. ה-rewrite למטה מחזיר את /site-assets/app/_next/*
// ל-/_next/* כשהאתר רץ לבד (בכתובת של Vercel או מקומית).
// assetPrefix לא יכול להיות /site-assets עצמו: Next תופס כל נתיב שמתחיל בו,
// והתמונות מ-public מקבלות 404.
// ⚠️ לשנות את השם site-assets רק יחד עם ה-rewrite ב-vitas-reports/next.config.js.
const ASSET_PREFIX = '/site-assets/app'

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
]

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: ASSET_PREFIX,
  async rewrites() {
    return {
      beforeFiles: [
        { source: `${ASSET_PREFIX}/_next/:path+`, destination: '/_next/:path+' },
      ],
    }
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

module.exports = nextConfig
