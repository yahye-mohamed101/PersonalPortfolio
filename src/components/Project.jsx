import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, ArrowUpRight } from 'lucide-react';

const Project = ({ title, description, githubLink, websiteLink, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700"
    >
      <div className="relative group h-48 overflow-hidden">
        <img
          src={image || "/api/placeholder/400/300"}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>

        <div className="flex gap-4 mt-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </motion.a>

          {websiteLink && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-sm transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;