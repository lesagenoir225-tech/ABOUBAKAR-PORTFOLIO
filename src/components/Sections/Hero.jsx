import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, MessageSquare, Rocket } from 'lucide-react';

const NeonLine = ({ color, path, delay = 0 }) => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id={`glow-${color === '#00F5D4' ? 'turquoise' : 'pink'}`}>
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <motion.path
        d={path}
        stroke={color}
        strokeWidth="2"
        fill="transparent"
        filter={`url(#glow-${color === '#00F5D4' ? 'turquoise' : 'pink'})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{
          duration: 3,
          delay,
          ease: [0.22, 1, 0.36, 1]
        }}
      />
    </svg>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Define some fluid paths for the neon lines
  const paths = [
    { color: '#00F5D4', path: "M-100,500 Q250,200 500,500 T1100,500", delay: 0 },
    { color: '#FF2D75', path: "M-100,600 Q300,800 600,400 T1100,600", delay: 0.5 },
    { color: '#00F5D4', path: "M100,100 Q500,300 900,100 T1100,300", delay: 1 },
    { color: '#FF2D75', path: "M100,900 Q400,700 800,900 T1100,700", delay: 1.5 },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen w-full flex items-center px-6 lg:px-20 overflow-hidden"
    >
      {/* Background Neon Lines */}
      <div className="absolute inset-0 z-0">
        {paths.map((p, i) => <NeonLine key={i} {...p} />)}
      </div>

      {/* Decorative Code Annotations */}
      <div className="absolute top-20 right-20 text-white/20 font-mono text-sm hidden lg:block">
        {"<div className=\"hero-section\">"}
      </div>
      <div className="absolute bottom-20 right-20 text-white/20 font-mono text-sm hidden lg:block">
        {"</div>"}
      </div>

      <motion.div
        style={{ y: yPos, opacity }}
        className="relative z-10 max-w-5xl"
      >
        <div className="mb-6">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 text-[#00F5D4] text-xs font-medium tracking-widest uppercase mb-4"
          >
            Disponible pour nouveaux projets
          </motion.span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold leading-[1.1] mb-8 mt-24">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block"
          >
            Salut,<br />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block"
          >
            je suis <span className="text-[#00F5D4]">Aboubakar</span>,<br />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block"
          >
            développeur web.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed"
        >
          Je transforme vos idées en expériences digitales modernes, performantes et conçues pour développer votre activité. <br />
          <span className="text-white font-medium">React Developer / JavaScript / Web & E-commerce Solutions</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap gap-6"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-[#00F5D4] transition-all flex items-center gap-2 group"
          >
            Découvrir mes projets
            <Rocket size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/2250505118209"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full border border-white/20 hover:border-[#FF2D75] hover:text-[#FF2D75] font-bold transition-all flex items-center gap-2 group"
          >
            Discutons de votre projet
            <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
