import './globals.css'

export const metadata = {
  title: 'Cluzo by Vitas',
  description: 'Cluzo by Vitas — marketing performance dashboard by VITAS Digital Marketing.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta name="theme-color" content="#14243C" />
        {/* בכתובת reports.vitas.co.il הקבצים האלה מוגשים מ-vitas-reports; עותק כאן לריצה עצמאית. */}
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
