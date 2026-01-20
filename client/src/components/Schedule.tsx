import { motion } from "framer-motion";
import { Calendar, User, Clock } from "lucide-react";

const scheduleData = [
  {
    day: "Day 1",
    title: "DGPS Surveying",
    speaker: "Ashish Kumar Maurya",
    role: "Senior Field Surveyor",
    tags: ["Technical", "Field Work"]
  },
  {
    day: "Day 2",
    title: "Drone Surveying & Mapping",
    speaker: "Arush Sharma",
    role: "Technical Supervisor",
    tags: ["Drone", "Mapping"]
  },
  {
    day: "Day 3",
    title: "Multispectral Drone/TLS/Hyperspectral Drone",
    speaker: "Aravind k. Suresh & Avinash Sharma",
    role: "Researcher",
    tags: ["Advanced Tech", "Research"]
  },
  {
    day: "Day 4",
    title: "Hands on tutorial on Bathymetry survey",
    speaker: "Fayaz Ahmad Bhat",
    role: "Researcher",
    tags: ["Water Bodies", "Survey"]
  },
  {
    day: "Day 5",
    title: "Panel Meeting with Stakeholders",
    speaker: "Only for SEIAA/SEAC/Department of Mines and Geology",
    role: "",
    tags: ["Discussion", "Strategy"]
  }
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-white border-t border-slate-100">
      <div className="container px-4 mx-auto">
        <div className="mb-16">
          <span className="text-primary font-black uppercase tracking-widest text-sm italic">The Curriculum</span>
          <h2 className="text-5xl md:text-7xl font-black font-display text-slate-900 uppercase italic tracking-tighter mt-2">Event Schedule</h2>
        </div>

        <div className="grid gap-4">
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden bg-slate-50 border border-slate-100 hover:border-primary/50 transition-all p-8 flex flex-col md:flex-row gap-8 md:items-center rounded-xl"
            >
              <div className="md:w-40 flex-shrink-0">
                <div className="text-slate-200 font-black text-6xl opacity-40 group-hover:text-primary transition-colors">0{index + 1}</div>
                <div className="text-primary font-black text-xl uppercase italic tracking-widest -mt-4 relative z-10">{item.day}</div>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl md:text-4xl font-black mb-4 text-slate-900 uppercase italic tracking-tight leading-none">
                  {item.title}
                </h3>
                <div className="flex flex-wrap items-center gap-6">
                  {item.speaker && (
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        {item.day === "Day 5" ? "Attendance" : "Expert Lead"}
                      </span>
                      <span className="font-bold text-lg text-slate-700">{item.speaker}</span>
                    </div>
                  )}
                  {item.role && (
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Designation</span>
                      <span className="text-sm font-bold text-slate-500">{item.role}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:w-48 justify-end">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-black uppercase tracking-widest border border-slate-200 text-slate-500 group-hover:border-primary/30 group-hover:text-primary transition-colors rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
