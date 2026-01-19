import { motion } from "framer-motion";
import { Calendar, User, Clock } from "lucide-react";

const scheduleData = [
  {
    day: "Day 1",
    title: "Hands on tutorial on DGPS",
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
    title: "Hands on tutorial on Multispectral Drone/TLS/Hyperspectral Drone",
    speaker: "Aravind k. Suresh & Avinash Sharma",
    role: "PhD Scholars",
    tags: ["Advanced Tech", "Research"]
  },
  {
    day: "Day 4",
    title: "Hands on tutorial on Bathymetry survey",
    speaker: "Faiz",
    role: "PhD Scholar",
    tags: ["Water Bodies", "Survey"]
  },
  {
    day: "Day 5",
    title: "Panel Meeting",
    speaker: "Mining Officers, SEIAA & SEAC members",
    role: "Regulatory Body",
    tags: ["Discussion", "Strategy"]
  }
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold font-display text-foreground">Workshop Schedule</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A comprehensive curriculum designed to provide practical skills in modern geospatial technologies.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center"
            >
              <div className="md:w-32 flex-shrink-0">
                <div className="flex items-center gap-2 text-primary font-bold text-xl">
                  <Calendar className="w-5 h-5" />
                  {item.day}
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground font-display group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-medium text-foreground">{item.speaker}</span>
                  </div>
                  <span className="hidden md:inline text-border">•</span>
                  <span className="text-sm italic">{item.role}</span>
                </div>
              </div>

              <div className="flex gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20">
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
