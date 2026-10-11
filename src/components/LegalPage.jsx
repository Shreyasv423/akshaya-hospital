import React, { useEffect } from 'react';
import { ShieldCheck, FileText, Cookie, ArrowLeft, ExternalLink, MapPin, Phone, Mail, CheckCircle2, AlertTriangle, Copyright } from 'lucide-react';

const LegalPage = ({ activeTab = 'privacy', onClose, onTabChange }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
    { id: 'terms', label: 'Terms & Conditions', icon: FileText },
    { id: 'cookies', label: 'Cookie Policy & Embeds', icon: Cookie },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-brand-blue/30 selection:text-brand-blue flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button
            onClick={onClose}
            className="group flex items-center gap-2.5 text-brand-dark hover:text-brand-blue font-semibold text-sm px-4 py-2 rounded-full border border-gray-200 hover:border-brand-blue/30 bg-white shadow-xs transition-all cursor-pointer"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-3">
            <img 
              src="/photo.png" 
              alt="Akshaya Hospitals" 
              className="h-10 w-auto object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="hidden sm:block text-left">
              <span className="block font-black text-lg text-brand-dark leading-tight">
                Akshaya <span className="text-brand-blue">Hospitals</span>
              </span>
              <span className="text-[11px] font-bold text-brand-green uppercase tracking-wider">
                Legal & Compliance Portal
              </span>
            </div>
          </div>

          <a
            href="tel:9972696715"
            className="text-xs sm:text-sm font-bold text-brand-blue bg-brand-blue/10 hover:bg-brand-blue hover:text-white px-3 sm:px-4 py-2 rounded-full transition-all"
          >
            Help: 9972696715
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Policy Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 bg-white p-2 rounded-2xl border border-gray-200/80 shadow-xs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-blue to-[#0a365c] text-white shadow-md shadow-brand-blue/20 scale-[1.02]'
                    : 'text-gray-600 hover:text-brand-blue hover:bg-gray-50'
                }`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-gray-200/80 shadow-xl shadow-gray-200/40">
          
          {/* PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <article className="prose prose-slate max-w-none">
              <div className="border-b border-gray-100 pb-8 mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs uppercase tracking-wider mb-3">
                  Patient Data Protection
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight">
                  Privacy Policy
                </h1>
                <p className="text-gray-500 text-sm mt-2">
                  Last Updated: October 2026 • Governed by Akshaya Hospitals, Mysore, Karnataka
                </p>
              </div>

              {/* Emergency Alert Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-xl mb-8 flex items-start gap-3">
                <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-amber-900 font-medium m-0">
                  <strong>Notice regarding Emergency Medical Situations:</strong> This website and its online registration forms are intended for elective outpatient consultation requests only. For immediate or life-threatening medical emergencies, please call our 24/7 Helpline (+91 9972696715 / +91 8431586973) or visit our casualty department directly.
                </p>
              </div>

              <section className="space-y-6 text-gray-700 leading-relaxed font-normal">
                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                  1. Introduction & Overview
                </h2>
                <p>
                  <strong>Akshaya Hospitals</strong> ("we", "our", or "us"), situated at Santepete, behind Madhu Tyres, Bamboo Bazar, Mysore, Karnataka, is committed to safeguarding the privacy, personal details, and clinical health data of all patients and visitors using our website.
                </p>
                <p>
                  This Privacy Policy outlines how we collect, handle, store, and protect information when you browse our website, request a medical appointment, or communicate with our healthcare team. We adhere to the principles outlined in the <em>Information Technology Act, 2000</em>, the <em>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</em>, and applicable healthcare compliance standards in India.
                </p>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  2. Information We Collect
                </h2>
                <p>When you interact with our website, we may collect the following categories of information:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <h3 className="font-bold text-brand-dark text-base mb-1">A. Personal Identification Data</h3>
                    <p className="text-sm text-gray-600 m-0">
                      Full Name, Contact Phone Number, Preferred Consultation Date, and communication details submitted through our appointment registration module.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <h3 className="font-bold text-brand-dark text-base mb-1">B. Preliminary Health Notes</h3>
                    <p className="text-sm text-gray-600 m-0">
                      Brief descriptions of your medical symptoms, health concerns, or specialist preference provided voluntarily to triage appointments.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <h3 className="font-bold text-brand-dark text-base mb-1">C. Technical & Diagnostic Data</h3>
                    <p className="text-sm text-gray-600 m-0">
                      IP address, device type, operating system, browser details, and time stamps automatically recorded for site security, debugging, and traffic analysis.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <h3 className="font-bold text-brand-dark text-base mb-1">D. Communication Logs</h3>
                    <p className="text-sm text-gray-600 m-0">
                      Records of incoming phone calls, WhatsApp inquiries, or emails initiated using links provided on this portal.
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  3. Purpose of Processing Your Information
                </h2>
                <ul className="space-y-2 list-disc pl-5">
                  <li>To schedule, confirm, and manage medical appointments with our doctors and specialists.</li>
                  <li>To verify patient contact details and send appointment reminders or hospital updates.</li>
                  <li>To route your health concern to the appropriate medical department (e.g., Orthopedics, Pediatrics, Dermatology, General Surgery).</li>
                  <li>To comply with regulatory healthcare documentation and legal obligations in Karnataka, India.</li>
                  <li>To maintain website performance, prevent malicious access, and ensure security.</li>
                </ul>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  4. Confidentiality & Medical Records Protection
                </h2>
                <p>
                  Patient health records are treated with the highest level of clinical confidentiality. Akshaya Hospitals enforces strict access controls: only licensed physicians, certified nursing staff, and authorized hospital desk coordinators have access to submitted appointment requests. <strong>We do not sell, rent, or trade your personal or medical data to third-party marketing companies.</strong>
                </p>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  5. Third-Party Embeds & Service Providers
                </h2>
                <p>
                  Our website incorporates selected third-party tools to facilitate services for our visitors:
                </p>
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={18} />
                    <p className="m-0 text-sm">
                      <strong>Google Maps Embed:</strong> We embed interactive Google Maps to help patients locate our facility behind Madhu Tyres, Bamboo Bazar, Mysore. Interacting with the map may allow Google to collect technical data according to Google's Privacy Policy.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={18} />
                    <p className="m-0 text-sm">
                      <strong>Telecommunications & Calling Links:</strong> Telephone links (e.g. <code>tel:9972696715</code>) interact with your device's native telephone dialer and carrier network.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={18} />
                    <p className="m-0 text-sm">
                      <strong>Web Hosting & Content Delivery:</strong> Secure hosting infrastructure ensures encryption and rapid asset delivery.
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  6. Data Security & Storage Practices
                </h2>
                <p>
                  We implement administrative, technical, and physical safeguards designed to protect personal information against accidental loss, unauthorized access, alteration, or disclosure. While no electronic transmission is 100% immune from threats, we regularly review and enhance our security configurations.
                </p>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  7. Patient Rights & Grievance Contact
                </h2>
                <p>
                  Under applicable laws, you retain the right to inquire about your data, request corrections to inaccurate contact information, or request removal of non-mandatory records.
                </p>
                <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-5 mt-4">
                  <h3 className="font-bold text-brand-dark text-base mb-2">Grievance & Privacy Inquiries:</h3>
                  <p className="text-sm text-gray-700 m-0">
                    <strong>Administrative Office:</strong> Akshaya Hospitals<br/>
                    Santepete, behind Madhu Tyres, Bamboo Bazar, Mysore, Karnataka 570024<br/>
                    <strong>Helpline Phone:</strong> +91 99726 96715 / +91 84315 86973<br/>
                    <strong>Email:</strong> Akshayahospitalsmysore@gmail.com
                  </p>
                </div>
              </section>
            </article>
          )}

          {/* TERMS AND CONDITIONS */}
          {activeTab === 'terms' && (
            <article className="prose prose-slate max-w-none">
              <div className="border-b border-gray-100 pb-8 mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-wider mb-3">
                  Legal Agreement
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight">
                  Terms & Conditions
                </h1>
                <p className="text-gray-500 text-sm mt-2">
                  Effective Date: October 2026 • Please read carefully before using this portal
                </p>
              </div>

              <section className="space-y-6 text-gray-700 leading-relaxed font-normal">
                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                  1. Agreement to Terms
                </h2>
                <p>
                  By accessing, browsing, or utilizing the services of this website (the "Site"), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please refrain from using the Site.
                </p>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  2. Medical Disclaimer & No Doctor-Patient Relationship
                </h2>
                <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-xl my-4 text-rose-950 font-medium text-sm">
                  <strong>CRITICAL MEDICAL DISCLAIMER:</strong> All content, descriptions of medical specialties, symptoms, health tips, and information published on this website are for general informational and educational purposes only. They do not constitute formal medical diagnosis, treatment recommendations, or a binding doctor-patient relationship. Submitting an online appointment booking request does not constitute clinical admission until confirmed by hospital staff.
                </div>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  3. Online Appointment Booking Terms
                </h2>
                <ul className="space-y-2 list-disc pl-5">
                  <li><strong>Availability:</strong> Online booking requests are subject to specialist availability, surgery schedules, and hospital operational hours.</li>
                  <li><strong>Confirmation:</strong> An online submission is confirmed only after hospital reception contacts you by phone or in-person verification.</li>
                  <li><strong>Emergency Care:</strong> Do not rely on appointment forms for urgent or trauma treatment. Walk in immediately to our 24/7 casualty wing or dial our emergency numbers.</li>
                  <li><strong>Accurate Details:</strong> You agree to provide true, current, and complete details when submitting registration forms.</li>
                </ul>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  4. Intellectual Property & Copyright Notice
                </h2>
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-brand-dark font-bold text-lg mb-2">
                    <Copyright size={20} className="text-brand-blue" />
                    <span>Proprietary Rights & Copyright</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    All website contents, hospital logos, graphics, text copy, layout structures, and medical service listings are the intellectual property of <strong>Akshaya Hospitals</strong>, protected by Indian and international copyright, trademark, and intellectual property laws.
                  </p>
                  <p className="text-sm text-gray-600 mb-0">
                    Website architecture, interface design, frontend code, and digital implementation were developed and engineered by <strong>Shreyas Tech Solutions</strong>. Any unauthorized copying, reproduction, re-engineering, or commercial redistribution without prior written consent is strictly prohibited.
                  </p>
                </div>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  5. Third-Party Embeds & External Links
                </h2>
                <p>
                  The Site contains embeds such as Google Maps and links to external communication platforms. Akshaya Hospitals does not control the content, security policies, or operational uptime of third-party platforms and assumes no liability for their independent actions.
                </p>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  6. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted under applicable law, Akshaya Hospitals, its directors (Mr. Mohan N P, Dr. Chethan D K), specialists, medical personnel, and web development partners (Shreyas Tech Solutions) shall not be liable for any direct, indirect, incidental, or consequential damages resulting from website downtime, delays in form transmissions, or reliance placed on general web content.
                </p>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  7. Governing Law & Jurisdiction
                </h2>
                <p>
                  These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India. Any legal disputes or claims arising out of the use of this website shall fall under the exclusive jurisdiction of the competent courts of <strong>Mysore, Karnataka, India</strong>.
                </p>
              </section>
            </article>
          )}

          {/* COOKIE POLICY & THIRD-PARTY EMBEDS */}
          {activeTab === 'cookies' && (
            <article className="prose prose-slate max-w-none">
              <div className="border-b border-gray-100 pb-8 mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-xs uppercase tracking-wider mb-3">
                  Transparency & Technical Embeds
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight">
                  Cookies & Third-Party Embeds Policy
                </h1>
                <p className="text-gray-500 text-sm mt-2">
                  Explaining local storage, cookies, and embedded external modules on our website
                </p>
              </div>

              <section className="space-y-6 text-gray-700 leading-relaxed font-normal">
                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
                  1. What Are Cookies & Local Storage?
                </h2>
                <p>
                  Cookies are small text files placed on your computer or mobile device when you visit a website. Local storage (Web Storage) allows web applications to store data locally within the user's browser. We use these technologies to ensure core functionality, remember user preferences, and provide accurate navigation information.
                </p>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  2. Cookies & Local Technologies Used on This Site
                </h2>
                
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-left text-sm border-collapse border border-gray-200 rounded-2xl overflow-hidden">
                    <thead className="bg-gray-100 text-brand-dark font-bold">
                      <tr>
                        <th className="p-3 border border-gray-200">Category</th>
                        <th className="p-3 border border-gray-200">Provider</th>
                        <th className="p-3 border border-gray-200">Purpose</th>
                        <th className="p-3 border border-gray-200">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold text-brand-blue">Essential / Functional</td>
                        <td className="p-3">Akshaya Hospitals</td>
                        <td className="p-3">Saves your consent preference for the cookie notification banner so it doesn't reappear on every page load.</td>
                        <td className="p-3">Persistent (Local Storage)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold text-brand-green">Navigation & Interactive Map</td>
                        <td className="p-3">Google LLC (Maps Embed)</td>
                        <td className="p-3">Powers the interactive hospital locator map at Bamboo Bazar, Mysore, calculating driving directions and tile caching.</td>
                        <td className="p-3">Session / Third-party (Google managed)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-purple-600">Font & Asset Delivery</td>
                        <td className="p-3">CDN / System Caches</td>
                        <td className="p-3">Caches modern typography, iconography, and logos for lightning-fast subsequent loads.</td>
                        <td className="p-3">Browser Cache</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  3. In-Depth Third-Party Embeds Audit
                </h2>
                <p>
                  We believe in transparent digital practices. Here is a comprehensive disclosure of third-party integrations running on Akshaya Hospitals:
                </p>
                
                <div className="space-y-4 my-4">
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-brand-dark text-base m-0 flex items-center gap-2">
                        <MapPin size={18} className="text-brand-blue" />
                        Google Maps Embed (`&lt;iframe&gt;`)
                      </h3>
                      <span className="text-xs bg-brand-blue/10 text-brand-blue font-bold px-2.5 py-1 rounded-md">
                        Contact Page
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 m-0 leading-relaxed">
                      To help patients find our campus behind Madhu Tyres, Bamboo Bazar, Mysore, we embed a Google Maps iframe. Google may place cookies (such as <code>NID</code>, <code>1P_JAR</code>) to store user preferences and map zoom states. For more details on Google's privacy protocols, visit{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-semibold underline">
                        Google Privacy Policy
                      </a>.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-brand-dark text-base m-0 flex items-center gap-2">
                        <Phone size={18} className="text-brand-green" />
                        Direct Calling & Communication Protocols
                      </h3>
                      <span className="text-xs bg-brand-green/10 text-brand-green font-bold px-2.5 py-1 rounded-md">
                        Header, Footer, Floating CTA
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 m-0 leading-relaxed">
                      Clicking <code>tel:</code> or <code>mailto:</code> links opens your device's native phone dialer or email client. These links do not store tracker cookies on our servers.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-brand-dark text-base m-0 flex items-center gap-2">
                        <ExternalLink size={18} className="text-[#0077b5]" />
                        Professional Social Media Links
                      </h3>
                      <span className="text-xs bg-[#0077b5]/10 text-[#0077b5] font-bold px-2.5 py-1 rounded-md">
                        Developer & Hospital Profiles
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 m-0 leading-relaxed">
                      Links pointing to external profiles (such as the developer LinkedIn profile <code>/in/ishreyasv</code> by Shreyas Tech Solutions) open in new tabs with secure <code>rel="noopener noreferrer"</code> attributes, preventing cross-site scripting and unauthorized cookie leakage.
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  4. How to Manage or Disable Cookies
                </h2>
                <p>
                  You can control and disable cookies via your browser settings. Please note that disabling essential cookies may impact map interactivity or website performance:
                </p>
                <ul className="space-y-1.5 list-disc pl-5 text-sm">
                  <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and security &rarr; Cookies and other site data.</li>
                  <li><strong>Apple Safari:</strong> Preferences &rarr; Privacy &rarr; Block all cookies.</li>
                  <li><strong>Mozilla Firefox:</strong> Settings &rarr; Privacy & Security &rarr; Enhanced Tracking Protection.</li>
                  <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and site permissions &rarr; Manage and delete cookies.</li>
                </ul>

                <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2 pt-4">
                  5. Updates to this Policy
                </h2>
                <p>
                  We may periodically update our technical embeds or cookie practices. Updates will be published on this page with an updated revision date.
                </p>
              </section>
            </article>
          )}

          {/* Quick Tab Switcher at Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-500 font-medium">
              &copy; {new Date().getFullYear()} Akshaya Hospitals • Developed by Shreyas Tech Solutions
            </span>
            <div className="flex items-center gap-4 text-xs font-bold text-brand-blue">
              <button onClick={() => onTabChange('privacy')} className="hover:underline cursor-pointer">Privacy Policy</button>
              <span>•</span>
              <button onClick={() => onTabChange('terms')} className="hover:underline cursor-pointer">Terms & Conditions</button>
              <span>•</span>
              <button onClick={() => onTabChange('cookies')} className="hover:underline cursor-pointer">Cookie Policy</button>
            </div>
          </div>

        </div>
      </main>

      {/* Footer in Policy View */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Akshaya Hospitals, Mysore — "Compassion • Commitment • Care"</span>
          <button
            onClick={onClose}
            className="text-brand-blue font-bold hover:underline cursor-pointer"
          >
            Return to Homepage ↑
          </button>
        </div>
      </footer>
    </div>
  );
};

export default LegalPage;
