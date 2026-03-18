import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Doctors', to: 'doctors' },
    { name: 'Appointment', to: 'appointment' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-3">
            <img src="/photo.png" alt="Akshaya Hospitals" className="h-12 w-auto object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              Akshaya Hospitals
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-brand-dark hover:text-brand-blue cursor-pointer font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:9972696715" className="text-brand-blue font-semibold hover:text-brand-dark transition-colors flex items-center gap-2">
              Contact: 9972696715
            </a>
            <Link
              to="appointment"
              smooth={true}
              offset={-80}
              duration={500}
              className="bg-brand-blue hover:bg-brand-green text-white px-5 py-2.5 rounded-full font-medium transition-all cursor-pointer shadow-md hover:shadow-lg"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-blue"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-brand-dark hover:text-brand-blue hover:bg-brand-gray rounded-md cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:9972696715" className="block px-3 py-2 text-base font-medium text-brand-blue hover:bg-brand-gray rounded-md">
              Contact: 9972696715
            </a>
             <Link
              to="appointment"
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-brand-blue text-white px-5 py-3 rounded-md font-medium"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
