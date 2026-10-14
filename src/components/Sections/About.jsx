import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #00F5D4 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
              Je transforme des <span className="text-[#00F5D4]">idées</span> en expériences digitales.
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Développeur web passionné par la conception d’interfaces modernes et le développement d’applications performantes, je crée des solutions digitales qui apportent une réelle valeur ajoutée aux entreprises.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Sites vitrines professionnels",
                "Boutiques e-commerce",
                "Interfaces d'administration",
                "Applications web interactives",
                "Expériences web responsive",
                "Solutions digitales sur-mesure"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#00F5D4]/50 transition-all group"
                >
                  <div className="w-2 h-2 rounded-full bg-[#00F5D4] group-hover:scale-150 transition-transform" />
                  <span className="text-sm text-white/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Styled "Code" block */}
            <div className="p-6 rounded-2xl bg-[#19191D] border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>

              <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
                <code className="text-white/80">
                  <span className="text-[#FF2D75]">const</span> <span className="text-[#00F5D4]">developer</span> = {'{'} <br />
                  &nbsp;&nbsp;name: <span className="text-yellow-200">'Aboubakar'</span>, <br />
                  &nbsp;&nbsp;role: <span className="text-yellow-200">'Full-Stack Developer'</span>, <br />
                  &nbsp;&nbsp;passion: <span className="text-yellow-200">['UI/UX', 'Performance', 'Scalability']</span>, <br />
                  &nbsp;&nbsp;goal: <span className="text-yellow-200">'Build high-end digital products'</span>, <br />
                  &nbsp;&nbsp;available: <span className="text-green-400">true</span> <br />
                  {'}'};
                </code>
              </pre>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00F5D4]/20 blur-3xl rounded-full pointer-events-none group-hover:bg-[#FF2D75]/20 transition-colors duration-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
