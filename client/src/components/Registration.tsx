import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Ticket } from "lucide-react";

export default function Registration() {
  return (
    <section id="register" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
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
            <div className="absolute -top-4 -right-4 bg-accent text-white font-bold px-4 py-2 rounded-full shadow-lg transform rotate-6 text-xs uppercase tracking-widest">
              Special Institutional Rates
            </div>

            <h3 className="text-2xl font-bold mb-6 font-display text-primary">Registration Fees</h3>
            
            <div className="space-y-3 mb-8">
              {[
                { label: "Regular Registration", price: "₹5,000" },
                { label: "ISRS Member", price: "₹4,000" },
                { label: "PhD Scholars", price: "₹3,000" },
                { label: "Student", price: "₹2,500" },
                { label: "Govt. Officials (Mining Dept.)", price: "₹1,000", note: "(For Registration Kit & Lunch)" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center group hover:border-primary/30 transition-colors">
                  <div>
                    <span className="font-bold text-slate-700 block">{item.label}</span>
                    {item.note && <span className="text-[10px] text-slate-400 font-medium">{item.note}</span>}
                  </div>
                  <span className="text-xl font-black text-primary">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>No Charges for Day-5 (Panel Meeting)</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                <CheckCircle2 className="w-3 h-3 text-slate-300" />
                <span>Includes Participation Certification</span>
              </div>
            </div>

            <a 
              href="https://forms.gle/9CxmNFC39GQf5jtp7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              PROCEED TO REGISTER
            </a>
            <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-400 mt-4">
              **For accommodation, IIT Rules will be Applicable
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
