
import { useEffect, useRef, useState } from 'react'
import { company } from '../../data/content'

export default function CeoMessage() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(section)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="ceo-message"
      ref={sectionRef}
      className={`section section-alt ceo-section ${
        isVisible ? 'ceo-visible' : ''
      }`}
    >
      <div className="container-wide">
        <div className="ceo-layout">
          {/* CEO portrait */}
          <div className="ceo-portrait-col">
            <div className="ceo-portrait-frame">
              <img
                src="/CEO.jpeg"
                alt={`${company.ceoName}, Chief Executive Officer of ${company.name}`}
                className="ceo-portrait"
              />
              <div className="ceo-image-overlay" />
            </div>
          </div>

          {/* CEO message */}
          <div className="ceo-text-col">
            <div className="ceo-heading-line" />

            <p className="eyebrow ceo-eyebrow ceo-reveal ceo-delay-1">
              Message from the CEO
            </p>

            <h2 className="ceo-heading font-display ceo-reveal ceo-delay-2">
              A message of trust,
              <br />
              <span>partnership and progress.</span>
            </h2>

            <blockquote className="ceo-copy font-display">
              <p className="ceo-reveal ceo-delay-3">
                Dear valued customers,
              </p>

              <p className="ceo-reveal ceo-delay-4">
                I express my gratitude for your continued support to our
                company and trusting us for taking care of your business.
                We are proud to offer reliable sourcing, product and
                business development, order execution, factory compliance,
                and third-party inspection services in Pakistan.
              </p>

              <p className="ceo-reveal ceo-delay-5">
                Over the past few years, we have worked hard to build a
                strong reputation for quality and reliability. We have a
                team of experienced professionals dedicated to providing
                you with the best possible services. We also have a vast
                network of suppliers all over the world, giving us access
                to a wide range of textiles at competitive prices.
              </p>
            </blockquote>

            <div className="ceo-sign ceo-reveal ceo-delay-5">
              <p className="ceo-sign-name font-display">
                {company.ceoName}
              </p>

              <p className="ceo-sign-title font-body">
                Chief Executive Officer, {company.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ceo-section {
          padding: 58px 0 62px;
          overflow: hidden;
        }

        .ceo-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
          align-items: center;
          gap: clamp(36px, 5.5vw, 72px);
        }

        /* Portrait entrance */
        .ceo-portrait-col {
          opacity: 0;
          transform: translate3d(-24px, 12px, 0);
          transition:
            opacity 850ms ease,
            transform 1000ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ceo-visible .ceo-portrait-col {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .ceo-portrait-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 4.65;
          overflow: hidden;
          background: #eeece5;
        }

        .ceo-portrait {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transform: scale(1.09);
          transition:
            transform 1400ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 500ms ease;
          will-change: transform;
        }

        .ceo-visible .ceo-portrait {
          transform: scale(1);
        }

        .ceo-portrait-frame:hover .ceo-portrait {
          transform: scale(1.045);
          filter: saturate(1.04);
        }

        .ceo-image-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: linear-gradient(
            180deg,
            rgba(27, 67, 50, 0.025),
            transparent 35%,
            rgba(27, 67, 50, 0.06)
          );
          opacity: 0;
          transition: opacity 500ms ease;
        }

        .ceo-portrait-frame:hover .ceo-image-overlay {
          opacity: 1;
        }

        /* Text column entrance */
        .ceo-text-col {
          max-width: 620px;
        }

        .ceo-heading-line {
          width: 36px;
          height: 2px;
          margin-bottom: 15px;
          background: #1b4332;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ceo-visible .ceo-heading-line {
          transform: scaleX(1);
          transition-delay: 200ms;
        }

        .ceo-reveal {
          opacity: 0;
          transform: translate3d(0, 16px, 0);
          transition:
            opacity 650ms ease,
            transform 750ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ceo-visible .ceo-reveal {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .ceo-visible .ceo-delay-1 {
          transition-delay: 180ms;
        }

        .ceo-visible .ceo-delay-2 {
          transition-delay: 280ms;
        }

        .ceo-visible .ceo-delay-3 {
          transition-delay: 380ms;
        }

        .ceo-visible .ceo-delay-4 {
          transition-delay: 470ms;
        }

        .ceo-visible .ceo-delay-5 {
          transition-delay: 560ms;
        }

        .ceo-eyebrow {
          margin: 0 0 13px;
          color: #1b4332;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .ceo-heading {
          margin: 0 0 22px;
          color: #252822;
          font-size: clamp(30px, 3vw, 42px);
          font-weight: 400;
          line-height: 1.13;
          letter-spacing: -0.035em;
        }

        .ceo-heading span {
          color: #6b806f;
          font-style: italic;
          transition: color 350ms ease;
        }

        .ceo-heading:hover span {
          color: #1b4332;
        }

        .ceo-copy {
          margin: 0 0 24px;
          color: var(--color-text-primary, #343630);
          font-size: 12.5px;
          font-weight: 400;
          line-height: 1.8;
        }

        .ceo-copy p {
          margin: 0 0 13px;
        }

        .ceo-copy p:last-child {
          margin-bottom: 0;
        }

        .ceo-sign {
          max-width: 340px;
          padding-top: 15px;
          border-top: 1px solid var(--color-border, rgba(0, 0, 0, 0.12));
          transition: border-color 350ms ease;
        }

        .ceo-sign:hover {
          border-color: #1b4332;
        }

        .ceo-sign-name {
          margin: 0;
          color: #1b4332;
          font-size: 17px;
          font-weight: 500;
          transition: letter-spacing 300ms ease;
        }

        .ceo-sign:hover .ceo-sign-name {
          letter-spacing: 0.02em;
        }

        .ceo-sign-title {
          margin: 4px 0 0;
          color: var(--color-text-muted, #777970);
          font-size: 11px;
        }

        /* Tablet */
        @media (max-width: 960px) {
          .ceo-section {
            padding: 48px 0 52px;
          }

          .ceo-layout {
            grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
            gap: 30px;
          }

          .ceo-heading {
            font-size: clamp(28px, 3.5vw, 36px);
          }

          .ceo-copy {
            font-size: 12px;
            line-height: 1.75;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .ceo-section {
            padding: 42px 0 46px;
          }

          .ceo-layout {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .ceo-portrait-col {
            max-width: 340px;
            width: 100%;
          }

          .ceo-portrait-frame {
            aspect-ratio: 4 / 4.1;
          }

          .ceo-text-col {
            max-width: 100%;
          }

          .ceo-heading {
            margin-bottom: 18px;
            font-size: clamp(30px, 8vw, 38px);
          }

          .ceo-copy {
            font-size: 13px;
            line-height: 1.8;
          }

          .ceo-sign {
            padding-top: 13px;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .ceo-portrait-col,
          .ceo-text-col,
          .ceo-reveal,
          .ceo-portrait,
          .ceo-image-overlay,
          .ceo-heading-line,
          .ceo-heading span,
          .ceo-sign,
          .ceo-sign-name {
            opacity: 1;
            transform: none;
            transition: none;
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
