import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Monitor } from 'lucide-react';
import { GithubIcon } from '../UI/BrandIcons';

const projectData = [
  {
    title: "Saint Graal Ivoirien",
    category: "Sites vitrines",
    desc: "Une plateforme immersive et élégante conçue pour mettre en avant l'excellence et le prestige.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://saintgraalivoirien.com/assets/img/hero-bg.jpg", // Exemple, à remplacer par une capture réelle
    url: "https://saintgraalivoirien.com/",
    code: "#"
  },
  {
    title: "Alffa Niger",
    category: "Applications web",
    desc: "Solution digitale complète et performante pour la gestion et la visibilité d'Alffa Niger.",
    tech: ["React", "TypeScript", "Firebase"],
    image: "https://alffaniger.com/assets/img/home-banner.jpg", // Exemple, à remplacer par une capture réelle
    url: "https://alffaniger.com/",
    code: "#"
  }
];

const categories = ["Tous", "Sites vitrines", "E-commerce", "Applications web", "Applications mobiles"];

const Projects = () => {
  const [filter, setFilter] = useState("Tous");

  const filteredProjects = filter === "Tous"
    ? projectData
    : projectData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 px-6 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Mes <span className="text-[#00F5D4]">Réalisations</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${
                  filter === cat
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white/60 border-white/10 hover:border-white/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="aspect-video overflow-hidden relative bg-black">
                  {/* Interface Preview with Mockup feel */}
                  <div className="absolute inset-0 p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-black/60 backdrop-blur-sm">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-[#00F5D4] transition-colors"
                    >
                      Visiter le site <ExternalLink size={18} />
                    </a>
                  </div>

                  <img
                    src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=800`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute top-4 left-4 z-10">
                    <div className="p-2 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-white">
                      <Monitor size={16} />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs text-[#00F5D4] uppercase tracking-widest font-bold mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-heading font-bold">{project.title}</h3>
                    </div>
                    {project.code && project.code !== '#' && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Voir le code de ${project.title}`}
                        className="p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-[#00F5D4] hover:border-[#00F5D4]/40 transition-all"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                  </div>

                  <p className="text-white/60 mb-6 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
