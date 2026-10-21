import { buildImageUrl } from '../lib/images'
import { company, productCategories } from '../data/content'
import EnquiryForm from '../components/ui/EnquiryForm'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const heroImg = buildImageUrl(
    'Wide editorial image of a neatly arranged desk with cotton fabric swatches, clipboard, pen, and wooden ruler, warm daylight from side, natural linen background, minimal and refined composition, 16:7 crop',
    'landscape_16_9'
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
              <p className="eyebrow !text-white/90 mb-4">Contact</p>
              <h1 className="text-white" style={{ maxWidth: '22ch' }}>
                Tell Us About Your Textile Requirements.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-start">
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="hairline-short mb-6" />
              <h2 className="mb-5" style={{ fontSize: 'var(--text-h3)' }}>
                Contact details
              </h2>
              <div className="space-y-6">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-4 no-underline text-text-primary hover:text-primary transition-colors"
                >
                  <span className="w-11 h-11 inline-flex shrink-0 items-center justify-center rounded-sm bg-bg-alt text-primary">
                    <Mail size={19} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-body font-semibold text-text-primary">Email</p>
                    <p className="font-body text-text-secondary mt-1">{company.email}</p>
                  </div>
                </a>
                <a
                  href={`tel:${company.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-4 no-underline text-text-primary hover:text-primary transition-colors"
                >
                  <span className="w-11 h-11 inline-flex shrink-0 items-center justify-center rounded-sm bg-bg-alt text-primary">
                    <Phone size={19} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-body font-semibold text-text-primary">Phone</p>
                    <p className="font-body text-text-secondary mt-1">{company.phone}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <span className="w-11 h-11 inline-flex shrink-0 items-center justify-center rounded-sm bg-bg-alt text-primary">
                    <MapPin size={19} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-body font-semibold text-text-primary">Office</p>
                    <p className="font-body text-text-secondary mt-1 leading-relaxed">
                      {company.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="eyebrow mb-4">Served markets</p>
                <div className="flex flex-wrap gap-2">
                  {company.markets.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center px-4 py-2 rounded-sm bg-bg-alt border border-border font-body text-sm text-text-primary"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="eyebrow mb-4">Preferred email contents</p>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    Product category and target construction
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    Approximate quantities and timing
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    Applicable compliance or certification requirements
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    Destination market and any known incoterm
                  </li>
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="section-heading mb-10">
                <p className="eyebrow">Enquiry form</p>
                <h2 className="section-heading__title" style={{ maxWidth: '25ch', fontSize: 'var(--text-h3)' }}>
                  Share a few details and we'll respond with a clear next step.
                </h2>
              </div>
              <EnquiryForm productOptions={productCategories.map((p) => p.name)} />
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta-bg text-white py-20">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="eyebrow !text-white/85 mb-4">Prefer email?</p>
            <h2 className="text-white" style={{ fontSize: 'var(--text-h3)' }}>
              Write to us directly at{' '}
              <a href={`mailto:${company.email}`} className="underline hover:no-underline text-white">
                {company.email}
              </a>
            </h2>
          </div>
        </div>
      </section>
    </>
  )
}
