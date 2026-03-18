import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { PhoneCall, CalendarPlus, Activity, Stethoscope, ShieldPlus } from 'lucide-react';

const Hero = () => {
  const highlights = [
    {
      title: "Experienced Doctors",
      desc: "Expert care from specialized professionals",
      icon: <Stethoscope className="w-8 h-8 text-brand-blue" />
    },
    {
      title: "Diagnostic Services",
      desc: "Advanced lab and accurate reporting",
      icon: <Activity className="w-8 h-8 text-brand-green" />
    },
    {
      title: "Emergency Care",
      desc: "24/7 dedicated emergency support ready",
      icon: <ShieldPlus className="w-8 h-8 text-red-500" />
    }
  ];

  return (
    <section id="home" className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-[#e0f2fe] via-white to-[#d1fae5] min-h-screen flex items-center relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-semibold text-sm mb-6 border border-brand-blue/20">
              Multispeciality Hospital in Mysore
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark leading-tight mb-6">
              <span className="text-brand-blue">Akshaya</span> Hospitals
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium mb-8">
              Compassion • Commitment • Care
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-lg">
              Providing top-tier medical facilities, expert specialists, and compassionate healthcare to ensure a healthier tomorrow for you and your family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="appointment"
                smooth={true}
                offset={-80}
                duration={500}
                className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-dark text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-brand-blue/50 cursor-pointer text-lg"
              >
                <CalendarPlus size={22} />
                Book Appointment
              </Link>
              <a
                href="tel:9972696715"
                className="flex items-center justify-center gap-2 bg-white text-brand-blue border-2 border-brand-blue hover:bg-brand-blue/5 px-8 py-4 rounded-xl font-semibold transition-all shadow-sm text-lg"
              >
                <PhoneCall size={22} />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white p-6 rounded-2xl shadow-xl shadow-brand-blue/5 flex items-center gap-6 border border-gray-100"
              >
                <div className="bg-gray-50 p-4 rounded-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-1">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
