import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const roles = ['Data Scientist', 'ML & Time Series Expert', '.'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentFullText.length) {
            setDisplayText(currentFullText.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentFullText.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-zinc-950 to-blue-950/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[600px] max-w-7xl mx-auto">

          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-zinc-800/80 backdrop-blur-md rounded-full border border-cyan-500/30 mb-12 z-10"
          >
            <span className="text-sm text-cyan-400">👋 Hello, I'm</span>
          </motion.div>

          {/* Horizontal Layout: Emmanuel | Image | Joshua */}
          <div className="relative flex items-center justify-center gap-4 md:gap-8 lg:gap-12 mb-10 w-full">

            {/* Left: "Emmanuel" */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl z-20 whitespace-nowrap"
            >
              Emmanuel
            </motion.h1>

            {/* Center: Profile Image (cut-out PNG style) */}
            <div className="relative flex items-center justify-center">
              {/* Soft light glow behind image - NOT circular */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute inset-0 z-10"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[120%] bg-gradient-to-b from-cyan-400/20 via-blue-500/25 to-cyan-500/15 blur-[60px]"
                />
              </motion.div>

              {/* Cut-out PNG Image - No containers, frames, or masks */}
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                src="https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjczNTI0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Emmanuel Joshua"
                className="relative z-50 w-[280px] h-[380px] md:w-[320px] md:h-[420px] lg:w-[360px] lg:h-[460px] object-cover object-top"
                style={{
                  filter: 'drop-shadow(0 30px 60px rgba(6, 182, 212, 0.4)) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.6))',
                }}
              />
            </div>

            {/* Right: "Joshua" */}
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 z-20 whitespace-nowrap"
            >
              Joshua
            </motion.h1>
          </div>

          {/* Role with typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl md:text-3xl text-zinc-400 h-12 flex items-center justify-center mb-8 z-10"
          >
            <span className="text-zinc-200">{displayText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-8 bg-cyan-400 ml-1"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-zinc-400 text-lg max-w-2xl mb-8 z-10 text-center"
          >
            Transforming data into actionable insights and building intelligent systems
            that drive innovation. Specialized in machine learning, artificial intelligence,
            and data-driven solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-4 flex-wrap justify-center mb-12 z-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              View Projects
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-cyan-500/50 rounded-full hover:bg-cyan-500/10 transition-colors backdrop-blur-sm"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex items-center gap-8 z-10"
          >
            <div className="text-center">
              <div className="text-3xl">5+</div>
              <div className="text-sm text-zinc-500">Years Experience</div>
            </div>
            <div className="h-12 w-px bg-zinc-800" />
            <div className="text-center">
              <div className="text-3xl">50+</div>
              <div className="text-sm text-zinc-500">Projects Completed</div>
            </div>
            <div className="h-12 w-px bg-zinc-800" />
            <div className="text-center">
              <div className="text-3xl">20+</div>
              <div className="text-sm text-zinc-500">Happy Clients</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-cyan-400" />
      </motion.div>
    </div>
  );
}