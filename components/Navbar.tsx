'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Toggle from './Toggle';
import { ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '#hero' },
  { name: 'Skills', path: '#skills' },
  { name: 'Work', path: '#approach' },
  { name: 'Projects', path: '#projects' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      className="fixed top-0 w-full bg-gradient-to-b from-white/80 to-white/20 dark:from-gray-900/80 dark:to-gray-900/20 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 z-50"
    >
      {/* Animated Background Layer */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_#6366f1_10%,_transparent_60%)] dark:bg-[radial-gradient(at_top_left,_#7c3aed_10%,_transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Animation */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 group"
          >
            <motion.div
              className="h-8 w-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            >
              B
            </motion.div>
            <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              bamidele.dev
            </span>
          </motion.a>

          {/* Centered Navigation Links with Hover Effects */}
          <div className="hidden lg:flex items-center gap-8 relative">
            {navItems.map((item) => (
              <motion.a
                key={item.path}
                href={item.path}
                className="relative px-4 py-2 text-gray-600 dark:text-gray-300 transition-colors"
                onHoverStart={() => setHoveredLink(item.path)}
                onHoverEnd={() => setHoveredLink(null)}
              >
                {item.name}
                {hoveredLink === item.path && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg"
                    layoutId="navHover"
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right Section: Animated Contact Button */}
          <div className="hidden lg:flex items-center gap-6">
            <motion.a
              href="#contact"
              className="relative overflow-hidden group flex items-center gap-3 px-6 py-2.5 border border-gray-500 rounded-full transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Contact
              </span>
              <motion.div
                className="relative"
                initial={{ x: 0 }}
                animate={{ x: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowUpRight className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
              </motion.div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            <Toggle />
          </div>

          {/* Mobile Menu Toggle with Animation */}
          <div className="lg:hidden flex items-center gap-4">
            <Toggle />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%', scale: 0.95 }}
              animate={{ x: 0, scale: 1 }}
              exit={{ x: '100%', scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-900 shadow-2xl z-50 border-l border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Navigation
                </span>
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ rotate: 90 }}
                >
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-gray-300"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              <div className="p-6 space-y-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.path}
                    href={item.path}
                    className="block text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  className="block mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full text-center font-medium shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
