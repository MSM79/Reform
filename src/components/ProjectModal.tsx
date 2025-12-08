import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/content';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when project changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [project?.id]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || !project) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          setCurrentIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1,
          );
          break;
        case 'ArrowRight':
          setCurrentIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1,
          );
          break;
      }
    },
    [isOpen, project, onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const goToPrevious = () => {
    if (!project) return;
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    if (!project) return;
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 md:bg-black/90 backdrop-blur-md" />

          {/* Close button */}
          <motion.button
            className="absolute top-4 right-4 md:top-6 md:right-6 z-[100] w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-white/10 text-white hover:bg-white/20 rounded-full transition-all cursor-pointer"
            onClick={onClose}
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-7 md:w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>

          {/* Modal content container - full screen scroll on mobile */}
          <div className="absolute inset-0 overflow-y-auto pt-16 md:pt-0 md:flex md:items-center md:justify-center">
            <motion.div
              className="relative w-full max-w-7xl px-4 md:px-8 pb-8 md:my-20"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            >
              {/* Mobile: Stack vertically, Desktop: Grid */}
              <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
                {/* Carousel */}
                <div className="lg:col-span-2 relative">
                  {/* Main image - taller aspect ratio on mobile */}
                  <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-gray-900 rounded-lg">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentIndex}
                        src={project.images[currentIndex]}
                        alt={`${project.title} - Image ${currentIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </AnimatePresence>

                    {/* Navigation arrows - smaller on mobile */}
                    <button
                      onClick={goToPrevious}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full transition-all text-white/80 hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 md:h-6 md:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full transition-all text-white/80 hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 md:h-6 md:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>

                    {/* Image counter */}
                    <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 md:px-4 md:py-2 bg-black/50 backdrop-blur-sm rounded-full text-white/90 text-xs md:text-sm font-mono">
                      {currentIndex + 1} / {project.images.length}
                    </div>
                  </div>

                  {/* Thumbnail strip - smaller on mobile, horizontal scroll */}
                  <div className="mt-3 md:mt-4 flex gap-1.5 md:gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {project.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`relative flex-shrink-0 w-14 h-10 md:w-20 md:h-14 rounded overflow-hidden transition-all duration-300 ${
                          index === currentIndex
                            ? 'ring-2 ring-white ring-offset-1 md:ring-offset-2 ring-offset-black'
                            : 'opacity-50 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project details */}
                <motion.div
                  className="text-white space-y-4 md:space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {/* Title */}
                  <div>
                    <span className="text-white/50 text-xs md:text-sm font-mono uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight mt-1 md:mt-2">
                      {project.title}
                    </h2>
                  </div>

                  {/* Meta info - 2 columns on mobile too */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 py-4 md:py-6 border-y border-white/10">
                    <div>
                      <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-wider">
                        Year
                      </span>
                      <p className="text-white font-medium text-sm md:text-base mt-0.5 md:mt-1">
                        {project.year}
                      </p>
                    </div>
                    <div>
                      <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-wider">
                        Status
                      </span>
                      <p className="text-white font-medium text-sm md:text-base mt-0.5 md:mt-1">
                        {project.status}
                      </p>
                    </div>
                    <div>
                      <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-wider">
                        Location
                      </span>
                      <p className="text-white font-medium text-sm md:text-base mt-0.5 md:mt-1">
                        {project.location}
                      </p>
                    </div>
                    {project.area && (
                      <div>
                        <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-wider">
                          Area
                        </span>
                        <p className="text-white font-medium text-sm md:text-base mt-0.5 md:mt-1">
                          {project.area}
                        </p>
                      </div>
                    )}
                    {project.client && (
                      <div className="col-span-2">
                        <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-wider">
                          Client
                        </span>
                        <p className="text-white font-medium text-sm md:text-base mt-0.5 md:mt-1">
                          {project.client}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 md:px-3 bg-white/10 rounded-full text-xs md:text-sm text-white/70">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 md:px-3 bg-white/10 rounded-full text-xs md:text-sm text-white/70">
                      Size: {project.size}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
