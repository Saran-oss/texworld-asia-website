import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

interface HeaderProps {
  transparentOverHero?: boolean
}

export default function Header({ transparentOverHero = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!drawerOpen) return
    const drawer = drawerRef.current
    if (!drawer) return

    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (first) first.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false)
        triggerRef.current?.focus()
      }
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last?.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first?.focus()
          }
        }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  const onSurface = !transparentOverHero || scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container-wide">
        <div
          className={`flex items-center justify-between ${
            onSurface ? 'h-[72px] lg:h-[88px]' : 'h-[64px] lg:h-[88px]'
          }`}
        >
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Texworld Asia home">
            <div className="flex items-center justify-center" style={{ minWidth: 120 }}>
              <img
                src="/logo.png?v=1"
                alt="Texworld Asia"
                width={913}
                height={913}
                className="block"
                style={{
                  height: "clamp(40px, 5.5vw, 72px)",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `no-underline font-body font-medium tracking-[0.02em] transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-text-secondary hover:text-primary'
                  }`
                }
                style={{ fontSize: 'var(--text-nav)' }}
              >
                {({ isActive }) => (
                  <span className="relative inline-flex items-center h-10">
                    {l.label}
                    {isActive && (
                      <span
                        className="absolute left-0 right-0 -bottom-[2px] h-[2px]"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-black text-xs font-medium uppercase tracking-[0.1em] text-white no-underline transition-colors duration-200 hover:bg-neutral-800"
              style={{ paddingLeft: "32px", paddingRight: "32px", paddingTop: "14px", paddingBottom: "14px" }}
              onClick={() => window.scrollTo({ top: 0 })}
            >
              Request a Quote
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <button
            ref={triggerRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-sm text-primary"
          >
            <Menu size={22} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`lg:hidden fixed inset-0 z-[60] ${drawerOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!drawerOpen}
      >
        <div
          className={`absolute inset-0 bg-text-primary/40 transition-opacity ${
            drawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setDrawerOpen(false)}
          style={{ transitionDuration: '280ms' }}
        />
        <div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[360px] bg-bg shadow-float transition-transform flex flex-col`}
          style={{
            transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
            transitionDuration: '280ms',
            transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-border">
            <span className="font-display font-semibold text-xl text-primary">TexworldAsia</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => {
                setDrawerOpen(false)
                triggerRef.current?.focus()
              }}
              className="inline-flex items-center justify-center w-11 h-11 text-primary rounded-sm"
            >
              <X size={22} strokeWidth={2} />
            </button>
          </div>
          <nav className="flex-1 px-6 py-8 flex flex-col gap-1" aria-label="Mobile primary">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setDrawerOpen(false)}
                className={({ isActive }) =>
                  `no-underline py-4 px-2 font-body font-medium text-lg border-b border-border ${
                    isActive ? 'text-primary' : 'text-text-primary hover:text-primary'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="p-6 border-t border-border">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-black text-xs font-medium uppercase tracking-[0.1em] text-white no-underline transition-colors duration-200 hover:bg-neutral-800"
              style={{ paddingTop: "14px", paddingBottom: "14px" }}
              onClick={() => setDrawerOpen(false)}
            >
              Request a Quote
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}