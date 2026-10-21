import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react'
import { company } from '../../data/content'
import { useState } from 'react'

const footerLinks = {
  About: [
    { to: '/about', label: 'Company Overview' },
    { to: '/about#what-we-do', label: 'What We Do' },
    { to: '/about#ceo-message', label: 'CEO Message' },
    { to: '/about#policy', label: 'Company Policy' },
  ],
  Products: [
    { to: '/products#bedding', label: 'Bedding' },
    { to: '/products#towels', label: 'Towels & Terry' },
    { to: '/products#curtains', label: 'Curtains' },
    { to: '/products#kitchen', label: 'Kitchen & Table' },
    { to: '/products', label: 'View all products' },
  ],
  Services: [
    { to: '/services#sourcing', label: 'Textile Sourcing' },
    { to: '/services#product-development', label: 'Product Development' },
    { to: '/services#order-execution', label: 'Order Execution' },
    { to: '/services#compliance', label: 'Factory Compliance' },
    { to: '/services#inspection', label: 'Third-Party Inspection' },
  ],
  Contact: [
    { to: '/contact', label: 'Enquiry Form' },
    { to: `mailto:${company.email}`, label: company.email },
    { to: `tel:${company.phone.replace(/\s+/g, '')}`, label: company.phone },
  ],
} as const

export default function Footer() {
  const [open, setOpen] = useState<Record<string, boolean>>({})
  const toggle = (key: string) => setOpen((s) => ({ ...s, [key]: !s[key] }))

  return (
    <footer className="footer-bg text-white">
      <div className="container-wide pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center bg-white px-3 py-2 rounded-sm">
                <span className="font-display font-semibold text-xl text-primary">
                  Texworld<span style={{ color: '#B2834F' }}>Asia</span>
                </span>
              </div>
            </div>
            <p className="font-body text-white/85 leading-relaxed max-w-sm">
              {company.tagline}
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-3 no-underline text-white/85 hover:text-white transition-colors"
              >
                <span className="w-10 h-10 inline-flex items-center justify-center rounded-sm bg-white/10">
                  <Mail size={18} />
                </span>
                <span className="font-body">{company.email}</span>
              </a>
              <a
                href={`tel:${company.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-3 no-underline text-white/85 hover:text-white transition-colors"
              >
                <span className="w-10 h-10 inline-flex items-center justify-center rounded-sm bg-white/10">
                  <Phone size={18} />
                </span>
                <span className="font-body">{company.phone}</span>
              </a>
              <div className="inline-flex items-start gap-3">
                <span className="w-10 h-10 inline-flex shrink-0 items-center justify-center rounded-sm bg-white/10">
                  <MapPin size={18} />
                </span>
                <span className="font-body text-white/85 leading-relaxed">{company.address}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6">
            {(Object.keys(footerLinks) as Array<keyof typeof footerLinks>).map((col) => (
              <div key={col} className="border-t border-white/15 lg:border-t-0 pt-5 lg:pt-0">
                <button
                  type="button"
                  className="w-full lg:cursor-default flex lg:block items-center justify-between text-left"
                  onClick={() => toggle(col)}
                  aria-expanded={!!open[col]}
                >
                  <h4 className="font-display font-medium text-lg text-white">
                    {col}
                  </h4>
                  <ChevronDown
                    size={18}
                    className={`lg:hidden transition-transform ${open[col] ? 'rotate-180' : ''}`}
                  />
                </button>
                <ul
                  className={`lg:!block mt-4 space-y-3 ${open[col] ? 'block' : 'hidden'}`}
                >
                  {footerLinks[col].map((link) =>
                    'to' in link ? (
                      <li key={link.label}>
                        {link.to.startsWith('mailto:') || link.to.startsWith('tel:') ? (
                          <a
                            href={link.to}
                            className="no-underline text-white/85 hover:text-white transition-colors font-body"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            to={link.to}
                            className="no-underline text-white/85 hover:text-white transition-colors font-body"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-white/75 text-sm">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <span className="font-body text-white/75">
              Privacy & legal pages pending client approval.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
