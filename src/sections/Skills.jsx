import React from 'react'
import { motion } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
  SiMongodb, SiPython, SiDocker, SiFastapi,
  SiJavascript, SiExpress, SiGit, SiRedux, SiFlask,
} from 'react-icons/si'

const skills = [
  { icon: <SiReact />,       name: 'React',        color: '#61DAFB' },
  { icon: <SiNextdotjs />,   name: 'Next.js',      color: '#FFFFFF' },
  { icon: <SiJavascript />,  name: 'JavaScript',   color: '#F7DF1E' },
  { icon: <SiTypescript />,  name: 'TypeScript',   color: '#3178C6' },
  { icon: <SiNodedotjs />,   name: 'Node.js',      color: '#339933' },
  { icon: <SiExpress />,     name: 'Express.js',   color: '#FFFFFF' },
  { icon: <SiMongodb />,     name: 'MongoDB',      color: '#47A248' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#38BDF8' },
  { icon: <SiRedux />,       name: 'Redux',        color: '#764ABC' },
  { icon: <SiPython />,      name: 'Python',       color: '#3776AB' },
  { icon: <SiFastapi />,     name: 'FastAPI',      color: '#009688' },
  { icon: <SiFlask />,       name: 'Flask',        color: '#FFFFFF' },
  { icon: <SiDocker />,      name: 'Docker',       color: '#2496ED' },
  { icon: <SiGit />,         name: 'Git',          color: '#F05032' },
]

const doubled = [...skills, ...skills]

export const Skills = () => {
  return (
    <section id='skills' className='relative w-full py-24 bg-black overflow-hidden'>

      {/* Top fade — blends with About */}
      <div className='absolute top-0 left-0 right-0 h-64 z-20 pointer-events-none'
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }} />

      {/* Bottom fade */}
      <div className='absolute bottom-0 left-0 right-0 h-48 z-20 pointer-events-none'
        style={{ background: 'linear-gradient(to top, black, transparent)' }} />

      {/* Left fade on marquee */}
      <div className='absolute top-0 left-0 bottom-0 w-32 z-20 pointer-events-none'
        style={{ background: 'linear-gradient(to right, black, transparent)' }} />

      {/* Right fade on marquee */}
      <div className='absolute top-0 right-0 bottom-0 w-32 z-20 pointer-events-none'
        style={{ background: 'linear-gradient(to left, black, transparent)' }} />

      {/* Teal/purple orb — top-left */}
      <motion.div
        className='absolute -top-40 -left-40 w-150 h-150 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, #1cd8d2 0%, #302b63 60%, transparent 80%)', filter: 'blur(80px)' }}
        animate={{ scale: [1, 1.3, 1], x: [0, 40, 0], y: [0, 30, 0], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Pink/blue orb — bottom-right */}
      <motion.div
        className='absolute -bottom-40 -right-40 w-150 h-150 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, #ec4899 0%, #3b82f6 55%, transparent 80%)', filter: 'blur(80px)' }}
        animate={{ scale: [1, 1.4, 1], x: [0, -40, 0], y: [0, -30, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      <div className='relative z-10'>

        {/* Heading */}
        <motion.div
          className='text-center mb-14'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className='flex justify-center mb-4'>
            <span
              className='text-xs tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border'
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: '#ffffff',
                borderColor: 'rgba(236,72,153,0.55)',
                boxShadow: '0 0 18px rgba(236,72,153,0.55), 0 0 40px rgba(59,130,246,0.3), inset 0 0 14px rgba(236,72,153,0.1)',
              }}
            >
              What I Work With
            </span>
          </div>

          <h2
            className='text-3xl sm:text-4xl md:text-5xl font-bold mb-3'
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            My Skills
          </h2>
          <p className='text-white/40 text-sm tracking-widest uppercase'
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Modern Applications | Modern Technologies
          </p>
        </motion.div>

        {/* Marquee row 1 — left */}
        <div className='overflow-hidden mb-5'>
          <div className='flex gap-5 w-max' style={{ animation: 'marquee-left 35s linear infinite' }}>
            {doubled.map(({ icon, name, color }, i) => (
              <SkillCard key={i} icon={icon} name={name} color={color} />
            ))}
          </div>
        </div>

        {/* Marquee row 2 — right */}
        <div className='overflow-hidden'>
          <div className='flex gap-5 w-max' style={{ animation: 'marquee-right 40s linear infinite' }}>
            {[...doubled].reverse().map(({ icon, name, color }, i) => (
              <SkillCard key={i} icon={icon} name={name} color={color} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}

const SkillCard = ({ icon, name, color }) => (
  <div
    className='flex flex-col items-center gap-2 px-6 py-4 rounded-2xl border border-white/10 shrink-0 group cursor-default'
    style={{
      background: 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(12px)',
      minWidth: '100px',
      transition: 'border-color 0.3s, box-shadow 0.3s, background 0.3s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = color + '55'
      e.currentTarget.style.boxShadow = `0 0 24px ${color}25`
      e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
      e.currentTarget.style.boxShadow = 'none'
      e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
    }}
  >
    <span style={{ fontSize: '2rem', color }} className='transition-transform duration-300 group-hover:scale-110'>
      {icon}
    </span>
    <span
      className='text-white/50 text-xs font-medium whitespace-nowrap group-hover:text-white/90 transition-colors duration-300'
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {name}
    </span>
  </div>
)
