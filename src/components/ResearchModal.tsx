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
  // Prevent body scroll when modal is open
  if (typeof window !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  return (
    <AnimatePresence>
      {isOpen && article && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-white/95 backdrop-blur-md" />

          {/* Close button */}
          <motion.button
            className="absolute top-4 right-4 md:top-8 md:right-8 z-[100] w-12 h-12 flex items-center justify-center bg-black/5 text-black hover:bg-black/10 rounded-full transition-all cursor-pointer"
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
          <div className="absolute inset-0 overflow-y-auto pt-20 md:pt-0 md:flex md:items-center md:justify-center">
            <motion.div
              className="relative w-full max-w-3xl px-6 md:px-12 pb-12 md:py-20"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            >
              {/* Article header */}
              <motion.div
                className="mb-8 md:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {/* Meta info */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-black text-white text-xs uppercase tracking-wider rounded-full">
                    {article.type}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs uppercase tracking-wider rounded-full">
                    {article.size}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs uppercase tracking-wider rounded-full">
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight leading-tight">
                  {article.title}
                </h2>
              </motion.div>

              {/* Divider */}
              <motion.div
                className="w-full h-px bg-gray-200 mb-8 md:mb-12"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />

              {/* Content */}
              <motion.div
                className="prose prose-lg max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  {article.content}
                </p>

                {/* Extended content placeholder - you can add more content here */}
                <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify mt-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify mt-6">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam.
                </p>
              </motion.div>

              {/* Footer */}
              <motion.div
                className="mt-12 pt-8 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-black">Re:form</span> •
                    Research Division
                  </div>
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
