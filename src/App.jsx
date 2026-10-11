import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';
import SiteNotice from './components/SiteNotice';

function App() {
  const [legalTab, setLegalTab] = useState(null);

  // Sync with URL hashes for direct link sharing and back/forward browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy' || hash === '#privacy-policy') {
        setLegalTab('privacy');
      } else if (hash === '#terms' || hash === '#terms-and-conditions') {
        setLegalTab('terms');
      } else if (hash === '#cookies' || hash === '#cookie-policy' || hash === '#embeds') {
        setLegalTab('cookies');
      } else if (!hash || hash.startsWith('#home') || hash.startsWith('#services') || hash.startsWith('#doctors') || hash.startsWith('#appointment') || hash.startsWith('#contact')) {
        setLegalTab(null);
      }
    };

    // Check initial hash on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openLegal = (tab) => {
    setLegalTab(tab);
    window.location.hash = tab === 'privacy' ? 'privacy-policy' : tab === 'terms' ? 'terms-and-conditions' : 'cookie-policy';
  };

  const closeLegal = () => {
    setLegalTab(null);
    if (window.location.hash.includes('privacy') || window.location.hash.includes('terms') || window.location.hash.includes('cookie')) {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  const handleTabChange = (tab) => {
    setLegalTab(tab);
    window.location.hash = tab === 'privacy' ? 'privacy-policy' : tab === 'terms' ? 'terms-and-conditions' : 'cookie-policy';
  };

  // If a legal document is being viewed, render the full LegalPage
  if (legalTab) {
    return (
      <LegalPage
        activeTab={legalTab}
        onClose={closeLegal}
        onTabChange={handleTabChange}
      />
    );
  }

  return (
    <div className="font-sans antialiased text-gray-900 min-h-screen flex flex-col overflow-x-hidden selection:bg-brand-blue/30 selection:text-brand-blue">
      <Navbar onOpenLegal={openLegal} />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Doctors />
        <Appointment />
        <Contact onOpenLegal={openLegal} />
      </main>
      <Footer onOpenLegal={openLegal} />
      <SiteNotice onOpenCookies={() => openLegal('cookies')} />
    </div>
  );
}

export default App;
