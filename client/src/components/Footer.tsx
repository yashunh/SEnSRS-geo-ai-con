import { Mail, Phone, Globe, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4 font-display">SEnSRS</h3>
            <p className="text-sm leading-relaxed mb-4">
              Centre of Excellence Socio-Environmental Sustainability for River Sand Mining at IIT Ropar.
            </p>
            <div className="mb-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Supported By</p>
              <div className="bg-white/5 border border-white/10 p-3 rounded flex items-center justify-center">
                <span className="text-white font-black italic tracking-tighter">AIMIL LTD.</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:coe@sensrs.com" className="hover:text-primary transition-colors">coe@sensrs.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>01881 232632</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4" />
                <a href="https://www.sensrs.com" className="hover:text-primary transition-colors">www.sensrs.com</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6 border-b border-slate-800 pb-2 uppercase tracking-widest text-xs">Organizing Team & Contributors</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 text-sm">
              <div className="space-y-6">
                <div>
                  <h5 className="text-primary font-black uppercase tracking-widest text-[10px] mb-2">Patron</h5>
                  <div className="flex flex-col">
                    <span className="text-white font-bold">Prof.(Dr.) Rajeev Ahuja</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-tight">Director, IIT Ropar</span>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-primary font-black uppercase tracking-widest text-[10px] mb-2">Organising Secretary</h5>
                  <div className="flex flex-col">
                    <span className="text-white font-bold">Dr. Reet Kamal Tiwari</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-tight">Centre Coordinator, SEnSRS</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-primary font-black uppercase tracking-widest text-[10px] mb-2">Convener</h5>
                  <div className="flex flex-col">
                    <span className="text-white font-bold">Dr. Sartajvir Singh Dhillon</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-tight">Chief Scientific Officer, SEnSRS</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-primary font-black uppercase tracking-widest text-[10px] mb-2">Co-Conveners</h5>
                  <div className="grid grid-cols-1 gap-1">
                    <span className="text-white">Dr. Naveen James</span>
                    <span className="text-white">Dr. Navin Gopinathan</span>
                    <span className="text-white">Dr. Shray Pathak</span>
                    <span className="text-white">Dr. Sreekumar Jayadevan</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-tight">Co-Coordinator, SEnSRS</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="text-primary font-black uppercase tracking-widest text-[10px] mb-2">Organising Team</h5>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    { name: "Dr. Vishakha Sood", role: "Project Scientist, SEnSRS" },
                    { name: "Dr. Swati Sharma", role: "Senior Scientist, SEnSRS" },
                    { name: "Mr. Arush Sharma", role: "Technical Supervisor, SEnSRS" },
                    { name: "Mr. Ashish Maurya", role: "Senior Field Surveyor, SEnSRS" },
                    { name: "Ms. Apoorva Sharma", role: "Data Scientist, SEnSRS" },
                    { name: "Mr. Md. Hamidur Rahman", role: "GIS Scientist, SEnSRS" },
                    { name: "Dr. Ravindra Negi", role: "Research Assistant, ICSSR" },
                    { name: "Mr. Shreekuttan E", role: "Research Assistant, ICSSR" },
                    { name: "Mr. Prabhudutta Arya", role: "Field Investigator, ICSSR" },
                    { name: "Mr. Amritesh Singh", role: "Field Investigator, ICSSR" },
                    { name: "Mr. Mohit Patial", role: "Data Analyst" },
                    { name: "Mr. Mohit Thakur", role: "Field Surveyor, SEnSRS" },
                    { name: "Mr. Randeep Singh", role: "Field Surveyor, SEnSRS" },
                    { name: "Mrs. Gurparkash Kaur", role: "Office Executive, SEnSRS" },
                    { name: "Ms. Tania Vohra", role: "Office Executive, SEnSRS" },
                    { name: "Mr. Harwinder Singh", role: "Office Attendant, SEnSRS" },
                    { name: "Mr. Sukhwinder Singh", role: "Office Attendant, SEnSRS" }
                  ].map((member, i) => (
                    <div key={i} className="flex flex-col border-l border-slate-800 pl-3">
                      <span className="text-white font-medium text-xs whitespace-nowrap">{member.name}</span>
                      <span className="text-[9px] text-slate-500 uppercase tracking-tighter">{member.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-slate-800 text-xs text-slate-600">
          © 2026 SEnSRS, IIT Ropar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
