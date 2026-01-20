import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import iitRoparImg from "@assets/ChatGPT_Image_Jan_19,_2026,_02_59_38_PM_1768892523226.png";
import dgpsImg from "@assets/generated_images/surveyor_with_dgps_equipment_in_the_field.png";
import droneImg from "@assets/generated_images/multispectral_drone_taking_off_from_a_river_bank.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        
        {/* Gallery/Flyer Style Section */}
        <section className="py-24 border-y border-slate-100 bg-slate-50">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-3 gap-4 grid-auto-rows-[400px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative group overflow-hidden md:col-span-2 rounded-xl shadow-lg"
              >
                <img src={iitRoparImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="IIT Ropar" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-4xl font-black italic uppercase text-white">Venue: IIT Ropar</h3>
                  <p className="text-white/80 font-bold">C-114, SAB Building, Rupnagar Punjab</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img src={dgpsImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="DGPS Training" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-black italic uppercase leading-none text-white">Hands-on DGPS</h3>
                  <p className="text-accent text-xs font-bold uppercase tracking-widest mt-2">Professional Training</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative group overflow-hidden md:col-span-3 h-[300px] rounded-xl shadow-lg"
              >
                <img src={droneImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Drone Surveying" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent p-8 flex flex-col justify-center">
                  <div className="max-w-xl">
                    <h3 className="text-4xl font-black italic uppercase leading-none mb-4 text-white">Advanced Drone Mapping</h3>
                    <p className="text-white/90 font-medium">Master multispectral, TLS, and hyperspectral data collection in real-world environments.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Schedule />
        
        {/* Partners Logos Section */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="container px-4 mx-auto text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Our Distinguished Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img src="@assets/image_1768892048965.png" alt="Partners Logos" className="h-16 md:h-24 w-auto object-contain" />
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
