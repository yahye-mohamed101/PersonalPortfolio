import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Code, Globe } from 'lucide-react';
import Project from '../Project';
import '../../assets/styles/Portfolio.css'

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'web', 'typescript', 'node'];

  const projects = [
    {
      id: 1,
      title: 'TuneForge',
      description: 'A web application that utilizes HTML, CSS, and JavaScript. It allows one to store audio files in multiple different playlists by dragging and dropping in your audio files into newly created playlists.',
      image: '/assets/images/tuneForge_screenshot.jpg',
      websiteLink: 'https://yahye-mohamed101.github.io/TuneForge/',
      githubLink: 'https://github.com/yahye-mohamed101/TuneForge',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      title: 'Employee Tracker',
      description: 'A command-line application built using TypeScript, Node.js, the Inquirer package, and PostgreSQL. This application creates an application that allows users to manage a company\'s employee database.',
      image: '/assets/images/employee-snip.PNG',
      githubLink: 'https://github.com/yahye-mohamed101/Employee-Tracker',
      category: 'typescript',
      technologies: ['TypeScript', 'Node.js', 'PostgreSQL']
    },
    // Add other projects here
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-300">Explore my latest works and personal projects</p>
        </motion.div>

        <div className="mb-8 space-y-4">
          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              />
            </div>
            <div className="flex gap-4">
              <Filter className="text-gray-400 w-5 h-5 mt-3" />
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchTerm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-300 text-lg">No projects found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Portfolio;