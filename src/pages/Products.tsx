import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, X } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type ProductCard = {
  category: string
  title: string
  description: string
  src: string
}

const products: ProductCard[] = [
  {
    category: 'Bed Linen',
    title: 'Comfort Woven Into Every Thread.',
    description:
      'Percale and sateen weaves across a full range of thread counts — duvet covers, flat and fitted sheets, and pillowcases engineered for consistent hand-feel at scale.',
    src: '/bedcard.jpg',
  },
  {
    category: 'Towels & Bathrobes',
    title: 'Softness That Lasts Wash After Wash.',
    description:
      'Combed and ring-spun cotton terry in a range of GSM weights, finished for absorbency and colorfastness through repeated commercial laundering.',
    src: '/bathcard.jpg',
  },
  {
    category: 'Curtains & Window Treatments',
    title: 'Light, Shade, and Style in Balance.',
    description:
      'Blackout, sheer, and mid-weight drapery fabrics sourced and finished to meet drape, flame-retardancy, and colorfastness specifications.',
    src: '/curtaincard.jpg',
  },
  {
    category: 'Hospitality Textiles',
    title: 'Built for Hotels. Trusted by Guests.',
    description:
      'Durable, guest-ready linens and soft furnishings sourced to hospitality-grade specifications for consistent quality across large orders.',
    src: '/hospitalitycard.jpg',
  },
  {
    category: 'Healthcare Textiles',
    title: 'Hygiene-First Textiles for Critical Care.',
    description:
      'Fabrics and finished goods sourced to meet hygiene, durability, and repeated high-temperature laundering requirements for clinical environments.',
    src: '/healthcare.jpg',
  },
  {
    category: 'Shower Curtains',
    title: 'Everyday Essentials, Elevated.',
    description:
      'Water-resistant and easy-care fabrics in a range of weights and finishes, sourced for both residential and hospitality use.',
    src: '/scurtaincard.jpg',
  },
  {
    category: 'Bags',
    title: 'Functional Carry, Thoughtfully Made.',
    description:
      'Canvas, cotton, and blended-fabric bags sourced to spec — from retail totes to promotional and private-label programs.',
    src: '/bagcard.jpg',
  },
  {
    category: 'Kitchen & Table Linens',
    title: 'Set the Table With Confidence.',
    description:
      'Tablecloths, napkins, aprons, and kitchen towels in durable, food-safe fabrics finished for frequent washing.',
    src: '/kitchencard.jpg',
  },
  {
    category: 'Tier & Valance',
    title: 'Framing Every Window With Detail.',
    description:
      'Tiered curtains and valances finished with precise hems and headers, sourced for both residential and hospitality window programs.',
    src: '/tier n valance card.jpg',
  },
  {
    category: 'Apparel & Garments',
    title: 'Apparel Sourced to Spec.',
    description:
      'Woven and knit apparel programs managed end-to-end — fabric sourcing, product development, and factory compliance under one roof.',
    src: '/appearelcard.png',
  },
]

const HEADING_WORDS = 'Ten categories. One trusted sourcing partner.'.split(' ')

type CardRefs = {
  card: HTMLButtonElement | null
  wrap: HTMLDivElement | null
  img: HTMLImageElement | null
  accent: HTMLSpanElement | null
  category: HTMLSpanElement | null
  title: HTMLSpanElement | null
}

export default function Products() {
  const gridSectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ruleRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<CardRefs[]>(
    products.map(() => ({ card: null, wrap: null, img: null, accent: null, category: null, title: null }))
  )

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Modal keyboard + scroll lock
  useEffect(() => {
    if (activeIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  // Premium motion: entrance reveals, heading stagger
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const wordEls = headingRef.current
        ? Array.from(headingRef.current.querySelectorAll<HTMLSpanElement>('[data-word]'))
        : []

      if (wordEls.length) {
        gsap.set(wordEls, { yPercent: 110, opacity: 0 })
      }
      if (subRef.current) gsap.set(subRef.current, { y: 12, opacity: 0 })
      if (ruleRef.current) gsap.set(ruleRef.current, { scaleX: 0 })

      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: gridSectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })

      if (wordEls.length) {
        headingTl.to(wordEls, {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.05,
        })
      }
      if (ruleRef.current) {
        headingTl.to(ruleRef.current, { scaleX: 1, duration: 0.6, ease: 'power2.out' }, '-=0.35')
      }
      if (subRef.current) {
        headingTl.to(subRef.current, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      }

      cardRefs.current.forEach((refs) => {
        const { card, wrap, img, accent, category, title } = refs
        if (!card || !wrap || !img) return

        gsap.set(wrap, { clipPath: 'inset(0% 0% 0% 100%)' })
        gsap.set(img, { scale: 1.18, transformOrigin: 'center center' })
        if (accent) gsap.set(accent, { scaleX: 0 })
        if (category) gsap.set(category, { y: 14, opacity: 0 })
        if (title) gsap.set(title, { y: 18, opacity: 0 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true,
          },
        })

        tl.to(wrap, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power3.out' }, 0)
          .to(
            img,
            {
              scale: 1,
              duration: 1.3,
              ease: 'power3.out',
              onComplete: () => gsap.set(img, { clearProps: 'transform' }),
            },
            0
          )
          .to(accent ?? [], { scaleX: 1, duration: 0.5, ease: 'power2.out' }, 0.45)
          .to(category ?? [], { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 0.5)
          .to(title ?? [], { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.58)
      })
    }, gridSectionRef)

    return () => ctx.revert()
  }, [])

  const setCardRef = (index: number, key: keyof CardRefs) => (el: any) => {
    cardRefs.current[index][key] = el
  }

  const active = activeIndex !== null ? products[activeIndex] : null

  return (
    <>
      <section className="w-full pt-[88px] lg:pt-[120px] pb-12 lg:pb-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-end mb-12 lg:mb-16">
            <div className="lg:col-span-7">
              <h1
                className="leading-none"
                style={{
                  fontFamily: '"Fraunces", Georgia, "Times New Roman", serif',
                  fontWeight: 500,
                  letterSpacing: '-2px',
                  lineHeight: 0.94,
                  fontSize: 'clamp(38px, 6.5vw, 96px)',
                }}
              >
                <span className="hero-word" style={{ color: '#302B2B', display: 'block', animationDelay: '0ms' }}>OUR</span>
                <span className="hero-word" style={{ color: '#568E49', display: 'block', animationDelay: '120ms' }}>PRODUCTS</span>
              </h1>
            </div>

            <div className="lg:col-span-5 lg:pb-2 hero-word" style={{ animationDelay: '240ms' }}>
              <h2
                style={{
                  fontFamily: '"Fraunces", Georgia, serif',
                  fontWeight: 500,
                  color: '#1B4332',
                  fontSize: '1.2rem',
                  marginBottom: '12px',
                }}
              >
                Sourced across every category
              </h2>
              <p className="font-body text-text-secondary" style={{ fontSize: '0.9375rem', lineHeight: 1.65, maxWidth: '38ch' }}>
                From bed and bath to curtains, kitchen textiles, and
                institutional supply, explore what we manufacture, inspect,
                and ship worldwide.
              </p>

              <Link to="/contact" className="products-btn">
                Request a Quote
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </div>
          </div>

          <div className="hero-shot-row">
            {[
              { src: '/slide1.jpg', alt: 'Raw cotton and thread' },
              { src: '/slide3.jpg', alt: 'Factory floor production' },
              { src: '/slide4.jpg', alt: 'Finished textile goods' },
            ].map((shot, i) => (
              <div key={shot.src} className="hero-shot hero-word" style={{ animationDelay: `${360 + i * 120}ms` }}>
                <div className="hero-shot__frame">
                  <img src={shot.src} alt={shot.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .products-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 24px;
            background: #111111;
            color: #FFFFFF;
            font-family: "Helvetica Neue", Arial, "Segoe UI", sans-serif;
            font-weight: 600;
            font-size: 0.8125rem;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            text-decoration: none;
            padding: 14px 30px;
            border-radius: 999px;
            transition: background-color 200ms ease, transform 200ms ease;
            white-space: nowrap;
          }
          .products-btn:hover {
            background: #000000;
            transform: scale(1.03);
          }

          @keyframes heroRise {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .hero-word {
            animation: heroRise 760ms cubic-bezier(.16,1,.3,1) both;
          }

          .hero-shot-row {
            display: grid;
            grid-template-columns: 1fr 1.33fr 1.78fr;
            gap: 24px;
          }
          .hero-shot {
            min-width: 0;
          }
          .hero-shot__frame {
            height: 320px;
            width: 100%;
            border-radius: 20px;
            overflow: hidden;
            background: #F0F0EC;
          }
          .hero-shot__frame img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
          @media (max-width: 767px) {
            .hero-shot-row {
              grid-template-columns: 1fr;
              gap: 16px;
            }
            .hero-shot__frame {
              height: 220px;
            }
          }
          @media (min-width: 768px) and (max-width: 1023px) {
            .hero-shot__frame {
              height: 240px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-word {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>
      </section>

      <section
        id="products"
        ref={gridSectionRef}
        className="relative w-full overflow-hidden bg-white"
        style={{ paddingTop: '40px', paddingBottom: '72px' }}
        aria-label="Explore our products"
      >
        <style>{`
          @keyframes productAmbientDrift {
            0% { background-position: 0% 50%, 100% 30%; }
            50% { background-position: 100% 60%, 0% 40%; }
            100% { background-position: 0% 50%, 100% 30%; }
          }
          .product-ambient {
            background-image:
              radial-gradient(55% 50% at 20% 25%, rgba(247, 249, 246, 0.18), transparent 70%),
              radial-gradient(50% 45% at 85% 75%, rgba(247, 249, 246, 0.12), transparent 70%);
            background-size: 200% 200%, 200% 200%;
            animation: productAmbientDrift 26s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .product-ambient { animation: none; }
          }

          .word-mask { display: inline-block; overflow: hidden; vertical-align: top; }
          .word-inner { display: inline-block; will-change: transform; }

          .product-card {
            transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
          }
          .product-card:hover,
          .product-card:focus-within {
            transform: translateY(-10px);
          }
          .product-card-image {
            transition: transform 550ms cubic-bezier(0.22, 1, 0.36, 1);
          }
          .product-card:hover .product-card-image,
          .product-card:focus-within .product-card-image {
            transform: scale(1.1);
          }
          .product-card-overlay {
            transition: opacity 350ms ease;
            opacity: 0.85;
          }
          .product-card:hover .product-card-overlay,
          .product-card:focus-within .product-card-overlay {
            opacity: 1;
          }
          .product-card-accent {
            transform-origin: left;
          }
          .product-card-title {
            transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
            display: inline-block;
          }
          .product-card:hover .product-card-title,
          .product-card:focus-within .product-card-title {
            transform: translateY(-4px);
          }
          .product-card-arrow {
            opacity: 0;
            transform: translateX(-4px);
            transition: opacity 300ms ease, transform 300ms ease;
          }
          .product-card:hover .product-card-arrow,
          .product-card:focus-within .product-card-arrow {
            opacity: 1;
            transform: translateX(0);
          }

          @media (prefers-reduced-motion: reduce) {
            .product-card, .product-card-image, .product-card-overlay,
            .product-card-title, .product-card-arrow {
              transition: none !important;
            }
            .product-card:hover, .product-card:focus-within { transform: none; }
            .product-card:hover .product-card-image,
            .product-card:focus-within .product-card-image { transform: none; }
            .product-card:hover .product-card-title,
            .product-card:focus-within .product-card-title { transform: none; }
          }
        `}</style>

        <div
          aria-hidden="true"
          className="product-ambient pointer-events-none absolute inset-0 z-0"
        />

        <div
          className="relative z-10 mx-auto w-full max-w-[1440px]"
          style={{ paddingLeft: 'clamp(20px, 4vw, 48px)', paddingRight: 'clamp(20px, 4vw, 48px)' }}
        >
          <p
            className="mb-3"
            style={{
              fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#568E49',
            }}
          >
            Explore Our Products
          </p>

          <h2
            ref={headingRef}
            style={{
              fontFamily: '"Fraunces", Georgia, "Times New Roman", serif',
              fontWeight: 500,
              fontSize: 'clamp(28px, 3.4vw, 42px)',
              lineHeight: 1.25,
              color: '#302B2B',
              maxWidth: '26ch',
            }}
          >
            {HEADING_WORDS.map((word, i) => (
              <span key={i} className="word-mask">
                <span className="word-inner" data-word>
                  {word}
                </span>
                {i < HEADING_WORDS.length - 1 ? ' ' : ''}
              </span>
            ))}
          </h2>

          <div
            ref={ruleRef}
            style={{
              width: '48px',
              height: '2px',
              backgroundColor: '#8FBF7A',
              marginTop: '18px',
              marginBottom: '14px',
            }}
          />

          <p
            ref={subRef}
            style={{
              fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif',
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#4B5350',
              maxWidth: '52ch',
            }}
          >
            Ten product categories sourced, developed, and shipped to specification for buyers across the US, Canada, and Europe.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((card, index) => (
              <button
                type="button"
                key={card.category}
                ref={setCardRef(index, 'card')}
                onClick={() => setActiveIndex(index)}
                className="product-card group relative w-full overflow-hidden text-left rounded-2xl"
                style={{ aspectRatio: '3 / 4' }}
              >
                <div
                  ref={setCardRef(index, 'wrap')}
                  className="absolute inset-0"
                  style={{ willChange: 'transform, clip-path' }}
                >
                  <img
                    ref={setCardRef(index, 'img')}
                    src={card.src}
                    alt=""
                    className="product-card-image absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  className="product-card-overlay pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 45%, transparent 70%)',
                  }}
                />
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <span
                    ref={setCardRef(index, 'accent')}
                    className="product-card-accent"
                    style={{
                      display: 'block',
                      height: '2px',
                      width: '32px',
                      backgroundColor: '#8FBF7A',
                      marginBottom: '10px',
                    }}
                  />
                  <span
                    ref={setCardRef(index, 'category')}
                    style={{
                      fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#E5EBDD',
                    }}
                  >
                    {card.category}
                  </span>
                  <span className="mt-2 flex items-end justify-between gap-3">
                    <span
                      ref={setCardRef(index, 'title')}
                      className="product-card-title"
                      style={{
                        fontFamily: '"Fraunces", Georgia, "Times New Roman", serif',
                        fontSize: '20px',
                        fontWeight: 500,
                        lineHeight: 1.15,
                        color: '#FFFFFF',
                      }}
                    >
                      {card.title}
                    </span>
                    <span className="product-card-arrow shrink-0" style={{ color: '#FFFFFF' }}>
                      <ChevronRight size={18} strokeWidth={2} />
                    </span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {active && (
          <div
            className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <div
              className="fixed inset-0 bg-black/70"
              onClick={() => setActiveIndex(null)}
              aria-hidden="true"
            />
            <div
              className="relative z-10 mt-6 w-full max-w-2xl bg-white p-6 sm:mt-16 sm:p-10"
              style={{ borderRadius: 0 }}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setActiveIndex(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '32px',
                  height: '32px',
                  minWidth: '32px',
                  minHeight: '32px',
                  padding: 0,
                  margin: 0,
                  borderRadius: '9999px',
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  lineHeight: 0,
                }}
              >
                <X size={16} strokeWidth={2} />
              </button>

              <div className="w-full" style={{ aspectRatio: '4 / 3' }}>
                <img src={active.src} alt="" className="h-full w-full object-cover" />
              </div>

              <p
                className="mt-6"
                style={{
                  fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#568E49',
                }}
              >
                {active.category}
              </p>
              <h3
                className="mt-2"
                style={{
                  fontFamily: '"Fraunces", Georgia, "Times New Roman", serif',
                  fontWeight: 500,
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  lineHeight: 1.15,
                  color: '#302B2B',
                }}
              >
                {active.title}
              </h3>
              <p
                className="mt-4"
                style={{
                  fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: '#4B5350',
                  maxWidth: '60ch',
                }}
              >
                {active.description}
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  )
}