import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function FinalCta() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="partner-cta">
      <div className="partner-cta-inner">
        <h2 className={`partner-heading ${isVisible ? 'show' : ''}`}>
          Ready to Partner With Us?
        </h2>

        <div className={`partner-divider ${isVisible ? 'show' : ''}`} />

        <p className={`partner-subtext ${isVisible ? 'show' : ''}`}>
          Contact us today for a quote or to discuss your requirements.
        </p>

        <Link to="/contact" className={`partner-btn ${isVisible ? 'show' : ''}`}>
          Request a quote
          <ArrowRight size={14} strokeWidth={2} />
        </Link>
      </div>

      <style>{`
        .partner-cta {
          background: #fdfdfdff;
          text-align: center;
          padding: 72px 24px;
        }

        .partner-cta-inner {
          max-width: 560px;
          margin: 0 auto;
        }

        .partner-heading,
        .partner-divider,
        .partner-subtext,
        .partner-btn {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 500ms ease, transform 500ms ease;
        }
        .partner-heading.show { opacity: 1; transform: translateY(0); }
        .partner-divider.show { opacity: 1; transform: translateY(0); transition-delay: 80ms; }
        .partner-subtext.show { opacity: 1; transform: translateY(0); transition-delay: 160ms; }
        .partner-btn.show { opacity: 1; transform: translateY(0); transition-delay: 240ms; }

        .partner-heading {
          font-family: "Fraunces", Georgia, "Times New Roman", serif;
          font-weight: 500;
          font-size: clamp(1.75rem, 3.2vw, 2.5rem);
          line-height: 1.2;
          color: #1F2421;
          margin: 0;
        }

        .partner-divider {
          width: 56px;
          height: 2px;
          background: #308032ff;
          margin: 20px auto;
        }

        .partner-subtext {
          font-family: -apple-system, "Segoe UI", sans-serif;
          font-size: 15px;
          color: #5A615C;
          margin: 0 0 28px;
        }

        .partner-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #111111;
          color: #FFFFFF;
          font-family: -apple-system, "Segoe UI", sans-serif;
          font-weight: 600;
          font-size: 12.5px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 13px 26px;
          border-radius: 999px;
          transition: background-color 200ms ease, transform 200ms ease;
        }

        .partner-btn:hover {
          background: #2f2e2eff;
          transform: scale(1.03);
        }

        @media (max-width: 640px) {
          .partner-cta { padding: 56px 20px; }
        }
      `}</style>
    </section>
  )
}