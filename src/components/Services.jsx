import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Activity, Baby, Sparkles, Scissors } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "24/7 Emergency Care",
      desc: "Round-the-clock dedicated emergency and trauma care.",
      icon: <Activity size={32} className="text-brand-blue" />
    },
    {
      title: "Orthopedic Care",
      desc: "Specialized treatment for bones, joints, and muscles.",
      icon: <Activity size={32} className="text-brand-green" />
    },
    {
      title: "Pediatrics",
      desc: "Comprehensive health care for infants, children, and adolescents.",
      icon: <Baby size={32} className="text-brand-blue" />
    },
    {
      title: "Dermatology",
      desc: "Expert care for skin, hair, and nail disorders.",
      icon: <Sparkles size={32} className="text-brand-green" />
    },
    {
      title: "General Surgery",
      desc: "Advanced surgical procedures with expert surgeons.",
      icon: <Scissors size={32} className="text-brand-blue" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-green font-bold text-sm uppercase tracking-wider mb-2 block">Our Expertise</span>
          <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Medical Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-brand-blue/10 transition-all border border-gray-100 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-50/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
