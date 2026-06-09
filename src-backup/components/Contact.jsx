import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
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

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'wonghuaiwen@gmail.com',
      link: 'mailto:wonghuaiwen@gmail.com',
      color: 'blue',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/wong-huai-wen-5447701b3',
      color: 'blue',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'Check out my repos',
      link: 'https://github.com/RaYmOnD-520',
      color: 'purple',
    },
  ];

  return (
    <section
      id="contact"
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
        <motion.div variants={cardVariants} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : '_self'}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={cardVariants}
              className={`bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-${method.color}-500 transition-all duration-300 hover:shadow-xl hover:shadow-${method.color}-500/10 hover:transform hover:-translate-y-1 flex flex-col items-center text-center group`}
            >
              <div className={`p-4 bg-${method.color}-500/20 rounded-full border border-${method.color}-500/30 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className={`text-${method.color}-400 text-3xl`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{method.label}</h3>
              <p className="text-gray-400 text-sm">{method.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          variants={cardVariants}
          className="text-center"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-blue-400" />
            <span>Based in Melbourne, VIC, Australia · Available for full-time roles</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
