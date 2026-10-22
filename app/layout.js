import './site.css'

export const metadata = {
  title: 'Cluzo by Vitas',
  description: 'Cluzo by Vitas — marketing performance dashboard by VITAS Digital Marketing.',
}

export const viewport = { themeColor: '#14243C', width: 'device-width', initialScale: 1, viewportFit: 'cover' }

// מסמן לפני הציור הראשון שיש סקריפט, כדי שהכניסות לא יהבהבו. אם React לא עולה תוך 2.5 שניות — הכל נחשף.
const rvBoot = `document.documentElement.classList.add('js');setTimeout(function(){if(!window.__rv)document.documentElement.classList.add('rv-done')},2500)`

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <script dangerouslySetInnerHTML={{ __html: rvBoot }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;800&display=swap" rel="stylesheet" />
        {/* בכתובת reports.vitas.co.il הקבצים האלה מוגשים מ-vitas-reports; עותק כאן לריצה עצמאית. */}
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
