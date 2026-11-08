import { useEffect, useRef, useState } from 'react'
import { company, productCategories } from '../data/content'
import EnquiryForm from '../components/ui/EnquiryForm'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Contact() {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const [panelVisible, setPanelVisible] = useState(false)

  useEffect(() => {
    const node = panelRef.current
    if (!node) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setPanelVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPanelVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

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
                <span className="hero-word" style={{ color: '#302B2B', display: 'block', animationDelay: '0ms' }}>CONTACT</span>
                <span className="hero-word" style={{ color: '#568E49', display: 'block', animationDelay: '120ms' }}>US</span>
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
                We reply within one business day
              </h2>
              <p className="font-body text-text-secondary" style={{ fontSize: '0.9375rem', lineHeight: 1.65, maxWidth: '38ch' }}>
                Tell us about your textile requirements and a member of our
                sourcing team will get back to you with a clear next step.
              </p>

              <a href="#contact-form" className="contact-btn">
                Send a Message
                <ArrowRight size={14} strokeWidth={2} />
              </a>
            </div>
          </div>

          <div className="hero-word" style={{ animationDelay: '360ms' }}>
            <div style={{ maxHeight: '420px', borderRadius: '20px', overflow: 'hidden' }}>
              <img
                src="/back.jpg"
                alt="Texworld Asia office"
                className="w-full"
                style={{ height: '100%', maxHeight: '420px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="w-full py-16 lg:py-24" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="container-wide">
          <div
            ref={panelRef}
            className={`contact-panel grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-start${panelVisible ? ' is-visible' : ''}`}
          >
            <aside className="lg:col-span-5 order-2 lg:order-1">
              <span className="contact-rule" />
              <h2
                style={{
                  fontFamily: '"Fraunces", Georgia, serif',
                  fontWeight: 500,
                  color: '#302B2B',
                  fontSize: 'clamp(26px, 2.8vw, 34px)',
                  marginBottom: '32px',
                }}
              >
                Contact details
              </h2>

              <div className="flex flex-col gap-8">
                <a href={`mailto:${company.email}`} className="contact-row">
                  <span className="contact-icon">
                    <Mail size={24} strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="contact-row__label">Email</span>
                    <span className="contact-row__value">{company.email}</span>
                  </span>
                </a>
                <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="contact-row">
                  <span className="contact-icon">
                    <Phone size={24} strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="contact-row__label">Phone</span>
                    <span className="contact-row__value">{company.phone}</span>
                  </span>
                </a>
                <div className="contact-row contact-row--static">
                  <span className="contact-icon">
                    <MapPin size={24} strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="contact-row__label">Office</span>
                    <span className="contact-row__value">{company.address}</span>
                  </span>
                </div>
              </div>

            </aside>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="enquiry-card">
                <span className="contact-rule" />
                <h2
                  style={{
                    fontFamily: '"Fraunces", Georgia, serif',
                    fontWeight: 500,
                    color: '#302B2B',
                    letterSpacing: '-0.3px',
                    lineHeight: 1.12,
                    fontSize: 'clamp(22px, 2.3vw, 28px)',
                    marginBottom: '28px',
                    maxWidth: '28ch',
                  }}
                >
                  Share a few details and we'll respond with a clear next step.
                </h2>
                <div className="enquiry-wrap">
                  <EnquiryForm productOptions={productCategories.map((p) => p.name)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-20" style={{ backgroundColor: '#1B4332' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '640px' }}>
            <p
              style={{
                fontFamily: '"Fraunces", Georgia, serif',
                fontWeight: 500,
                color: '#8FBF82',
                fontSize: '1.05rem',
                marginBottom: '10px',
              }}
            >
              Prefer email?
            </p>
            <h2
              style={{
                fontFamily: '"Fraunces", Georgia, serif',
                fontWeight: 500,
                color: '#FFFFFF',
                lineHeight: 1.2,
                fontSize: 'clamp(22px, 2.6vw, 32px)',
              }}
            >
              Write to us directly at{' '}
              <a href={`mailto:${company.email}`} className="contact-mailto">
                {company.email}
              </a>
            </h2>
          </div>
        </div>
      </section>

      <style>{`
        .contact-btn {
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
        .contact-btn:hover {
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

        .contact-panel {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 650ms ease, transform 650ms ease;
        }
        .contact-panel.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-rule {
          display: block;
          width: 36px;
          height: 2px;
          background: #568E49;
          margin-bottom: 18px;
        }

        .contact-row {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          text-decoration: none;
          color: inherit;
        }
        .contact-row--static {
          cursor: default;
        }
        .contact-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: #EEF2EA;
          color: #568E49;
          transition: background-color 250ms ease, color 250ms ease;
        }
        a.contact-row:hover .contact-icon {
          background: #568E49;
          color: #FFFFFF;
        }
        .contact-row__label {
          display: block;
          font-family: "Helvetica Neue", Arial, "Segoe UI", sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: #302B2B;
        }
        .contact-row__value {
          display: block;
          font-family: "Helvetica Neue", Arial, "Segoe UI", sans-serif;
          font-size: 0.9375rem;
          color: #6E6E6E;
          margin-top: 4px;
          line-height: 1.6;
        }

        .enquiry-card {
          background: #FFFFFF;
          border: 1px solid #ECECE6;
          border-radius: 24px;
          padding: clamp(24px, 3vw, 44px);
        }

        .enquiry-wrap label {
          display: block;
          font-family: "Helvetica Neue", Arial, "Segoe UI", sans-serif;
          font-weight: 600;
          font-size: 0.8125rem;
          color: #302B2B;
          margin-bottom: 8px;
        }
        .enquiry-wrap input,
        .enquiry-wrap select,
        .enquiry-wrap textarea {
          width: 100%;
          border: 1px solid #E4E4DF;
          border-radius: 14px;
          padding: 13px 16px;
          font-family: "Helvetica Neue", Arial, "Segoe UI", sans-serif;
          font-size: 0.9375rem;
          color: #302B2B;
          background: #FFFFFF;
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }
        .enquiry-wrap input::placeholder,
        .enquiry-wrap textarea::placeholder {
          color: #A3A39C;
        }
        .enquiry-wrap input:focus,
        .enquiry-wrap select:focus,
        .enquiry-wrap textarea:focus {
          outline: none;
          border-color: #568E49;
          box-shadow: 0 0 0 3px rgba(86, 142, 73, 0.14);
        }
        .enquiry-wrap select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23568E49' stroke-width='1.6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 42px;
        }
        .enquiry-wrap textarea {
          resize: vertical;
          min-height: 140px;
        }
        .enquiry-wrap button[type="submit"] {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111111;
          color: #FFFFFF;
          font-family: "Helvetica Neue", Arial, "Segoe UI", sans-serif;
          font-weight: 600;
          font-size: 0.8125rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: none;
          padding: 14px 30px;
          border-radius: 999px;
          cursor: pointer;
          transition: background-color 200ms ease, transform 200ms ease;
        }
        .enquiry-wrap button[type="submit"]:hover {
          background: #000000;
          transform: scale(1.02);
        }

        .contact-mailto {
          color: #FFFFFF;
          text-decoration: underline;
          text-decoration-color: rgba(255,255,255,0.4);
          text-underline-offset: 4px;
          transition: text-decoration-color 200ms ease;
        }
        .contact-mailto:hover {
          text-decoration-color: #FFFFFF;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-word {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .contact-panel {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  )
}