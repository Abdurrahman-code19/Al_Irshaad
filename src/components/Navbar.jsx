import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Home, GraduationCap, Mail } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/courses', label: 'Courses', icon: BookOpen },
  { path: '/about', label: 'Ustadh', icon: GraduationCap },
  { path: '/contact', label: 'Contact', icon: Mail },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.jpeg"
              alt="Daarul-Irshād Academy"
              className="w-10 h-10 rounded-full object-cover border-2 border-gold/30 group-hover:border-gold/60 transition-all"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-cream group-hover:text-gold transition-colors leading-tight">
                Daarul-Irshād
              </span>
              <span className="text-xs font-arabic text-gold/70" style={{ fontSize: '11px' }}>
                أكاديمية دار الإرشاد
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-navy gold-gradient'
                      : 'text-cream/80 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
