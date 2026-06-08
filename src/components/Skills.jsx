import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaCode,
  FaReact,
  FaShieldAlt,
  FaCloud,
  FaTools,
  FaBrain,
} from 'react-icons/fa';

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
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

  const skillCategories = [
    {
      title: 'Languages',
      icon: <FaCode size={24} />,
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'PHP', 'SQL', 'HTML/CSS', 'C#'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FaReact size={24} />,
      skills: ['React', 'Node.js', 'Pandas'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Networking & Security',
      icon: <FaShieldAlt size={24} />,
      skills: [
        'TCP/IP',
        'OSI Model',
        'Firewalls',
        'VPNs',
        'IDS/IPS',
        'Cryptography',
        'Malware Analysis',
        'YARA Rules',
      ],
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Cloud & Infrastructure',
      icon: <FaCloud size={24} />,
      skills: ['AWS', 'Cloud Architecture', 'IaaS/PaaS/SaaS'],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Tools & Platforms',
      icon: <FaTools size={24} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Claude Code', 'Jira', 'Confluence', 'Agile/Scrum'],
      color: 'from-yellow-500 to-amber-500',
    },
    {
      title: 'AI & Automation',
      icon: <FaBrain size={24} />,
      skills: ['Machine Learning', 'NLP', 'Claude API', 'OpenAI API'],
      color: 'from-indigo-500 to-violet-500',
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <motion.div
        className="max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={categoryVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}
                >
                  <span
                    className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  >
                    {category.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-600/50 text-gray-200 text-sm rounded-full border border-gray-600 hover:border-gray-500 transition-all duration-200 cursor-default hover:scale-105 transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
