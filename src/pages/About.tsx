import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Design tokens (kept local so nothing here fights your global CSS)  */
/* ------------------------------------------------------------------ */
const C = {
  ink: '#302B2B',
  leaf: '#568E49',
  leafDeep: '#3F6F35', // darker green for small text
  body: '#4A4545',
  muted: '#6B6565',
  rule: '#E3DFD5',
}

const displayFont = '"Fraunces", Georgia, "Times New Roman", serif'

const display = {
  fontFamily: displayFont,
  fontWeight: 500,
  color: C.ink,
}

const stats = [
  { value: '15+', label: 'Years in the industry' },
  { value: '3', label: 'Markets served' },
  { value: '10+', label: 'Product categories sourced' },
]

/* ------------------------------------------------------------------ */
/*  ScrollReveal: words go from pale grey to ink as you scroll past    */
/* ------------------------------------------------------------------ */
const REVEAL_FROM = [216, 212, 206] // pale warm grey
const REVEAL_TO = [48, 43, 43] // C.ink (#302B2B)

function ScrollReveal({ text, className = '', style }) {
  const ref = useRef(null)
  const words = text.trim().split(/\s+/)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const spans = Array.from(el.querySelectorAll('[data-word]'))
    const n = spans.length
    const paint = (p) => {
      spans.forEach((span, i) => {
        // each word lights up slightly after the one before it
        const t = Math.min(1, Math.max(0, (p - (i / n) * 0.8) / 0.2))
        const c = REVEAL_FROM.map((from, k) => Math.round(from + (REVEAL_TO[k] - from) * t))
        span.style.color = `rgb(${c[0]}, ${c[1]}, ${c[2]})`
      })
    }

    // Respect reduced-motion: show the finished, dark text straight away
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      paint(1)
      return
    }

    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when the text enters at ~88% of the screen height,
      // 1 when its bottom edge reaches ~55% of the screen height
      const p = (vh * 0.88 - rect.top) / (vh * 0.33 + rect.height)
      paint(Math.min(1, Math.max(0, p)))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [text])

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} data-word style={{ color: `rgb(${REVEAL_FROM.join(', ')})` }}>
          {w}{' '}
        </span>
      ))}
    </p>
  )
}

const missionPoints = [
  'Reliable sourcing at competitive prices',
  'Factory compliance and quality control',
  'Transparent, dependable order execution',
  'Long-term relationships with every buyer',
]

const visionPoints = [
  'The trusted choice for international buyers',
  'Quality and compliance at every stage',
  'A strong network of manufacturing partners',
  'Responsive service, from sample to shipment',
]

function CheckList({ items }) {
  return (
    <ul className="m-0 p-0 list-none grid gap-3" style={{ marginTop: '1.5rem' }}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 font-body" style={{ color: C.ink, fontWeight: 500, fontSize: '0.9375rem', lineHeight: 1.4 }}>
          <span
            aria-hidden="true"
            className="flex items-center justify-center shrink-0"
            style={{ width: 24, height: 24, borderRadius: 999, backgroundColor: 'rgba(86,142,73,0.14)', color: C.leafDeep }}
          >
            <Check size={14} strokeWidth={2.5} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

// Image with a soft green panel offset behind it (panel = which side it peeks out on)
function ImageFrame({ src, alt, panel = 'left' }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute"
        style={{ width: '62%', height: '62%', bottom: -16, [panel]: -16, borderRadius: 28, backgroundColor: 'rgba(86,142,73,0.16)' }}
      />
      <div className="relative w-full overflow-hidden aspect-[4/3]" style={{ borderRadius: 24, backgroundColor: C.rule }}>
        <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>
    </div>
  )
}

const blockTitle = {
  ...display,
  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
  letterSpacing: '-0.025em',
  lineHeight: 1.1,
  margin: 0,
}

const blockText = {
  color: C.body,
  fontSize: '0.9375rem',
  lineHeight: 1.7,
  margin: '1rem 0 0',
  maxWidth: '52ch',
}

export default function About() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section
        className="relative overflow-hidden w-full pt-[96px] lg:pt-[128px] pb-14 lg:pb-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        {/* Soft green glow behind the headline, same treatment as the home hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 bottom-0"
          style={{
            top: 130, /* starts below the navbar */
            background:
              'radial-gradient(ellipse 48% 52% at 24% 46%, rgba(86,142,73,0.17) 0%, rgba(86,142,73,0.08) 45%, rgba(86,142,73,0) 75%)',
          }}
        />
        <div className="container-wide relative">
          {/* Row 1: headline + intro. The intro starts on the same column line as the small image below it. */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-8 items-end">
            <h1
              className="lg:col-span-8"
              style={{
                ...display,
                fontOpticalSizing: 'auto',
                textTransform: 'uppercase',
                letterSpacing: '-0.04em',
                lineHeight: 0.92,
                fontSize: 'clamp(3rem, 8.2vw, 7.75rem)',
                margin: 0,
              }}
            >
              About <span style={{ color: C.leaf }}>us</span>
            </h1>

            <div className="lg:col-span-4 lg:pb-3">
              <p
                className="font-body font-semibold"
                style={{ color: C.leafDeep, fontSize: '0.9375rem', lineHeight: 1.4, margin: 0 }}
              >
                Textile sourcing &amp; quality partner
              </p>
              <p
                className="font-body"
                style={{ color: C.body, fontSize: '0.9375rem', lineHeight: 1.65, margin: '0.75rem 0 0', maxWidth: '44ch' }}
              >
                15+ years connecting global buyers with trusted manufacturing partners
                across Pakistan, from first sample to final shipment.
              </p>
            </div>
          </div>

          {/* Row 2: wide image + tall image with the promise. Shared top and bottom edges. */}
          <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-8">
              <div
                className="w-full overflow-hidden aspect-[4/3] lg:aspect-[12/5]"
                style={{ borderRadius: 24 }}
              >
                <img
                  src="/about-hero1.jpg"
                  alt="Texworld Asia sourcing and production partner"
                  className="w-full h-full object-cover"
                  decoding="async"
                />
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-5">
              <div
                className="relative w-full flex-1 overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[200px]"
                style={{ borderRadius: 16 }}
              >
                <img
                  src="/about-hero2.jpg"
                  alt="Texworld Asia quality inspection detail"
                  className="absolute inset-0 w-full h-full object-cover"
                  decoding="async"
                />
              </div>
              <div>
                <p
                  style={{
                    ...display,
                    fontSize: '1.25rem', lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  Our promise
                </p>
                <p
                  className="font-body"
                  style={{ color: C.body, fontSize: '0.875rem', lineHeight: 1.6, margin: '0.5rem 0 0', maxWidth: '42ch' }}
                >
                  We build every partnership on transparency, quality, and dependable
                  execution, for every order, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SHORT INTRO + STATS                                          */}
      {/* ============================================================ */}
      <section id="intro" className="w-full py-12 lg:py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-wide">
          <ScrollReveal
            className="font-body mx-auto text-center"
            style={{
              fontWeight: 500,
              fontSize: 'clamp(1.25rem, 2.1vw, 1.875rem)',
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              maxWidth: '52rem',
              margin: '0 auto',
            }}
            text="Texworld Asia is a reliable firm in sourcing, product development, business development, order execution, factory compliance, and third-party inspections in Pakistan. With more than 15 years in the field, we serve importers and retailers across the US, Canada and Europe."
          />

          <div className="mt-8 lg:mt-10 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-8 text-center" style={{ maxWidth: '60rem' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    ...display,
                    fontSize: 'clamp(1.875rem, 3vw, 2.5rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {s.value}
                </p>
                <p
                  className="font-body"
                  style={{ color: C.body, fontWeight: 500, fontSize: '0.875rem', lineHeight: 1.4, marginTop: '0.5rem' }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  MISSION + VISION                                             */}
      {/* ============================================================ */}
      <section id="mission-vision" className="w-full overflow-hidden py-16 lg:py-24" style={{ backgroundColor: '#F6F4EE' }}>
        <div className="container-wide">
          {/* Mission: image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 items-center">
            <div className="lg:col-span-6">
              <ImageFrame src="/mission.jpg" alt="Texworld Asia mission" panel="left" />
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <h2 style={blockTitle}>Our mission</h2>
              <p className="font-body" style={blockText}>
                To connect international buyers with reliable manufacturing partners in
                Pakistan, delivering quality textile products at competitive prices and on
                time. Through transparent sourcing, product development, factory compliance
                and third-party inspection, we make every order dependable from the first
                sample to the final shipment.
              </p>
              <CheckList items={missionPoints} />
            </div>
          </div>

          {/* Vision: text left, image right */}
          <div className="mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 items-center">
            <div className="lg:col-span-5">
              <h2 style={blockTitle}>Our vision</h2>
              <p className="font-body" style={blockText}>
                To be the most trusted sourcing and quality partner for international textile
                buyers, known for dependable execution and the confidence of every buyer we
                serve. We aim to grow alongside our clients, building a supply chain that
                stays efficient, compliant and responsive as their business grows.
              </p>
              <CheckList items={visionPoints} />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ImageFrame src="/vission.jpg" alt="Texworld Asia vision" panel="right" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}