import React, { useState, useEffect } from 'react';
import { Cookie, X, ShieldCheck } from 'lucide-react';

const SiteNotice = ({ onOpenCookies }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('akshaya_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('akshaya_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('akshaya_cookie_consent', 'dismissed');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white/95 backdrop-blur-xl border border-gray-200/90 shadow-2xl rounded-2xl p-5 text-gray-800">
        <div className="flex items-start gap-3">
          <div className="p-2.5 bg-brand-blue/10 rounded-xl text-brand-blue shrink-0">
            <Cookie size={22} />
          </div>
          <div className="flex-1 pr-2">
            <h4 className="font-bold text-sm text-brand-dark flex items-center gap-1.5 mb-1">
              Cookies & Third-Party Notice
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              We use functional storage and third-party embeds (such as Google Maps) to assist your hospital navigation and service scheduling.
            </p>
          </div>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss cookie notice"
            className="text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              onOpenCookies();
              setIsVisible(false);
            }}
            className="text-xs font-bold text-brand-blue hover:text-brand-dark underline underline-offset-2 transition-colors cursor-pointer"
          >
            Cookie Details & Embeds
          </button>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="bg-brand-blue hover:bg-brand-dark text-white px-4 py-1.5 rounded-xl font-bold text-xs transition-all shadow-sm cursor-pointer"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteNotice;
