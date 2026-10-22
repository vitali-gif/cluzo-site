// הסמל של Cluzo: שתי אונות שנפגשות בנקודה אחת — המקורות שמתחברים למקום אחד.
// זה המוטיב היחיד של העמוד: בגודל ענק בפתיחה ובסגירה, ובנקודה שבמרכז הוא התבליט.
export default function Motif({ className, lobe = 'var(--blue)', dot = 'var(--navy)', title }) {
  return (
    <svg
      className={className}
      viewBox="-6 8 210 216"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path fill={lobe} d="M100 12C119 12 134 27 134 46C134 65 138 75 153 78C160 79 167 77 174 79C192 83 203 99 200 117C198 135 182 148 164 147C146 146 132 132 132 113C132 96 127 86 113 81C107 79 101 80 95 79C77 77 65 62 66 44C67 26 82 12 100 12Z" />
      <path fill={lobe} d="M30 77C49 77 64 92 64 111C64 118 62 124 63 131C65 146 76 153 94 153C113 153 128 167 128 186C128 205 113 220 94 220C75 220 60 205 60 186C60 166 53 155 37 151C30 149 23 150 17 147C1 141-7 124-3 107C1 89 13 77 30 77Z" />
      <circle fill={dot} cx="98" cy="119" r="25" />
    </svg>
  )
}
