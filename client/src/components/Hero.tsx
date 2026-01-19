import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Users, Map as MapIcon, ShieldCheck, Zap } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_drone_surveying_landscape_with_digital_topography.png";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background with advanced overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(2,6,23,0.8)_100%)]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container relative z-10 px-4 pt-32 pb-20 mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-widest text-emerald-400 uppercase border border-emerald-500/30 rounded bg-emerald-500/10 backdrop-blur-md">
              <Zap className="w-3 h-3" />
              IIT Ropar • Centre of Excellence
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-5xl mx-auto mb-6 text-6xl font-black tracking-tighter md:text-8xl font-display uppercase italic"
          >
            GeoAI <span className="text-primary">CON</span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500">Inter-Session</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white uppercase tracking-tight">Hands-on Workshop & Strategic Meet</h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              An intensive programme for <span className="text-white">Mining Officers, SEIAA & SEAC members</span>. 
              Master Drone Surveying, DGPS, and Bathymetric Mapping at IIT Ropar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a href="#register" className="group relative inline-flex items-center px-10 py-5 text-lg font-black transition-all transform bg-primary text-white hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                REGISTER NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:opacity-90 transition-opacity" />
            </a>
            <a href="#schedule" className="inline-flex items-center px-10 py-5 text-lg font-black border-2 border-white/20 hover:border-white hover:bg-white hover:text-slate-950 transition-all">
              FULL BROCHURE
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl"
          >
            {[
              { label: "DGPS Surveying", detail: "Hands-on Field Work" },
              { label: "Drone Mapping", detail: "Survey & Analysis" },
              { label: "Bathymetry", detail: "Water Body Survey" },
              { label: "Panel Meeting", detail: "Regulatory Insights" },
            ].map((item, i) => (
              <div key={i} className="p-6 text-left border border-white/5 bg-white/5 backdrop-blur-xl flex flex-col justify-between hover:bg-white/10 transition-colors group">
                <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 group-hover:text-primary transition-colors">Phase 0{i+1}</span>
                <div>
                  <h4 className="font-black text-xl leading-none mb-1">{item.label}</h4>
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
