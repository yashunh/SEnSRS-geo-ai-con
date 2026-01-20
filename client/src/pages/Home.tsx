import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import iitRoparImg from "@assets/image_1768892679361.png";
import dgpsImg from "@assets/generated_images/high-precision_dgps_surveying_in_a_river_sand_mining_site.png";
import droneImg from "@assets/generated_images/multispectral_drone_taking_off_from_a_river_bank.png";
import bathyImg from "@assets/image_1768894507601.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        
        {/* Gallery/Flyer Style Section */}
        <section className="py-24 border-y border-slate-100 bg-slate-50">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative group overflow-hidden rounded-xl shadow-lg h-[450px]"
              >
                <img src={iitRoparImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="IIT Ropar" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-black italic uppercase leading-tight text-white">Venue: IIT Ropar</h3>
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-1">Main Campus</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative group overflow-hidden rounded-xl shadow-lg h-[450px]"
              >
                <img src={dgpsImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="DGPS Training" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-black italic uppercase leading-tight text-white">Hands-on DGPS</h3>
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-1">Field Training</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative group overflow-hidden rounded-xl shadow-lg h-[450px]"
              >
                <img src={droneImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Drone Surveying" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-black italic uppercase leading-tight text-white">Drone Mapping</h3>
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-1">Aerial Survey</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative group overflow-hidden rounded-xl shadow-lg h-[450px]"
              >
                <img src={bathyImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Bathymetry Survey" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-black italic uppercase leading-tight text-white">Bathymetry</h3>
                  <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-1">Underwater Survey</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Schedule />
        
        {/* Partners & Sponsors Section */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="container px-4 mx-auto text-center">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-12">Our Partners & Sponsors</h3>
            <div className="flex justify-center items-center">
              <div className="relative group max-w-5xl mx-auto overflow-hidden rounded-xl border border-slate-100 p-8 bg-slate-50/50">
                <img 
                  src="@assets/4_Working_Day_1768894154585.png" 
                  alt="GEO AI CON Partners" 
                  className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-[1.02] rotate-180" 
                />
                <div className="absolute inset-0 border-2 border-primary/5 rounded-xl pointer-events-none" />
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-8 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Technical Partner</span>
              <span className="text-primary/20">•</span>
              <span>Knowledge Partner</span>
              <span className="text-primary/20">•</span>
              <span>Industry Partner</span>
              <span className="text-primary/20">•</span>
              <span>Government Partner</span>
            </div>
          </div>
        </section>

        {/* Highlights Banner */}
        <div className="bg-primary py-12 overflow-hidden">
          <div className="flex whitespace-nowrap animate-infinite-scroll">
            {[1,2,3,4].map(i => (
              <div key={i} className="flex gap-12 items-center mx-12">
                <span className="text-6xl md:text-8xl font-black italic uppercase opacity-20 text-white">SEnSRS</span>
                <span className="text-6xl md:text-8xl font-black italic uppercase text-white">IIT ROPAR</span>
                <span className="text-6xl md:text-8xl font-black italic uppercase opacity-20 text-white">GeoAI CON</span>
              </div>
            ))}
          </div>
        </div>

        <Registration />
      </main>
      <Footer />
      
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
