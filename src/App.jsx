import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 min-h-screen flex flex-col overflow-x-hidden selection:bg-brand-blue/30 selection:text-brand-blue">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Doctors />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
