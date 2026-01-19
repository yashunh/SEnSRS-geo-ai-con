import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Users, Map as MapIcon } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_drone_surveying_landscape_with_digital_topography.png";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-foreground text-white">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-accent uppercase border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
            Jan 27 - 31, 2026 • IIT Ropar
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-6 text-5xl font-bold leading-tight md:text-7xl font-display"
        >
          GeoAI CON <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Inter-Session</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-10 text-xl text-slate-300 font-light"
        >
          Hands-on Workshop and Strategic Meet. A five-day intensive programme combining geospatial training with regulatory interaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#register" className="inline-flex items-center px-8 py-4 text-lg font-semibold transition-all transform rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/25">
            Register Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a href="#schedule" className="inline-flex items-center px-8 py-4 text-lg font-semibold transition-all border rounded-full border-white/20 hover:bg-white/10 backdrop-blur-sm">
            View Schedule
          </a>
        </motion.div>

        {/* Floating Features */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 gap-6 mt-20 md:grid-cols-3 max-w-5xl mx-auto"
        >
          {[
            { icon: MapIcon, label: "Drone Mapping" },
            { icon: MapPin, label: "DGPS Surveying" },
            { icon: Users, label: "Panel Meetings" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-3 p-4 border rounded-xl border-white/10 bg-white/5 backdrop-blur-md">
              <item.icon className="w-6 h-6 text-accent" />
              <span className="font-medium text-lg">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
