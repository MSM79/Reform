import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RESEARCH_ARTICLES, type ResearchArticle } from '../data/content';
import { BlurReveal } from './BlurReveal';
import { blurRevealVariants } from '../utils/animations';
import { ResearchModal } from './ResearchModal';

interface ResearchProps {
  onModalChange?: (isOpen: boolean) => void;
}

export const Research = ({ onModalChange }: ResearchProps) => {
  const [selectedArticle, setSelectedArticle] =
    useState<ResearchArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Notify parent when modal state changes
  useEffect(() => {
    onModalChange?.(isModalOpen);
  }, [isModalOpen, onModalChange]);

  const handleArticleClick = (article: ResearchArticle) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArticle(null), 300);
  };

  return (
    <>
      <section id="research" className="py-20 container mx-auto px-6 md:px-12">
        {/* Filters */}
        <BlurReveal>
          <div className="flex gap-6 mb-12 text-sm text-gray-500 font-mono border-b pb-2 border-gray-200">
            <span className="cursor-pointer hover:text-black">Size</span>
            <span className="cursor-pointer hover:text-black">Type</span>
            <span className="cursor-pointer hover:text-black">Date</span>
          </div>
        </BlurReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
        >
          {RESEARCH_ARTICLES.map((article, index) => (
            <motion.article
              key={article.id}
              className="flex flex-col cursor-pointer group"
              variants={blurRevealVariants}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => handleArticleClick(article)}
            >
              <h3 className="text-lg italic font-serif font-bold mb-4 leading-snug min-h-12 group-hover:text-gray-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify line-clamp-4">
                {article.content}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-400 uppercase tracking-widest">
                <span>{article.type}</span>
                <span>{article.date}</span>
              </div>
              {/* Read more indicator */}
              <div className="mt-4 text-xs text-black font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Read full article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
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
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <ResearchModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};
