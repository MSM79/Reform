import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activeSuffix: string;
  showContent: boolean;
}

export const Header = ({ activeSuffix, showContent }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 p-6 md:px-6 z-50 text-white pointer-events-none bg-white md:bg-transparent">
      <div className="flex justify-between items-start pointer-events-auto">
        {/* Section name only - no Re: */}
        <div className="h-20 flex items-center">
          {showContent && (
            <motion.div
              layoutId="shared-suffix"
              className="relative h-20 flex items-center overflow-hidden"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            >
              <div className="relative h-20 w-64">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={activeSuffix || 'form'}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.32, 1, 0.36, 1] }}
                    className="absolute left-0 top-0 text-black md:bg-transparent text-[9vw] md:text-[3vw] font-bold lowercase tracking-tighter leading-[0.8] whitespace-nowrap"
                  >
                    {activeSuffix || 'form'}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </div>

        {/* Empty nav area */}
        <div className="h-20 flex items-center" />
      </div>
    </header>
  );
};
