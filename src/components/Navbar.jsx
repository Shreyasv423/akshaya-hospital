import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Doctors', to: 'doctors' },
    { name: 'Appointment', to: 'appointment' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-green blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
              <img src="/photo.png" alt="Akshaya Hospitals" className="h-10 w-auto object-contain relative z-10 transition-transform group-hover:scale-105" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-brand-blue via-brand-blue to-brand-green bg-clip-text text-transparent drop-shadow-sm">
              Akshaya Hospitals
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="!text-brand-green bg-brand-green/5 font-semibold"
                className="text-gray-600 hover:text-brand-blue cursor-pointer font-medium transition-all px-4 py-2 rounded-full hover:bg-brand-blue/5 relative group"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:9972696715" className="text-brand-blue font-semibold hover:text-brand-dark transition-colors flex items-center gap-2 text-sm tracking-wide">
              Contact: 9972696715
            </a>
            <Link
              to="appointment"
              smooth={true}
              offset={-80}
              duration={500}
              className="relative overflow-hidden group bg-gradient-to-r from-brand-blue to-[#0a365c] text-white px-6 py-2.5 rounded-full font-semibold transition-all cursor-pointer shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-brand-green to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-blue p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0 border-transparent shadow-none'}`}>
        <div className="px-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-brand-blue hover:bg-brand-blue/5 rounded-xl cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-gray-100">
            <a href="tel:9972696715" className="block px-4 py-2 text-base font-semibold text-brand-blue">
              Contact: 9972696715
            </a>
            <Link
              to="appointment"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-3 bg-gradient-to-r from-brand-blue to-brand-green text-white px-5 py-3.5 rounded-xl font-bold shadow-md"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
