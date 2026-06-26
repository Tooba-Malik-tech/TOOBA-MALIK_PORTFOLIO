import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo } from "react";

export default function IntroAnimation({ onFinish }) {
  const greetings = useMemo(() => [
    "Hello", "Hola", "Bonjour",
    "Ciao", "Olá", "Здравствуйте",
    "Merhaba", "Γειά", "Hej", "Hallo", "Assalamoalaikum"
  ], []);

  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const id = setInterval(() => setIndex((i) => i + 1), 900);
      return () => clearInterval(id);
    } else {
      const t = setTimeout(() => setVisible(false), 1000);
      return () => clearTimeout(t);
    }
  }, [index, greetings.length]);

  const progress = ((index + 1) / greetings.length) * 100;

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Ambient pink orb top-left */}
          <motion.div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Ambient blue orb bottom-right */}
          <motion.div
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />

          {/* Top-left brand name */}
          <motion.div
            className="absolute top-6 left-4 sm:top-8 sm:left-10 text-sm tracking-[0.2em] sm:tracking-[0.35em] uppercase font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #ec4899, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Tooba Malik
          </motion.div>

          {/* Top-right counter */}
          <motion.div
            className="absolute top-6 right-4 sm:top-8 sm:right-10 font-mono text-xs tracking-widest text-white/30"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <span className="text-white/15"> / {String(greetings.length).padStart(2, "0")}</span>
          </motion.div>

          {/* Center greeting */}
          <div className="relative flex flex-col items-center gap-6 w-full px-6 sm:px-10">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                className="font-bold text-center select-none w-full"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(2rem, 10vw, 8rem)',
                  background: 'linear-gradient(135deg, #ffffff 30%, rgba(236,72,153,0.9) 70%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 30px rgba(236,72,153,0.3))',
                  wordBreak: 'break-word',
                }}
                initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.85, y: 30 }}
                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
                exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.1, y: -30 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                {greetings[index]}
              </motion.h1>
            </AnimatePresence>

            {/* Thin gradient line under text */}
            <motion.div
              className="h-px rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #ec4899, #3b82f6, transparent)' }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '160px', opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </div>

          {/* Bottom progress bar */}
          <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="w-52 h-px bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #ec4899, #3b82f6)', boxShadow: '0 0 10px rgba(236,72,153,0.7)' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
            {/* Dot indicators */}
            <div className="flex gap-1.5">
              {greetings.map((_, i) => (
                <motion.div
                  key={i}
                  className="rounded-full"
                  animate={{
                    width: i === index ? '16px' : '4px',
                    background: i === index
                      ? 'linear-gradient(90deg, #ec4899, #3b82f6)'
                      : i < index ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)',
                  }}
                  style={{ height: '4px' }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
