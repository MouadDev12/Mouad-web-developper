import React, { useState, useEffect } from 'react';
import './animations.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import CVModal from './components/CVModal';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import SkillsMarquee from './components/SkillsMarquee';
import Chatbot from './components/Chatbot';
import { Section } from './types';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>(Section.Home);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'education', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 400 && rect.bottom >= 400) {
            setActiveSection(sectionId as Section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -50; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen />}
      
      {/* Main Application Container */}
      <div className={`min-h-screen bg-prestige-black text-white selection:bg-prestige-red/30 transition-opacity duration-1000 blueprint-grid ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Background Effects Layer */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Top Right Glow */}
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-prestige-red/5 rounded-full blur-[150px]"></div>
          {/* Bottom Left Glow */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-prestige-red/5 rounded-full blur-[150px]"></div>
        </div>

        {/* Navigation Layer */}
        <div className="relative z-20">
          <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
          <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />
        </div>

        {/* Main Content Layer */}
        <main className="relative z-10 w-full max-w-[1600px] mx-auto border-x border-white/5 bg-prestige-black/50">
          
          {/* Hero Section */}
          <section id="home">
            <Hero 
              onExploreClick={() => handleSectionChange(Section.Projects)} 
              onResumeClick={() => setIsCVOpen(true)}
            />
          </section>

          {/* Skills Marquee */}
          <section>
            <SkillsMarquee />
          </section>

          {/* Skills Section */}
          <section id="skills">
            <Skills />
          </section>

          {/* Projects Section */}
          <section id="projects">
            <Projects />
          </section>

          {/* Education Section */}
          <section id="education">
            <Education />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <Contact />
          </section>

          {/* Footer */}
          <Footer onSectionChange={handleSectionChange} />

        </main>
      </div>

      {/* Modal Layer */}
      {isCVOpen && <CVModal onClose={() => setIsCVOpen(false)} />}
      
      {/* Chatbot Layer */}
      <Chatbot />
    </>
  );
};

export default App;
