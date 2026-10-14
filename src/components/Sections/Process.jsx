import React from 'react';
import { motion } from 'framer-motion';
import { Ear, Pencil, Code, Send } from 'lucide-react';

const steps = [
  {
    title: "ÉCOUTER",
    desc: "Comprendre les objectifs, les besoins et la cible du client pour définir une stratégie efficace.",
    icon: <Ear size={32} />,
    color: "#00F5D4"
  },
  {
    title: "CONCEVOIR",
    desc: "Définir l’architecture, le design et l’expérience utilisateur pour un résultat intuitif.",
    icon: <Pencil size={32} />,
    color: "#F5F5F7"
  },
  {
    title: "DÉVELOPPER",
    desc: "Construire une solution responsive, fonctionnelle et performante avec les dernières technologies.",
    icon: <Code size={32} />,
    color: "#FF2D75"
  },
  {
    title: "LIVRER",
    desc: "Tester, optimiser, déployer et accompagner le client jusqu'à la mise en ligne complète.",
    icon: <Send size={32} />,
    color: "#85858F"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-32 px-6 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Ma <span className="text-[#00F5D4]">Méthode</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Un processus rigoureux et transparent pour garantir la qualité et le respect de vos objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all text-center group"
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center transition-all group-hover:scale-110"
                style={{ color: step.color, backgroundColor: `${step.color}15` }}
              >
                {step.icon}
              </div>
              <div className="text-xs font-bold text-white/40 mb-2 uppercase tracking-widest">
                0{i+1}
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">{step.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
