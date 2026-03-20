import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Play, X, Phone, Mail, Linkedin, Github } from 'lucide-react';

export function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleStatClick = (label: string) => {
    if (label === "INTERNSHIPS") {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    } else if (label === "SKILLS") {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    } else if (label === "DASHBOARDS") {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('changeProjectTab', { detail: 'telemetry' }));
    } else if (label === "AI/ML PROJECTS") {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('changeProjectTab', { detail: 'live' }));
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative py-20 px-4">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-purple/20 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 w-full max-w-4xl"
      >
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-electric-purple to-cyan drop-shadow-[0_0_15px_rgba(185,43,39,0.5)]">
          ARYAN BENDRE
        </h1>
        <h2 className="text-xl md:text-3xl font-bold text-ash mb-12 tracking-widest uppercase">
          AI & Data Specialist
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16">
          {[
            { number: "4", label: "INTERNSHIPS" },
            { number: "3", label: "DASHBOARDS" },
            { number: "15", label: "SKILLS" },
            { number: "2", label: "AI/ML PROJECTS" }
          ].map((stat, i) => (
            <motion.button 
              key={i}
              onClick={() => handleStatClick(stat.label)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="relative group flex flex-col items-center justify-center py-8 px-4 glass-panel rounded-xl border border-ash/10 hover:border-cyan/30 transition-all duration-500 overflow-hidden w-full cursor-pointer"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-electric-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* HUD Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan/40 rounded-tl-xl group-hover:border-cyan group-hover:w-full group-hover:h-full group-hover:rounded-xl transition-all duration-500 ease-out"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-electric-purple/40 rounded-br-xl group-hover:border-electric-purple group-hover:w-full group-hover:h-full group-hover:rounded-xl transition-all duration-500 ease-out"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <div className="text-5xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan to-electric-purple drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] mb-3">
                  {stat.number}
                </div>
                <div className="text-[10px] md:text-xs font-mono text-ash tracking-[0.2em] uppercase text-center font-bold group-hover:text-white transition-colors duration-500">
                  {stat.label}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button onClick={() => setIsContactOpen(true)} className="rgb-hover group relative px-8 py-4 bg-gunmetal text-white font-bold uppercase tracking-wider overflow-hidden rounded-sm w-full sm:w-auto flex items-center justify-center gap-3">
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-electric-purple to-cyan transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
            <Play size={20} className="text-electric-purple group-hover:text-white transition-colors" />
            <span>Start Co-op (Contact)</span>
          </button>
          
          <button className="rgb-hover group relative px-8 py-4 bg-transparent border border-ash/30 text-ash hover:text-white font-bold uppercase tracking-wider overflow-hidden rounded-sm w-full sm:w-auto flex items-center justify-center gap-3">
            <div className="absolute inset-0 w-0 bg-ash/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <Download size={20} className="text-cyan group-hover:text-white transition-colors" />
            <span>View Inventory (Resume)</span>
          </button>
        </div>
      </motion.div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm"
              onClick={() => setIsContactOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-panel p-8 rounded-xl border border-electric-purple/50 max-w-md w-full relative z-10 rgb-hover"
            >
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-4 right-4 text-ash hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="font-display text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-ash/20 pb-4">
                Communication Link
              </h3>

              <div className="space-y-6 font-mono">
                <a href="tel:+919930049011" className="flex items-center gap-4 text-ash hover:text-cyan transition-colors group">
                  <div className="p-3 bg-gunmetal rounded-lg group-hover:bg-cyan/20 transition-colors border border-ash/10">
                    <Phone size={20} className="text-cyan" />
                  </div>
                  <span className="text-lg">+91 9930049011</span>
                </a>

                <a href="mailto:aryanbendre060@gmail.com" className="flex items-center gap-4 text-ash hover:text-electric-purple transition-colors group">
                  <div className="p-3 bg-gunmetal rounded-lg group-hover:bg-electric-purple/20 transition-colors border border-ash/10">
                    <Mail size={20} className="text-electric-purple" />
                  </div>
                  <span className="text-lg break-all">aryanbendre060@gmail.com</span>
                </a>

                <a href="https://www.linkedin.com/in/aryanbendre2006/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-ash hover:text-blue-400 transition-colors group">
                  <div className="p-3 bg-gunmetal rounded-lg group-hover:bg-blue-400/20 transition-colors border border-ash/10">
                    <Linkedin size={20} className="text-blue-400" />
                  </div>
                  <span className="text-lg">LinkedIn Profile</span>
                </a>

                <a href="https://github.com/AryanBendre?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-ash hover:text-white transition-colors group">
                  <div className="p-3 bg-gunmetal rounded-lg group-hover:bg-white/20 transition-colors border border-ash/10">
                    <Github size={20} className="text-white" />
                  </div>
                  <span className="text-lg">GitHub Repositories</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
