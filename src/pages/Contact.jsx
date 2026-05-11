import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact Form Submission:', form)
    setSubmitted(true)
    alert('Jazakallah Khair! Ustadh will respond within 24 hours.')
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

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
              {''}وإذا سألك عبادي عني فإني قريب{''}
            </p>
            <h1 className="section-title mb-4">
              Reach Out to <span className="text-gradient">Ustadh Adebalogun</span>
            </h1>
            <p className="text-cream/50 max-w-2xl mx-auto">
              Have questions about courses, schedules, or fees? We'd love to hear from you.
              Ustadh personally reads every message.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="glass-card rounded-4xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-cream mb-6">Send a Message</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-cream/60 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full bg-white/5 border border-gold/10 rounded-2xl px-4 py-3 text-cream placeholder-cream/20 
                        focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-cream/60 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-gold/10 rounded-2xl px-4 py-3 text-cream placeholder-cream/20 
                        focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-cream/60 mb-1.5">Phone Number (optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07061782456"
                      className="w-full bg-white/5 border border-gold/10 rounded-2xl px-4 py-3 text-cream placeholder-cream/20 
                        focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-cream/60 mb-1.5">Subject *</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-gold/10 rounded-2xl px-4 py-3 text-cream 
                        focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all"
                    >
                      <option value="" disabled className="bg-navy">Select a subject</option>
                      <option value="quran" className="bg-navy">Quran Studies</option>
                      <option value="arabic" className="bg-navy">Arabic Language</option>
                      <option value="enrollment" className="bg-navy">Enrollment Inquiry</option>
                      <option value="schedule" className="bg-navy">Schedule & Fees</option>
                      <option value="other" className="bg-navy">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-cream/60 mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full bg-white/5 border border-gold/10 rounded-2xl px-4 py-3 text-cream placeholder-cream/20 
                        focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full py-3.5 rounded-2xl text-base font-semibold flex items-center justify-center gap-2
                      hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle size={18} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="glass-card rounded-4xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-cream mb-6">Contact Information</h2>

                <div className="space-y-5">
                  <a
                    href="mailto:adebalogunrasheed234@gmail.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-emerald/20 flex items-center justify-center shrink-0 group-hover:bg-emerald/30 transition-colors">
                      <Mail size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-cream/50">Email</p>
                      <p className="text-cream group-hover:text-gold transition-colors">
                        adebalogunrasheed234@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/2347061782456?text=As-salaamu%20Alaikum%20Warahmatullah.%20My%20name%20is%20%5BYour%20Name%5D%2C%20and%20I%20would%20like%20to%20enroll%20my%20child%20in%20this%20course."
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-emerald/20 flex items-center justify-center shrink-0 group-hover:bg-emerald/30 transition-colors">
                      <Phone size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-cream/50">WhatsApp</p>
                      <p className="text-cream group-hover:text-gold transition-colors">
                        07061782456
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald/20 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-cream/50">Location</p>
                      <p className="text-cream">Online</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-4xl p-6 md:p-8 text-center">
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <Clock size={28} className="text-navy" />
                </div>
                <h3 className="text-lg font-bold text-cream mb-2">Quick Response Time</h3>
                <p className="text-cream/60 text-sm mb-4">
                  Ustadh Adebalogun personally responds to all inquiries within 24 hours.
                  Jazakallah Khair for your patience.
                </p>
                <div className="inline-block glass rounded-2xl px-4 py-2">
                  <span className="text-gold text-sm font-medium flex items-center gap-2">
                    <CheckCircle size={14} />
                    Responds within 24 hours
                  </span>
                </div>
              </div>

              <div className="glass-card rounded-4xl p-6 md:p-8">
                <div className="text-center">
                  <p className="font-arabic text-lg text-gold/40 mb-1" dir="rtl">
                    {''}وجعلناكم شعوبا وقبائل لتعارفوا{''}
                  </p>
                  <p className="text-cream/40 text-xs">
                    "And We made you into nations and tribes that you may know one another" (49:13)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
