import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Tech Solutions Pvt. Ltd.',
    duration: '2024 – Present',
    type: 'Full-time',
    color: '#ec4899',
    points: [
      'Developed and maintained scalable MERN stack web applications with REST APIs.',
      'Built responsive, pixel-perfect UIs with React, Tailwind CSS, and Framer Motion.',
      'Integrated third-party APIs and services including payment gateways and auth systems.',
      'Collaborated with cross-functional teams to deliver features on tight deadlines.',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
  },
  {
    role: 'NLP Research Intern',
    company: 'AI Research Lab',
    duration: '2023 – 2024',
    type: 'Internship',
    color: '#3b82f6',
    points: [
      'Developed NLP pipelines for sentiment analysis and named entity recognition using BERT.',
      'Built and evaluated RAG systems with ChromaDB and LangChain for document Q&A.',
      'Designed FastAPI backend services to expose NLP models as production-ready APIs.',
      'Achieved significant accuracy improvements through fine-tuning transformer models.',
    ],
    tags: ['Python', 'FastAPI', 'BERT', 'LangChain', 'ChromaDB'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Digital Agency',
    duration: '2022 – 2023',
    type: 'Internship',
    color: '#1cd8d2',
    points: [
      'Built and optimized frontend components for client-facing web applications.',
      'Translated Figma designs into fully responsive React interfaces.',
      'Improved page load performance by 40% through code splitting and lazy loading.',
      'Participated in code reviews and Agile sprint ceremonies.',
    ],
    tags: ['React', 'JavaScript', 'CSS', 'Figma', 'Git'],
  },
  {
    role: 'Final Year Project – NLP Evaluation System',
    company: 'University Project',
    duration: '2022 – 2023',
    type: 'Academic',
    color: '#a855f7',
    points: [
      'Designed and implemented an AI-based Automated Essay Writing Evaluation system.',
      'Used BERT and SentenceTransformer for semantic similarity scoring.',
      'Built a FAISS-powered semantic search engine for question answering.',
      'Published research findings and presented at academic conference.',
    ],
    tags: ['BERT', 'FAISS', 'Python', 'NLP', 'SentenceTransformer'],
  },
]

const typeColors = {
  'Full-time': { bg: 'rgba(236,72,153,0.12)', border: 'rgba(236,72,153,0.35)', text: '#f9a8d4' },
  'Internship': { bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.35)', text: '#93c5fd' },
  'Academic': { bg: 'rgba(168,85,247,0.12)', border: 'rgba(168,85,247,0.35)', text: '#d8b4fe' },
}

const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

const ExperienceCard = ({ exp, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = index % 2 === 0
  const tc = typeColors[exp.type]

  return (
    <div ref={ref} className={`relative flex items-start gap-0 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

      {/* Mobile timeline dot */}
      <motion.div
        className='md:hidden absolute left-1.5 top-6 w-3 h-3 rounded-full z-10 shrink-0'
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        style={{ background: exp.color, boxShadow: `0 0 10px ${exp.color}` }}
      />

      {/* Card */}
      <motion.div
        className='flex-1 md:max-w-[calc(50%-2rem)] pl-8 md:pl-0'
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <div
          className='relative rounded-2xl border border-white/10 p-6 group overflow-hidden'
          style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(14px)',
            boxShadow: `0 0 0 0 ${exp.color}00`,
            transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = `0 0 40px ${exp.color}20`
            e.currentTarget.style.borderColor = `${exp.color}40`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
          }}
        >
          {/* Top accent line */}
          <div className='absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl'
            style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }} />

          {/* Shimmer on hover */}
          <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none' />

          {/* Header */}
          <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4'>
            <div>
              <h3 className='text-lg font-bold text-white leading-tight mb-0.5'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {exp.role}
              </h3>
              <p className='text-sm font-medium'
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: `linear-gradient(135deg, ${exp.color}, #ec4899)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                {exp.company}
              </p>
            </div>
            <div className='flex flex-col items-end gap-1.5'>
              <span className='text-xs text-white/40 font-mono' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {exp.duration}
              </span>
              <span className='text-[10px] px-2.5 py-0.5 rounded-full font-semibold tracking-wide'
                style={{ background: tc.bg, border: `1px solid ${tc.border}`, color: tc.text, fontFamily: "'Space Grotesk', sans-serif" }}>
                {exp.type}
              </span>
            </div>
          </div>

          {/* Bullet points */}
          <ul className='flex flex-col gap-2 mb-4'>
            {exp.points.map((pt, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className='flex items-start gap-2 text-white/60 text-sm leading-relaxed'
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className='mt-1.5 w-1.5 h-1.5 rounded-full shrink-0'
                  style={{ background: exp.color }} />
                {pt}
              </motion.li>
            ))}
          </ul>

          {/* Tags */}
          <div className='flex flex-wrap gap-2'>
            {exp.tags.map(tag => (
              <span key={tag}
                className='px-2.5 py-1 rounded-full text-xs border border-white/10 text-white/50'
                style={{ background: 'rgba(255,255,255,0.04)', fontFamily: "'Space Grotesk', sans-serif" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Center dot */}
      <div className='hidden md:flex flex-col items-center' style={{ width: '4rem', flexShrink: 0 }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 300 }}
          className='relative z-10 w-5 h-5 rounded-full border-2 border-white/20'
          style={{
            background: `radial-gradient(circle, ${exp.color}, ${exp.color}88)`,
            boxShadow: `0 0 16px ${exp.color}80, 0 0 32px ${exp.color}30`,
          }}
        >
          {/* Pulse ring */}
          {!isTouch && (
            <motion.div
              className='absolute inset-0 rounded-full'
              style={{ border: `2px solid ${exp.color}` }}
              animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </motion.div>
      </div>

      {/* Empty space on the other side */}
      <div className='hidden md:block flex-1 md:max-w-[calc(50%-2rem)]' />
    </div>
  )
}

export const Experience = () => {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 20%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id='experience' ref={sectionRef} className='relative w-full py-24 bg-black overflow-hidden'>

      {/* Top / bottom fades */}
      <div className='absolute top-0 left-0 right-0 h-48 z-10 pointer-events-none'
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }} />
      <div className='absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none'
        style={{ background: 'linear-gradient(to top, black, transparent)' }} />

      {/* Top-left teal orb */}
      <motion.div className='absolute -top-40 -left-40 w-150 h-150 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, #1cd8d2 0%, #302b63 60%, transparent 80%)', filter: 'blur(80px)', willChange: isTouch ? 'auto' : 'transform' }}
        animate={isTouch ? {} : { scale: [1, 1.3, 1], x: [0, 40, 0], y: [0, 30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={isTouch ? {} : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Bottom-right pink orb */}
      <motion.div className='absolute -bottom-40 -right-40 w-150 h-150 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, #ec4899 0%, #3b82f6 55%, transparent 80%)', filter: 'blur(80px)', willChange: isTouch ? 'auto' : 'transform' }}
        animate={isTouch ? {} : { scale: [1, 1.4, 1], x: [0, -40, 0], y: [0, -30, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={isTouch ? {} : { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      <div className='relative z-10 max-w-5xl mx-auto px-6'>

        {/* Section heading */}
        <motion.div className='text-center mb-20'
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
              My Journey
            </span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-3'
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
            Experience
          </h2>
          <p className='text-white/40 text-sm tracking-widest uppercase'
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Where I've Worked & What I've Built
          </p>
        </motion.div>

        {/* Timeline */}
        <div className='relative'>

          {/* Vertical center line — desktop only */}
          <div className='hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/8 rounded-full overflow-hidden'>
            <motion.div
              className='w-full rounded-full'
              style={{
                height: lineHeight,
                background: 'linear-gradient(to bottom, #ec4899, #3b82f6, #1cd8d2)',
                boxShadow: '0 0 10px rgba(236,72,153,0.6)',
              }}
            />
          </div>

          {/* Mobile left line */}
          <div className='md:hidden absolute left-3 top-0 bottom-0 w-px bg-white/10 rounded-full' />

          {/* Experience cards */}
          <div className='flex flex-col gap-14'>
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
