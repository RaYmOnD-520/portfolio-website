import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

function Education() {
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

  const education = [
    {
      degree: 'Bachelor of Computer Science (Cybersecurity)',
      university: 'Swinburne University of Technology',
      period: 'Jul 2023 - Dec 2025',
      location: 'Melbourne, VIC, Australia',
      courseCategories: [
        {
          category: 'Programming & Development',
          courses: [
            'Object-Oriented Programming',
            'Software Architectures and Design',
            'Digital Design',
          ],
        },
        {
          category: 'Computing & AI',
          courses: [
            'Computing Technology Inquiry Project',
            'Computing Technology Design Project',
            'Computer Technology Project A & B (Final Year Project - 2 semesters)',
            'Computer Technology Innovative Project',
          ],
        },
        {
          category: 'Cybersecurity & Networking',
          courses: [
            'IT Security',
            'Malware Analysis',
            'Internet and Cybersecurity for Engineering Application',
            'Network Security and Resilience',
          ],
        },
        {
          category: 'Cloud & Infrastructure',
          courses: ['Cloud Computing Architecture'],
        },
        {
          category: 'Other',
          courses: [
            'Technology in an Indigenous Context Project',
            'Future Work Skills',
            'Business Digitalization',
          ],
        },
      ],
    },
    {
      degree: 'Diploma in Information Technology',
      university: 'Asia Pacific University of Technology and Innovation (APU/APIIT)',
      period: '2020 - 2022',
      location: 'Kuala Lumpur, Malaysia',
      courseCategories: [
        {
          category: 'Programming',
          courses: [
            'Java Programming',
            'Programming with Python',
            'Software Development Project',
          ],
        },
        {
          category: 'Computing & AI',
          courses: [
            'Introduction to Artificial Intelligence',
            'Networks and Networking',
          ],
        },
        {
          category: 'Mathematics',
          courses: ['Discrete Mathematics'],
        },
      ],
    },
  ];

  const certifications = [
    {
      name: 'Certificate of Completion: Claude Code 101',
      issuer: 'Anthropic',
      date: 'Jun 2026',
      credentialUrl: '#',
    },
    {
      name: 'Certificate of Completion: Claude 101',
      issuer: 'Anthropic',
      date: 'May 2026',
      credentialUrl: '#',
    },
  ];

  return (
    <section
      id="education"
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
        <motion.div variants={cardVariants} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <FaGraduationCap className="text-blue-400 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-blue-400 font-semibold mb-3">{edu.university}</p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaCalendarAlt size={12} />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaMapMarkerAlt size={12} />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Key Courses */}
              {edu.courseCategories && edu.courseCategories.length > 0 && (
                <div>
                  <p className="text-sm text-gray-400 mb-3 font-medium">Key Courses:</p>
                  <div className="space-y-3">
                    {edu.courseCategories.map((category, catIdx) => (
                      <div key={catIdx}>
                        <p className="text-xs text-blue-400 font-semibold mb-1.5">
                          {category.category}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {category.courses.map((course, courseIdx) => (
                            <span
                              key={courseIdx}
                              className="px-2.5 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-md border border-gray-700"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div variants={cardVariants} className="mt-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FaCertificate className="text-blue-400" />
            Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-gray-900/70 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">{cert.name}</h4>
                    <p className="text-purple-400 font-semibold text-sm mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-xs flex items-center gap-1">
                      <FaCalendarAlt size={10} />
                      {cert.date}
                    </p>
                  </div>
                </div>

                {/* View Credential Button */}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-200 font-medium text-sm"
                >
                  <FaExternalLinkAlt size={12} />
                  View Credential
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Education;
