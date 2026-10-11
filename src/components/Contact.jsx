import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = ({ onOpenLegal }) => {
  return (
    <section id="contact" className="py-24 bg-gray-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-brand-blue font-bold text-sm uppercase tracking-[0.2em] mb-3 block"
          >
            Reach Out to Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight"
          >
            Contact Information
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }} whileInView={{ width: '6rem' }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-brand-blue to-brand-green mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-[2rem] flex flex-col items-center text-center shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-brand-blue/10 transition-shadow border border-gray-100 group"
          >
            <div className="w-20 h-20 bg-brand-blue/5 rounded-3xl flex items-center justify-center mb-6 text-brand-blue group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <MapPin size={32} />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Hospital Location</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Santepete, behind Madhu Tyres,<br/> Bamboo Bazar, Mysore
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-brand-blue to-[#0a365c] text-white p-10 rounded-[2rem] flex flex-col items-center text-center shadow-[0_20px_40px_-15px_rgba(15,76,129,0.5)] transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 border border-white/20">
              <Phone size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">24/7 Helpline</h3>
            <div className="text-blue-50 font-semibold text-xl tracking-wide space-y-2 relative z-10">
              <a href="tel:9972696715" className="hover:text-white transition-colors block text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white drop-shadow-sm">+91 99726 96715</a>
              <a href="tel:8431586973" className="hover:text-white transition-colors block text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white drop-shadow-sm">+91 84315 86973</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-10 rounded-[2rem] flex flex-col items-center text-center shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-brand-green/10 transition-shadow border border-gray-100 group"
          >
            <div className="w-20 h-20 bg-brand-green/5 rounded-3xl flex items-center justify-center mb-6 text-brand-green group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
              <Mail size={32} />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Email Us</h3>
            <p className="text-gray-600 font-medium mt-auto">
              <a href="mailto:Akshayahospitalsmysore@gmail.com" className="hover:text-brand-blue transition-colors break-all inline-block hover:-translate-y-0.5 transform duration-200">
                Akshayahospitalsmysore<br/>@gmail.com
              </a>
            </p>
          </motion.div>
        </div>

        {/* Google Map - Premium Presentation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 border-[6px] border-white relative z-10 bg-gray-100"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1578332152063!2d76.64372997576288!3d12.305757787961957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf706b4d3f3f33%3A0xe5a3c26dc8c8a14!2sBamboo%20Bazar%2C%20Mysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709650000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Akshaya Hospitals Location Map"
          ></iframe>
        </motion.div>

        {/* 3rd-Party Embed Compliance Note */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 px-3 gap-2">
          <span>Interactive Map provided via Google Maps (Third-Party Embed)</span>
          <button 
            onClick={() => onOpenLegal && onOpenLegal('cookies')}
            className="text-brand-blue hover:text-brand-dark underline underline-offset-2 font-medium transition-colors cursor-pointer"
          >
            Review Cookies & 3rd-Party Embeds Policy →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
