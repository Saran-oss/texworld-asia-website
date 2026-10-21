import { buildImageUrl } from '../lib/images'
import { services, inspectionStages, processSteps } from '../data/content'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  const heroImg = buildImageUrl(
    'Wide editorial banner: quality inspector examining a folded cotton fabric on a wooden inspection table, warm daylight, measuring tape and fabric swatches on the side, shallow depth of field, warm ivory and deep green palette, 16:7 crop',
    'landscape_16_9'
  )

  const sImages = services.map((s, i) =>
    buildImageUrl(
      [
        'A fabric sourcing manager reviewing cotton fabric swatches on a linen desk, warm daylight, various woven fabric samples, editorial composition',
        'Textile product development sketches with fabric swatches and yarn cones on a wooden table, natural daylight',
        'Purchase orders and shipping documents laid flat next to a woven cotton sample, soft daylight, editorial flat lay',
        'Factory compliance audit paperwork with a clipboard and pen on a linen surface, soft natural light',
        'Textile quality inspector examining a fabric roll with measuring tools, warm daylight, inspection table',
        'Brand development mood board with textile color swatches and home textile product sketches, warm natural light',
      ][i],
      'portrait_4_3'
    )
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
              <p className="eyebrow !text-white/90 mb-4">Our Services</p>
              <h1 className="text-white" style={{ maxWidth: '22ch' }}>
                Weave Confidence. Deliver Quality.
              </h1>
              <p className="mt-6 max-w-2xl" style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-body-lg)', lineHeight: 1.6 }}>
                Transform your textile journey with end-to-end sourcing and quality-control services. Partner with us for a fabric of trust and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="all-services" className="section">
        <div className="container-wide">
          <div className="section-heading">
            <p className="eyebrow">Service Overview</p>
            <h2 className="section-heading__title" style={{ maxWidth: '22ch' }}>
              Six Services, One Trusted Partner.
            </h2>
          </div>

          <div className="border-t border-border">
            {services.map((s, i) => (
              <div
                key={s.id}
                id={s.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-0 lg:gap-x-10 py-10 lg:py-14 border-b border-border"
              >
                <div className="lg:col-span-1 flex items-start">
                  <span className="service-number">0{i + 1}</span>
                </div>
                <div className="lg:col-span-4 order-3 lg:order-2">
                  <div style={{ aspectRatio: '4 / 5' }}>
                    <img
                      src={sImages[i]}
                      alt={s.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7 order-2 lg:order-3 lg:pl-4">
                  <h3 className="font-display font-medium mb-4" style={{ fontSize: 'var(--text-h3)' }}>
                    {s.name}
                  </h3>
                  <p className="text-text-secondary mb-5" style={{ fontSize: 'var(--text-body-lg)', lineHeight: 1.6 }}>
                    {s.summary}
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {s.description}
                  </p>
                  <div className="hairline-short mb-6" />
                  <h4 className="font-body font-semibold text-text-primary mb-2">What you gain</h4>
                  <p className="text-text-secondary leading-relaxed">
                    {s.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inspection-stages" className="section section-alt">
        <div className="container-wide">
          <div className="section-heading">
            <p className="eyebrow">Third-Party Inspection</p>
            <h2 className="section-heading__title" style={{ maxWidth: '25ch' }}>
              Stage-Gated Quality Oversight.
            </h2>
            <p className="section-heading__intro">
              Our inspection process is carried out at different stages of textile production, from raw material through to final finished product, so issues are visible and resolved at the earliest possible point.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8">
            {inspectionStages.map((st, i) => (
              <div key={st.id} className="flex flex-col h-full">
                <span className="service-number mb-4">0{i + 1}</span>
                <h3 className="font-body font-semibold text-text-primary mb-3" style={{ fontSize: '1.125rem' }}>
                  {st.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="container-wide">
          <div className="section-heading">
            <p className="eyebrow">How We Work</p>
            <h2 className="section-heading__title" style={{ maxWidth: '22ch' }}>
              From Brief to Delivery — in Four Clear Steps.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-y-0">
            {processSteps.map((step, i) => (
              <div key={step.id} className="relative">
                <div className="flex flex-col gap-5">
                  <span className="service-number">{step.number}</span>
                  <div>
                    <div className="hairline mb-5" />
                    <h3 className="font-display font-medium" style={{ fontSize: '1.375rem' }}>
                      {step.title}
                    </h3>
                    <p className="mt-3 text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 right-[-18px] w-9 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Not sure which service fits?</p>
            <h2 className="mb-6" style={{ maxWidth: '22ch' }}>
              Send us your brief. We'll recommend the right scope.
            </h2>
            <Link to="/contact" className="btn-primary no-underline">
              Discuss your requirements
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
