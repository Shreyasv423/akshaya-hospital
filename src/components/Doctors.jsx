import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Doctors = () => {
  const [filter, setFilter] = useState('All');

  const doctorsList = [
    { name: "Dr. Punith", qual: "MBBS, MS (Ortho)", spec: "Orthopedics", hospital: "JSS Hospital" },
    { name: "Dr. Giridhar", qual: "MBBS, MS (Ortho)", spec: "Orthopedics", hospital: "" },
    { name: "Dr. Hemanth", qual: "MBBS, MS (Ortho)", spec: "Orthopedics", hospital: "Manipal" },
    { name: "Dr. Darshan", qual: "MBBS, MS (Orthoscopic Surgeon)", spec: "Orthopedics", hospital: "" },
    { name: "Dr. Rakesh Raje Urs", qual: "MBBS, MD (Internal Medicine)", spec: "Internal Medicine", hospital: "" },
    { name: "Dr. Akshatha", qual: "MBBS, MD (Paediatrics)", spec: "Paediatrics", hospital: "" },
    { name: "Dr. Shashikumar", qual: "MBBS, MS (General Surgery)", spec: "General Surgery", hospital: "" },
    { name: "Dr. Jayaram", qual: "MBBS, MD (Anaesthesiology)", spec: "Anaesthesiology", hospital: "" },
    { name: "Dr. Jayashree", qual: "MBBS, MD (Dermatology)", spec: "Dermatology", hospital: "" },
    { name: "Dr. Anudeep", qual: "MBBS, MS, DCh", spec: "Plastic Surgeon", hospital: "Manipal" },
    { name: "Dr. Kavitha", qual: "MBBS, MS (OBG)", spec: "OBG", hospital: "Apollo" }
  ];

  // Get unique specialties for the filter tabs
  const specialties = ['All', ...new Set(doctorsList.map(doc => doc.spec))];

  const filteredDoctors = filter === 'All' 
    ? doctorsList 
    : doctorsList.filter(doc => doc.spec === filter);

  return (
    <section id="doctors" className="py-24 bg-gray-50/50 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-brand-blue font-bold text-sm uppercase tracking-[0.2em] mb-3 block"
          >
            Leadership & Medical Team
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight"
          >
            Meet Our Experts
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }} whileInView={{ width: '6rem' }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-brand-blue to-brand-green mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Administration Section - Premium Layout */}
        <div className="mb-24">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 border-l-4 border-brand-green pl-5 py-1 uppercase tracking-wider">
            Hospital Administration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-8 border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl shadow-brand-blue/5 hover:shadow-brand-blue/10 transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-[100px] transition-transform group-hover:scale-110"></div>
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-brand-blue to-[#0a365c] flex items-center justify-center text-white font-black text-4xl shadow-lg shrink-0 -rotate-3 group-hover:rotate-0 transition-transform">
                M
              </div>
              <div className="text-center sm:text-left relative z-10">
                <h4 className="text-2xl font-extrabold text-brand-dark mb-1">Mr. Mohan N P</h4>
                <p className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-3">Managing Director</p>
                <div className="w-12 h-1 bg-brand-green/30 rounded-full mx-auto sm:mx-0"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl shadow-brand-green/5 hover:shadow-brand-green/10 transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-bl-[100px] transition-transform group-hover:scale-110"></div>
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-brand-green to-emerald-600 flex items-center justify-center text-white font-black text-4xl shadow-lg shrink-0 rotate-3 group-hover:rotate-0 transition-transform">
                C
              </div>
              <div className="text-center sm:text-left relative z-10">
                <h4 className="text-2xl font-extrabold text-brand-dark mb-1">Dr. Chethan D K</h4>
                <p className="text-brand-green font-bold tracking-wide uppercase text-sm mb-3">Chief & Administrator</p>
                <div className="w-12 h-1 bg-brand-blue/30 rounded-full mx-auto sm:mx-0"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Specialists Filter Tabs */}
        <div className="mb-12">
           <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 border-l-4 border-brand-blue pl-5 py-1 uppercase tracking-wider">
            Our Specialists
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            {specialties.map(spec => (
              <button
                key={spec}
                onClick={() => setFilter(spec)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  filter === spec 
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 scale-105' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredDoctors.map((doc, index) => (
              <motion.div
                key={doc.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-blue/10 transition-shadow relative overflow-hidden group block"
              >
                {/* Decorative border top */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-blue to-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex flex-col h-full pt-2">
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue font-black text-2xl group-hover:scale-110 transition-transform duration-300">
                      {doc.name.split(' ')[1]?.[0] || 'D'}
                    </div>
                    <span className="bg-brand-blue/5 text-brand-blue text-xs font-bold px-3 py-1.5 rounded-lg truncate max-w-[120px]">
                      {doc.spec}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-gray-800 mb-1">{doc.name}</h3>
                  
                  <div className="mt-auto pt-4 relative">
                    <p className="text-gray-600 font-medium text-sm mb-2 opacity-90">{doc.qual}</p>
                    {doc.hospital && (
                      <p className="text-gray-500 text-xs flex items-center gap-1.5 font-semibold bg-gray-50 p-2 rounded-lg inline-flex w-full">
                        <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                        {doc.hospital}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Doctors;
