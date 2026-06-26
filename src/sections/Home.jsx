import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ParticlesBackground } from '../componants/ParticlesBackground'
import profileImg from "../assets/tooba's_profile_image.jpeg"
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa6'

export const Home = () => {
  const roles = useMemo(() => ["Frontend Developer", "MERN Stack Developer", "NLP Engineer"], []);
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex(v => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex > 0) {
        setSubIndex(v => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex(p => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section id="home" className="relative w-full h-screen bg-black overflow-hidden">
      <ParticlesBackground />

      {/* Top-left orb */}
      <motion.div
        className="absolute -top-40 -left-40 w-150 h-150 rounded-full"
        style={{ background: 'radial-gradient(circle, #1cd8d2 0%, #302b63 60%, transparent 80%)', filter: 'blur(80px)' }}
        animate={{ scale: [1, 1.3, 1], x: [0, 40, 0], y: [0, 30, 0], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Bottom-right orb */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-150 h-150 rounded-full"
        style={{ background: 'radial-gradient(circle, #ec4899 0%, #3b82f6 55%, transparent 80%)', filter: 'blur(80px)' }}
        animate={{ scale: [1, 1.4, 1], x: [0, -40, 0], y: [0, -30, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Center orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, #1e1b4b 60%, transparent 80%)', filter: 'blur(90px)' }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Bottom fade into About */}
      <div className='absolute bottom-0 left-0 right-0 h-64 z-10 pointer-events-none'
        style={{ background: 'linear-gradient(to bottom, transparent, black)' }} />

      {/* Content */}
      <div className='relative z-10 h-full w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-6 lg:gap-8 pt-20 pb-4 lg:pt-0 lg:pb-0'>

        {/* Left — text */}
        <div className='flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full max-w-xl'>

          {/* Mobile-only profile image */}
          <motion.div
            className='md:hidden flex items-center justify-center mb-3'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ position: 'relative', width: '140px', height: '140px' }}>

              {/* Outer ring — clockwise pink */}
              <motion.div
                style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '140px', height: '140px', borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, transparent 60%, #ec4899 80%, #f9a8d4 100%)',
                  filter: 'drop-shadow(0 0 8px rgba(236,72,153,0.8))',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div style={{ position: 'absolute', top: '3px', left: '3px', right: '3px', bottom: '3px', borderRadius: '50%', background: 'black' }} />
              </motion.div>

              {/* Inner ring — counter-clockwise blue */}
              <motion.div
                style={{
                  position: 'absolute', top: '11px', left: '11px',
                  width: '118px', height: '118px', borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, transparent 60%, #3b82f6 80%, #93c5fd 100%)',
                  filter: 'drop-shadow(0 0 6px rgba(59,130,246,0.8))',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                <div style={{ position: 'absolute', top: '3px', left: '3px', right: '3px', bottom: '3px', borderRadius: '50%', background: 'black' }} />
              </motion.div>

              {/* Profile image */}
              <img
                src={profileImg}
                alt="Tooba Malik"
                style={{
                  position: 'absolute', top: '20px', left: '20px',
                  width: '100px', height: '100px',
                  borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top',
                  zIndex: 10,
                  boxShadow: '0 0 24px rgba(236,72,153,0.35), 0 0 48px rgba(59,130,246,0.2)',
                }}
              />
            </div>
          </motion.div>

          {/* Welcome badge */}
          <motion.p
            className='text-xs sm:text-sm tracking-[0.3em] uppercase mb-2 sm:mb-4 px-4 py-1.5 rounded-full border w-fit mx-auto lg:mx-0'
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              borderColor: 'rgba(236,72,153,0.55)',
              boxShadow: '0 0 18px rgba(236,72,153,0.55), 0 0 40px rgba(59,130,246,0.3), inset 0 0 14px rgba(236,72,153,0.1)',
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to my portfolio
          </motion.p>

          {/* Typewriter role */}
          <motion.div
            className="mb-1 text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide min-h-[1.6em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span>{roles[index].substring(0, subIndex)}</span>
            <span className="inline-block w-0.5 ml-1 bg-white animate-pulse align-middle" style={{ height: '1em' }} />
          </motion.div>

          {/* Name */}
          <motion.h1
            className='text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight'
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Hello, I'm{' '}
            <span style={{
              background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Tooba</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-white/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            I craft seamless, high-impact web experiences — building modern full-stack applications with the MERN stack, developing intelligent NLP solutions, and designing responsive UIs that are fast, scalable, and visually compelling.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className='flex items-center gap-4 mb-4 sm:mb-8 flex-wrap'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {/* View My Work */}
            <div className='relative group'>
              <motion.a
                href='#projects'
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.93, y: 0, boxShadow: '0 0 32px rgba(236,72,153,0.8), 0 0 60px rgba(59,130,246,0.5)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className='relative overflow-hidden px-6 py-2.5 rounded-full text-sm font-semibold text-white block'
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
                  boxShadow: '0 8px 30px rgba(236,72,153,0.5)',
                }}
              >
                <span className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12' />
                <span className='relative z-10'>View My Work</span>
              </motion.a>
            </div>

            {/* My Resume — border glow float */}
            <motion.a
              href='/resume.pdf'
              target='_blank'
              whileHover={{ y: -5, scale: 1.05, borderColor: 'rgba(255,255,255,0.7)', boxShadow: '0 8px 30px rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.93, y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className='px-6 py-2.5 rounded-full text-sm font-semibold text-white border border-white/30'
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              My Resume
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className='flex items-center gap-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {[
              { icon: <FaFacebookF />,  href: 'https://facebook.com',                                       glow: '0 0 0 3px rgba(24,119,242,0.9), 0 0 20px rgba(24,119,242,0.5)' },
              { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/tooba-malik-445598386/',         glow: '0 0 0 3px rgba(10,102,194,1), 0 0 24px rgba(10,102,194,0.8)' },
              { icon: <FaGithub />,     href: 'https://github.com/Tooba-Malik-tech',                        glow: '0 0 0 3px rgba(236,72,153,0.9), 0 0 20px rgba(236,72,153,0.6)' },
            ].map(({ icon, href, glow }, i) => (
              <motion.a
                key={i}
                href={href}
                target='_blank'
                rel='noreferrer'
                whileHover={{ rotateY: 360, scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.85, boxShadow: glow }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className='w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white border border-white/20 hover:border-white/50 cursor-pointer transition-colors duration-300'
                style={{ fontSize: '1.1rem', background: 'transparent' }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right — profile image */}
        <motion.div
          className='hidden lg:flex items-center justify-center flex-1'
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Floating wrapper — moves everything up/down together */}
          <motion.div
            className='relative flex items-center justify-center'
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Outer ring — clockwise, own rotation unaffected */}
            <motion.div
              className='absolute'
              style={{
                width: '370px',
                height: '370px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, transparent 60%, #ec4899 80%, #f9a8d4 100%)',
                filter: 'drop-shadow(0 0 8px rgba(236,72,153,0.8))',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <div style={{ position: 'absolute', inset: '3px', borderRadius: '50%', background: 'black' }} />
            </motion.div>

            {/* Inner ring — counter-clockwise, own rotation unaffected */}
            <motion.div
              className='absolute'
              style={{
                width: '325px',
                height: '325px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, transparent 60%, #3b82f6 80%, #93c5fd 100%)',
                filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.8))',
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              <div style={{ position: 'absolute', inset: '3px', borderRadius: '50%', background: 'black' }} />
            </motion.div>

            {/* Profile image */}
            <img
              src={profileImg}
              alt="Tooba Malik"
              className='w-72 h-72 object-cover object-top rounded-full relative z-10'
              style={{ boxShadow: '0 0 60px rgba(236,72,153,0.3), 0 0 120px rgba(59,130,246,0.2)' }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
