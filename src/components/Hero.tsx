import { motion } from 'framer-motion';
import { HERO_TEXT, HERO_SUFFIXES } from '../data/content';
import { useTypewriter } from '../hooks/useTypewriter';

interface HeroProps {
  inView: boolean;
}

export const Hero = ({ inView }: HeroProps) => {
  const displayText = useTypewriter(HERO_SUFFIXES, 120, 80, (word) =>
    word === 'form' ? 6000 : 2000,
  );

  return (
    <section className="h-dvh w-full select-none flex flex-col items-start justify-center p-6 md:p-12 bg-white relative z-40 snap-start">
      {/* "beyond imagination" text - fades out when scrolling */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        className="text-[rgb(30,30,30)] italic tracking-tighter font-light mb-4 text-sm md:text-3xl absolute top-[30%] top-[37%] md:top-[32%] right-[40%]"
      >
        {HERO_TEXT}
      </motion.p>

      <div className="relative z-50">
        <div
          className="font-bold md:text-[10vw] text-[17vw] tracking-tighter mb-8 text-transparent flex items-baseline overflow-hidden select-none pointer-events-none"
          aria-hidden="true"
        >
          <h1 className="leading-[0.8] font-bold tracking-tighter mr-2 opacity-0">
            Re:
          </h1>
          <div className="w-[60vw] flex items-baseline opacity-0">
            <h1 className="leading-[0.8] font-bold tracking-tighter whitespace-nowrap">
              form
            </h1>
          </div>
        </div>

        <motion.div
          className="absolute top-0 left-0 font-bold md:text-[10vw] text-[17vw] tracking-tighter mb-8 text-black flex items-baseline overflow-hidden"
          initial={false}
          animate={{
            y: inView ? 0 : -120,
            opacity: inView ? 1 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            opacity: { duration: 0.2 },
          }}
        >
          <h1 className="leading-[0.8] font-bold tracking-tighter mr-2">Re:</h1>

          <div className="w-[60vw] flex items-baseline">
            <h1 className="leading-[0.8] font-bold tracking-tighter whitespace-nowrap">
              {displayText || '\u200B'}
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Navigation links - stay in hero, don't go to header */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.2 }}
        className="uppercase tracking-wider md:tracking-widest z-50 ml-3"
      >
        <ul className="flex space-x-3 md:space-x-6 text-xs md:text-[1.3vw]">
          {['About', 'Projects', 'Research', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hover:text-gray-500 transition-colors cursor-pointer"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </section>
  );
};
