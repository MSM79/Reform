import { motion, AnimatePresence } from 'framer-motion';

interface BrandOverlayProps {
  isScrolled: boolean;
  activeSuffix: string;
}

export const BrandOverlay = ({
  isScrolled,
  activeSuffix,
}: BrandOverlayProps) => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Logo Container */}
      <motion.div
        initial={false}
        animate={{
          top: isScrolled ? '1.5rem' : '50%',
          left: isScrolled ? '1.5rem' : '50%',
          x: isScrolled ? '0%' : '-50%',
          y: isScrolled ? '0%' : '-50%',
          scale: isScrolled ? 0.4 : 1, // Scale down instead of font-size change for smoother perf
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute flex items-baseline origin-top-left"
      >
        <div className="flex items-baseline font-bold tracking-tighter text-black mix-blend-difference">
          <span className="text-[10vw] leading-none mr-1">Re:</span>

          <div className="relative h-[10vw] w-[40vw]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={isScrolled ? activeSuffix : 'form'}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute left-0 top-0 text-[10vw] leading-none"
              >
                {isScrolled ? activeSuffix : 'form'}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Nav Container */}
      <motion.nav
        initial={false}
        animate={{
          top: isScrolled ? '1.5rem' : '65%',
          right: isScrolled ? '1.5rem' : 'auto',
          left: isScrolled ? 'auto' : '50%',
          x: isScrolled ? '0%' : '-50%',
          y: isScrolled ? '0%' : '-50%',
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute pointer-events-auto"
      >
        <ul
          className={`flex ${
            isScrolled ? 'space-x-6' : 'space-x-12'
          } text-black mix-blend-difference text-white transition-all duration-500`}
        >
          {['About', 'Projects', 'Research', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`font-bold uppercase tracking-widest hover:opacity-50 transition-opacity ${
                  isScrolled ? 'text-sm' : 'text-lg'
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};
