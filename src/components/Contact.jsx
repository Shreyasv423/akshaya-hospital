import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold text-sm uppercase tracking-wider mb-2 block">Reach Out to Us</span>
          <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Contact Information</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-blue">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Hospital Location</h3>
            <p className="text-gray-600">
              Santepete, behind Madhu Tyres,<br/> Bamboo Bazar, Mysore
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-brand-blue text-white p-8 rounded-2xl flex flex-col items-center text-center shadow-lg shadow-brand-blue/20"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Helpline</h3>
            <p className="text-blue-100 font-medium text-lg">
              <a href="tel:9972696715" className="hover:text-white transition-colors block">+91 99726 96715</a>
              <a href="tel:8431586973" className="hover:text-white transition-colors block mt-1">+91 84315 86973</a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-green">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Email Us</h3>
            <p className="text-gray-600">
              <a href="mailto:Akshayahospitalsmysore@gmail.com" className="hover:text-brand-blue transition-colors break-all">
                Akshayahospitalsmysore<br/>@gmail.com
              </a>
            </p>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl shadow-gray-200 border-4 border-white"
        >
          {/* Note: Using a general Mysore location query as exact plus code isn't provided */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1578332152063!2d76.64372997576288!3d12.305757787961957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf706b4d3f3f33%3A0xe5a3c26dc8c8a14!2sBamboo%20Bazar%2C%20Mysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709650000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Akshaya Hospitals Location Map"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
