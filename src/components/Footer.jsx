import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessagesSquare, Mail, ArrowUpCircle } from 'lucide-react';
import '../assets/styles/footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yahye-mohamed101',
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yahye-mohamed-306988329/',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/28084430/yahye-mohamed',
      icon: <MessagesSquare className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <div className="flex flex-col space-y-2">
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:your.email@example.com"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </motion.a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-800 hover:text-blue-400 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="inline-flex items-center justify-center md:justify-end gap-2 hover:text-blue-400 transition-colors"
              >
                <ArrowUpCircle className="w-4 h-4" />
                <span>Back to Top</span>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Yahye Mohamed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;