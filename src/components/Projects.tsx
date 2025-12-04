import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/content';
import { BlurReveal } from './BlurReveal';

const blurRevealVariants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
  },
};

export const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'Built' | 'Concept'>('all');

  const filteredProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.status === filter);

  return (
    <section id="projects" className="py-20 container mx-auto px-6 md:px-12">
      {/* Filters mimicking the PDF visual style "Size Type status" */}
      <BlurReveal>
        <div className="flex gap-6 mb-8 text-sm text-gray-500 font-mono border-b pb-2 border-gray-200">
          <span className="cursor-pointer hover:text-black transition-colors">
            Size
          </span>
          <span className="cursor-pointer hover:text-black transition-colors">
            Type
          </span>
          <div className="flex gap-2">
            <span className="text-black font-semibold">status:</span>
            <button
              onClick={() => setFilter('all')}
              className={`hover:text-black ${
                filter === 'all' ? 'text-black underline' : ''
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('Built')}
              className={`hover:text-black ${
                filter === 'Built' ? 'text-black underline' : ''
              }`}
            >
              Built
            </button>
            <button
              onClick={() => setFilter('Concept')}
              className={`hover:text-black ${
                filter === 'Concept' ? 'text-black underline' : ''
              }`}
            >
              Concept
            </button>
          </div>
        </div>
      </BlurReveal>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-50px' }}
        transition={{ staggerChildren: 0.1 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={blurRevealVariants}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-lg font-bold">{project.title}</h3>
              <p className="text-white/80 text-sm">
                {project.status} • {project.size}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
