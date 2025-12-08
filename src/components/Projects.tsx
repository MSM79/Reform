import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, type Project } from '../data/content';
import { BlurReveal } from './BlurReveal';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onModalChange?: (isOpen: boolean) => void;
}

export const Projects = ({ onModalChange }: ProjectsProps) => {
  const [filter, setFilter] = useState<'all' | 'Built' | 'Concept'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.status === filter);

  // Notify parent when modal state changes
  useEffect(() => {
    onModalChange?.(isModalOpen);
  }, [isModalOpen, onModalChange]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing project to allow exit animation
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
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
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </motion.div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};
