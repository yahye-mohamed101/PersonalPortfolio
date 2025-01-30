import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={
                <PageWrapper>
                  <AboutMe />
                </PageWrapper>
              } 
            />
            <Route 
              path="/portfolio" 
              element={
                <PageWrapper>
                  <Portfolio />
                </PageWrapper>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              } 
            />
            <Route 
              path="/resume" 
              element={
                <PageWrapper>
                  <Resume />
                </PageWrapper>
              } 
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;