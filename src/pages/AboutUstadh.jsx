import { motion } from 'framer-motion'
import { Award, BookOpen, Users, Heart, Quote, ChevronRight, CheckCircle } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import useScrollAnimation from '../hooks/useScrollAnimation.js'

const credentials = [
  'Hafidhul Quran (Memorized the Entire Quran)',
  'Fluent in Arabic Language (Ihdadiyy & Thanawiyy Certified)',
  'Currently Studying Arabic Education — LASU',
  'Certified Tajweed Expert',
]

const specialties = [
  {
    icon: BookOpen,
    title: 'Tajweed',
    description: 'Mastery of Quranic recitation rules with classical chains of transmission.',
  },
  {
    icon: Award,
    title: 'Hifdh',
    description: 'Proven methodology for Quran memorization with long-term retention.',
  },
  {
    icon: Users,
    title: 'Arabic Language',
    description: 'Comprehensive Arabic instruction from foundational to advanced levels.',
  },
  {
    icon: Heart,
    title: 'Islamic Studies (Adab)',
    description: 'Character development and Islamic etiquette rooted in Quranic teachings.',
  },
]

function SpecialtyCard({ specialty, index }) {
  const Icon = specialty.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-3d group glass-card rounded-3xl p-6 text-center
        hover:border-gold/20 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]
        transition-all duration-500"
    >
      <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-4">
        <Icon className="text-navy" size={26} />
      </div>
      <h3 className="text-lg font-bold text-cream mb-2 group-hover:text-gold transition-colors">{specialty.title}</h3>
      <p className="text-cream/60 text-sm leading-relaxed">{specialty.description}</p>
    </motion.div>
  )
}

export default function AboutUstadh() {
  const credRef = useScrollAnimation()
  const specialtyRef = useScrollAnimation()

  const handleTrial = () => {
    alert('Contact Ustadh on WhatsApp: 07061782456 to begin your learning journey!')
  }

  return (
    <PageTransition>
      <section className="min-h-screen py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0">
              <div className="w-full h-full rounded-full gold-gradient p-1">
                <div className="w-full h-full rounded-full bg-navy flex items-center justify-center overflow-hidden border-2 border-navy">
                  <img
                    src="/ustadh.jpeg"
                    alt="Ustadh Adebalogun Abdurrasheed"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="font-arabic text-xl md:text-2xl text-gold/30 mb-2" dir="rtl">
                الأستاذ عبد الرشيد أديبالوغون
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3">
                Ustadh <span className="text-gradient">Adebalogun Abdurrasheed</span>
              </h1>
              <p className="text-lg md:text-xl text-cream/60 mb-6">
                Dedicated Quran & Arabic Educator
              </p>

              <div ref={credRef} className="space-y-2">
                {credentials.map((cred, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-sm md:text-base text-cream/70"
                  >
                    <CheckCircle size={16} className="text-gold shrink-0" />
                    {cred}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              About <span className="text-gradient">Ustadh Adebalogun</span>
            </h2>
            <div className="space-y-4 text-cream/70 leading-relaxed">
              <p>
                Ustadh Adebalogun Abdurrasheed is a passionate Quran and Arabic instructor dedicated
                to making Islamic education accessible to all. A Hafidhul Quran, he memorized the
                entire Book of Allah at a young age and has since devoted his life to teaching and
                spreading Quranic knowledge. He holds certificates in Arabic language at both
                Ihdadiyy and Thanawiyy levels, demonstrating his strong foundation in classical
                Arabic.
              </p>
              <p>
                Currently pursuing his degree in Arabic Education at Lagos State University (LASU),
                Ustadh Adebalogun combines academic study with practical teaching experience. His
                journey reflects a deep commitment to both learning and sharing knowledge. As a
                Certified Tajweed Expert, he has helped numerous students improve their recitation
                and develop a profound connection with the Quran.
              </p>
              <p>
                Through Daarul-Irshād Academy, Ustadh Adebalogun teaches students with patience,
                clarity, and genuine care. His teaching philosophy centers on making Quranic and
                Arabic education accessible to everyone — regardless of age or background. He
                believes that every student can develop a meaningful relationship with the Quran
                with the right guidance and consistent effort.
              </p>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-20"
          >
            <div className="glass-card rounded-4xl p-8 md:p-12 relative overflow-hidden">
              <Quote className="absolute top-4 left-4 md:top-6 md:left-6 text-gold/10" size={64} />
              <div className="relative z-10 text-center">
                <p className="text-xl md:text-2xl text-cream/90 font-medium italic leading-relaxed mb-4">
                  "My goal is to help every student connect with the Quran on a deep, personal level"
                </p>
                <p className="text-gold font-semibold">— Ustadh Adebalogun Abdurrasheed</p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/5 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />
            </div>
          </motion.div>

          {/* Specialties */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
              Areas of <span className="text-gradient">Specialization</span>
            </h2>
            <p className="text-center text-cream/50 mb-10 max-w-xl mx-auto">
              Ustadh Adebalogun's expertise spans multiple Islamic sciences
            </p>

            <div ref={specialtyRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {specialties.map((s, i) => (
                <SpecialtyCard key={s.title} specialty={s} index={i} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={handleTrial}
              className="btn-gold px-10 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2
                hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all"
            >
              Start Learning Today
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
