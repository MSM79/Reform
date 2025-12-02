import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activeSuffix: string;
  showContent: boolean;
}

export const Header = ({ activeSuffix, showContent }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full p-6 z-50 mix-blend-difference text-white pointer-events-none backdrop-blur-sm">
      <div className="flex justify-between items-start pointer-events-auto">
        {/* Logo Area */}
        <div className="h-20 flex items-center">
          {showContent && (
            <motion.div
              layoutId="logo-container"
              className="flex items-baseline"
            >
              <motion.div
                layoutId="logo-suffix-container"
                className="relative h-20 w-84 overflow-hidden"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    layoutId={
                      activeSuffix === 'form' ? 'logo-suffix' : undefined
                    }
                    key={activeSuffix}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-5 text-6xl font-medium capitalize mix-blend-difference"
                  >
                    {activeSuffix}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Nav Area */}
        <div className="h-20 flex items-center">
          {showContent && (
            <motion.nav
              layoutId="nav-container"
              className="text-xl font-medium hidden md:block"
            >
              <ul className="flex space-x-6">
                {['About', 'Projects', 'Research', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:opacity-50 transition-opacity"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </div>
      </div>
    </header>
  );
};
