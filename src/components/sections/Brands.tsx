const brandsRow1 = [
  { src: '/brand1.png', alt: 'CARO' },
  { src: '/brand2.png', alt: 'Commonwealth' },
  { src: '/brand3.png', alt: 'Creative Bath' },
  { src: '/brand4.jpg', alt: 'Miro Radici Home Textile' },
  { src: '/brand5.png', alt: 'Ellis Curtain' },
  { src: '/brand6.png', alt: 'WestPoint Home' },
  { src: '/brand7.jpg', alt: 'Hedaya Home' },
  { src: '/brand8.jpg', alt: 'T.J. Maxx' },
]

const brandsRow2 = [
  { src: '/brand9.jpg', alt: 'Bed Bath & Beyond' },
  { src: '/brand10.jpg', alt: 'JCPenney' },
  { src: '/brand11.jpg', alt: 'Marshalls' },
  { src: '/brand12.jpg', alt: 'HomeGoods' },
  { src: '/brand13.jpg', alt: 'Winners HomeSense' },
  { src: '/brand14.jpg', alt: 'Costco' },
  { src: '/brand15.jpg', alt: 'Walmart' },
]

function BrandTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="brand-tile">
      <img src={src} alt={alt} loading="lazy" className="brand-logo" />
    </div>
  )
}

export default function Brands() {
  return (
    <section
      aria-label="Brands we supply"
      className="w-full"
      style={{ backgroundColor: '#FFFFFF', paddingTop: '72px', paddingBottom: '72px' }}
    >
      <div className="container-wide">
        <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto 48px' }}>
          <p
            style={{
              fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#3F6B4C',
              marginBottom: '16px',
            }}
          >
            Our Brand Partnerships
          </p>

          <h2
            style={{
              fontFamily: '"Fraunces", Georgia, "Times New Roman", serif',
              fontWeight: 460,
              fontSize: 'clamp(28px, 3.2vw, 40px)',
              lineHeight: 1.2,
              color: '#302B2B',
              margin: 0,
            }}
          >
            Distinctive brands. One trusted partner.
          </h2>

          <div
            style={{
              width: '48px',
              height: '2px',
              backgroundColor: '#3F6B4C',
              margin: '22px auto',
            }}
          />

          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#6B6464',
              margin: 0,
            }}
          >
            Connecting exceptional brands with reliable sourcing, thoughtful product development, and quality craftsmanship.
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            maskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div className="brand-track brand-track-left" style={{ marginBottom: '24px' }}>
            {[...brandsRow1, ...brandsRow1].map((brand, i) => (
              <BrandTile key={`${brand.alt}-${i}`} src={brand.src} alt={brand.alt} />
            ))}
          </div>

          <div className="brand-track brand-track-right">
            {[...brandsRow2, ...brandsRow2].map((brand, i) => (
              <BrandTile key={`${brand.alt}-${i}`} src={brand.src} alt={brand.alt} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .brand-track {
          display: flex;
          align-items: stretch;
          width: max-content;
          gap: 24px;
        }
        .brand-track-left {
          animation: scrollLeft 36s linear infinite;
        }
        .brand-track-right {
          animation: scrollRight 36s linear infinite;
        }
        .brand-track:hover {
          animation-play-state: paused;
        }
        .brand-tile {
          flex: 0 0 auto;
          width: 210px;
          height: 110px;
          background: #FFFFFF;
          border: 1px solid rgba(48,43,43,0.08);
          border-radius: 4px;
          box-shadow: 0 1px 3px rgba(48,43,43,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px 26px;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .brand-tile:hover {
          box-shadow: 0 6px 16px rgba(48,43,43,0.12);
          transform: translateY(-2px);
        }
        .brand-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .brand-track-left, .brand-track-right { animation: none; }
        }
      `}</style>
    </section>
  )
}