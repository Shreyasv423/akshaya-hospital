import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { PhoneCall, CalendarPlus, Activity, Stethoscope, ShieldPlus } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.2]);

  const highlights = [
    {
      title: "Experienced Doctors",
      desc: "Expert care from specialized professionals",
      icon: <Stethoscope className="w-7 h-7 text-white" />,
      color: "from-blue-500 to-brand-blue",
      delay: 0.2
    },
    {
      title: "Diagnostic Services",
      desc: "Advanced lab and accurate reporting",
      icon: <Activity className="w-7 h-7 text-white" />,
      color: "from-brand-green-light to-brand-green",
      delay: 0.4
    },
    {
      title: "Emergency Care",
      desc: "24/7 dedicated emergency support ready",
      icon: <ShieldPlus className="w-7 h-7 text-white" />,
      color: "from-red-400 to-red-600",
      delay: 0.6
    }
  ];

  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gray-50 min-h-[90vh] flex items-center relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <motion.div style={{ y: y1, opacity }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-blue/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></motion.div>
      <motion.div style={{ y: y2, opacity }} className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-brand-green/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></motion.div>
      
      {/* Premium Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,76,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,76,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-brand-blue/10 text-brand-blue font-semibold text-sm mb-6 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                Multispeciality Hospital in Mysore
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-dark leading-[1.1] mb-6 tracking-tight">
                Healthcare with <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
                  Compassion
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed font-medium">
                Providing top-tier medical facilities, expert specialists, and dedicated healthcare to ensure a healthier tomorrow for you and your family.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  to="appointment"
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="group relative flex items-center justify-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-brand-blue/20 hover:shadow-brand-blue/40 hover:-translate-y-1 cursor-pointer text-lg overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  <CalendarPlus size={22} className="relative z-10" />
                  <span className="relative z-10">Book Appointment</span>
                </Link>
                <a
                  href="tel:9972696715"
                  className="flex items-center justify-center gap-3 bg-white text-brand-dark border border-gray-200 hover:border-brand-blue/30 px-8 py-4 rounded-2xl font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-1 text-lg group"
                >
                  <PhoneCall size={22} className="text-brand-blue group-hover:rotate-12 transition-transform" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Highlights Cards - Floating layout */}
          <div className="lg:col-span-5 relative h-full min-h-[400px]">
            <div className="flex flex-col gap-5 relative z-10">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: item.delay, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.03, x: -5, transition: { duration: 0.2 } }}
                  className={`bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl shadow-gray-200/50 flex items-center gap-5 border border-white/50 w-full max-w-md ${index === 1 ? 'ml-auto lg:-ml-12 relative z-20' : 'ml-auto'}`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-inner`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 tracking-tight">{item.title}</h3>
                    <p className="text-gray-500 text-sm font-medium mt-1 leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative background shape for cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-blue/5 to-brand-green/5 rounded-[40px] rotate-3 -z-10 blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
