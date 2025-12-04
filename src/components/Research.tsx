import { motion } from 'framer-motion';
import { RESEARCH_ARTICLES } from '../data/content';
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

export const Research = () => {
  return (
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
            className="flex flex-col"
            variants={blurRevealVariants}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="text-lg italic font-serif font-bold mb-4 leading-snug min-h-[3rem]">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              {article.content}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-400 uppercase tracking-widest">
              <span>{article.type}</span>
              <span>{article.date}</span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};
