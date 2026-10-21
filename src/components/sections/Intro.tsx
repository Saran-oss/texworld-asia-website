import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CountUp from '../ui/CountUp'

export default function Intro() {
  const stats = [
    { to: 15, suffix: '+', label: 'Years in the Industry' },
    { to: 3, suffix: '', label: 'Continents Served — US, Canada & Europe' },
    { to: 10, suffix: '+', label: 'Product Categories Sourced' },
  ]

  return (
    <section id="intro" className="section" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
      <div className="container-wide">
        <p className="eyebrow mb-3">About Texworld Asia</p>
        <h2 className="mb-6" style={{ maxWidth: '18ch', fontSize: 'clamp(28px, 3.4vw, 42px)', lineHeight: 1.1, fontWeight: 500 }}>
          Your trusted partner on the ground in Pakistan.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-6 sm:gap-x-10 items-start">
          <div className="sm:col-span-7">
            <div className="space-y-3 measure text-text-secondary" style={{ fontSize: '15px', lineHeight: 1.55 }}>
              <p>
                Texworld Asia is a reliable firm in sourcing, product development, business development, order execution, factory compliance, and third-party inspections in Pakistan. We have been in this field for more than 15 years.
              </p>
              <p>
                We deal in fabric, fashion bedding, window curtains, towels and terry products, shower curtains, socks, institutional home textiles, health-care textiles, kitchen and table linens, and apparels — currently servicing US, Canadian, and European importers and retailers.
              </p>
              <p>
                Our core strength is the confidence and trust of our international buyers, and our core responsibility is to satisfy the needs and wants of those buyers at every stage of a program.
              </p>
            </div>

            <div className="mt-5">
              <button
                type="button"
                className="rounded-full bg-black text-xs font-medium uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-neutral-800"
                style={{ paddingLeft: "28px", paddingRight: "28px", paddingTop: "12px", paddingBottom: "12px" }}
              >
                More About Us
              </button>
            </div>
          </div>

          <div className="sm:col-span-5">
            <div className="flex flex-col">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="py-3"
                  style={{
                    borderTop: i === 0 ? '1px solid rgba(0,0,0,0.1)' : undefined,
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: '"Fraunces", Georgia, "Times New Roman", serif',
                      fontSize: 'clamp(26px, 2.4vw, 34px)',
                      fontWeight: 500,
                      color: '#302B2B',
                      lineHeight: 1,
                      display: 'inline-flex',
                      alignItems: 'baseline',
                    }}
                  >
                    <CountUp
                      from={0}
                      to={stat.to}
                      direction="up"
                      duration={1.4}
                      delay={0.15 * i}
                      separator=","
                    />
                    {stat.suffix}
                  </div>
                  <div
                    className="mt-1.5 text-text-secondary"
                    style={{ fontSize: '13px', lineHeight: 1.4 }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}