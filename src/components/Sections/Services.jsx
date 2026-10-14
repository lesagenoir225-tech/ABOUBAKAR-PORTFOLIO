import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Layout, Zap, Smartphone } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Sites Vitrines",
    desc: "Création de sites professionnels modernes pour entreprises, entrepreneurs, associations et marques.",
    icon: <Globe size={32} />,
    color: "#00F5D4"
  },
  {
    id: "02",
    title: "E-commerce",
    desc: "Conception de boutiques en ligne avec catalogue de produits, panier et intégration de paiement.",
    icon: <ShoppingCart size={32} />,
    color: "#FF2D75"
  },
  {
    id: "03",
    title: "Applications Web",
    desc: "Développement d'interfaces interactives, de tableaux de bord et d'espaces d'administration connectés.",
    icon: <Layout size={32} />,
    color: "#00F5D4"
  },
  {
    id: "04",
    title: "Applications Mobiles",
    desc: "Conception d'applications natives et multiplateformes pour iOS et Android avec React Native.",
    icon: <Smartphone size={32} />,
    color: "#FF2D75"
  },
  {
    id: "05",
    title: "Refonte & Optimisation",
    desc: "Modernisation de sites existants, amélioration du responsive design et optimisation des performances.",
    icon: <Zap size={32} />,
    color: "#00F5D4"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Mes <span className="text-[#FF2D75]">Services</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Des solutions digitales haut de gamme conçues pour convertir vos visiteurs en clients et propulser votre activité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all relative group overflow-hidden"
            >
              {/* Number Background */}
              <div className="absolute -right-4 -top-4 text-8xl font-heading font-bold text-white/5 group-hover:text-white/10 transition-all">
                {service.id}
              </div>

              <div
                className="mb-6 p-3 rounded-xl inline-block transition-all group-hover:scale-110"
                style={{ color: service.color, backgroundColor: `${service.color}15` }}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-heading font-bold mb-4 relative z-10">
                {service.title}
              </h3>
              <p className="text-white/60 mb-8 relative z-10 leading-relaxed">
                {service.desc}
              </p>

              <a
                href="https://wa.me/2250505118209"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold hover:text-white transition-all group/link"
                style={{ color: service.color }}
              >
                Parlons de votre projet
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
