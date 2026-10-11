import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, CheckCircle2 } from 'lucide-react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    problem: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your appointment request has been submitted.');
    setFormData({ name: '', phone: '', problem: '', date: '' });
  };

  const handleWhatsApp = () => {
    const text = `Hi, I would like to book an appointment. 
Name: ${formData.name || '[Your Name]'}
Phone: ${formData.phone || '[Your Phone]'}
Date: ${formData.date || '[Preferred Date]'}
Problem: ${formData.problem || '[Describe Issue]'}`;
    
    window.open(`https://wa.me/918431586973?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="appointment" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-0 w-full h-[120%] bg-brand-blue/[0.02] -skew-y-6 -z-10 origin-top-left shadow-inner"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 70 }}
            className="lg:col-span-5 relative"
          >
            <span className="text-brand-green font-bold text-sm uppercase tracking-[0.2em] mb-3 block">Faster Booking</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">
              Ready to Book an Appointment?
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-brand-blue to-brand-green rounded-full mb-8"></div>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              Skip the queue! Secure your consultation slot online or directly connect with our front desk via WhatsApp for instant confirmation.
            </p>

            <ul className="space-y-6 mb-12">
              {[
                "Experienced Specialists On-Call",
                "Advanced Diagnostic Facilities directly onsite",
                "Priority Check-in for Online Bookings"
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex items-center gap-4 text-gray-700 font-semibold"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} className="text-brand-green" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto relative group flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-[#25D366]/40 hover:-translate-y-1 text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
              <MessageCircle size={24} className="relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Book via WhatsApp</span>
            </button>
          </motion.div>

          {/* Form Side - Glassmorphism UI */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/90 backdrop-blur-3xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(15,76,129,0.15)] border border-white/50 relative overflow-hidden group/form">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -z-10 group-hover/form:bg-brand-green/5 transition-colors duration-1000"></div>
              
              <h3 className="text-3xl font-extrabold text-brand-dark mb-8 flex items-center gap-3 tracking-tight">
                <div className="p-3 bg-brand-blue/10 rounded-2xl">
                  <Calendar className="text-brand-blue" size={28} />
                </div>
                Online Registration
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Floating Label Input Group */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full px-5 pt-8 pb-3 rounded-2xl border-2 border-gray-100 placeholder-transparent focus:border-brand-blue focus:ring-0 outline-none transition-all bg-gray-50/50 hover:bg-gray-50 focus:bg-white text-gray-800 font-medium"
                    placeholder="Full Name"
                  />
                  <label htmlFor="name" className="absolute left-5 top-3 text-xs font-bold text-gray-400 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-3 peer-focus:text-xs peer-focus:text-brand-blue peer-focus:uppercase peer-focus:tracking-widest cursor-text">
                    Full Name
                  </label>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="peer w-full px-5 pt-8 pb-3 rounded-2xl border-2 border-gray-100 placeholder-transparent focus:border-brand-blue focus:ring-0 outline-none transition-all bg-gray-50/50 hover:bg-gray-50 focus:bg-white text-gray-800 font-medium"
                      placeholder="Phone Number"
                    />
                    <label htmlFor="phone" className="absolute left-5 top-3 text-xs font-bold text-gray-400 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-3 peer-focus:text-xs peer-focus:text-brand-blue peer-focus:uppercase peer-focus:tracking-widest cursor-text">
                      Phone Number
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-5 pt-8 pb-3 rounded-2xl border-2 border-gray-100 focus:border-brand-blue focus:ring-0 outline-none transition-all bg-gray-50/50 hover:bg-gray-50 focus:bg-white text-gray-800 font-medium appearance-none"
                    />
                     <label className="absolute left-5 top-3 text-xs font-bold text-gray-400 uppercase tracking-widest transition-all">
                      Preferred Date
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="problem"
                    id="problem"
                    required
                    rows="4"
                    value={formData.problem}
                    onChange={handleChange}
                    className="peer w-full px-5 pt-8 pb-3 rounded-2xl border-2 border-gray-100 placeholder-transparent focus:border-brand-blue focus:ring-0 outline-none transition-all bg-gray-50/50 hover:bg-gray-50 focus:bg-white text-gray-800 font-medium resize-none"
                    placeholder="Problem Description"
                  ></textarea>
                  <label htmlFor="problem" className="absolute left-5 top-3 text-xs font-bold text-gray-400 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-3 peer-focus:text-xs peer-focus:text-brand-blue peer-focus:uppercase peer-focus:tracking-widest cursor-text">
                    Briefly describe your medical concern...
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full relative overflow-hidden group bg-gradient-to-r from-brand-dark to-[#0a233f] text-white px-8 py-5 rounded-2xl font-bold transition-all shadow-xl hover:-translate-y-1 focus:ring-4 focus:ring-brand-dark/30 text-lg uppercase tracking-wider"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">Submit Request</span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Appointment;
