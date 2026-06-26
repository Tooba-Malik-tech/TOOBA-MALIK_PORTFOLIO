import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa6'

const socials = [
  { icon: <FaFacebookF />,  href: 'https://facebook.com',                                    label: 'Facebook', glow: 'rgba(24,119,242,0.9)' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/tooba-malik-445598386/',      label: 'LinkedIn', glow: 'rgba(10,102,194,1)'    },
  { icon: <FaGithub />,     href: 'https://github.com/Tooba-Malik-tech',                     label: 'GitHub',   glow: 'rgba(236,72,153,0.9)' },
]

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export const Footer = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer ref={ref} className='relative w-full bg-black overflow-hidden pt-24 pb-10'>

      {/* Top fade */}
      <div className='absolute top-0 left-0 right-0 h-48 pointer-events-none z-10'
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }} />

      {/* Teal orb — top-left */}
      <motion.div className='absolute -top-40 -left-40 w-150 h-150 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, #1cd8d2 0%, #302b63 60%, transparent 80%)', filter: 'blur(80px)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Pink orb — bottom-right */}
      <motion.div className='absolute -bottom-20 -right-40 w-150 h-150 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, #ec4899 0%, #3b82f6 55%, transparent 80%)', filter: 'blur(80px)' }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Subtle grid lines */}
      <div className='absolute inset-0 pointer-events-none opacity-[0.03]'
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className='relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center gap-10'>

        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4, boxShadow: '0 0 24px rgba(236,72,153,0.4)' }}
          whileTap={{ scale: 0.95 }}
          className='flex flex-col items-center gap-1 group cursor-pointer'
          style={{ background: 'none', border: 'none' }}
        >
          <motion.div
            className='w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white transition-colors'
            style={{ background: 'rgba(255,255,255,0.04)' }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↑
          </motion.div>
          <span className='text-white/30 text-xs tracking-widest uppercase group-hover:text-white/60 transition-colors'
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Back to Top
          </span>
        </motion.button>

        {/* Divider */}
        <motion.div
          className='w-full h-px'
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Big name */}
        <div className='text-center overflow-hidden'>
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className='font-bold leading-none select-none'
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
              background: 'linear-gradient(135deg, #ffffff 20%, #ec4899 55%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(236,72,153,0.25))',
            }}
          >
            Tooba
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            className='mx-auto mt-3 h-0.5 rounded-full'
            style={{ background: 'linear-gradient(90deg, #ec4899, #3b82f6)' }}
            initial={{ width: 0 }}
            animate={inView ? { width: '180px' } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Role badge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
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
          Full Stack Developer · NLP Engineer
        </motion.p>

        {/* Nav links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='flex flex-wrap justify-center gap-6'
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className='relative text-white/40 text-sm hover:text-white transition-colors duration-300 group'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.05 }}
            >
              {link}
              <span className='absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300 rounded-full'
                style={{ background: 'linear-gradient(90deg, #ec4899, #3b82f6)' }} />
            </motion.a>
          ))}
        </motion.nav>

        {/* Social icons */}
        <motion.div
          className='flex items-center gap-4'
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          {socials.map(({ icon, href, label, glow }) => (
            <motion.a
              key={label}
              href={href}
              target='_blank'
              rel='noreferrer'
              aria-label={label}
              whileHover={{ y: -5, scale: 1.2, boxShadow: `0 0 20px ${glow}` }}
              whileTap={{ scale: 0.88 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className='w-11 h-11 rounded-full flex items-center justify-center text-white/60 hover:text-white border border-white/15 hover:border-white/40 transition-colors duration-300'
              style={{ background: 'rgba(255,255,255,0.04)', fontSize: '1.1rem' }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.75 }}
          className='text-center text-white/35 text-sm italic max-w-md'
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          "Code is the closest thing we have to a superpower — and I intend to use it."
        </motion.blockquote>

        {/* Divider */}
        <motion.div
          className='w-full h-px'
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.85 }}
          className='flex flex-col sm:flex-row items-center justify-between w-full gap-2 text-white/25 text-xs'
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span>© {new Date().getFullYear()} Tooba Malik. All rights reserved.</span>
          <span>Built with React · Framer Motion · Tailwind CSS</span>
        </motion.div>

      </div>
    </footer>
  )
}
