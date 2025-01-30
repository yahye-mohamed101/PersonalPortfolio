import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import '../../assets/styles/contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300">I'd love to hear from you. Let's create something amazing together.</p>
        </motion.div>

        <motion.form
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700"
        >
          <div className="mb-6">
            <label className="flex gap-2 text-gray-300 mb-2">
              <User className="w-5 h-5" />
              <span>Name</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              placeholder="Your name"
            />
            {errors.name && <p className="mt-2 text-red-400 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-6">
            <label className="flex gap-2 text-gray-300 mb-2">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="mt-2 text-red-400 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label className="flex gap-2 text-gray-300 mb-2">
              <MessageSquare className="w-5 h-5" />
              <span>Message</span>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white h-32 resize-none"
              placeholder="Your message here..."
            />
            {errors.message && <p className="mt-2 text-red-400 text-sm">{errors.message}</p>}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;