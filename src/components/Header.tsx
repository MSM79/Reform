import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activeSuffix: string;
  showContent: boolean;
  hidden?: boolean;
}

export const Header = ({
  activeSuffix,
  showContent,
  hidden = false,
}: HeaderProps) => {
  return (
    <header
      className={`fixed top-0 left-0 h-20 w-full md:w-md sm:w-full p-6 md:px-6 text-white pointer-events-none bg-white md:bg-transparent ${
        hidden ? 'z-[20] blur-sm hidden' : 'md:block z-[50]'
      }`}
    >
      <div className="flex justify-between items-start pointer-events-auto">
        {/* Section name only - no Re: */}
        <div className="h-20 flex items-center overflow-hidden">
          <motion.div
            className="relative h-20 flex items-center origin-bottom-left"
            initial={false}
            animate={{
              y: showContent ? 0 : 60,
              opacity: showContent ? 1 : 0,
              scale: showContent ? 1 : 0.7,
              filter: showContent ? 'blur(0px)' : 'blur(6px)',
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              opacity: { duration: 0.3 },
              filter: { duration: 0.4 },
            }}
          >
            <div className="relative h-20 w-64">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={activeSuffix || 'form'}
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -50, opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-0 top-0 text-black md:bg-transparent text-[9vw] md:text-[3vw] font-bold lowercase tracking-tighter leading-[0.8] whitespace-nowrap"
                >
                  {activeSuffix || 'form'}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Empty nav area */}
        <div className="h-20 flex items-center" />
      </div>
    </header>
  );
};
