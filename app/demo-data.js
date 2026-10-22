// מספרים מפרויקט ההדגמה "אופק ים" (vitas-reports/lib/demo-dataset.js), כפי שהדשבורד מציג אותם.
// אלה נתוני הדגמה קבועים, לא נתונים של לקוח אמיתי. אם הדאטהסט שם משתנה — לעדכן גם כאן.
// "בתשלום" = פייסבוק + גוגל (הערוצים שיש להם הוצאת פרסום).

export const PERIODS = [
  {
    id: 'current', label: 'החודש',
    spend: 31300, leads: 143, relevant: 103, meetings: 24, contracts: 5,
    paidLeads: 99, paidMeetings: 18, paidContracts: 4,
    perLead: 316, perMeeting: 1739, perContract: 7825,
    medianResponse: 98, noResponse: 16,
  },
  {
    id: 'previous', label: 'חודש קודם',
    spend: 35900, leads: 168, relevant: 116, meetings: 23, contracts: 5,
    paidLeads: 116, paidMeetings: 15, paidContracts: 4,
    perLead: 309, perMeeting: 2393, perContract: 8975,
    medianResponse: 87, noResponse: 25,
  },
  {
    id: 'q2', label: 'רבעון 2',
    spend: 103900, leads: 489, relevant: 342, meetings: 73, contracts: 15,
    paidLeads: 337, paidMeetings: 58, paidContracts: 13,
    perLead: 308, perMeeting: 1791, perContract: 7992,
    medianResponse: 82, noResponse: 68,
  },
]

// החודש הנוכחי, לפי ערוץ. עלויות = הוצאה ÷ כמות.
export const CHANNELS = [
  { name: 'פייסבוק', spend: 18400, leads: 60, meetings: 12, contracts: 3 },
  { name: 'גוגל', spend: 12900, leads: 39, meetings: 6, contracts: 1 },
]

// זמן מהכניסה של הליד ועד הפנייה הראשונה, ומה יצא מזה (החודש הנוכחי).
export const RESPONSE_BUCKETS = [
  { label: 'עד 15 דק׳', leads: 18, meetings: 11 },
  { label: '15–60 דק׳', leads: 33, meetings: 19 },
  { label: '1–4 שעות', leads: 42, meetings: 4 },
  { label: '4–8 שעות', leads: 18, meetings: 0 },
  { label: 'יותר מ-8 שעות', leads: 16, meetings: 0 },
]

export const SOURCES = [
  { name: 'פייסבוק', leads: 60, relevant: 48, meetings: 12, contracts: 3 },
  { name: 'גוגל', leads: 39, relevant: 34, meetings: 6, contracts: 1 },
  { name: 'פורטל נדל״ן א׳', leads: 19, relevant: 0, meetings: 0, contracts: 0 },
  { name: 'אתר הפרויקט', leads: 11, relevant: 10, meetings: 2, contracts: 0 },
  { name: 'המלצה מלקוח', leads: 7, relevant: 7, meetings: 3, contracts: 0 },
  { name: 'פורטל נדל״ן ב׳', leads: 4, relevant: 1, meetings: 1, contracts: 1 },
  { name: 'מוקד טלפוני', leads: 3, relevant: 3, meetings: 0, contracts: 0 },
]

// חציון זמן התגובה לכל איש מכירות (בדקות) וכמה לידים טיפל.
export const REPS = [
  { name: 'רונית אלמוג', initials: 'רא', median: 37, leads: 36 },
  { name: 'איתן קורן', initials: 'אק', median: 69, leads: 23 },
  { name: 'דורון שביט', initials: 'דש', median: 98, leads: 27 },
  { name: 'שירה בן־ארי', initials: 'שב', median: 175, leads: 16 },
  { name: 'מאיה לביא', initials: 'מל', median: 224, leads: 25 },
]

export const ils = (n) => '₪' + Math.round(n).toLocaleString('en-US')
export const num = (n) => Math.round(n).toLocaleString('en-US')
