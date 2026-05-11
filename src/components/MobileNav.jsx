import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Home, GraduationCap, Mail } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/courses', label: 'Courses', icon: BookOpen },
  { path: '/about', label: 'Ustadh', icon: GraduationCap },
  { path: '/contact', label: 'Contact', icon: Mail },
]

export default function MobileNav() {
  const location = useLocation()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2">
      <div className="max-w-sm mx-auto">
        <div className="flex items-center justify-around px-2 py-2 rounded-[2rem] shadow-2xl"
          style={{
            background: 'rgba(10, 26, 47, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(212, 175, 55, 0.12)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(212, 175, 55, 0.05)',
          }}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            const Icon = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-btn ${isActive ? 'active' : ''}`}
              >
                <Icon
                  size={20}
                  className={isActive ? 'text-gold' : ''}
                  style={isActive ? { filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.5))' } : {}}
                />
                <span style={{ fontSize: '9px', marginTop: '1px' }}>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
