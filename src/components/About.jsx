import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaLanguage } from 'react-icons/fa';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const highlights = [
    {
      icon: <FaGraduationCap size={24} />,
      title: 'Computer Science Graduate',
      description: 'Bachelor of Computer Science (Cybersecurity)',
      detail: 'Swinburne University of Technology • Dec 2025',
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: 'Based in Melbourne',
      description: 'Melbourne, VIC, Australia',
      detail: 'Originally from Malaysia',
    },
    {
      icon: <FaBriefcase size={24} />,
      title: 'Open to Work',
      description: 'Seeking full-time opportunities',
      detail: 'Full-stack development, cybersecurity, AI integration',
    },
    {
      icon: <FaLanguage size={24} />,
      title: 'Multilingual',
      description: 'English • Mandarin • Cantonese • Malay',
      detail: 'Fluent professional communication',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Avatar */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div
              className="w-64 h-64 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              }}
            >
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, white 0%, transparent 60%)',
                  }}
                />
              </div>
              <span className="text-8xl font-bold text-white relative z-10">RW</span>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Bio */}
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi! I'm Raymond, a Computer Science graduate from Malaysia, now based in Melbourne,
                Australia. I specialize in building full-stack web applications, AI-powered tools,
                and cybersecurity solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My experience spans cloud computing, e-commerce systems, and security research.
                I'm passionate about leveraging technology to create innovative, secure, and scalable
                solutions that make a real-world impact.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-blue-400 mt-1">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm mb-1">{item.description}</p>
                      <p className="text-gray-500 text-xs">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Resume Button */}
            <motion.div variants={itemVariants}>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
