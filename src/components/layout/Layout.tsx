import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useEffect } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { pathname, hash } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
      } else {
        window.scrollTo({ top: 0 })
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [pathname, hash])

  return (
    <div className="min-h-screen flex flex-col bg-bg text-text-primary">
      <Header transparentOverHero={false} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
