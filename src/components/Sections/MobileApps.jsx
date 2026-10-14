import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Apple, PlayCircle, Database, Cpu } from 'lucide-react';

const mobileTechs = [
  { name: "JavaScript", icon: <Cpu size={16} /> },
  { name: "React Native", icon: <Smartphone size={16} /> },
  { name: "Expo", icon: <PlayCircle size={16} /> },
  { name: "API REST", icon: <Database size={16} /> },
  { name: "Firebase", icon: <Database size={16} /> },
  { name: "Git & GitHub", icon: <Smartphone size={16} /> },
];

const MobileApps = () => {
  return (
    <section id="mobile" className="py-32 px-6 lg:px-20 relative bg-[#19191D]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Vos idées, directement dans la <span className="text-[#FF2D75]">poche</span> de vos utilisateurs.
          </motion.h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            Je conçois des applications mobiles modernes, intuitives et performantes pour Android et iOS, transformant vos visions en produits tangibles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Mockup Container */}
            <div className="relative w-full max-w-md mx-auto aspect-[9/19] bg-black rounded-[3rem] border-[8px] border-white/10 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F5D4]/20 via-transparent to-[#FF2D75]/20" />

              {/* Fake App UI */}
              <div className="p-6 space-y-6 pt-12">
                <div className="h-8 w-1/3 bg-white/10 rounded-lg animate-pulse" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 bg-white/5 rounded-2xl border border-white/10" />
                  <div className="h-32 bg-white/5 rounded-2xl border border-white/10" />
                </div>
                <div className="h-4 w-full bg-white/10 rounded-lg" />
                <div className="h-4 w-3/4 bg-white/10 rounded-lg" />
                <div className="h-40 w-full bg-white/5 rounded-2xl border border-white/10" />
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20" />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 -right-6 p-4 rounded-2xl bg-[#00F5D4] text-black font-bold flex items-center gap-2 shadow-lg"
            >
              <PlayCircle size={20} /> Android
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
              className="absolute -bottom-10 -left-6 p-4 rounded-2xl bg-[#FF2D75] text-white font-bold flex items-center gap-2 shadow-lg"
            >
              <Apple size={20} /> iOS
            </motion.div>
          </motion.div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Apps Android", desc: "Compatibles smartphones & tablettes, optimisées Google Play." },
                { title: "Apps iOS", desc: "Standards Apple, expérience utilisateur fluide et soignée." },
                { title: "Multiplateforme", desc: "React Native & Expo pour Android et iOS avec un seul code." },
                { title: "Solutions Métier", desc: "E-commerce mobile, Livraison, Dashboard, Gestion." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                >
                  <h3 className="text-lg font-heading font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2">
                <Cpu size={20} className="text-[#00F5D4]" /> Technologies Mobiles
              </h3>
              <div className="flex flex-wrap gap-3">
                {mobileTechs.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs text-white/70 flex items-center gap-2 hover:text-white transition-all"
                  >
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/2250505118209?text=Bonjour%20Aboubakar,%20je%20souhaite%20concevoir%20une%20application%20mobile"
              target="_blank"
              rel="noreferrer"
              className="block text-center px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-[#00F5D4] transition-all shadow-xl shadow-white/5"
            >
              Concevoir mon application mobile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApps;
