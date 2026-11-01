import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  Headphones,
  Clock
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactPage: React.FC = () => {
  const { navigateToPage, showNotification } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    showNotification('Thank you! Your message has been received. A representative will contact you shortly.');
  };

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">Contact Us</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full mb-3">
          <Mail className="w-3.5 h-3.5" /> Direct Communications
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight">
          Get in Touch with XMart Orbit
        </h1>
        <p className="mt-3 text-base text-[#727586] max-w-2xl mx-auto leading-relaxed">
          Have questions about our cloud architectures, enterprise migrations, custom hardware quotes, or partner programs? We’re ready to assist.
        </p>
      </section>

      {/* 2-Column Contact Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-5">
              <h3 className="text-lg font-bold text-[#1B1340]">Corporate Headquarters</h3>
              
              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#673DE6] flex items-center justify-center shrink-0">
                    <BuildingIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-sm text-[#1D1E20] block">XMart Orbit Private Limited</strong>
                    <span>Global Technology Center</span>
                    <div className="text-slate-500 mt-0.5">https://xmartorbit.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#00B090] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-sm text-[#1D1E20] block">Email Inquiries</strong>
                    <div className="text-slate-600">General: support@xmartorbit.com</div>
                    <div className="text-slate-600">Enterprise: sales@xmartorbit.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-[#2F1C6A] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-sm text-[#1D1E20] block">Hours of Operation</strong>
                    <div>Technical Support: 24 Hours / 7 Days / 365 Days</div>
                    <div>Sales & Corporate: Mon – Fri (09:00 – 18:00 UTC)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#2F1C6A] to-[#1B1340] text-white">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00B090] uppercase tracking-wider mb-1">
                <Headphones className="w-3.5 h-3.5" /> Urgent Technical Issue?
              </div>
              <h4 className="text-base font-bold">Existing Customer with an Outage?</h4>
              <p className="text-xs text-purple-200 mt-1">
                Log in to the Client Area or use our live chat to reach our on-call operations engineer directly.
              </p>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-purple-950/5">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B1340]">Inquiry Transmitted!</h3>
                  <p className="text-xs sm:text-sm text-[#727586] max-w-sm mx-auto">
                    Thank you, {name}. A member of our enterprise team has received your message and will respond within 4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="text-xs font-bold text-[#673DE6] hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1B1340] mb-2">Send Us a Direct Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1D1E20] mb-1">Full Name:</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1D1E20] mb-1">Work Email:</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1D1E20] mb-1">Subject:</label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Enterprise Cloud Deployment or Bulk Domain Transfer"
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1D1E20] mb-1">Your Message:</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your requirements, existing visitor volume, or questions..."
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to XMart Orbit Team</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

const BuildingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
    <path d="M9 22v-4h6v4"/>
    <path d="M8 6h.01"/>
    <path d="M16 6h.01"/>
    <path d="M8 10h.01"/>
    <path d="M16 10h.01"/>
    <path d="M8 14h.01"/>
    <path d="M16 14h.01"/>
  </svg>
);
