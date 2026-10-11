import React from 'react';
import { Link } from 'react-scroll';
import { Linkedin, ShieldCheck, FileText, Cookie } from 'lucide-react';

const Footer = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#0f172a] pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Blur Background at bottom right */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Hospital Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center md:text-left pr-0 lg:pr-4">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6 bg-white/5 backdrop-blur-sm rounded-3xl p-4 inline-flex border border-white/10 hover:bg-white/10 transition-colors">
              <img 
                src="/photo.png" 
                alt="Akshaya Hospitals" 
                className="w-12 h-12 object-contain drop-shadow-md" 
                onError={(e) => { e.target.style.display = 'none'; }} 
              />
              <div className="flex flex-col text-left">
                <h2 className="text-xl font-black tracking-tight text-white leading-tight">
                  Akshaya <span className="text-brand-blue">Hospitals</span>
                </h2>
                <span className="text-brand-green/90 text-[11px] font-bold uppercase tracking-widest mt-0.5">
                  Multispeciality
                </span>
              </div>
            </div>
            <p className="text-gray-400/80 leading-relaxed mb-4 font-medium italic text-base border-l-2 border-brand-blue pl-4">
              "Compassion • Commitment • Care"
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-medium">
              Serving the Mysore community with advanced medical technology and highly experienced healthcare professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              Quick Links
              <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent ml-2"></div>
            </h3>
            <ul className="space-y-3.5">
              {['Home', 'Services', 'Doctors', 'Appointment', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-flex transition-all cursor-pointer font-medium group text-sm"
                  >
                    <span className="text-brand-blue opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all mr-2">▹</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              Services
              <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent ml-2"></div>
            </h3>
            <ul className="space-y-3.5 text-sm">
              {['24/7 Emergency Care', 'Orthopedic Care', 'Pediatrics', 'Dermatology', 'General Surgery'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 font-medium flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green/60"></span> {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              Legal & Trust
              <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent ml-2"></div>
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <button
                  onClick={() => onOpenLegal && onOpenLegal('privacy')}
                  className="text-gray-400 hover:text-brand-green hover:translate-x-1 inline-flex items-center gap-2 transition-all cursor-pointer font-medium group text-left"
                >
                  <ShieldCheck size={15} className="text-brand-green/70 group-hover:text-brand-green" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal && onOpenLegal('terms')}
                  className="text-gray-400 hover:text-brand-green hover:translate-x-1 inline-flex items-center gap-2 transition-all cursor-pointer font-medium group text-left"
                >
                  <FileText size={15} className="text-brand-blue group-hover:text-brand-green" />
                  <span>Terms & Conditions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal && onOpenLegal('cookies')}
                  className="text-gray-400 hover:text-brand-green hover:translate-x-1 inline-flex items-center gap-2 transition-all cursor-pointer font-medium group text-left"
                >
                  <Cookie size={15} className="text-amber-400/80 group-hover:text-brand-green" />
                  <span>Cookies & Embeds</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Reach Us Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              Reach Us
              <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent ml-2"></div>
            </h3>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <span className="text-brand-green text-lg">📍</span>
                <span className="text-xs leading-relaxed">Santepete, behind Madhu Tyres, Bamboo Bazar, Mysore</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <span className="text-brand-green text-lg">📞</span>
                <div className="flex flex-col text-xs space-y-1">
                  <a href="tel:9972696715" className="hover:text-white transition-colors">9972696715</a>
                  <a href="tel:8431586973" className="hover:text-white transition-colors">8431586973</a>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <span className="text-brand-green text-lg">✉️</span>
                <a href="mailto:Akshayahospitalsmysore@gmail.com" className="text-xs break-all hover:text-white transition-colors">
                  Akshayahospitalsmysore@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm font-medium">
              &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Akshaya Hospitals</span>. All rights reserved. Together for Better Health.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-2">
              <p className="text-xs tracking-wider font-semibold text-gray-400">
                CREATED BY <a href="https://www.linkedin.com/in/ishreyasv" target="_blank" rel="noopener noreferrer" className="text-brand-green font-bold uppercase tracking-widest hover:underline">Shreyas Tech Solutions</a>
              </p>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <span className="text-[11px] text-gray-500 font-medium">
                Medical & Digital Innovation
              </span>
            </div>
          </div>
          
          {/* Social Links / Developer Profile */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ishreyasv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile - ishreyasv"
              title="LinkedIn Profile - ishreyasv"
              className="group flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all cursor-pointer transform hover:-translate-y-0.5 shadow-sm"
            >
              <Linkedin size={18} className="text-[#0a66c2] group-hover:text-white transition-colors" />
              <span className="text-xs font-bold tracking-wide">ishreyasv</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
