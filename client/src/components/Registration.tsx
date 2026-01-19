import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Ticket } from "lucide-react";

export default function Registration() {
  return (
    <section id="register" className="py-24 bg-foreground text-white relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase mb-4 block">Secure Your Spot</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Registration Details</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Join us at IIT Ropar for this exclusive hands-on workshop. Spaces are limited to ensure personalized attention during practical sessions.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Venue</h4>
                  <p className="text-slate-400">C-114, SAB, Indian Institute of Technology Rupnagar (IIT Ropar), Punjab 140001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                  <Ticket className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Deadlines</h4>
                  <p className="text-slate-400">Last date: 22 January, 2026</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl relative"
          >
            <div className="absolute -top-4 -right-4 bg-accent text-slate-900 font-bold px-4 py-2 rounded-full shadow-lg transform rotate-6">
              20% Off for ISRS Members
            </div>

            <h3 className="text-2xl font-bold mb-6 font-display">Registration Fees</h3>
            
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-slate-700">General Registration</span>
                  <span className="text-2xl font-bold text-primary">₹5,000</span>
                </div>
                <p className="text-sm text-slate-500">Per Person</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-slate-700">Govt. Officials</span>
                  <span className="text-2xl font-bold text-secondary">₹1,000</span>
                </div>
                <p className="text-sm text-slate-500">For Geology & Mining officials</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Includes Participation Certification</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Hands-on DGPS & Drone Training</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Networking with Mining Officers</span>
              </div>
            </div>

            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Register Now
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">
              *Accommodation & Travel Allowance as per IIT Rules
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
