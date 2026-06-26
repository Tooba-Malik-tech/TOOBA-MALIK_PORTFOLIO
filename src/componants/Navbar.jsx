import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['Home', 'Skills', 'About', 'Projects', 'Contact'];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [triggerHovered, setTriggerHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const mqHandler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', mqHandler);
    return () => mq.removeEventListener('change', mqHandler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navHidden = scrolled;
  const showFloating = scrolled && (isMobile || triggerHovered || menuOpen);

  return (
    <>
      {/* Full navbar — hides when scrolled */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: navHidden ? -80 : 0, opacity: navHidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className='fixed top-0 left-0 w-full z-50'
      >
        <div className='mx-auto px-8 py-4 flex items-center justify-between'>

          {/* Logo */}
          <motion.a
            href='#home'
            className='flex items-center gap-1 group'
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <span
              className='text-4xl leading-none group-hover:scale-110 transition-transform duration-300 inline-block'
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 8px rgba(236,72,153,0.5))',
              }}
            >T</span>
            <span
              className='text-xl leading-none'
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontWeight: 700,
                letterSpacing: '0.18em',
                background: 'linear-gradient(135deg, #f9a8d4, #93c5fd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >ooba</span>
          </motion.a>

          {/* Desktop nav links */}
          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                className='text-sm font-medium relative group/link'
              >
                <span className='text-white/80 group-hover/link:opacity-0 transition-opacity duration-300'>{item}</span>
                <span className='absolute inset-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-center'
                  style={{ background: 'linear-gradient(135deg, #ec4899, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {item}
                </span>
              </motion.a>
            ))}

            {/* Reach Out button */}
            <motion.a
              href='#contact'
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + navLinks.length * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className='relative overflow-hidden px-5 py-2 rounded-full text-sm font-semibold text-white group'
              style={{ background: 'linear-gradient(135deg, #ec4899, #3b82f6)' }}
            >
              <span className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/25 to-transparent skew-x-12' />
              <span className='absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                style={{ boxShadow: '0 0 18px 4px rgba(236,72,153,0.55)' }} />
              <span className='relative z-10 flex items-center gap-2'>
                Reach Out
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                >→</motion.span>
              </span>
            </motion.a>
          </div>

          {/* Mobile hamburger (inside full navbar) */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden flex flex-col gap-1.5 p-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Hover trigger zone — invisible strip at top center, only active when scrolled */}
      {scrolled && (
        <div
          className='fixed top-0 left-1/2 -translate-x-1/2 w-24 h-10 z-60'
          onMouseEnter={() => setTriggerHovered(true)}
          onMouseLeave={() => setTriggerHovered(false)}
        />
      )}

      {/* Floating hamburger — appears at top center on hover when scrolled */}
      <AnimatePresence>
        {showFloating && (
          <motion.div
            className='fixed top-3 left-1/2 -translate-x-1/2 z-60'
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onMouseEnter={() => setTriggerHovered(true)}
            onMouseLeave={() => setTriggerHovered(false)}
          >
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='flex flex-col gap-1.5 p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg'
              style={{ boxShadow: menuOpen ? '0 0 16px 3px rgba(236,72,153,0.4)' : '' }}
            >
              <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2 bg-pink-400' : 'bg-white'}`} />
              <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'bg-white'}`} />
              <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2 bg-blue-400' : 'bg-white'}`} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown menu from floating hamburger */}
      <AnimatePresence>
        {menuOpen && scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='fixed top-16 left-1/2 -translate-x-1/2 z-60 backdrop-blur-xl bg-black/70 border border-white/10 rounded-2xl shadow-2xl px-8 py-6 flex flex-col items-center gap-5 w-[90vw] max-w-xs'
          >
            {navLinks.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className='text-sm font-medium relative group/link'
              >
                <span className='text-white/80 group-hover/link:opacity-0 transition-opacity duration-300'>{item}</span>
                <span className='absolute inset-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-center'
                  style={{ background: 'linear-gradient(135deg, #ec4899, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {item}
                </span>
              </motion.a>
            ))}

            <motion.a
              href='#contact'
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              whileTap={{ scale: 0.95 }}
              className='relative overflow-hidden mt-1 px-5 py-2.5 rounded-full text-sm font-semibold text-white group'
              style={{ background: 'linear-gradient(135deg, #ec4899, #3b82f6)' }}
            >
              <span className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/25 to-transparent skew-x-12' />
              <span className='relative z-10 flex items-center gap-2'>
                Reach Out
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>→</motion.span>
              </span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile dropdown from full navbar (not scrolled) */}
      <AnimatePresence>
        {menuOpen && !scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='fixed top-16 left-0 w-full md:hidden overflow-hidden backdrop-blur-md bg-black/60 border-b border-white/10 z-50'
          >
            <div className='px-8 py-4 flex flex-col gap-4 items-center'>
              {navLinks.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                  className='text-sm font-medium relative group/link'
                >
                  <span className='text-white/80 group-hover/link:opacity-0 transition-opacity duration-300'>{item}</span>
                  <span className='absolute inset-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-center'
                    style={{ background: 'linear-gradient(135deg, #ec4899, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {item}
                  </span>
                </motion.a>
              ))}
              <motion.a
                href='#contact'
                onClick={() => setMenuOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.07 }}
                whileTap={{ scale: 0.95 }}
                className='relative overflow-hidden mt-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white text-center group'
                style={{ background: 'linear-gradient(135deg, #ec4899, #3b82f6)' }}
              >
                <span className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/25 to-transparent skew-x-12' />
                <span className='relative z-10 flex items-center gap-2'>
                  Reach Out
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>→</motion.span>
                </span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
