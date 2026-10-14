import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Front-End",
    color: "#00F5D4",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Responsive Design", "Framer Motion", "Tailwind CSS"]
  },
  {
    title: "Outils de Développement",
    color: "#F5F5F7",
    skills: ["Git & GitHub", "VS Code", "Terminal/CLI", "Vite", "IA Assistance (Claude, GPT)"]
  },
  {
    title: "Back-End & Intégrations",
    color: "#FF2D75",
    skills: ["API REST", "Firebase", "Authentification", "MongoDB", "Gestion de formulaires"]
  },
  {
    title: "Écosystème Web",
    color: "#85858F",
    skills: ["Déploiement (Vercel, Netlify)", "SEO Technique", "Web Performance", "E-commerce Solutions", "Domain Config"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Compétences <span className="text-[#00F5D4]">Techniques</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Un arsenal technologique moderne pour concevoir des interfaces fluides, robustes et optimisées.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-heading font-bold" style={{ color: cat.color }}>
                  {cat.title}
                </h3>
                <div className="w-8 h-px bg-white/20 group-hover:w-12 transition-all" />
              </div>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:text-white hover:border-white/40 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
