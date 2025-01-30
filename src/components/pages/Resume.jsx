import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Code, Brain, Github, Database, Briefcase, GraduationCap, Award } from 'lucide-react';
import '../assets/styles/Resume.css';

const Resume = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: ['JavaScript', 'React', 'HTML & CSS', 'TypeScript'],
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      skills: ['Node.js', 'PostgreSQL', 'RESTful APIs', 'Express.js'],
    },
    {
      title: 'Tools & Version Control',
      icon: <Github className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Command Line'],
    },
    {
      title: 'Soft Skills',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management'],
    },
  ];

  const experience = [
    {
      title: 'Software Engineer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Working on full-stack development projects using modern technologies.',
      icon: <Briefcase className="w-6 h-6" />
    },
    // Add more experience items as needed
  ];

  const education = [
    {
      degree: 'Computer Science',
      school: 'University Name',
      period: '2019 - 2023',
      icon: <GraduationCap className="w-6 h-6" />
    },
    // Add more education items as needed
  ];

  const certifications = [
    {
      name: 'Full Stack Development',
      issuer: 'Certification Authority',
      date: '2023',
      icon: <Award className="w-6 h-6" />
    },
    // Add more certifications as needed
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="resume-container"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Resume & Experience</h2>
          <p className="text-gray-300">A comprehensive overview of my professional journey</p>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="resume-header"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">My Resume</h3>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/path_to_your_resume.pdf"
              download
              className="download-button"
            >
              <FileDown className="w-5 h-5" />
              <span>Download CV</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
          <motion.div 
            className="skills-grid"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="skill-category"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white">{category.title}</h4>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="skill-item"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    {exp.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    <p className="text-gray-400">{exp.company} • {exp.period}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    {edu.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.school} • {edu.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{cert.name}</h4>
                    <p className="text-gray-400">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;