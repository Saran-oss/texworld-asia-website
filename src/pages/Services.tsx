import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

type Service = {
  title: string
  text: string
  span: string
  variant: 'light' | 'dark'
  size?: 'lg'
}

const services: Service[] = [
  {
    title: 'Textile Sourcing',
    text: 'Sourcing takes deep knowledge of the industry. We identify the right suppliers, negotiate price and terms, and manage procurement start to finish, so your business grows on solid ground.',
    span: 'lg:col-span-7',
    variant: 'light',
    size: 'lg',
  },
  {
    title: 'Third-Party Inspection',
    text: 'We examine fabrics and finished goods at every stage of production, raw material, pre-production, in-process, and final, to catch defects before they reach you.',
    span: 'lg:col-span-5',
    variant: 'light',
  },
  {
    title: 'Brand Development',
    text: 'Over a decade building brands across home textiles, towels, socks, and institutional apparel, from first sketch through execution and compliance.',
    span: 'lg:col-span-4',
    variant: 'light',
  },
  {
    title: 'Product Development',
    text: 'We turn concepts into market-ready samples and bulk production, managing raw material selection through final specs so your vision arrives intact.',
    span: 'lg:col-span-4',
    variant: 'light',
  },
  {
    title: 'Order Execution',
    text: 'From purchase order to final shipment, we handle documentation, production follow-up, quality checks, and logistics, so every order lands on time.',
    span: 'lg:col-span-4',
    variant: 'light',
  },
  {
    title: 'Factory Compliance',
    text: 'We audit factories against international social, ethical, and quality standards, so you know exactly who you are working with before the first order.',
    span: 'lg:col-span-12',
    variant: 'dark',
  },
]

function handleCardMove(e: MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  el.style.setProperty('--mx', `${x}%`)
  el.style.setProperty('--my', `${y}%`)
}

export default function Services() {
  const gridRef = useRef<HTMLDivElement | null>(null)
  const [gridVisible, setGridVisible] = useState(false)

  useEffect(() => {
    const node = gridRef.current
    if (!node) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setGridVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setGridVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.12 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="w-full pt-[88px] lg:pt-[120px] pb-16 lg:pb-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-end mb-12 lg:mb-16">
            <div className="lg:col-span-7">
              <h1 className="leading-none" style={{ fontFamily: '"Fraunces", Georgia, "Times New Roman", serif', fontWeight: 500, letterSpacing: '-2px', lineHeight: 0.94, fontSize: 'clamp(38px, 6.5vw, 96px)' }}>
                <span className="hero-word" style={{ color: '#302B2B', display: 'block', animationDelay: '0ms' }}>OUR</span>
                <span className="hero-word" style={{ color: '#568E49', display: 'block', animationDelay: '120ms' }}>SERVICES</span>
              </h1>
            </div>

            <div className="lg:col-span-5 lg:pb-2 hero-word" style={{ animationDelay: '240ms' }}>
              <h2 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 500, color: '#1B4332', fontSize: '1.2rem', marginBottom: '12px' }}>
                Comprehensive Textile Solutions
              </h2>
              <p className="font-body text-text-secondary" style={{ fontSize: '0.9375rem', lineHeight: 1.65, maxWidth: '36ch' }}>
                From sourcing to supply, we offer end-to-end textile services
                to meet your business needs with quality, reliability, and
                care.
              </p>

              <Link to="/contact" className="services-btn">
                Contact Us
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </div>
          </div>

          <div className="hero-word" style={{ animationDelay: '360ms' }}>
            <div style={{ maxHeight: '500px', borderRadius: '20px', overflow: 'hidden' }}>
              <img
                src="/mission.jpg"
                alt="Texworld Asia mission"
                className="w-full"
                style={{ height: '100%', maxHeight: '500px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 lg:py-28" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-12 mb-14 lg:mb-16">
            <div className="lg:col-span-7">
              <h2
                style={{
                  fontFamily: '"Fraunces", Georgia, serif',
                  fontWeight: 500,
                  color: '#302B2B',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.08,
                  fontSize: 'clamp(28px, 3.4vw, 44px)',
                }}
              >
                The work behind every shipment
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-body text-text-secondary" style={{ fontSize: '0.9375rem', lineHeight: 1.65, maxWidth: '42ch' }}>
                Six services that cover sourcing, inspection, and everything
                in between concept and compliance.
              </p>
            </div>
          </div>

          <div
            ref={gridRef}
            className={`card-grid grid grid-cols-1 lg:grid-cols-12 gap-5${gridVisible ? ' is-visible' : ''}`}
          >
            {services.map((service, i) => (
              <div
                key={service.title}
                onMouseMove={handleCardMove}
                className={`feature-card ${service.span} ${service.variant === 'dark' ? 'feature-card--dark' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="card-spotlight" aria-hidden="true" />
                {service.variant === 'dark' ? (
                  <div className="feature-card__banner">
                    <div>
                      <h3 className={`feature-title${service.size === 'lg' ? ' feature-title--lg' : ''}`}>
                        {service.title}
                      </h3>
                      <span className="feature-accent" />
                      <p className="feature-text">{service.text}</p>
                    </div>
                    <Link to="/contact" className="services-btn services-btn--light">
                      Talk to Us
                      <ArrowRight size={14} strokeWidth={2} />
                    </Link>
                  </div>
                ) : (
                  <>
                    <h3 className={`feature-title${service.size === 'lg' ? ' feature-title--lg' : ''}`}>
                      {service.title}
                    </h3>
                    <span className="feature-accent" />
                    <p className="feature-text">{service.text}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .services-btn {
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
        .services-btn:hover {
          background: #000000;
          transform: scale(1.03);
        }
        .services-btn--light {
          background: #FFFFFF;
          color: #111111;
          margin-top: 0;
        }
        .services-btn--light:hover {
          background: #F0F0EC;
        }

        @keyframes heroRise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-word {
          animation: heroRise 760ms cubic-bezier(.16,1,.3,1) both;
        }

        .feature-card {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          padding: 40px;
          background: #FFFFFF;
          border: 1px solid #ECECE6;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 600ms ease, transform 600ms ease, box-shadow 350ms ease, border-color 350ms ease;
        }
        .card-grid.is-visible .feature-card {
          opacity: 1;
          transform: translateY(0);
        }
        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 44px -28px rgba(27, 67, 50, 0.28);
          border-color: #D8E3D4;
        }
        .card-grid.is-visible .feature-card:hover {
          transform: translateY(-6px);
        }

        .card-spotlight {
          position: absolute;
          inset: 0;
          background: radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(86, 142, 73, 0.14), transparent 70%);
          opacity: 0;
          transition: opacity 400ms ease;
          pointer-events: none;
        }
        .feature-card:hover .card-spotlight {
          opacity: 1;
        }

        .feature-title {
          font-family: "Fraunces", Georgia, serif;
          font-weight: 500;
          color: #302B2B;
          font-size: clamp(21px, 2.1vw, 25px);
          letter-spacing: -0.3px;
          margin: 0;
          position: relative;
          z-index: 1;
        }
        .feature-title--lg {
          font-size: clamp(25px, 2.6vw, 32px);
        }
        .feature-accent {
          display: block;
          height: 2px;
          width: 0;
          background: #568E49;
          margin: 16px 0 18px;
          transition: width 420ms cubic-bezier(.16,1,.3,1);
          position: relative;
          z-index: 1;
        }
        .feature-card:hover .feature-accent {
          width: 56px;
        }
        .feature-text {
          color: #6E6E6E;
          font-size: 0.9375rem;
          line-height: 1.7;
          margin: 0;
          max-width: 46ch;
          position: relative;
          z-index: 1;
        }

        .feature-card--dark {
          background: #1B4332;
          border-color: #1B4332;
        }
        .feature-card--dark:hover {
          box-shadow: 0 24px 44px -24px rgba(0, 0, 0, 0.35);
          border-color: #1B4332;
        }
        .feature-card--dark .card-spotlight {
          background: radial-gradient(460px circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.10), transparent 70%);
        }
        .feature-card--dark .feature-title {
          color: #F5F7F2;
        }
        .feature-card--dark .feature-accent {
          background: #8FBF82;
        }
        .feature-card--dark .feature-text {
          color: rgba(245, 247, 242, 0.78);
        }
        .feature-card__banner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        @media (min-width: 1024px) {
          .feature-card__banner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
          }
          .feature-card__banner > div:first-child {
            flex: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-word {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .feature-card {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .feature-accent {
            transition: none !important;
          }
        }
      `}</style>
    </>
  )
}