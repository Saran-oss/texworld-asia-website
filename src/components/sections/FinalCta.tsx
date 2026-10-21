import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="cta-section">
      <div className="container-wide">
        <div className="cta-banner">
          <div className="hairline-short cta-hairline" />
          <p className="eyebrow cta-eyebrow">Partner with Texworld Asia</p>

          <h2 className="cta-heading">
            Source with the confidence of a trusted partner.
          </h2>

          <p className="cta-subtext">
            From supplier vetting to final inspection, our team is on the ground
            across Pakistan's textile industry so you don't have to be.
          </p>

          <div className="cta-actions">
            <Link to="/contact" className="cta-btn-primary">
              Request a quote
            </Link>
            <Link to="/contact" className="cta-link">
              Talk to our team
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .cta-section {
          padding-top: 80px;
          padding-bottom: 104px;
        }

        .cta-banner {
          position: relative;
          background: #11201A;
          border-radius: 18px;
          padding: 96px 48px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-hairline {
          background: rgba(244, 241, 232, 0.25);
          margin-bottom: 24px;
        }

        .cta-eyebrow {
          color: rgba(111, 161, 91, 0.9);
          margin: 0 0 22px;
        }

        .cta-heading {
          font-family: var(--font-display, "Fraunces", Georgia, serif);
          font-weight: 500;
          font-size: clamp(28px, 3vw, 40px);
          line-height: 1.3;
          color: #FFFFFF;
          margin: 0 0 18px;
          max-width: 20ch;
        }

        .cta-subtext {
          font-family: var(--font-body, inherit);
          font-size: 15.5px;
          line-height: 1.6;
          color: rgba(244, 241, 232, 0.65);
          margin: 0 0 40px;
          max-width: 44ch;
        }

        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 32px;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 30px;
          border-radius: 4px;
          background: rgba(111, 161, 91, 0.95);
          color: #11201A;
          font-family: var(--font-body, inherit);
          font-size: 14.5px;
          font-weight: 600;
          text-decoration: none;
          transition: background-color 0.25s ease;
        }
        .cta-btn-primary:hover {
          background: #F4F1E8;
        }

        .cta-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-body, inherit);
          font-size: 14.5px;
          color: rgba(244, 241, 232, 0.85);
          text-decoration: none;
          border-bottom: 1px solid rgba(244, 241, 232, 0.3);
          padding-bottom: 2px;
          transition: color 0.25s ease, border-color 0.25s ease;
        }
        .cta-link:hover {
          color: #FFFFFF;
          border-color: rgba(111, 161, 91, 0.9);
        }

        @media (max-width: 640px) {
          .cta-banner {
            padding: 64px 28px;
          }
          .cta-actions {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  )
}