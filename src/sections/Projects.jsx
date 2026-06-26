import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import ragImg from '../assets/study-buddy-assistant.png'
import ragImgMobile from '../assets/study-buddy-assistant.png'
import elearningImg from '../assets/Elearning_Website.png'
import analytiqImg from '../assets/analytiq-dashboard.png'
import nexaImg from '../assets/real_time_chat_app.png'

const useIsMobile = (query = '(max-width: 639px)') => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.matchMedia(query).matches
  )
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia(query)
    const handler = (e) => setIsMobile(e.matches)
    mql.addEventListener('change', handler)
    setIsMobile(mql.matches)
    return () => mql.removeEventListener('change', handler)
  }, [query])
  return isMobile
}

export const Projects = () => {
  const isMobile = useIsMobile()
  const sceneRef = useRef(null)

  const projects = useMemo(() => [
    {
      title: 'Multi-Agent RAG Study Assistant',
      subtitle: 'CrewAI · ChromaDB · Flask · React',
      description: 'A 3-agent RAG pipeline (Retriever → Generator → Moderator) built with CrewAI and ChromaDB that answers questions from uploaded study material (PDF, PPTX, DOCX). Ships a custom SQuAD-based evaluation suite (F1/BLEU/ROUGE-L) that proves the moderator agent measurably improves answer accuracy over a single-agent baseline.',
      bgColor: '#0d0a1f',
      accentColor: '#7c3aed',
      link: '#',
      image: isMobile ? ragImgMobile : ragImg,
      tags: ['CrewAI', 'ChromaDB', 'Flask', 'React', 'RAG'],
      num: '01',
    },
    {
      title: 'Edvora — eLearning Platform',
      subtitle: 'HTML · CSS · JavaScript',
      description: 'A fully responsive eLearning website built from scratch with vanilla HTML, CSS, and JavaScript. Features course listings, hero sections, testimonials, and an intuitive navigation — all crafted with clean animations and a mobile-first layout.',
      bgColor: '#08111f',
      accentColor: '#38bdf8',
      link: '#',
      image: elearningImg,
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      num: '02',
    },
    {
      title: 'AnalytIQ — Real-Time Dashboard',
      subtitle: 'React 19 · Zustand · TanStack Query · Recharts',
      description: 'A production-grade analytics PWA with live data visualizations, offline capability, and auto-updating service worker. Features CSV export via Papaparse, PDF report generation with jsPDF, and GSAP-powered animations — built on React 19, Tailwind v4, and React Router v7 to showcase fullstack engineering at scale.',
      bgColor: '#05101a',
      accentColor: '#10b981',
      link: '#',
      image: analytiqImg,
      tags: ['React 19', 'Zustand', 'TanStack Query', 'Recharts', 'PWA', 'GSAP'],
      num: '03',
    },
    {
      title: 'Nexa — Real-Time Chat App',
      subtitle: 'React 19 · Node.js · Socket.io · MongoDB',
      description: 'A production-ready full-stack messaging platform with a WhatsApp-inspired Aurora Violet UI. Features real-time one-to-one & group chat, interactive polls, an event planner with OpenStreetMap integration, 125 Apple-style stickers, status stories with viewer lists, message replies, reactions, and secure JWT auth (access tokens in-memory, refresh tokens in httpOnly cookies). Architected to handle 1000+ concurrent users.',
      bgColor: '#0e0818',
      accentColor: '#a855f7',
      link: '#',
      image: nexaImg,
      tags: ['React 19', 'Socket.io', 'Node.js', 'MongoDB', 'JWT', 'Redux'],
      num: '04',
    },
  ], [isMobile])

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start start', 'end end'],
  })

  const thresholds = projects.map((_, i) => (i + 1) / projects.length)
  const [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = thresholds.findIndex((t) => v <= t)
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx)
  })

  const activeProject = projects[activeIndex]

  return (
    <section
      id='projects'
      ref={sceneRef}
      className='relative text-white'
      style={{ height: `${100 * projects.length}vh` }}
    >
      {/* Top / bottom fades */}
      <div className='absolute top-0 left-0 right-0 h-48 z-30 pointer-events-none'
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }} />
      <div className='absolute bottom-0 left-0 right-0 h-48 z-30 pointer-events-none'
        style={{ background: 'linear-gradient(to top, black, transparent)' }} />

      {/* Sticky viewport — background lives here (only 100vh repaint, not 400vh) */}
      <div className='sticky top-0 h-screen overflow-hidden flex flex-col'
        style={{
          backgroundColor: activeProject.bgColor,
          transition: 'background-color 600ms ease',
        }}
      >

        {/* Orbs */}
        <motion.div className='absolute -top-40 -left-40 w-150 h-150 rounded-full pointer-events-none z-0'
          style={{ background: 'radial-gradient(circle, #1cd8d2 0%, #302b63 60%, transparent 80%)', filter: 'blur(80px)', willChange: 'transform' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div className='absolute -bottom-40 -right-40 w-150 h-150 rounded-full pointer-events-none z-0'
          style={{ background: 'radial-gradient(circle, #ec4899 0%, #3b82f6 55%, transparent 80%)', filter: 'blur(80px)', willChange: 'transform' }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />

        {/* Header */}
        <div className='relative z-10 text-center pt-10 pb-4'>
          <span className='text-xs tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border inline-block mb-3'
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              borderColor: 'rgba(236,72,153,0.55)',
              boxShadow: '0 0 18px rgba(236,72,153,0.55), 0 0 40px rgba(59,130,246,0.3), inset 0 0 14px rgba(236,72,153,0.1)',
            }}>
            What I've Built
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold' style={{
            fontFamily: "'Space Grotesk', sans-serif",
            background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            My Projects
          </h2>
        </div>

        {/* Content area */}
        <div className='relative z-10 flex-1 flex items-start sm:items-center px-4 sm:px-6 md:px-12 lg:px-20 pb-16 overflow-y-auto lg:overflow-visible'>
          <div className='w-full max-w-6xl mx-auto'>

            {/* Projects stacked — each absolutely centered, fades in/out */}
            <div className='relative w-full' style={{ height: isMobile ? 'auto' : '62vh' }}>
              {projects.map((project, idx) => (
                <div
                  key={project.title}
                  className='transition-all duration-500'
                  style={{
                    position: isMobile ? 'relative' : 'absolute',
                    inset: isMobile ? 'auto' : 0,
                    display: isMobile && activeIndex !== idx ? 'none' : 'block',
                    opacity: !isMobile && activeIndex !== idx ? 0 : 1,
                    pointerEvents: activeIndex === idx ? 'auto' : 'none',
                    zIndex: activeIndex === idx ? 20 : 0,
                  }}
                >
                  <div className={`flex ${isMobile ? 'flex-col gap-4' : 'flex-row gap-10'} items-start sm:items-center h-full`}>

                    {/* Left — Project image */}
                    <div className={`relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shrink-0 ${isMobile ? 'w-full h-56' : 'h-full'}`}
                      style={{
                        width: isMobile ? '100%' : '55%',
                        boxShadow: `0 30px 80px rgba(0,0,0,0.6), 0 0 40px ${project.accentColor}20`,
                        transition: 'box-shadow 250ms ease',
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className='w-full h-full object-contain'
                        loading='lazy'
                        style={{ transition: 'filter 200ms ease', background: project.bgColor }}
                      />
                      {/* Top dark overlay */}
                      <div className='pointer-events-none absolute inset-0'
                        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 40%)' }} />
                      {/* Bottom overlay */}
                      <div className='pointer-events-none absolute inset-0'
                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 50%)' }} />

                      {/* Project number watermark */}
                      <div className='absolute top-4 right-5 text-white/10 font-bold select-none'
                        style={{ fontSize: '5rem', fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>
                        {project.num}
                      </div>

                      {/* Tags inside image bottom-left */}
                      <div className='absolute bottom-4 left-4 flex flex-wrap gap-2 z-10'>
                        {project.tags.map(tag => (
                          <span key={tag}
                            className='px-2.5 py-1 rounded-full text-xs border border-white/20 text-white/80'
                            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', fontFamily: "'Space Grotesk', sans-serif" }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Pulsing accent border */}
                      <motion.div className='absolute inset-0 rounded-2xl pointer-events-none'
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ boxShadow: `inset 0 0 0 1px ${project.accentColor}40` }}
                      />
                    </div>

                    {/* Right — Description */}
                    <AnimatePresence mode='wait'>
                      {activeIndex === idx && (
                        <motion.div
                          key={project.title}
                          initial={{ opacity: 0, x: 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -40 }}
                          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                          className='flex flex-col gap-5 flex-1'
                        >
                          {/* Accent line */}
                          <div className='h-1 w-12 rounded-full'
                            style={{ background: `linear-gradient(90deg, ${project.accentColor}, #ec4899)` }} />

                          {/* Title */}
                          <div>
                            <h3
                              className='font-bold text-white leading-tight mb-1'
                              style={{
                                fontFamily: "'Playfair Display', serif",
                                fontStyle: 'italic',
                                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                              }}
                            >
                              {project.title}
                            </h3>
                            <p className='text-sm font-semibold tracking-wide'
                              style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                background: `linear-gradient(135deg, ${project.accentColor}, #ec4899)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                              }}>
                              {project.subtitle}
                            </p>
                          </div>

                          {/* Description */}
                          <p className='text-white/60 leading-relaxed'
                            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem' }}>
                            {project.description}
                          </p>

                          {/* Buttons */}
                          <div className='flex gap-3 flex-wrap mt-2'>
                            <motion.a
                              href={project.link}
                              target='_blank'
                              rel='noopener noreferrer'
                              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 30px rgba(236,72,153,0.4)' }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                              className='relative overflow-hidden px-6 py-2.5 rounded-full text-sm font-semibold text-white group'
                              style={{
                                background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
                                fontFamily: "'Space Grotesk', sans-serif",
                              }}
                            >
                              <span className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/25 to-transparent skew-x-12' />
                              <span className='relative z-10'>View Project →</span>
                            </motion.a>

                            <motion.a
                              href='#'
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                              className='px-6 py-2.5 rounded-full text-sm font-semibold text-white/70 border border-white/20 hover:border-white/50 transition-colors'
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              Source Code ↗
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Dot indicators */}
        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5'>
          {projects.map((_, i) => (
            <motion.div key={i} className='rounded-full'
              animate={{
                width: i === activeIndex ? '26px' : '7px',
                background: i === activeIndex
                  ? 'linear-gradient(90deg, #ec4899, #3b82f6)'
                  : i < activeIndex ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.15)',
              }}
              style={{ height: '7px' }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
