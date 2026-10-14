import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, MessageCircle, Instagram } from 'lucide-react';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Services', id: 'services' },
  { name: 'Mobile Apps', id: 'mobile' },
  { name: 'Projects', id: 'projects' },
  { name: 'Process', id: 'process' },
  { name: 'Contact', id: 'contact' },
];

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const current = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-[#0A0A0C] border-r border-white/10 flex-col p-8 z-50">
        <div className="mb-12">
          <div className="text-3xl font-bold font-heading text-white relative inline-block">
            A<span className="text-[#00F5D4]">.</span>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium opacity-80">Aboubakar</p>
            <p className="text-xs opacity-50 uppercase tracking-widest">Web & Mobile Developer</p>
          </div>
        </div>

        <nav className="flex-1 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.id);
              }}
              className={`relative block py-2 text-sm transition-all duration-300 ${
                activeSection === link.id ? 'text-white opacity-100' : 'text-white/50 hover:text-white opacity-70'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-[#00F5D4] shadow-[0_0_15px_#00F5D4]"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-8 flex gap-4">
          <a href="https://wa.me/2250505118209" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-[#00F5D4]/20 text-white/60 hover:text-[#00F5D4] transition-all">
            <MessageCircle size={20} />
          </a>
          <a href="https://www.tt.site/t/ZSbooCb31/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-[#FF2D75]/20 text-white/60 hover:text-[#FF2D75] transition-all">
            <Instagram size={20} />
          </a>
        </div>
      </aside>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 bg-[#0A0A0C]/80 backdrop-blur-md border-b border-white/10">
        <div className="text-2xl font-bold font-heading text-white">
          A<span className="text-[#00F5D4]">.</span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-white"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed top-0 right-0 w-full h-full bg-[#0A0A0C] z-40 p-8 flex flex-col"
          >
            <div className="mt-20 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.id);
                  }}
                  className="block text-3xl font-heading text-white opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto flex gap-6 mb-8">
              <a href="https://wa.me/2250505118209" target="_blank" rel="noreferrer" className="text-white opacity-60 hover:opacity-100">WhatsApp</a>
              <a href="https://www.tt.site/t/ZSbooCb31/" target="_blank" rel="noreferrer" className="text-white opacity-60 hover:opacity-100">TikTok</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
