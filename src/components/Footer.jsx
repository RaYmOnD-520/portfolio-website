import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const socialLinks = [
    {
      icon: FaGithub,
      link: 'https://github.com/RaYmOnD-520',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/wong-huai-wen-5447701b3',
      label: 'LinkedIn',
    },
    {
      icon: FaEnvelope,
      link: 'mailto:wonghuaiwen@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target={social.link.startsWith('http') ? '_blank' : '_self'}
              rel={social.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={social.label}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm">
          © 2026 Wong Huai Wen (Raymond). Built with React & Claude AI.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
