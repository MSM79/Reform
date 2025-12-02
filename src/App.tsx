import { useState, useEffect } from 'react';
import { LayoutGroup } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Contact } from './components/Contact';
import { About } from './components/About';

function App() {
  const [activeSuffix, setActiveSuffix] = useState('');
  const [isHeroVisible, setIsHeroVisible] = useState(true);

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
      <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
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

          <div className="h-[20vh]"></div>
        </main>

        <footer className="px-6 py-12 text-xs text-gray-400 flex justify-between border-t border-gray-100 snap-start">
          <span>© 2024 Re:form Studio</span>
          <span>Designed by Mohammad Marandi</span>
        </footer>
      </div>
    </LayoutGroup>
  );
}

export default App;
