import { useRef, useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BookOpen, GraduationCap, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import useScrollAnimation from '../hooks/useScrollAnimation.js'

gsap.registerPlugin(ScrollTrigger)

const arabicChars = ['ا', 'ل', 'ق', 'ر', 'ؤ', 'ن', 'ب', 'س', 'م', 'د', 'ع', 'و', 'ح', 'ي', 'ك', 'ت']

function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 24 + 14
        this.char = arabicChars[Math.floor(Math.random() * arabicChars.length)]
        this.speedY = Math.random() * 0.15 + 0.05
        this.speedX = (Math.random() - 0.5) * 0.1
        this.opacity = Math.random() * 0.12 + 0.04
        this.rotation = Math.random() * 360
        this.rotSpeed = (Math.random() - 0.5) * 0.2
      }
      update() {
        this.y -= this.speedY
        this.x += this.speedX
        this.rotation += this.rotSpeed
        if (this.y < -50) {
          this.y = canvas.height + 50
          this.x = Math.random() * canvas.width
        }
        if (this.x < -50 || this.x > canvas.width + 50) {
          this.x = Math.random() * canvas.width
        }
      }
      draw(ctx) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate((this.rotation * Math.PI) / 180)
        ctx.font = `${this.size}px 'Noto Naskh Arabic', serif`
        ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(this.char, 0, 0)
        ctx.restore()
      }
    }

    for (let i = 0; i < 25; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw(ctx)
      })
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

function StatsCounter() {
  const ref = useRef(null)
  const [counts, setCounts] = useState({ students: 0, years: 0 })
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        if (!animated) {
          setAnimated(true)
          const duration = 2
          const startTime = Date.now()
          const targets = { students: 35, years: 5 }

          const animate = () => {
            const elapsed = (Date.now() - startTime) / 1000
            const progress = Math.min(elapsed / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)

            setCounts({
              students: Math.floor(ease * targets.students),
              years: Math.floor(ease * targets.years),
            })

            if (progress < 1) requestAnimationFrame(animate)
          }
          animate()
        }
      },
    })

    return () => trigger.kill()
  }, [animated])

  const stats = [
    { label: 'Students Taught', value: counts.students, suffix: '+', icon: GraduationCap },
    { label: 'Years Experience', value: counts.years, suffix: '+', icon: Star },
  ]

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 md:gap-8 max-w-xl mx-auto">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div key={stat.label} className="glass-card rounded-3xl p-4 md:p-6 text-center">
            <Icon className="mx-auto mb-2 md:mb-3 text-gold" size={24} />
            <div className="text-lg md:text-2xl font-bold text-gradient mb-1 leading-tight">
              {stat.value}{stat.suffix}
            </div>
            <div className="text-xs md:text-sm text-cream/60">{stat.label}</div>
          </div>
        )
      })}
    </div>
  )
}

function CoursePreviewCard({ icon: Icon, title, description, link, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="card-3d group relative overflow-hidden glass-card rounded-4xl p-6 md:p-8 cursor-pointer
        hover:border-gold/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]
        transition-all duration-500"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mb-5">
          <Icon className="text-navy" size={28} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-cream mb-3">{title}</h3>
        <p className="text-cream/60 text-sm md:text-base leading-relaxed mb-6">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium text-sm transition-all group/link"
        >
          Learn More
          <ChevronRight size={16} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
      <div className="absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(212,175,55,0.03) 0%, transparent 50%)',
        }}
      />
    </motion.div>
  )
}

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const testimonials = [
    {
      text: "My Arabic improved so fast! Best classes ever.",
      name: "Jalaludeen",
      role: "Age 19",
    },
    {
      text: "I started as a complete beginner. Now I can read Arabic fluently. The teacher's patience and teaching style made all the difference.",
      name: "Awwal",
      role: "Age 15",
    },
    {
      text: "I love my Quran class! My teacher is very kind and helps me when I make mistakes. I have learned 5 new surahs this year.",
      name: "Al-Ameen",
      role: "Age 10",
    },
  ]

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-4xl p-8 md:p-10 relative"
      >
        <Quote className="text-gold/20 absolute top-6 left-6" size={48} />
        <div className="relative z-10">
          <p className="text-cream/80 leading-relaxed mb-6 italic">
            "{t.text}"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-navy font-bold">
              {t.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-cream">{t.name}</p>
              <p className="text-xs text-cream/50">{t.role}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold/30 transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-gold w-6' : 'bg-cream/20'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold/30 transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default function Home() {
  const statsRef = useScrollAnimation()
  const coursesRef = useRef(null)

  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, rgba(15,91,71,0.2) 0%, rgba(10,26,47,0.8) 60%, rgba(10,26,47,1) 100%)',
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="font-arabic text-3xl md:text-5xl text-gold/40 mb-6 leading-relaxed" dir="rtl">
              بسم الله الرحمن الرحيم
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <span className="text-cream">Welcome to</span>{' '}
            <span className="text-gradient">Daarul-Irshād</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="font-arabic text-2xl md:text-4xl text-gold/60 mb-6"
            dir="rtl"
          >
            أكاديمية دار الإرشاد
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Learn Quran & Arabic with <span className="text-gold font-semibold">Ustadh Adebalogun Abdurrasheed</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToCourses}
              className="btn-gold px-8 py-4 rounded-full text-base md:text-lg flex items-center gap-2"
            >
              Start Your Journey
              <ChevronRight size={20} />
            </button>
            <Link
              to="/about"
              className="btn-outline px-8 py-4 rounded-full text-base md:text-lg"
            >
              Meet Your Ustadh
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="animate-bounce text-cream/30">
            <ChevronRight size={24} className="rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our <span className="text-gradient">Impact</span>
          </motion.h2>
          <p className="text-center text-cream/50 mb-10 max-w-xl mx-auto">
            Dedicated to spreading Quranic and Arabic knowledge
          </p>
          <div ref={statsRef}>
            <StatsCounter />
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section ref={coursesRef} className="relative z-10 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Featured <span className="text-gradient">Courses</span>
          </motion.h2>
          <p className="text-center text-cream/50 mb-10 max-w-xl mx-auto">
            Choose your path to Quranic and Arabic mastery
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <CoursePreviewCard
              icon={BookOpen}
              title="Quran Studies"
              description="Master Quranic recitation with Tajweed rules and Hifdh memorization under expert guidance. Learn proper pronunciation and preserve the words of Allah."
              link="/courses"
              delay={0.1}
            />
            <CoursePreviewCard
              icon={GraduationCap}
              title="Arabic Language"
              description="Develop comprehensive Arabic skills including speaking, reading, writing, and deep grammatical understanding for Quranic comprehension."
              link="/courses"
              delay={0.3}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/courses"
              className="btn-outline px-8 py-3.5 rounded-full inline-flex items-center gap-2"
            >
              View All Courses
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            What <span className="text-gradient">Students Say</span>
          </motion.h2>
          <p className="text-center text-cream/50 mb-10 max-w-xl mx-auto">
            Hear from those who have studied with Ustadh Adebalogun
          </p>

          <Testimonials />
        </div>
      </section>
    </PageTransition>
  )
}
