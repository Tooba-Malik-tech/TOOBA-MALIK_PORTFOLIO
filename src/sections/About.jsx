import React, { useRef, useState, useEffect, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import aboutImg from '../assets/About_us_image.jpeg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

const stats = [
  { label: 'Experience', value: '1+ Years' },
  { label: 'Specialty',  value: 'MERN Stack' },
  { label: 'Focus',      value: 'UI/UX & NLP' },
]

export const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const roles = useMemo(() => ["Frontend Developer", "MERN Stack Developer", "NLP Engineer"], [])
  const [roleIndex, setRoleIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex(v => v + 1)
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200)
      } else if (deleting && subIndex > 0) {
        setSubIndex(v => v - 1)
      } else if (deleting && subIndex === 0) {
        setDeleting(false)
        setRoleIndex(p => (p + 1) % roles.length)
      }
    }, deleting ? 40 : 60)
    return () => clearTimeout(timeout)
  }, [subIndex, roleIndex, deleting, roles])

  return (
    <section id='about' ref={ref} className='relative w-full py-24 bg-black overflow-hidden'>

      {/* Top fade — blends with Home section */}
      <div className='absolute top-0 left-0 right-0 h-64 z-10 pointer-events-none'
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }} />

      {/* Bottom fade — blends with Skills section */}
      <div className='absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none'
        style={{ background: 'linear-gradient(to top, black, transparent)' }} />

      {/* Top-right orb — teal/purple (same as Home) */}
      <motion.div
        className='absolute -top-40 -right-40 w-150 h-150 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, #1cd8d2 0%, #302b63 60%, transparent 80%)', filter: 'blur(80px)', willChange: 'transform' }}
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 30, 0], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Bottom-left orb — pink/blue (same as Home) */}
      <motion.div
        className='absolute -bottom-40 -left-40 w-150 h-150 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, #ec4899 0%, #3b82f6 55%, transparent 80%)', filter: 'blur(80px)', willChange: 'transform' }}
        animate={{ scale: [1, 1.4, 1], x: [0, 40, 0], y: [0, -30, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Center orb — violet accent (same as Home) */}
      <motion.div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, #1e1b4b 60%, transparent 80%)', filter: 'blur(90px)', willChange: 'transform' }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      <div className='relative z-10 max-w-5xl mx-auto px-6'>

        {/* Section badge */}
        <motion.div
          className='flex justify-center mb-10'
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className='text-xs tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border'
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              borderColor: 'rgba(236,72,153,0.55)',
              boxShadow: '0 0 18px rgba(236,72,153,0.55), 0 0 40px rgba(59,130,246,0.3), inset 0 0 14px rgba(236,72,153,0.1)',
            }}
          >
            Who I Am
          </span>
        </motion.div>

        {/* ── Top card ── */}
        <motion.div
          className='rounded-2xl border border-white/10 p-5 sm:p-8 md:p-10 mb-10'
          style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className='flex flex-col md:flex-row gap-8 items-start'>

            {/* Profile image with snake border effect */}
            <motion.div
              className='shrink-0 relative flex items-center justify-center mx-auto md:mx-0'
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '210px', height: '210px' }}
            >
              {/* SVG snake borders */}
              <svg
                width="210" height="210"
                className='absolute top-0 left-0'
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <linearGradient id='snakePink' x1='0%' y1='0%' x2='100%' y2='100%'>
                    <stop offset='0%' stopColor='#ec4899' />
                    <stop offset='100%' stopColor='#f9a8d4' />
                  </linearGradient>
                  <linearGradient id='snakeBlue' x1='0%' y1='0%' x2='100%' y2='100%'>
                    <stop offset='0%' stopColor='#3b82f6' />
                    <stop offset='100%' stopColor='#93c5fd' />
                  </linearGradient>
                  <filter id='glowPink'>
                    <feGaussianBlur stdDeviation='3' result='blur' />
                    <feMerge><feMergeNode in='blur' /><feMergeNode in='SourceGraphic' /></feMerge>
                  </filter>
                  <filter id='glowBlue'>
                    <feGaussianBlur stdDeviation='3' result='blur' />
                    <feMerge><feMergeNode in='blur' /><feMergeNode in='SourceGraphic' /></feMerge>
                  </filter>
                </defs>

                {/* Outer snake — clockwise pink, perimeter ≈ 820 */}
                <motion.rect
                  x='3' y='3' width='204' height='204' rx='20'
                  fill='none'
                  stroke='url(#snakePink)'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeDasharray='615 205'
                  filter='url(#glowPink)'
                  animate={{ strokeDashoffset: [0, -820] }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />

                {/* Inner snake — counter-clockwise blue, perimeter ≈ 724 */}
                <motion.rect
                  x='15' y='15' width='180' height='180' rx='16'
                  fill='none'
                  stroke='url(#snakeBlue)'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeDasharray='543 181'
                  filter='url(#glowBlue)'
                  animate={{ strokeDashoffset: [0, 724] }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
              </svg>

              {/* Image */}
              <img
                src={aboutImg}
                alt='Tooba Malik'
                className='relative z-10 object-cover object-top'
                style={{
                  width: '158px',
                  height: '158px',
                  borderRadius: '12px',
                  boxShadow: '0 0 40px rgba(236,72,153,0.3), 0 0 80px rgba(59,130,246,0.2)',
                }}
              />
            </motion.div>

            {/* Text content */}
            <div className='flex flex-col gap-3 flex-1'>
              <motion.h2 {...fadeUp(0.15)}
                className='text-3xl md:text-4xl font-bold'
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Tooba
              </motion.h2>

              <motion.div
                {...fadeUp(0.22)}
                className='text-sm font-semibold tracking-wide min-h-6'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span style={{
                  background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {roles[roleIndex].substring(0, subIndex)}
                </span>
                <span className='inline-block w-0.5 ml-0.5 bg-pink-400 animate-pulse align-middle' style={{ height: '1em' }} />
              </motion.div>

              <motion.p {...fadeUp(0.3)}
                className='text-white/70 text-sm md:text-base leading-relaxed mt-1'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                I build scalable, modern web applications with a strong focus on clean architecture,
                delightful UX, and performance. My toolkit spans React, Node.js, MongoDB, Express,
                and Python-based NLP — bringing ideas to life from concept to production with
                smooth interfaces and intelligent systems.
              </motion.p>

              {/* Stats */}
              <motion.div
                className='flex flex-wrap gap-3 mt-4'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.38 }}
              >
                {stats.map(({ label, value }, i) => (
                  <motion.div
                    key={label}
                    className='flex flex-col items-center px-5 py-3 rounded-xl border border-white/10 min-w-25'
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.42 + i * 0.1 }}
                    whileHover={{ borderColor: 'rgba(236,72,153,0.5)', scale: 1.05 }}
                  >
                    <span className='text-white/40 text-xs tracking-widest uppercase mb-1'
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{label}</span>
                    <span className='text-white font-bold text-sm text-center'
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{value}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                className='flex flex-wrap gap-3 mt-5'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.a
                  href='#projects'
                  whileHover={{ scale: 1.06, y: -3, boxShadow: '0 8px 30px rgba(236,72,153,0.5)' }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className='relative overflow-hidden px-6 py-2.5 rounded-full text-sm font-semibold text-white group'
                  style={{
                    background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  <span className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/25 to-transparent skew-x-12' />
                  <span className='relative z-10'>View Projects</span>
                </motion.a>

                <motion.a
                  href='#contact'
                  whileHover={{ scale: 1.06, y: -3, boxShadow: '0 8px 30px rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.6)' }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className='px-6 py-2.5 rounded-full text-sm font-semibold text-white border border-white/30'
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Get in Touch
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ── About Me card ── */}
        <motion.div
          className='rounded-2xl border border-white/10 p-5 sm:p-8 md:p-10'
          style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h3 {...fadeUp(0.15)}
            className='text-2xl font-bold text-white mb-4'
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            About Me
          </motion.h3>

          <motion.p {...fadeUp(0.25)}
            className='text-white/60 text-sm md:text-base leading-relaxed mb-3'
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            I'm a passionate developer and NLP enthusiast — focused on building fast, resilient
            full-stack web applications and intelligent language-driven systems. I love turning
            complex ideas into clean, user-friendly products that make a real impact.
          </motion.p>

          <motion.p {...fadeUp(0.35)}
            className='text-white/40 text-sm leading-relaxed'
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            When I'm not coding, I'm exploring the latest in AI, contributing to open-source,
            and continuously sharpening my skills across the full development stack.
          </motion.p>
        </motion.div>

      </div>
    </section>
  )
}
