import { useEffect, useRef, useState } from 'react'

const services = [
  {
    number: '01',
    title: 'Textile Sourcing',
    description:
      'Identifying potential suppliers, negotiating prices and terms, and managing the entire procurement process from start to finish — built on deep knowledge of the textile industry.',
  },
  {
    number: '02',
    title: 'Third-Party Inspection',
    description:
      'Examining fabrics and finished goods for defects at every stage of production — raw material, pre-production, in-process, and final inspection — before anything ships.',
  },
  {
    number: '03',
    title: 'Brand Development',
    description:
      'A decade-plus in sourcing, product and business development, execution, compliance, and inspection across home textiles, towels, socks, and apparel.',
  },
  {
    number: '04',
    title: 'Product Development',
    description:
      "Turning concepts into market-ready samples and bulk production — from raw material selection to final specs — whether it's a new collection or a custom order.",
  },
  {
    number: '05',
    title: 'Order Execution',
    description:
      'Documentation, production follow-up, quality checks, and logistics coordination from purchase order to final shipment, with full transparency at every step.',
  },
  {
    number: '06',
    title: 'Factory Compliance',
    description:
      "Auditing factories against international social, ethical, and quality standards, so you know exactly who you're working with before placing an order.",
  },
]

function ServiceCard({
  number,
  title,
  description,
  index,
}: {
  number: string
  title: string
  description: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`service-card ${visible ? 'is-visible' : ''}`}
      style={{
        transitionDelay: visible ? `${index * 70}ms` : '0ms',
      }}
    >
      <div className="service-card-top">
        <span className="service-number" aria-hidden="true">
          {number}
        </span>

        <h3 className="service-title">{title}</h3>
      </div>

      <p className="service-description">{description}</p>
    </div>
  )
}

export default function Services() {
  const [backgroundOffset, setBackgroundOffset] = useState({
    x: 0,
    y: 0,
  })

  const animationFrame = useRef<number | null>(null)

  const handleBackgroundMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()

    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    const nextPosition = {
      x: x * -10,
      y: y * -7,
    }

    if (animationFrame.current !== null) {
      cancelAnimationFrame(animationFrame.current)
    }

    animationFrame.current = requestAnimationFrame(() => {
      setBackgroundOffset(nextPosition)
      animationFrame.current = null
    })
  }

  const resetBackgroundPosition = () => {
    if (animationFrame.current !== null) {
      cancelAnimationFrame(animationFrame.current)
      animationFrame.current = null
    }

    setBackgroundOffset({ x: 0, y: 0 })
  }

  useEffect(() => {
    return () => {
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  return (
    <section
      aria-label="Our services"
      className="services-section"
      onMouseMove={handleBackgroundMove}
      onMouseLeave={resetBackgroundPosition}
    >
      {/* Background image with subtle cursor movement */}
      <div
        className="services-bg"
        aria-hidden="true"
        style={{
          transform: `translate3d(${backgroundOffset.x}px, ${backgroundOffset.y}px, 0) scale(1.06)`,
        }}
      />

      {/* Dark overlay for readable text */}
      <div className="services-overlay" aria-hidden="true" />

      <div className="container-wide services-content">
        <div className="services-heading">
          <span className="services-eyebrow">
            <span className="eyebrow-line" />
            WHAT WE DO
          </span>

          <h2>
            Full-service support,
            <br />
            <span>start to finish.</span>
          </h2>

          <p>
            Six disciplines, one point of contact — from the first
            supplier conversation to the shipment leaving the dock.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              index={index}
              {...service}
            />
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 68px 0 68px;
          background: #101411;
          color: #fff;
        }

        /* Background image */
        .services-bg {
          position: absolute;
          inset: -24px;
          z-index: -2;
          background-image: url('/back.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          will-change: transform;
          transition: transform 220ms ease-out;
          pointer-events: none;
        }

        /* Image tint */
        .services-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            180deg,
            rgba(10, 14, 12, 0.70) 0%,
            rgba(10, 14, 12, 0.60) 50%,
            rgba(10, 14, 12, 0.74) 100%
          );
          pointer-events: none;
        }

        .services-content {
          position: relative;
          z-index: 1;
        }

        /* Compact heading */
        .services-heading {
          max-width: 560px;
          margin-bottom: 38px;
        }

        .services-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          color: rgba(255, 255, 255, 0.72);
          font-family: "Public Sans", sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
        }

        .eyebrow-line {
          display: block;
          width: 25px;
          height: 1px;
          background: #8ebc9b;
        }

        .services-heading h2 {
          margin: 0;
          color: rgba(255, 255, 255, 0.96);
          font-family: "Fraunces", Georgia, serif;
          font-size: clamp(32px, 3.6vw, 46px);
          font-weight: 450;
          line-height: 1.12;
          letter-spacing: -0.04em;
        }

        .services-heading h2 span {
          color: rgba(225, 233, 226, 0.72);
          font-style: italic;
          font-weight: 400;
        }

        .services-heading p {
          max-width: 460px;
          margin: 15px 0 0;
          color: rgba(255, 255, 255, 0.75);
          font-family: "Public Sans", sans-serif;
          font-size: 14px;
          line-height: 1.75;
        }

        /* Responsive card grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        /* Static frosted glass cards */
        .service-card {
          position: relative;
          min-width: 0;
          min-height: 220px;
          overflow: hidden;
          padding: 24px 24px 27px;
          border: 1px solid rgba(255, 255, 255, 0.17);
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.075);

          -webkit-backdrop-filter: blur(18px) saturate(120%);
          backdrop-filter: blur(18px) saturate(120%);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 8px 24px rgba(0, 0, 0, 0.12);

          opacity: 0;
          transform: translateY(16px);

          transition:
            opacity 650ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .service-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* No glow, shine, or animated hover effects */
        .service-card:hover {
          border-color: rgba(255, 255, 255, 0.23);
        }

        .service-card-top {
          margin-bottom: 15px;
        }

        .service-number {
          display: block;
          margin-bottom: 21px;
          color: rgba(220, 236, 225, 0.65);
          font-family: "Fraunces", Georgia, serif;
          font-size: 32px;
          font-weight: 400;
          font-style: italic;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .service-title {
          margin: 0;
          color: rgba(255, 255, 255, 0.96);
          font-family: "Fraunces", Georgia, serif;
          font-size: clamp(19px, 1.5vw, 22px);
          font-weight: 450;
          line-height: 1.3;
          letter-spacing: -0.025em;
        }

        .service-description {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          font-family: "Public Sans", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.75;
        }

        /* Tablet */
        @media (max-width: 1000px) {
          .services-section {
            padding: 58px 0 36px;
          }

          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .service-card {
            min-height: 210px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .services-section {
            padding: 46px 0 30px;
          }

          .services-heading {
            margin-bottom: 28px;
          }

          .services-heading h2 {
            font-size: clamp(30px, 8vw, 38px);
          }

          .services-heading p {
            font-size: 13px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .service-card {
            min-height: 0;
            padding: 22px 21px 24px;
            border-radius: 15px;
          }

          .service-number {
            font-size: 29px;
            margin-bottom: 18px;
          }

          .service-title {
            font-size: 21px;
          }

          .service-description {
            font-size: 13px;
            line-height: 1.75;
          }

          .services-bg {
            transition-duration: 300ms;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .services-bg {
            transition: none;
            transform: scale(1.03) !important;
          }

          .service-card,
          .service-card.is-visible {
            transition: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}