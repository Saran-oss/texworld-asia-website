import { Link } from 'react-router-dom'
import { company } from '../../data/content'

const usefulLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About us' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact us' },
]

export default function Footer() {
  return (
    <footer className="footer-bg text-white">
      <div className="container-wide pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col gap-5">
<img
  src="/lo2.png"
  alt={company.name}
  className="h-24 w-auto max-w-[220px] object-contain -ml-3"
/>
  <p className="font-body text-white/80 leading-relaxed max-w-sm text-sm">
    {company.name} is a reliable name in sourcing, product/business
    development, execution, compliance and third-party inspections
    firm in Pakistan.
  </p>
</div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-medium text-lg text-white mb-4">
              Useful Links
            </h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="no-underline text-white/80 hover:text-white transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-display font-medium text-lg text-white mb-4">
              Address
            </h4>
            <p className="font-body text-white font-semibold mb-1">
              {company.name}
            </p>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              {company.address}
            </p>
            <p className="font-body text-white/80 mb-1">
              Email:{' '}
              <a
                href={`mailto:${company.email}`}
                className="text-white/80 hover:text-white transition-colors"
              >
                {company.email}
              </a>
            </p>
            <p className="font-body text-white/80">
              PH#:{' '}
              <a
                href={`tel:${company.phone.replace(/\s+/g, '')}`}
                className="text-white/80 hover:text-white transition-colors"
              >
                {company.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}