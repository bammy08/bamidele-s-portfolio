/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import clsx from 'clsx';
import { Briefcase, Clock, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Alethian',
    role: 'Frontend Engineer',
    duration: 'Sept 2024 - Dec 2024',
    location: 'Remote',
    description: [
      'Led development of a customer-facing application using React, Redux, and TypeScript.',
      'Optimized performance for large-scale applications, improving load times by 30%.',
      'Collaborated with UX/UI teams for seamless user experiences.',
    ],
    tech: [
      'React',
      'Redux',
      'TypeScript',
      'REST APIs',
      'Performance Optimization',
    ],
    color: 'blue',
  },
  {
    company: 'AoadTechnologies',
    role: 'Full Stack Developer',
    duration: 'Mar 2023 - May 2025',
    location: 'Remote',
    description: [
      'Built full-stack web applications using Node.js, Express, and MongoDB.',
      'Developed RESTful APIs and integrated third-party services.',
      'Designed and implemented the frontend using React & styled-components.',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Styled-components'],
    color: 'purple',
  },
  {
    company: 'Tangerine Life',
    role: 'Product Designer',
    duration: 'Jun 2021 - Feb 2023',
    location: 'Hybrid',
    description: [
      'Designed intuitive UI for mobile & web applications.',
      'Conducted user research & usability testing to enhance product design.',
      'Created wireframes, prototypes, and visual design assets.',
    ],
    tech: ['Figma', 'Adobe XD', 'Sketch', 'User Research', 'UI/UX Design'],
    color: 'green',
  },
  {
    company: 'Gateway International Church',
    role: 'Web Developer',
    duration: 'Feb 2020 - Present',
    location: 'Remote',
    description: [
      'Developed and maintained the church’s website using WordPress and PHP.',
      'Integrated a custom donation system and event calendar.',
      'Implemented responsive design to improve the site’s mobile experience.',
    ],
    tech: ['WordPress', 'PHP', 'HTML', 'CSS', 'SEO'],
    color: 'orange',
  },
];

const Experience = () => {
  return (
    <section className="w-full min-h-screen py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-2xl md:text-7xl font-bold text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-600 dark:to-blue-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Professional Journey
        </motion.h1>

        {/* 2-column on md, 3-column on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: any;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 12,
        delay: index * 0.15,
      },
    },
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: -10 },
  };

  const textSlideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3 },
    }),
  };

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center justify-center"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      <div
        className={clsx(
          'w-full p-6 rounded-3xl backdrop-blur-xl bg-white/80 border shadow-xl transition-all',
          'hover:shadow-2xl dark:bg-slate-800/80 relative overflow-hidden',
          {
            'border-blue-500/20 hover:shadow-blue-500/20':
              experience.color === 'blue',
            'border-purple-500/20 hover:shadow-purple-500/20':
              experience.color === 'purple',
            'border-green-500/20 hover:shadow-green-500/20':
              experience.color === 'green',
            'border-orange-500/20 hover:shadow-orange-500/20':
              experience.color === 'orange',
          }
        )}
      >
        {/* Animated background effect */}
        <motion.div
          className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-100/20 to-transparent dark:via-blue-900/10" />
        </motion.div>

        <div className="flex flex-col gap-4">
          <motion.div
            className="flex items-center gap-4"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-400"
              variants={iconVariants}
              whileHover="hover"
              whileTap="rest"
            >
              <Briefcase className="text-white" size={24} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                {experience.company}
              </h3>
              <motion.p
                className="text-md text-slate-600 dark:text-slate-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {experience.role}
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex gap-6 text-slate-600 dark:text-slate-400 text-sm"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex items-center gap-2"
              variants={textSlideUp}
              custom={0}
            >
              <Clock size={16} />
              <span>{experience.duration}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              variants={textSlideUp}
              custom={1}
            >
              <MapPin size={16} />
              <span>{experience.location}</span>
            </motion.div>
          </motion.div>

          <ul className="space-y-2">
            {experience.description.map((desc: string, i: number) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.4 + i * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
              >
                <motion.span
                  className="text-blue-500 dark:text-purple-400"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 1 + i * 0.3,
                  }}
                >
                  ▹
                </motion.span>
                {desc}
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="flex flex-wrap gap-2 text-xs"
            initial="hidden"
            animate="visible"
          >
            {experience.tech.map((tech: string, i: number) => (
              <motion.span
                key={tech}
                className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  delay: 0.5 + i * 0.05,
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
