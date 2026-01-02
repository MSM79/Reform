import { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ResearchArticle } from '../data/content';

interface ResearchModalProps {
  article: ResearchArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ResearchModal = ({
  article,
  isOpen,
  onClose,
}: ResearchModalProps) => {
  const scrollbarWidthRef = useRef(0);

  // Lock body scroll when modal opens
  useEffect(() => {
    if (isOpen) {
      scrollbarWidthRef.current =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidthRef.current}px`;
    }
  }, [isOpen]);

  // Restore body scroll after exit animation completes
  const handleExitComplete = useCallback(() => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }, []);

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isOpen && article && (
        <motion.div
          className="fixed inset-0 z-9999"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-white/95 backdrop-blur-md" />

          {/* Close button */}
          <motion.button
            className="absolute top-4 right-4 md:top-8 md:right-8 z-100 w-12 h-12 flex items-center justify-center bg-black/5 text-black hover:bg-black/10 rounded-full transition-all cursor-pointer"
            onClick={onClose}
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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

          {/* Modal content */}
          <div className="absolute inset-0 overflow-y-auto">
            <div className="min-h-full flex items-start md:items-center justify-center py-16 px-4 sm:px-6">
              <motion.div
                className="relative w-full max-w-3xl bg-white rounded-2xl p-6 sm:p-8 md:p-12 my-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { type: 'spring', bounce: 0.2, duration: 0.6 },
                }}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
              >
                {/* Article header */}
                <motion.div
                  className="mb-6 sm:mb-8 md:mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {/* Meta info */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <span className="px-2 sm:px-3 py-1 bg-black text-white text-[10px] sm:text-xs uppercase tracking-wider rounded-full">
                      {article.type}
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 text-[10px] sm:text-xs uppercase tracking-wider rounded-full">
                      {article.size}
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 text-[10px] sm:text-xs uppercase tracking-wider rounded-full">
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight">
                    {article.title}
                  </h2>
                </motion.div>

                {/* Divider */}
                <motion.div
                  className="w-full h-px bg-gray-200 mb-6 sm:mb-8 md:mb-12"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />

                {/* Content */}
                <motion.div
                  className="prose prose-sm sm:prose-base md:prose-lg max-w-none overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 first-letter:mt-1">
                    {article.content}
                  </p>

                  {/* Extended content placeholder - you can add more content here */}
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify mt-4 sm:mt-6">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify mt-4 sm:mt-6">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam.
                  </p>
                </motion.div>

                {/* Footer */}
                <motion.div
                  className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-gray-500 text-center sm:text-left">
                      <span className="font-medium text-black">Re:form</span> •
                      Research Division
                    </div>
                    <button
                      onClick={onClose}
                      className="w-full sm:w-auto px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors"
                    >
                      Close Article
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
