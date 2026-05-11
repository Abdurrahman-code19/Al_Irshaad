import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import AboutUstadh from './pages/AboutUstadh.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="about" element={<AboutUstadh />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
