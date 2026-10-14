import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              Vous avez une <span className="text-[#FF2D75]">idée ?</span><br />
              Construisons-la ensemble.
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Un site web, une boutique en ligne ou une application à développer ? Parlons de votre projet.
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/2250505118209"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00F5D4]/50 transition-all group"
              >
                <div className="p-3 rounded-full bg-[#00F5D4]/20 text-[#00F5D4]">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-lg font-bold">+225 05 05 11 82 09</p>
                </div>
                <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="https://www.tt.site/t/ZSbooCb31/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF2D75]/50 transition-all group"
              >
                <div className="p-3 rounded-full bg-[#FF2D75]/20 text-[#FF2D75]">
                  <Send size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">TikTok</p>
                  <p className="text-lg font-bold">@aboubakar_dev</p>
                </div>
                <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-white/40 uppercase tracking-widest ml-1">Nom</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#00F5D4] outline-none transition-all text-white placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-white/40 uppercase tracking-widest ml-1">Email</label>
                    <input
                      type="email"
                      placeholder="email@exemple.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#00F5D4] outline-none transition-all text-white placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-white/40 uppercase tracking-widest ml-1">Type de projet</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#00F5D4] outline-none transition-all text-white placeholder:text-white/20 appearance-none">
                    <option value="vitrine">Site Vitrine</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="webapp">Application Web</option>
                    <option value="mobile">Application Mobile</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-white/40 uppercase tracking-widest ml-1">Description du besoin</label>
                  <textarea
                    rows="4"
                    placeholder="Parlez-moi de votre projet..."
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#00F5D4] outline-none transition-all text-white placeholder:text-white/20 resize-none"
                  />
                </div>

                <button
                  className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-[#00F5D4] transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-2 group"
                >
                  Envoyer le message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            {/* Decorative glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00F5D4]/10 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
