'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const [splash, setSplash] = useState(false);

  // Function to handle CV download with splash effect
  const handleDownloadCV = () => {
    setSplash(true); // Trigger splash effect

    setTimeout(() => {
      setSplash(false); // Hide splash effect after animation
      const link = document.createElement('a');
      link.href = '/Bamidele_FullStack_CV.docx'; // Ensure the CV file is in the public folder
      link.download = 'Bamidele_FullStack_CV.docx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 800); // Delay download slightly for effect
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-black">
      {/* Subtle Animated Background Effect */}
      <div className="absolute inset-0 bg-noise opacity-10"></div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Animated Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg font-medium text-gray-500 dark:text-gray-400">
            Hi, I&apos;m{' '}
            <span className="text-purple-600 dark:text-purple-400">
              Bamidele
            </span>{' '}
            👋
          </h2>
          <h1 className="mt-2 text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Crafting Scalable Web Experiences
          </h1>

          {/* Animated Text Typing */}
          <TypeAnimation
            sequence={[
              'MERN Stack | Next.js | Full-Stack',
              2000,
              'Turning Ideas into Reality',
              2000,
              'Building Engaging Web Experiences',
              2000,
            ]}
            wrapper="div"
            speed={50}
            className="mt-4 text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-300"
            repeat={Infinity}
          />
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-400"
        >
          I&apos;m a passionate Full-Stack Developer with over seven (7) years
          of work experience,who loves building dynamic, high-performance web
          applications. My expertise spans across modern JavaScript frameworks,
          responsive UI design, and backend architectures.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 flex justify-center gap-6 flex-wrap"
        >
          {/* View My Work Button */}
          <motion.button
            onClick={scrollToProjects}
            whileHover={{
              scale: 1.05,
              background: [
                'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
                'linear-gradient(90deg, #3b82f6 0%, #9333ea 100%)',
              ],
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, hover: { duration: 0.4 } }}
            className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-noise opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="flex items-center gap-3">
              <span>View My Work</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'mirror',
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.button>

          {/* Download CV Button with Splash Effect */}
          <motion.button
            onClick={handleDownloadCV}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(147, 51, 234, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 text-lg font-semibold border-2 border-purple-600  text-gray-600 dark:text-purple-400 rounded-full shadow-2xl bg-transparent dark:bg-gray-900/30 overflow-hidden group"
          >
            {/* Splash Animation */}
            {splash && (
              <motion.div
                className="absolute inset-0 bg-purple-500/50 rounded-full"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            )}

            <div className="flex items-center gap-3 relative z-10">
              <motion.div
                whileHover={{
                  y: [0, -3, 0],
                  transition: { duration: 0.4, repeat: 1 },
                }}
              >
                <Download className="w-5 h-5" />
              </motion.div>
              <span>Download CV</span>
            </div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ y: '-100%' }}
              whileHover={{ y: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
