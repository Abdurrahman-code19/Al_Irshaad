import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import MobileNav from './components/MobileNav.jsx'
import Footer from './components/Footer.jsx'
import IslamicPattern from './components/IslamicPattern.jsx'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen relative">
      <IslamicPattern />
      <Navbar />
      <main className="relative z-10 pt-0 md:pt-20 pb-safe">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}
