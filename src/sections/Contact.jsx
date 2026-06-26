import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa6'
import astraImg from '../assets/Astra.png'

const SERVICE_ID  = 'service_xxxxxxx'   // replace with your EmailJS service ID
const TEMPLATE_ID = 'template_xxxxxxx'  // replace with your EmailJS template ID
const PUBLIC_KEY  = 'xxxxxxxxxxxx'       // replace with your EmailJS public key

const services = [
  'Something in mind?',
  'Full-Stack Web Development',
  'Frontend Development',
  'Backend / API Development',
  'NLP / AI Integration',
  'MERN Stack Project',
  'Bug Fixing & Optimization',
  'Consultation',
]

const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

export const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.service || form.service === 'Something in mind?') e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Please describe your idea'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          service: form.service,
          message: form.message,
          to_email: 'maliktooba26@gmail.com',
        },
        PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', service: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id='contact' className='relative w-full py-24 bg-black overflow-hidden'>

      {/* Blinking dots — varied sizes across entire section */}
      {[...Array(80)].map((_, i) => {
        const size = i < 10
          ? Math.random() * 6 + 7      // 10 big dots: 7–13px
          : i < 30
          ? Math.random() * 3 + 4      // 20 medium dots: 4–7px
          : Math.random() * 2 + 1.5    // 50 small dots: 1.5–3.5px
        return (
          <motion.div
            key={i}
            className='absolute rounded-full bg-white pointer-events-none'
            style={{
              width: size + 'px',
              height: size + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              boxShadow: size > 3 ? `0 0 ${size * 3}px rgba(255,255,255,0.6)` : 'none',
            }}
            animate={isTouch ? {} : { opacity: [0.1, size > 3 ? 0.9 : 0.6, 0.1], scale: [1, 1.5, 1] }}
            transition={isTouch ? {} : {
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        )
      })}

      {/* Top / bottom fades */}
      <div className='absolute top-0 left-0 right-0 h-48 z-10 pointer-events-none'
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }} />
      <div className='absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none'
        style={{ background: 'linear-gradient(to top, black, transparent)' }} />

      {/* Top-left teal orb */}
      <motion.div className='absolute -top-40 -left-40 w-150 h-150 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, #1cd8d2 0%, #302b63 60%, transparent 80%)', filter: 'blur(80px)', willChange: isTouch ? 'auto' : 'transform' }}
        animate={isTouch ? {} : { scale: [1, 1.3, 1], x: [0, 40, 0], y: [0, 30, 0], opacity: [0.4, 0.65, 0.4] }}
        transition={isTouch ? {} : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Bottom-right pink orb */}
      <motion.div className='absolute -bottom-40 -right-40 w-150 h-150 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, #ec4899 0%, #3b82f6 55%, transparent 80%)', filter: 'blur(80px)', willChange: isTouch ? 'auto' : 'transform' }}
        animate={isTouch ? {} : { scale: [1, 1.4, 1], x: [0, -40, 0], y: [0, -30, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={isTouch ? {} : { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      <div className='relative z-10 max-w-6xl mx-auto px-6'>

        {/* Heading */}
        <motion.div className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className='flex justify-center mb-4'>
            <span className='text-xs tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border'
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                borderColor: 'rgba(236,72,153,0.55)',
                boxShadow: '0 0 18px rgba(236,72,153,0.55), 0 0 40px rgba(59,130,246,0.3), inset 0 0 14px rgba(236,72,153,0.1)',
              }}>
              Get In Touch
            </span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-3'
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
            Let's Work Together
          </h2>
          <p className='text-white/40 text-sm'
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start'>

          {/* ── Left — info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className='flex flex-col gap-8'
          >
            {/* Floating astronaut visual */}
            <div className='relative flex items-center justify-center h-64 rounded-2xl border border-white/10 overflow-hidden'
              style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(12px)' }}>
              {/* Stars */}
              {[...Array(20)].map((_, i) => (
                <motion.div key={i}
                  className='absolute rounded-full bg-white'
                  style={{
                    width: Math.random() * 2 + 1 + 'px',
                    height: Math.random() * 2 + 1 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    opacity: Math.random() * 0.6 + 0.2,
                  }}
                  animate={isTouch ? {} : { opacity: [0.2, 0.8, 0.2] }}
                  transition={isTouch ? {} : { duration: Math.random() * 3 + 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
                />
              ))}

              {/* Planet */}
              <motion.div
                className='absolute w-28 h-28 rounded-full'
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #4c1d95, #1e1b4b 60%, #0f0a1e)',
                  boxShadow: '0 0 40px rgba(124,58,237,0.4)',
                  left: '15%', top: '50%', transform: 'translateY(-50%)',
                }}
                animate={isTouch ? {} : { y: [0, -8, 0] }}
                transition={isTouch ? {} : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-6 rounded-full border border-purple-500/40'
                  style={{ transform: 'translate(-50%, -50%) rotateX(75deg)' }} />
              </motion.div>

              {/* Girl astronaut image floating */}
              <motion.img
                src={astraImg}
                alt='Girl Astronaut'
                className='relative z-10 select-none'
                style={{
                  width: '160px',
                  filter: 'drop-shadow(0 0 24px rgba(236,72,153,0.6))',
                }}
                animate={isTouch ? {} : { y: [0, -16, 0], rotate: [-3, 3, -3] }}
                transition={isTouch ? {} : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Gradient overlay bottom */}
              <div className='absolute bottom-0 left-0 right-0 h-16 pointer-events-none'
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
            </div>

            {/* Contact info */}
            <div className='flex flex-col gap-4'>
              <a href='mailto:maliktooba26@gmail.com'
                className='flex items-center gap-4 px-5 py-4 rounded-xl border border-white/10 group transition-all duration-300 hover:border-pink-500/40'
                style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }}>
                <div className='w-10 h-10 rounded-full flex items-center justify-center shrink-0'
                  style={{ background: 'linear-gradient(135deg, #ec4899, #3b82f6)' }}>
                  <FaEnvelope className='text-white text-sm' />
                </div>
                <div>
                  <p className='text-white/40 text-xs mb-0.5' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Email</p>
                  <p className='text-white text-sm font-medium group-hover:text-pink-400 transition-colors'
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>maliktooba26@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Social links */}
            <div className='flex gap-3'>
              {[
                { icon: <FaFacebookF />,  href: 'https://facebook.com',                                  label: 'Facebook', color: '#1877f2' },
                { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/tooba-malik-445598386/', label: 'LinkedIn', color: '#0a66c2' },
                { icon: <FaGithub />,     href: 'https://github.com/Tooba-Malik-tech',               label: 'GitHub',   color: '#ec4899' },
              ].map(({ icon, href, label, color }) => (
                <motion.a key={label} href={href} target='_blank' rel='noreferrer'
                  whileHover={{ y: -4, scale: 1.1, boxShadow: `0 0 20px ${color}50` }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className='flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-white/60 hover:text-white text-sm transition-colors'
                  style={{ background: 'rgba(255,255,255,0.04)', fontFamily: "'Space Grotesk', sans-serif" }}
                  title={label}
                >
                  {icon}
                  <span className='text-xs hidden sm:block'>{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right — form ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='rounded-2xl border border-white/10 p-5 sm:p-8 flex flex-col gap-5'
              style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(14px)' }}
            >
              {/* Name */}
              <div>
                <label className='block text-xs font-semibold text-white/50 mb-2 tracking-widest uppercase'
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Your Name <span className='text-pink-400'>*</span>
                </label>
                <input
                  type='text' name='name' value={form.name} onChange={handleChange}
                  placeholder='Your Name'
                  className='w-full px-4 py-3 rounded-xl border text-white text-sm outline-none transition-all duration-300 placeholder-white/25'
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: errors.name ? '1px solid rgba(236,72,153,0.6)' : '1px solid rgba(255,255,255,0.1)',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                  onFocus={e => { e.target.style.border = '1px solid rgba(236,72,153,0.5)'; e.target.style.boxShadow = '0 0 20px rgba(236,72,153,0.1)' }}
                  onBlur={e => { e.target.style.border = errors.name ? '1px solid rgba(236,72,153,0.6)' : '1px solid rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }}
                />
                {errors.name && <p className='text-pink-400 text-xs mt-1' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className='block text-xs font-semibold text-white/50 mb-2 tracking-widest uppercase'
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Your Email <span className='text-pink-400'>*</span>
                </label>
                <input
                  type='email' name='email' value={form.email} onChange={handleChange}
                  placeholder='Your Email'
                  className='w-full px-4 py-3 rounded-xl border text-white text-sm outline-none transition-all duration-300 placeholder-white/25'
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: errors.email ? '1px solid rgba(236,72,153,0.6)' : '1px solid rgba(255,255,255,0.1)',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                  onFocus={e => { e.target.style.border = '1px solid rgba(236,72,153,0.5)'; e.target.style.boxShadow = '0 0 20px rgba(236,72,153,0.1)' }}
                  onBlur={e => { e.target.style.border = errors.email ? '1px solid rgba(236,72,153,0.6)' : '1px solid rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }}
                />
                {errors.email && <p className='text-pink-400 text-xs mt-1' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{errors.email}</p>}
              </div>

              {/* Service */}
              <div>
                <label className='block text-xs font-semibold text-white/50 mb-2 tracking-widest uppercase'
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Service Needed <span className='text-pink-400'>*</span>
                </label>
                <select
                  name='service' value={form.service} onChange={handleChange}
                  className='w-full px-4 py-3 rounded-xl border text-white text-sm outline-none transition-all duration-300 appearance-none cursor-pointer'
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: errors.service ? '1px solid rgba(236,72,153,0.6)' : '1px solid rgba(255,255,255,0.1)',
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: form.service ? 'white' : 'rgba(255,255,255,0.3)',
                  }}
                  onFocus={e => { e.target.style.border = '1px solid rgba(236,72,153,0.5)'; e.target.style.boxShadow = '0 0 20px rgba(236,72,153,0.1)' }}
                  onBlur={e => { e.target.style.border = errors.service ? '1px solid rgba(236,72,153,0.6)' : '1px solid rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }}
                >
                  {services.map(s => (
                    <option key={s} value={s} style={{ background: '#111', color: 'white' }}>{s}</option>
                  ))}
                </select>
                {errors.service && <p className='text-pink-400 text-xs mt-1' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{errors.service}</p>}
              </div>

              {/* Message */}
              <div>
                <label className='block text-xs font-semibold text-white/50 mb-2 tracking-widest uppercase'
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Explain Your Idea <span className='text-pink-400'>*</span>
                </label>
                <textarea
                  name='message' value={form.message} onChange={handleChange}
                  placeholder='Explain your idea...'
                  rows={5}
                  className='w-full px-4 py-3 rounded-xl border text-white text-sm outline-none transition-all duration-300 placeholder-white/25 resize-none'
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: errors.message ? '1px solid rgba(236,72,153,0.6)' : '1px solid rgba(255,255,255,0.1)',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                  onFocus={e => { e.target.style.border = '1px solid rgba(236,72,153,0.5)'; e.target.style.boxShadow = '0 0 20px rgba(236,72,153,0.1)' }}
                  onBlur={e => { e.target.style.border = errors.message ? '1px solid rgba(236,72,153,0.6)' : '1px solid rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }}
                />
                {errors.message && <p className='text-pink-400 text-xs mt-1' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{errors.message}</p>}
              </div>

              {/* Submit */}
              <motion.button
                type='submit'
                disabled={status === 'sending'}
                whileHover={status !== 'sending' ? { scale: 1.03, y: -2, boxShadow: '0 8px 30px rgba(236,72,153,0.5)' } : {}}
                whileTap={status !== 'sending' ? { scale: 0.97 } : {}}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className='relative overflow-hidden w-full py-3.5 rounded-xl text-sm font-semibold text-white group'
                style={{
                  background: status === 'success'
                    ? 'linear-gradient(135deg, #10b981, #059669)'
                    : status === 'error'
                    ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                    : 'linear-gradient(135deg, #ec4899, #3b82f6)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  transition: 'background 0.4s ease',
                }}
              >
                <span className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12' />
                <span className='relative z-10'>
                  {status === 'sending' ? '✦ Sending...' : status === 'success' ? '✓ Message Sent!' : status === 'error' ? '✕ Failed. Try again.' : 'Send Message →'}
                </span>
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
