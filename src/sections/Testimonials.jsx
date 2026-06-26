import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'Senior Software Engineer',
    company: 'Systems Ltd.',
    avatar: 'AR',
    color: '#ec4899',
    text: '"Tooba is an exceptional developer. Her attention to detail, clean code, and ability to deliver polished UI experiences made our collaboration seamless and highly productive."',
  },
  {
    name: 'Sara Khan',
    role: 'Product Manager',
    company: 'TechVentures PK',
    avatar: 'SK',
    color: '#3b82f6',
    text: '"Working with Tooba was an absolute pleasure. She built our entire MERN stack platform from scratch and delivered every feature on time. Highly recommend her skills!"',
  },
  {
    name: 'Usman Tariq',
    role: 'AI Research Lead',
    company: 'NLP Lab',
    avatar: 'UT',
    color: '#1cd8d2',
    text: '"Tooba\'s NLP work on our project was outstanding. Her deep understanding of BERT, FastAPI, and RAG systems helped us deliver a production-grade AI application."',
  },
  {
    name: 'Fatima Malik',
    role: 'UI/UX Designer',
    company: 'PixelCraft Studio',
    avatar: 'FM',
    color: '#a855f7',
    text: '"From concept to code, Tooba brings ideas to life beautifully. Her React skills and eye for design make her one of the best frontend developers I\'ve had the pleasure of working with."',
  },
]

const TestimonialCard = ({ t, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className='relative rounded-2xl border border-white/10 p-7 flex flex-col gap-5 group overflow-hidden cursor-default'
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(14px)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${t.color}45`
        e.currentTarget.style.boxShadow = `0 0 40px ${t.color}18`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top accent line */}
      <div className='absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl'
        style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }} />

      {/* Shimmer on hover */}
      <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/4 to-transparent skew-x-12 pointer-events-none' />

      {/* Big quote icon */}
      <div className='absolute top-5 right-6 opacity-8'>
        <FaQuoteLeft style={{ fontSize: '3.5rem', color: t.color, opacity: 0.12 }} />
      </div>

      {/* Avatar + name */}
      <div className='flex items-center gap-4'>
        <motion.div
          className='w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 border-2'
          style={{
            background: `linear-gradient(135deg, ${t.color}55, ${t.color}22)`,
            borderColor: `${t.color}50`,
            fontFamily: "'Space Grotesk', sans-serif",
            boxShadow: `0 0 16px ${t.color}30`,
          }}
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          {t.avatar}
        </motion.div>

        <div>
          <p className='text-white font-semibold text-sm leading-tight'
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.name}
          </p>
          <p className='text-xs mt-0.5'
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: `linear-gradient(135deg, ${t.color}, #ec4899)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
            {t.role} · {t.company}
          </p>
        </div>
      </div>

      {/* Quote */}
      <p className='text-white/60 text-sm leading-relaxed italic'
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {t.text}
      </p>

      {/* Star rating */}
      <div className='flex gap-1'>
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.12 + 0.4 + i * 0.06 }}
            style={{ color: t.color, fontSize: '0.9rem' }}
          >
            ★
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export const Testimonials = () => {
  return (
    <section id='testimonials' className='relative w-full py-24 bg-black overflow-hidden'>

      {/* Top / bottom fades */}
      <div className='absolute top-0 left-0 right-0 h-48 z-10 pointer-events-none'
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }} />
      <div className='absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none'
        style={{ background: 'linear-gradient(to top, black, transparent)' }} />

      {/* Top-left teal orb */}
      <motion.div className='absolute -top-40 -left-40 w-150 h-150 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, #1cd8d2 0%, #302b63 60%, transparent 80%)', filter: 'blur(80px)' }}
        animate={{ scale: [1, 1.3, 1], x: [0, 40, 0], y: [0, 30, 0], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Bottom-right pink orb */}
      <motion.div className='absolute -bottom-40 -right-40 w-150 h-150 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, #ec4899 0%, #3b82f6 55%, transparent 80%)', filter: 'blur(80px)' }}
        animate={{ scale: [1, 1.4, 1], x: [0, -40, 0], y: [0, -30, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      <div className='relative z-10 max-w-5xl mx-auto px-6'>

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
              Kind Words
            </span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-3'
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
            What People Say
          </h2>
          <p className='text-white/40 text-sm tracking-widest uppercase'
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Feedback from colleagues & collaborators
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
