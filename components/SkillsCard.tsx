'use client';

import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from 'framer-motion';
import { TechIcons } from './Icons';
import React, { useRef } from 'react';

const SkillsCard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Continuous rotation animation
  const startRotation = () => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: 'linear',
      },
    });
  };

  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;

    const rotateXValue = (e.clientY - centerY) / 10;
    const rotateYValue = (e.clientX - centerX) / 10;

    rotateX.set(rotateXValue);
    rotateY.set(-rotateYValue);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-12 bg-gradient-to-b from-gray-100 to-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          className="relative group flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

          <motion.div
            ref={ref}
            animate={controls}
            style={{
              rotateX: useTransform(rotateX, [-20, 20], [20, -20]),
              rotateY: useTransform(rotateY, [-20, 20], [-20, 20]),
            }}
            onHoverStart={() => controls.stop()}
            onHoverEnd={startRotation}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              rotateX.set(0);
              rotateY.set(0);
            }}
            className="rounded-full shadow-2xl overflow-hidden cursor-grab"
          >
            <Image
              src="/world.webp"
              width={480}
              height={480}
              alt="Bamidele"
              className="relative z-10 border-8 border-transparent bg-clip-padding backdrop-blur-xl bg-gray-800/30 dark:bg-gray-600/30 transition-all duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Skills Content */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Crafting Digital Excellence
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Merging technical expertise with problem-solving to build
              impactful solutions.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={containerVariants}
          >
            {/* Tech Stack */}
            <motion.div
              variants={itemVariants}
              className="p-5 rounded-2xl bg-gradient-to-b from-gray-200 to-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 backdrop-blur-lg border border-gray-300/50 hover:border-purple-500/30 dark:bg-gray-700/30 dark:border-gray-600/50 dark:hover:border-purple-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-500 mb-3">
                Core Stack
              </h3>
              <ul className="space-y-2 text-gray-800 dark:text-gray-200 text-sm">
                {[
                  'TypeScript',
                  'React/Next.js',
                  'Node.js',
                  'MongoDB',
                  'GraphQL',
                  'AWS',
                ].map((tech) => (
                  <li key={tech} className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-purple-500 rounded-full" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div
              variants={itemVariants}
              className="p-5 rounded-2xl bg-gradient-to-b from-gray-200 to-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 backdrop-blur-lg border border-gray-300/50 hover:border-blue-500/30 dark:bg-gray-700/30 dark:border-gray-600/50 dark:hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-3">
                Education & Certifications
              </h3>
              <div className="space-y-2 text-gray-800 dark:text-gray-200 text-sm">
                <div>
                  <p className="font-medium">BSc Physics/Electronics</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Federal University of Technology (2009)
                  </p>
                </div>
                <div className="h-px bg-gray-700/50 dark:bg-gray-600/50" />
                <div>
                  <p className="font-medium">Certifications</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Frontend Developer Certificate – Meta (Coursera, 2023)
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Full Stack Web Development Certification – freeCodeCamp
                    (2022)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            className="grid grid-cols-4 sm:grid-cols-5 gap-3"
            variants={containerVariants}
          >
            {[
              { icon: TechIcons.git, name: 'Git' },
              { icon: TechIcons.docker, name: 'Docker' },
              { icon: TechIcons.figma, name: 'Figma' },
              { icon: TechIcons.jest, name: 'Jest' },
              { icon: TechIcons.nextjs, name: 'Next Js' },
            ].map((tool) => (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                className="flex flex-col items-center p-3 rounded-xl bg-gradient-to-b from-gray-200 to-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 backdrop-blur-lg border border-gray-300/50 hover:border-purple-500/30 dark:bg-gray-700/30 dark:border-gray-600/50 dark:hover:border-purple-500/30 transition-all duration-200"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl text-purple-500 dark:text-purple-600">
                  {React.createElement(tool.icon)}
                </div>
                <span className="text-xs text-gray-700 dark:text-gray-300">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsCard;
