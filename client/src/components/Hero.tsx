import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Users, Map as MapIcon, ShieldCheck, Zap } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_drone_surveying_landscape_with_digital_topography.png";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-slate-900">
      {/* Background with advanced overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(255,255,255,0.8)_100%)]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container relative z-10 px-4 pt-32 pb-20 mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-col items-center gap-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-widest text-primary uppercase border border-primary/20 rounded bg-primary/5 backdrop-blur-md">
              <Zap className="w-3 h-3" />
              IIT Ropar • Centre of Excellence
            </div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">
              Sponsored by <span className="text-primary">Aimil Ltd.</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-5xl mx-auto mb-6 text-6xl font-black tracking-tighter md:text-8xl font-display uppercase italic text-slate-900 flex flex-col items-center"
          >
            <span className="text-xs font-black tracking-[0.5em] text-primary not-italic mb-2 opacity-80">2026</span>
            <div>
              GEO AI <span className="text-primary px-2">CON</span>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-600 to-primary px-4">Intersection</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 uppercase tracking-tight">Hands-on Workshop & Strategic Meet</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              An intensive programme for <span className="text-primary font-bold">Mining Officers, SEIAA & SEAC members</span>. 
              Master Drone Surveying, DGPS, and Bathymetric Mapping at IIT Ropar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a href="https://forms.gle/9CxmNFC39GQf5jtp7" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center px-10 py-5 text-lg font-black transition-all transform bg-primary text-white hover:scale-105 overflow-hidden rounded-sm">
              <span className="relative z-10 flex items-center gap-2">
                REGISTER NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-600 group-hover:opacity-90 transition-opacity" />
            </a>
            <div className="flex flex-col items-start justify-center px-6 border-l-2 border-primary/20">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">Event Dates</span>
              <span className="text-xl font-black text-primary uppercase italic">27 - 31 January 2026</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-6xl"
          >
            {[
              { label: "DGPS Surveying", detail: "Field Training" },
              { label: "Drone Mapping", detail: "Survey & Analysis" },
              { label: "Researcher Focus", detail: "Multispectral/TLS" },
              { label: "Bathymetry", detail: "Water Body Survey" },
              { label: "Stakeholders", detail: "Panel Meeting" },
            ].map((item, i) => (
              <div key={i} className="p-6 text-left border border-slate-100 bg-white shadow-sm flex flex-col justify-between hover:border-primary/30 transition-colors group">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4">Phase 0{i+1}</span>
                <div>
                  <h4 className="font-black text-xl leading-none mb-1 text-slate-900">{item.label}</h4>
                  <p className="text-slate-500 text-xs font-bold uppercase">{item.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
