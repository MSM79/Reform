import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../data/content';
import { blurRevealVariants } from '../utils/animations';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (project.video && videoRef.current) {
      videoRef.current
        .play()
        .catch((e) => console.error('Video play failed:', e));
    }
  };

  const handleMouseLeave = () => {
    if (project.video && videoRef.current) {
      // Delay pausing to allow fade out transition to complete
      timeoutRef.current = window.setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }, 700); // Match the CSS transition duration
    }
  };

  return (
    <motion.div
      variants={blurRevealVariants}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className={`object-cover w-full h-full transition-all duration-700 ease-in-out group-hover:scale-105 filter grayscale hover:grayscale-0 ${
          project.video ? 'group-hover:opacity-0' : ''
        }`}
      />

      {project.video && (
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
        />
      )}

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
        <h3 className="text-white text-lg font-bold">{project.title}</h3>
        <p className="text-white/80 text-sm">
          {project.status} • {project.size}
        </p>
      </div>
    </motion.div>
  );
};
