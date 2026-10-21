import { buildImageUrl } from '../lib/images'
import { company, whyChooseUs } from '../data/content'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function About() {
  const heroImg = buildImageUrl(
    'Wide editorial image: folded crisp cotton bed linen in warm ivory and soft sage on a natural linen bed, soft daylight from a window, shallow depth of field, detail of cotton weave, warm color temperature, 16:7 crop',
    'landscape_16_9'
  )
  const splitImg = buildImageUrl(
    'Macro detail of woven cotton fabric stretched on a wooden inspection frame, warm daylight, visible thread structure, shallow depth of field, natural linen background, editorial warm ivory and sage palette',
    'portrait_4_3'
  )
  const ceoImg = buildImageUrl(
    'Editorial still-life of cotton bolls next to folded textile swatches in warm neutral tones on a linen desk, soft daylight, minimal and refined',
    'portrait_4_3'
  )

  return (
    <>
      <section className="w-full pt-[64px] lg:pt-[88px]">
        <div
          className="w-full relative"
          style={{
            aspectRatio: '16 / 7',
            backgroundImage: `linear-gradient(to right, rgba(19,27,22,0.55), rgba(19,27,22,0.35) 45%, transparent 75%), url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container-wide h-full flex items-end pb-16 lg:pb-20 pt-20">
            <div className="max-w-3xl">
              <p className="eyebrow !text-white/90 mb-4">About Us</p>
              <h1 className="text-white" style={{ maxWidth: '20ch' }}>
                A Reliable Sourcing Partner in Pakistan's Textile Industry.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-start">
            <div className="lg:col-span-5">
              <div style={{ aspectRatio: '4 / 5' }}>
                <img src={splitImg} alt="Woven cotton fabric detail" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7 lg:pt-4">
              <p className="eyebrow mb-4">Company Overview</p>
              <h2 className="mb-6" style={{ maxWidth: '22ch' }}>
                Welcome to Texworld Asia.
              </h2>
              <div className="space-y-5 measure text-text-secondary" style={{ fontSize: 'var(--text-body-lg)', lineHeight: 1.6 }}>
                <p>
                  Texworld Asia is a reliable firm in sourcing, product development, business development, order execution, factory compliance, and third-party inspections in Pakistan. We have been in this field for more than 15 years.
                </p>
                <p>
                  We deal in Fabric, Fashion Bedding, Window Curtains, Towels/Terry Products, Shower Curtains, Socks, Institutional home textiles, Health Care textiles, Kitchen/Table Linens & Apparels. We are currently servicing to US, Canada & European Importers & Retailers.
                </p>
                <p>
                  We have a highly experienced team of professionals in Sourcing, Product Development, Supply Chain Management, Quality Assurance and Compliances. Our core strength is the confidence and trust of our International buyers and our core responsibility is to satisfy the needs and wants of our buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="section section-alt">
        <div className="container-wide">
          <div className="section-heading">
            <p className="eyebrow">What We Do</p>
            <h2 className="section-heading__title" style={{ maxWidth: '25ch' }}>
              Connecting Buyers With the Right Supply Chain.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 lg:gap-y-0 items-start">
            <div className="space-y-5 measure text-text-secondary" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              <p>
                We are a textile sourcing and third-party firm, acting as an intermediary between manufacturers and retailers, helping to facilitate the procurement of textile products and providing value-added services to support the textile business.
              </p>
              <p>
                Our primary function is to source the high-quality product at competitive prices from reliable textile manufacturers. This involves working with a network of suppliers to identify those who can meet our clients' requirements in terms of factory compliance requirements, product developments, product quality with best price at minimum production lead times.
              </p>
              <p>
                In addition to sourcing, we provide a range of value-added services, including product development, quality control during production and third-party inspection services, and logistics management to export the goods smoothly.
              </p>
            </div>
            <div className="space-y-5 measure text-text-secondary" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              <p>
                These services can help to streamline the supply chain, reduce costs, and improve efficiency, allowing our clients to focus on their core business activities.
              </p>
              <p>
                As a third-party firm, we act as an independent arbiter, ensuring that both parties are meeting their obligations and working towards a mutually beneficial outcome. This involves managing contracts, resolving disputes, and monitoring performance to ensure that everyone is meeting their agreed-upon responsibilities.
              </p>
              <p>
                By providing reliable sourcing and value-added services, we play a critical role in supporting the textile supply chain, helping businesses to reduce costs, improve efficiency, and build a competitive advantage in the marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="section">
        <div className="container-wide">
          <div className="section-heading">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="section-heading__title" style={{ maxWidth: '22ch' }}>
              Experience, Network, and Responsiveness.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-12 lg:gap-y-10">
            {whyChooseUs.map((item, i) => (
              <div key={item.id} className="flex gap-5 items-start pb-8 border-b border-border last:border-b-0">
                <span className="service-number shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="font-body font-semibold text-text-primary mb-3" style={{ fontSize: '1.1875rem' }}>
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ceo-message" className="section section-alt">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-start">
            <div className="lg:col-span-5">
              <div style={{ aspectRatio: '4 / 5' }}>
                <img src={ceoImg} alt="Cotton bolls and textile swatches" className="w-full h-full object-cover" />
              </div>
              <p className="mt-3 font-body text-text-muted text-sm">
                Placeholder image. A genuine CEO portrait should be supplied by the client.
              </p>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="eyebrow mb-5">Message from the CEO</p>
              <div className="hairline-short mb-8" />
              <blockquote
                className="font-display italic text-text-primary mb-8"
                style={{ fontSize: 'var(--text-h3)', lineHeight: 1.25 }}
              >
                "Dear valued customers, I express my gratitude for your continued support to our company and trusting us for taking care of your business. We are proud to offer a reliable sourcing, product and business development, order execution, factory compliance, and third-party inspections services solutions in Pakistan.
                <br /><br />
                Over the past few years, we have worked hard to build a strong reputation for quality and reliability. We have a team of experienced professionals who are dedicated to providing you with the best possible services. We also have a vast network of suppliers all over the world, which gives us access to a wide range of textiles at competitive prices."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-sm bg-bg flex items-center justify-center font-display text-primary font-semibold text-xl border border-border" aria-hidden="true">
                  FK
                </div>
                <div>
                  <p className="font-body font-semibold text-text-primary">{company.ceoName}</p>
                  <p className="font-body text-text-muted text-sm mt-1">Chief Executive Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="policy" className="section">
        <div className="container-wide">
          <div className="section-heading">
            <p className="eyebrow">Company Policy</p>
            <h2 className="section-heading__title" style={{ maxWidth: '25ch' }}>
              The Principles That Guide Our Work.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {company.policy.map((line, i) => (
              <div key={i} className="flex gap-4 items-start py-3 border-b border-border">
                <CheckCircle2 size={22} className="shrink-0 text-primary mt-0.5" strokeWidth={1.8} />
                <p className="text-text-secondary leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">Markets We Serve</p>
              <h2 className="mb-4" style={{ maxWidth: '22ch' }}>
                Delivering to International Buyers.
              </h2>
              <p className="text-text-secondary max-w-xl" style={{ fontSize: 'var(--text-body-lg)' }}>
                We currently work with importers and retailers across three established markets, with the flexibility to support additional destinations.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {company.markets.map((m) => (
                <span
                  key={m}
                  className="inline-flex items-center px-5 py-3 rounded-sm bg-surface border border-border font-body text-text-primary"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta-bg text-white py-24">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="text-white">Want to discuss a program?</h2>
            <p className="mt-6 max-w-2xl" style={{ color: 'rgba(247,245,240,0.9)', fontSize: 'var(--text-body-lg)' }}>
              Reach out with your brief — we will respond with the right next step.
            </p>
            <div className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-body font-semibold px-8 py-[14px] rounded-md no-underline hover:bg-bg-alt transition-colors min-h-12">
                Contact Texworld Asia
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
