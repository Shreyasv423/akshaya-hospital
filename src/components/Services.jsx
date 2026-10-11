import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Activity, Baby, Sparkles, Scissors } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "24/7 Emergency Care",
      desc: "Round-the-clock dedicated emergency and trauma care.",
      icon: <Activity size={32} className="text-white relative z-10" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Orthopedic Care",
      desc: "Specialized treatment for bones, joints, and muscles.",
      icon: <Activity size={32} className="text-white relative z-10" />,
      color: "from-emerald-400 to-brand-green"
    },
    {
      title: "Pediatrics",
      desc: "Comprehensive health care for infants, children, and adolescents.",
      icon: <Baby size={32} className="text-white relative z-10" />,
      color: "from-cyan-400 to-brand-blue"
    },
    {
      title: "Dermatology",
      desc: "Expert care for skin, hair, and nail disorders.",
      icon: <Sparkles size={32} className="text-white relative z-10" />,
      color: "from-purple-400 to-indigo-500"
    },
    {
      title: "General Surgery",
      desc: "Advanced surgical procedures with expert surgeons.",
      icon: <Scissors size={32} className="text-white relative z-10" />,
      color: "from-teal-400 to-emerald-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-bold text-sm uppercase tracking-[0.2em] mb-3 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight"
          >
            Premium Medical Services
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-brand-blue to-brand-green mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative p-[1px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Premium Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 group-hover:from-brand-blue group-hover:to-brand-green transition-colors duration-500 rounded-3xl"></div>
              
              <div className="relative h-full bg-white rounded-[23px] p-8 md:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-500">
                
                {/* Glowing Icon Container */}
                <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}></div>
                  <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight group-hover:text-brand-blue transition-colors">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {service.desc}
                </p>
                
                <div className="mt-8 flex items-center text-brand-blue font-bold text-sm tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Learn More 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
