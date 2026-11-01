import React, { useState } from 'react';
import {
  Mail,
  ShieldCheck,
  Check,
  Smartphone,
  Calendar,
  Lock,
  ArrowRight,
  ChevronRight,
  Send,
  Inbox
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSTING_PLANS } from '../data/hostingData';

export const EmailHostingPage: React.FC = () => {
  const { formatPrice, addToCart, navigateToPage } = useApp();
  const [activePlan, setActivePlan] = useState<'business' | 'enterprise'>('business');

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">Email Hosting</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full mb-3">
          <Mail className="w-3.5 h-3.5" /> Professional Business Mailboxes
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight">
          Establish Trust with Branded Business Email
        </h1>
        <p className="mt-3 text-base text-[#727586] max-w-2xl mx-auto leading-relaxed">
          Look professional with you@yourdomain.com email accounts. 50GB storage, advanced anti-spam protection, calendar sync, and seamless integration with Apple Mail, Outlook, and Gmail.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Plan 1: Business Email */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-purple-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#1B1340]">Business Email</h3>
                <span className="text-[11px] font-bold text-[#00B090] bg-emerald-50 px-2 py-0.5 rounded">
                  STARTER
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Ideal for small businesses establishing brand credibility.</p>

              <div className="my-5 pb-5 border-b border-slate-100">
                <div className="text-xs text-slate-400 line-through">{formatPrice(3.99)}/mo</div>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-3xl font-black text-[#1B1340]">{formatPrice(0.99)}</span>
                  <span className="text-xs text-slate-500">/mailbox/mo</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-[#1D1E20]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>10 GB Storage per Mailbox</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>Custom you@yourdomain.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>Advanced Anti-Spam & Virus Filters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>IMAP/POP3 & Webmail Access</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => addToCart(HOSTING_PLANS[0], 12)}
              className="mt-6 w-full py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Get Business Email
            </button>
          </div>

          {/* Plan 2: Enterprise Email */}
          <div className="p-7 rounded-3xl bg-white border-2 border-[#673DE6] shadow-xl shadow-purple-600/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#1B1340]">Professional Enterprise</h3>
                <span className="text-[11px] font-bold text-[#673DE6] bg-[#EDE5FF] px-2 py-0.5 rounded">
                  MOST POPULAR
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Generous 50GB storage and collaborative calendar synchronization.</p>

              <div className="my-5 pb-5 border-b border-slate-100">
                <div className="text-xs text-slate-400 line-through">{formatPrice(5.99)}/mo</div>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-3xl font-black text-[#673DE6]">{formatPrice(2.49)}</span>
                  <span className="text-xs text-slate-500">/mailbox/mo</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-[#1D1E20]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>50 GB Cloud Storage per Mailbox</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>Shared Team Calendars & Global Contacts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>Automated Forwarders & Vacation Responders</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>Enterprise DKIM, SPF & DMARC Defense</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => addToCart(HOSTING_PLANS[1], 12)}
              className="mt-6 w-full py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
            >
              Get Professional Enterprise
            </button>
          </div>

        </div>
      </section>

      {/* Setup Compatibility Strip */}
      <section className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Works Seamlessly With All Devices & Clients:
          </h3>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5"><Inbox className="w-4 h-4 text-[#673DE6]" /> Apple Mail (iOS & macOS)</span>
            <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-[#673DE6]" /> Microsoft Outlook</span>
            <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-[#673DE6]" /> Android Mail</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#673DE6]" /> Mozilla Thunderbird</span>
          </div>
        </div>
      </section>
    </div>
  );
};
