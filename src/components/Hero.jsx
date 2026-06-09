import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'Software Developer',
    'Cybersecurity Specialist',
    'Full Stack Engineer',
    'AI Builder',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite 2s',
          }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-blue-400 text-lg font-medium">Hello, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Wong Huai Wen
            <span className="block text-4xl sm:text-5xl md:text-6xl mt-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Raymond
            </span>
          </motion.h1>

          {/* Typing Animation Subtitle */}
          <motion.div variants={itemVariants} className="mb-8 h-12">
            <motion.h2
              key={currentTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300"
            >
              {titles[currentTitle]}
            </motion.h2>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-6">
            <FaMapMarkerAlt className="text-blue-400" />
            <span className="text-gray-400">Melbourne, VIC, Australia</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Computer Science graduate based in Melbourne, Australia. I build AI-powered tools,
            full-stack web applications, and cybersecurity solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 text-blue-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/RaYmOnD-520"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/wong-huai-wen-5447701b3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="mailto:wonghuaiwen@gmail.com"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={32} />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.15;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
