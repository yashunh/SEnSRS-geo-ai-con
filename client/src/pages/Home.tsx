import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import iitRoparImg from "@assets/generated_images/academic_building_at_iit_ropar_with_modern_architecture.png";
import dgpsImg from "@assets/generated_images/surveyor_with_dgps_equipment_in_the_field.png";
import droneImg from "@assets/generated_images/multispectral_drone_taking_off_from_a_river_bank.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Gallery/Flyer Style Section */}
        <section className="py-24 border-y border-white/5 bg-slate-900/50">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-3 gap-1 grid-auto-rows-[400px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative group overflow-hidden md:col-span-2"
              >
                <img src={iitRoparImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="IIT Ropar" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 p-8 flex flex-col justify-end">
                  <h3 className="text-4xl font-black italic uppercase">Venue: IIT Ropar</h3>
                  <p className="text-slate-400 font-bold">C-114, SAB Building, Rupnagar Punjab</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative group overflow-hidden"
              >
                <img src={dgpsImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="DGPS Training" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-black italic uppercase leading-none">Hands-on DGPS</h3>
                  <p className="text-accent text-xs font-bold uppercase tracking-widest mt-2">Professional Training</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative group overflow-hidden md:col-span-3 h-[300px]"
              >
                <img src={droneImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Drone Surveying" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent p-8 flex flex-col justify-center">
                  <div className="max-w-xl">
                    <h3 className="text-4xl font-black italic uppercase leading-none mb-4">Advanced Drone Mapping</h3>
                    <p className="text-slate-300 font-medium">Master multispectral, TLS, and hyperspectral data collection in real-world environments.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Schedule />
        
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
