/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Books.com',
    description: 'A modern e-commerce web app',
    image: '/book.png',
    tech: ['Next.js', 'TailwindCSS', 'MongoDB'],
    live: 'https://books-frontend-625x.onrender.com/',
    github: 'https://github.com/example',
  },
  {
    title: 'Holidays.com',
    description:
      'A responsive hotel booking system with dynamic pricing and calendar integration.',
    image: '/hotel.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://hotel-zmvj.onrender.com/',
    github: 'https://github.com/example',
  },
  {
    title: 'iCare',
    description: 'A doctors appointment booking website',
    image: '/icare.png',
    tech: ['Next.js', 'Framer Motion', 'TailwindCSS'],
    live: 'https://i-care-ecru.vercel.app',
    github: 'https://github.com/example',
  },
  {
    title: 'Learn.com',
    description: 'A learning management system website.',
    image: '/learn.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://learn-bqln.onrender.com',
    github: 'https://github.com/example',
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen py-32 bg-slate-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-6xl md:text-7xl font-bold text-center mb-24 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Crafted Innovations
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative group overflow-hidden rounded-[2.5rem] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xl hover:shadow-3xl transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transform transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

        {/* Floating number */}
        <motion.div
          className="absolute top-6 left-6 text-6xl font-bold text-white/10"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ repeat: Infinity, duration: 3, repeatType: 'mirror' }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.div>
      </div>

      <div className="p-8 space-y-6">
        <div className="flex items-start justify-between">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <div className="flex gap-3">
            <motion.a
              href={project.live}
              target="_blank"
              whileHover={{ y: -3 }}
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
            >
              <ExternalLink className="text-xl text-purple-600 dark:text-purple-400" />
            </motion.a>
            {/* <motion.a
              href={project.github}
              target="_blank"
              whileHover={{ y: -3 }}
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              <<Github className="text-xl text-blue-600 dark:text-blue-400" />
            </motion.a> */}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          {project.description}
        </p>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {project.tech.map((tech: string, index: number) => (
            <motion.span
              key={index}
              className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Hover effect elements */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl animate-float" />
      </div>
    </motion.div>
  );
};

export default Projects;
