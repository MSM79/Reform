import { motion } from 'framer-motion';
import { HERO_TEXT } from '../data/content';

interface HeroProps {
  inView: boolean;
}

export const Hero = ({ inView }: HeroProps) => {
  return (
    <section className="h-screen w-full select-none flex flex-col items-start justify-center p-6 md:p-12 bg-white relative z-40 snap-start">
      {/* "beyond imagination" text - fades out when scrolling */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        className="text-gray-400 italic font-light mb-4 text-3xl absolute top-[30%] md:top-[35%] right-[40%]"
      >
        {HERO_TEXT}
      </motion.p>

      {/* Main Logo Container - Shared Layout */}
      {inView ? (
        <motion.div
          layoutId="logo-container"
          className="font-bold tracking-tighter mb-8 text-black flex items-baseline overflow-hidden z-50"
        >
          <motion.h1
            layoutId="logo-re"
            className="text-[14vw] leading-[0.8] font-bold tracking-tighter mr-2"
          >
            Re:
          </motion.h1>

          <motion.div layoutId="logo-suffix-container" className="relative">
            <motion.h1
              layoutId="logo-suffix"
              className="text-[14vw] leading-[0.8] font-bold tracking-tighter"
            >
              form
            </motion.h1>
          </motion.div>
        </motion.div>
      ) : (
        // Placeholder to prevent layout collapse if needed, though AnimatePresence in App handles this usually
        <div className="h-[14vw]" />
      )}

      {/* Nav Container - Shared Layout */}
      {inView && (
        <motion.nav
          layoutId="nav-container"
          className="text-sm font-bold uppercase tracking-widest z-50"
        >
          <ul className="flex space-x-8">
            {['About', 'Projects', 'Research', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-500 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </section>
  );
};
