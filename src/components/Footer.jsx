import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6 bg-white/5 rounded-2xl p-4 inline-flex">
              <img src="/photo.png" alt="Logo" className="w-12 h-12 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              <h2 className="text-2xl font-bold text-white">
                Akshaya <span className="text-brand-blue">Hospitals</span>
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 font-medium italic">
              "Compassion • Commitment • Care"
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving the community with advanced medical tech and highly experienced professionals in Mysore.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Doctors', 'Appointment', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-brand-green transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span className="text-brand-blue text-xs">▹</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Services</h3>
            <ul className="space-y-3">
              {['Lab & Diagnostic', 'Orthopedic Care', 'Pediatrics', 'Dermatology', 'General Surgery'].map((item) => (
                <li key={item}>
                   <span className="text-gray-400 flex items-center gap-2">
                    <span className="text-brand-blue text-xs">▹</span> {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Reach Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">📍</span>
                Santepete, behind Madhu Tyres, Bamboo Bazar, Mysore
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">📞</span>
                <div className="flex flex-col">
                  <span>9972696715</span>
                  <span>8431586973</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✉️</span>
                <span className="break-all">Akshayahospitalsmysore@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Akshaya Hospitals. All rights reserved. Together for Better Health.
            </p>
            <p className="text-gray-600 text-xs mt-2 italic font-medium">Developed by Shreyas V</p>
          </div>
          <div className="flex gap-4">
            {/* Social media placeholders if needed in future */}
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue transition-colors cursor-pointer">
              <span className="text-xs font-bold">f</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue transition-colors cursor-pointer">
              <span className="text-xs font-bold">in</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
