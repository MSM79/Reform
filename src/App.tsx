import { useState, useEffect } from 'react';
import {
  LayoutGroup,
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { BackToTop } from './components/BackToTop';
import { BrandOverlay } from './components/BrandOverlay';

function App() {
  const [activeSuffix, setActiveSuffix] = useState('');
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Scroll-based animations for the vertical line
  const { scrollYProgress } = useScroll();

  // Smooth spring for smoother animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll progress to various properties
  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const lineOpacity = useTransform(
    smoothProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0],
  );
  const lineBlur = useTransform(smoothProgress, [0, 0.5, 1], [0, 2, 0]);
  const lineWidth = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [1, 3, 3, 1],
  );
  const lineX = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, -10, 0, 10, 0],
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hero visibility logic with hysteresis
      // We want the transition to happen when we scroll out of the Hero section
      if (scrollY > 100 && isHeroVisible) {
        setIsHeroVisible(false);
      } else if (scrollY < 50 && !isHeroVisible) {
        setIsHeroVisible(true);
      }

      // Dynamic Suffix Logic
      const sections = ['about', 'projects', 'research', 'contact'];

      // Default to 'form' if at top
      if (scrollY > 300) {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Check if section is roughly in the middle of the viewport
            if (
              rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2
            ) {
              setActiveSuffix(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHeroVisible]);

  return (
    <LayoutGroup>
      <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white relative">
        {/* Animated scroll progress line - positioned between header area and content */}
        <motion.div
          className="fixed top-0 left-[16%] z-40 bg-black origin-top pointer-events-none hidden md:block"
          style={{
            height: lineHeight,
            opacity: lineOpacity,
            width: lineWidth,
            x: lineX,
            filter: useTransform(lineBlur, (blur) => `blur(${blur}px)`),
          }}
        />
        <Header activeSuffix={activeSuffix} showContent={!isHeroVisible} />

        <Hero inView={isHeroVisible} />

        <main className="relative z-10 bg-white">
          <Section id="about" title="About">
            <About />
          </Section>

          <Section id="projects" title="Projects">
            <Projects />
          </Section>

          <Section id="research" title="Research">
            <Research />
          </Section>

          <Section id="contact" title="Contact">
            <Contact />
          </Section>
        </main>

        <footer className="md:px-6 px-4 py-12 text-xs text-gray-400 flex justify-between border-t border-gray-100 snap-start">
          <span>© 2024 Re:form Studio</span>
          <span>Designed by Mohammad Marandi</span>
        </footer>
        <BackToTop />
      </div>
    </LayoutGroup>
  );
}

export default App;
