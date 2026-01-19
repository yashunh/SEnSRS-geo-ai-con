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
            <h4 className="text-white font-bold mb-6 border-b border-slate-800 pb-2">Organizing Team & Contributors</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
              <div>
                <div className="mb-4">
                  <h5 className="text-primary font-medium mb-1">Patron</h5>
                  <p className="text-white">Prof.(Dr.) Rajeev Ahuja</p>
                  <p className="text-xs text-slate-500">Director, IIT Ropar</p>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-primary font-medium mb-1">Organising Secretary</h5>
                  <p className="text-white">Dr. Reet Kamal Tiwari</p>
                  <p className="text-xs text-slate-500">Centre Coordinator, SEnSRS</p>
                </div>

                <div className="mb-4">
                  <h5 className="text-primary font-medium mb-1">Convener</h5>
                  <p className="text-white">Dr. Sartajvir Singh Dhillon</p>
                  <p className="text-xs text-slate-500">Chief Scientific Officer, SEnSRS</p>
                </div>

                <div>
                  <h5 className="text-primary font-medium mb-1">Co-Conveners</h5>
                  <p>Dr. Naveen James, Dr. Navin Gopinathan,</p>
                  <p>Dr. Shray Pathak, Dr. Sreekumar Jayadevan</p>
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <h5 className="text-primary font-medium mb-1">Organising Team</h5>
                  <ul className="space-y-1 text-slate-400">
                    <li>Dr. Vishakha Sood, Dr. Swati Sharma</li>
                    <li>Mr. Arush Sharma, Mr. Ashish Maurya</li>
                    <li>Ms. Apoorva Sharma, Mr. Md. Hamidur Rahman</li>
                    <li>Dr. Ravindra Negi, Mr. Shreekuttan E</li>
                    <li>Mr. Prabhudutta Arya, Mr. Amritesh Singh</li>
                    <li>Mr. Mohit Patial, Mr. Mohit Thakur</li>
                    <li>Mr. Randeep Singh, Mrs. Gurparkash Kaur</li>
                    <li>Ms. Tania Vohra, Mr. Harwinder Singh</li>
                    <li>Mr. Sukhwinder Singh</li>
                  </ul>
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
