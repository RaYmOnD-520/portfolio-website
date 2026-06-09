import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaStar } from 'react-icons/fa';

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const projects = [
    {
      title: 'RAG AI Assistant',
      period: 'Jun 2026 - Present',
      description:
        'A full-stack RAG (Retrieval-Augmented Generation) AI assistant that allows users to upload any PDF document and chat with it using Claude AI',
      tech: ['Python', 'FastAPI', 'ChromaDB', 'React', 'Tailwind CSS', 'Claude API'],
      github: 'https://github.com/RaYmOnD-520/rag-ai-assistant',
      status: 'Completed',
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
    >
      <motion.div
        className="max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl flex flex-col ${
                project.featured
                  ? 'border-blue-500 hover:border-blue-400 hover:shadow-blue-500/20 relative'
                  : 'border-gray-700 hover:border-gray-600 hover:shadow-gray-900/50'
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  <FaStar size={10} />
                  Featured
                </div>
              )}

              {/* Project Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.period}</p>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-md border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 font-medium"
              >
                <FaGithub size={18} />
                View on GitHub
              </a>
            </motion.div>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            variants={cardVariants}
            className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border-2 border-dashed border-gray-600 flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-gray-400 text-lg font-medium">More projects coming soon...</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
