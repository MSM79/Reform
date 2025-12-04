import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activeSuffix: string;
  showContent: boolean;
}

export const Header = ({ activeSuffix, showContent }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference text-white pointer-events-none ">
      <div className="flex justify-between items-start pointer-events-auto">
        {/* Section name only - no Re: */}
        <div className="h-20 flex items-center">
          {showContent && (
            <motion.div
              layoutId="logo-container"
              className="relative h-20 w-64 overflow-hidden"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={activeSuffix}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -80, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-5 text-6xl font-medium lowercase"
                >
                  {activeSuffix}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Empty nav area */}
        <div className="h-20 flex items-center" />
      </div>
    </header>
  );
};
