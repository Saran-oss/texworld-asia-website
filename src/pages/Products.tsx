import { buildImageUrl } from '../lib/images'
import { productCategories } from '../data/content'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Products() {
  const heroImg = buildImageUrl(
    'Wide editorial banner: neatly arranged folded home textiles — bedding, towels, napkins, curtains in warm ivory, beige, and soft sage colors on natural linen surface, soft side daylight, shallow depth of field, 16:7 crop',
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
              <p className="eyebrow !text-white/90 mb-4">Our Products</p>
              <h1 className="text-white" style={{ maxWidth: '22ch' }}>
                Home Textiles and Apparel Programs, Fully Coordinated.
              </h1>
              <p className="mt-6 max-w-2xl" style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--text-body-lg)', lineHeight: 1.6 }}>
                From bed linen and towels to institutional and health-care programs, socks, kitchen textiles, and apparel — sourced, developed, and executed end-to-end.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="all-products" className="section">
        <div className="container-wide">
          <div className="section-heading">
            <p className="eyebrow">Product Categories</p>
            <h2 className="section-heading__title" style={{ maxWidth: '25ch' }}>
              Explore the Range We Regularly Source and Ship.
            </h2>
            <p className="section-heading__intro">
              Each category below is supported by an existing supplier network. Specific programs, constructions, and certifications should be confirmed in an initial brief.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12">
            {productCategories.map((p) => {
              const img = buildImageUrl(p.imagePrompt, 'portrait_4_3')
              return (
                <article key={p.id} id={p.slug} className="card scroll-mt-28">
                  <div className="card__image-wrap" style={{ aspectRatio: '4 / 5' }}>
                    <img src={img} alt={p.name} className="card__image" loading="lazy" />
                  </div>
                  <div className="card__body">
                    <div className="card__divider" />
                    <p className="card__eyebrow">Category</p>
                    <h3 className="card__title">{p.name}</h3>
                    <p className="card__desc">{p.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-10 items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow mb-4">Custom programs</p>
              <h2 className="mb-4" style={{ maxWidth: '25ch' }}>
                Don't see exactly what you're looking for?
              </h2>
              <p className="text-text-secondary max-w-2xl" style={{ fontSize: 'var(--text-body-lg)' }}>
                The list above is a summary of categories we work with regularly. If you need a specific construction, fiber blend, size, or finish, send the details to us and we will confirm the right partners and approach.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link to="/contact" className="btn-primary no-underline">
                Enquire about a custom program
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
