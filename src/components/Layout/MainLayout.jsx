import React from 'react';
import Sidebar from './Sidebar';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import Skills from '../Sections/Skills';
import Services from '../Sections/Services';
import MobileApps from '../Sections/MobileApps';
import Projects from '../Sections/Projects';
import Process from '../Sections/Process';
import Contact from '../Sections/Contact';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white selection:bg-[#00F5D4] selection:text-black">
      <Sidebar />
      <main className="lg:ml-64 transition-all duration-300">
        <div className="relative">
          <Hero />
          <About />
          <Skills />
          <Services />
          <MobileApps />
          <Projects />
          <Process />
          <Contact />
        </div>
      </main>
      {/* Global Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#00F5D4] to-[#FF2D75] z-[60] transition-all duration-100"
           style={{ width: '0%' }} // This would be dynamically updated via a hook
      />
    </div>
  );
};

export default MainLayout;
