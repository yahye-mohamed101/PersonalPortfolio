import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import '../../assets/styles/aboutMe.css'

const AboutMe = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <img
              src="/api/placeholder/150/150"
              alt="Yahye Mohamed"
              className="rounded-full w-40 h-40 border-4 border-blue-500 shadow-lg"
            />
            <motion.div
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(59, 130, 246, 0.5)", "0px 0px 20px rgba(59, 130, 246, 0.2)"],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute inset-0 rounded-full"
            />
          </div>
          
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Yahye Mohamed
          </h1>
          <p className="text-xl text-gray-300 mb-8">Software Engineer & Problem Solver</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="prose prose-lg prose-invert mx-auto"
        >
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm passionate about programming and solving complex problems, finding joy in the analytical process of breaking down challenges through code. With an unwavering commitment to growth, I'm on a journey to evolve into a skilled software engineer who creates meaningful impact through technology.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              My approach combines technical expertise with creative problem-solving, whether I'm building web applications or diving deep into algorithms. I'm particularly focused on mastering both front-end and back-end development, embracing a full-stack mindset that allows me to create seamless, user-centered solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-blue-500 rounded-full text-sm font-medium">JavaScript</span>
              <span className="px-4 py-2 bg-blue-500 rounded-full text-sm font-medium">React</span>
              <span className="px-4 py-2 bg-blue-500 rounded-full text-sm font-medium">Node.js</span>
              <span className="px-4 py-2 bg-blue-500 rounded-full text-sm font-medium">TypeScript</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center mt-16"
        >
          <ChevronDown className="w-8 h-8 text-blue-500 mx-auto" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;