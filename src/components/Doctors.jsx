import React from 'react';
import { motion } from 'framer-motion';

const Doctors = () => {
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

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold text-sm uppercase tracking-wider mb-2 block">Our Medical Team</span>
          <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Meet Our Experts</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-green mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            Dedicated specialists and administrators working together for your better health.
          </p>
        </div>

        {/* Administration Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-brand-dark mb-8 border-l-4 border-brand-green pl-4">Hospital Administration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-blue/5 rounded-2xl p-6 border border-brand-blue/10 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-2xl shadow-inner">
                M
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-dark mb-1">Mr. Mohan N P</h4>
                <p className="text-brand-blue font-semibold">Managing Director</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-blue/5 rounded-2xl p-6 border border-brand-blue/10 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-2xl shadow-inner">
                C
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-dark mb-1">Dr. Chethan D K</h4>
                <p className="text-brand-blue font-semibold">Chief & Administrator</p>
              </div>
            </motion.div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-brand-dark mb-8 border-l-4 border-brand-blue pl-4">Our Specialists</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctorsList.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-blue to-brand-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4 text-brand-blue font-bold text-xl">
                  {doc.name.split(' ')[1]?.[0] || 'D'}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{doc.name}</h3>
                <p className="text-brand-blue font-medium text-sm mb-3 bg-brand-blue/5 inline-block px-2 py-1 rounded w-fit">
                  {doc.spec}
                </p>
                <div className="mt-auto">
                  <p className="text-gray-600 text-sm mb-1">{doc.qual}</p>
                  {doc.hospital && (
                    <p className="text-gray-400 text-xs flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-brand-green"></span>
                      Associated with {doc.hospital}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
