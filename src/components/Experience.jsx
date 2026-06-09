import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function Experience() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const experiences = [
    {
      title: 'Store Developer & Founder',
      company: 'PawSignal',
      period: 'Jan 2026 - Present',
      location: 'Melbourne, VIC, Australia (Remote)',
      type: 'Self-employed',
      responsibilities: [
        'Built and launched a live Shopify e-commerce store from scratch',
        'Handled all technical and operational aspects independently',
      ],
    },
    {
      title: 'Badminton Club President',
      company: 'Swinburne University',
      period: 'Jun 2025 - Dec 2025',
      location: 'Melbourne, VIC, Australia',
      type: 'Part-time',
      responsibilities: [
        "Led Swinburne's Badminton Club, guided club to win Best Sports Club of the Year 2025",
        'Oversaw operations, events, budgeting, and member management',
      ],
    },
    {
      title: 'Event & Experience Assistant',
      company: 'Swinburne Student Association',
      period: 'Mar 2025 - Dec 2025',
      location: 'Melbourne, VIC, Australia',
      type: 'On-site',
      responsibilities: [
        'Assisted with event logistics, setup, and on-ground coordination',
        'Communicated with students and stakeholders from diverse backgrounds',
      ],
    },
    {
      title: 'Bond Broker',
      company: "Harlow's & MGI Sdn Bhd",
      period: 'Sep 2022 - Feb 2023',
      location: 'Kuala Lumpur, Malaysia',
      type: 'Full-time',
      responsibilities: [
        'Operated on a live bond trading floor with real-time data entry using Bloomberg VCON',
        'Managed high-pressure phone communications with bank dealers',
      ],
    },
    {
      title: 'IT Technician Intern',
      company: "Harlow's & MGI Sdn Bhd",
      period: 'Jun 2022 - Aug 2022',
      location: 'Kuala Lumpur, Malaysia',
      type: 'Internship',
      responsibilities: [
        'Troubleshot computer hardware, software, and network issues',
        'Supported day-to-day IT operations',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <motion.div
        className="max-w-5xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-[48%] ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'}`}>
                  <div className="bg-gray-800/70 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                    {/* Header */}
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold mb-1.5">{exp.company}</p>
                      <div className="flex flex-wrap gap-2.5 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt size={11} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt size={11} />
                          {exp.location}
                        </span>
                      </div>
                      <span className="inline-block mt-1.5 px-2.5 py-0.5 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                        {exp.type}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start leading-snug">
                          <span className="text-blue-400 mr-2 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10" />
                  <div className="absolute w-8 h-8 bg-blue-500/20 rounded-full animate-ping" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[48%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
