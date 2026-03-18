import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar } from 'lucide-react';

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
    // Simulate booking action
    alert('Thank you! Your appointment request has been submitted.');
    setFormData({ name: '', phone: '', problem: '', date: '' });
  };

  const handleWhatsApp = () => {
    const text = `Hi, I would like to book an appointment. 
Name: ${formData.name || '[Your Name]'}
Phone: ${formData.phone || '[Your Phone]'}
Date: ${formData.date || '[Preferred Date]'}
Problem: ${formData.problem || '[Describe Issue]'}`;
    
    // Using one of the provided numbers for WhatsApp
    window.open(`https://wa.me/918431586973?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="appointment" className="py-20 bg-brand-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-brand-dark mb-4">Book an Appointment</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-green rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 mb-8">
              Skip the queue! Book your visit online or connect with us directly via WhatsApp for a quicker response.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-bold text-sm">✓</span>
                Experienced Doctors & Specialists
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-bold text-sm">✓</span>
                Advanced Diagnostic Facilities
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-bold text-sm">✓</span>
                Quick & Hassle-free Registration
              </li>
            </ul>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b958] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[#25D366]/50 text-lg"
            >
              <MessageCircle size={24} />
              Book via WhatsApp
            </button>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-[100px] -z-10"></div>
            <h3 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-2">
              <Calendar className="text-brand-blue" />
              Online Registration
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-gray-50/50"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-gray-50/50"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-gray-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Problem Description</label>
                <textarea
                  name="problem"
                  required
                  rows="3"
                  value={formData.problem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-gray-50/50 resize-none"
                  placeholder="Briefly describe your medical concern..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-dark hover:bg-brand-blue text-white px-6 py-4 rounded-xl font-bold transition-all shadow-md focus:ring-4 focus:ring-brand-blue/30 text-lg"
              >
                Submit Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Appointment;
