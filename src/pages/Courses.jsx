import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, PenTool, BookMarked, Clock, BarChart3, ChevronRight } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import useScrollAnimation from '../hooks/useScrollAnimation.js'

const courses = [
  {
    id: 1,
    icon: BookOpen,
    title: 'Quran Recitation (Tajweed)',
    description: 'Master proper pronunciation and Tajweed rules. Learn to recite the Quran with precision and beauty as revealed to Prophet Muhammad (PBUH).',
    duration: '2 levels (6 months each)',
    level: 'All levels',
    color: 'from-emerald-500 to-emerald-700',
    accent: 'border-emerald-500/30',
  },
  {
    id: 2,
    icon: BookMarked,
    title: 'Quran Memorization (Hifdh)',
    description: 'Personalized memorization plan tailored to your pace. With proper revision techniques and understanding of memorized portions.',
    duration: 'Flexible (1-3 years)',
    level: 'Intermediate',
    color: 'from-gold to-amber-600',
    accent: 'border-gold/30',
  },
  {
    id: 3,
    icon: PenTool,
    title: 'Arabic Language',
    description: 'Develop speaking, reading, and writing skills. Comprehensive program covering conversation, comprehension, and composition.',
    duration: '4 levels (3 months each)',
    level: 'Beginner to Advanced',
    color: 'from-blue-500 to-blue-700',
    accent: 'border-blue-500/30',
  },
  {
    id: 4,
    icon: GraduationCap,
    title: 'Arabic Grammar (Nahw & Sarf)',
    description: 'Understand Quranic Arabic deeply through systematic study of morphology and syntax. Unlock the meanings of Allah\'s words.',
    duration: '2 levels (4 months each)',
    level: 'Intermediate',
    color: 'from-purple-500 to-purple-700',
    accent: 'border-purple-500/30',
  },
]

function CourseCard({ course, index }) {
  const Icon = course.icon

  const handleEnroll = () => {
    alert('Contact Ustadh for enrollment. WhatsApp: 07061782456')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-3d group relative overflow-hidden glass-card rounded-4xl p-6 md:p-8
        hover:shadow-[0_0_60px_rgba(212,175,55,0.12)]
        transition-all duration-500 cursor-default"
      style={{
        borderColor: 'rgba(212,175,55,0.08)',
      }}
    >
      <div className={`absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        style={{
          background: `linear-gradient(135deg, rgba(212,175,55,0.03) 0%, transparent 60%)`,
        }}
      />

      <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-5 shadow-lg`}>
          <Icon className="text-white" size={28} />
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">
          {course.title}
        </h3>

        <p className="text-cream/60 text-sm md:text-base leading-relaxed mb-6">
          {course.description}
        </p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-cream/50">
            <Clock size={14} className="text-gold/60" />
            <span>Duration: <span className="text-cream/70">{course.duration}</span></span>
          </div>
          <div className="flex items-center gap-2 text-sm text-cream/50">
            <BarChart3 size={14} className="text-gold/60" />
            <span>Level: <span className="text-cream/70">{course.level}</span></span>
          </div>
        </div>

        <button
          onClick={handleEnroll}
          className="btn-gold px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 w-fit
            hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
        >
          Enroll Now
          <ChevronRight size={16} />
        </button>
      </div>
    </motion.div>
  )
}

export default function Courses() {
  const gridRef = useScrollAnimation()

  return (
    <PageTransition>
      <section className="min-h-screen py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-arabic text-2xl md:text-3xl text-gold/30 mb-4" dir="rtl">
              {''}خيركم من تعلم القرآن وعلمه{''}
            </p>
            <h1 className="section-title mb-4">
              Courses Offered by <span className="text-gradient">Ustadh Adebalogun</span>
            </h1>
            <p className="text-cream/50 max-w-2xl mx-auto">
              Comprehensive Islamic education programs designed to take you from wherever you are
              to wherever you want to be in your Quranic and Arabic journey.
            </p>
          </motion.div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
