import React, { useState } from 'react';
import {
  ShieldCheck,
  FileText,
  Lock,
  ChevronRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const LegalPage: React.FC = () => {
  const { navigateToPage, currentPage } = useApp();
  const [legalTab, setLegalTab] = useState<'terms' | 'privacy' | 'sla' | 'refund'>(
    currentPage === 'privacy' ? 'privacy' : 'terms'
  );

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">Legal & Policies</span>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-[#1B1340]">Legal, Compliance & Service Level Agreements</h1>
          <p className="text-xs sm:text-sm text-[#727586] mt-2">
            Published policies of <strong>XMart Orbit Private Limited</strong> (<a href="https://xmartorbit.com" className="text-[#673DE6] underline">https://xmartorbit.com</a>).
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex border-b border-slate-200 gap-2 mb-8 overflow-x-auto text-xs font-bold">
          <button
            onClick={() => setLegalTab('terms')}
            className={`py-3 px-4 border-b-2 whitespace-nowrap cursor-pointer transition-colors ${
              legalTab === 'terms' ? 'border-[#673DE6] text-[#673DE6]' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Terms of Service
          </button>
          <button
            onClick={() => setLegalTab('privacy')}
            className={`py-3 px-4 border-b-2 whitespace-nowrap cursor-pointer transition-colors ${
              legalTab === 'privacy' ? 'border-[#673DE6] text-[#673DE6]' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Privacy & Cookie Policy
          </button>
          <button
            onClick={() => setLegalTab('sla')}
            className={`py-3 px-4 border-b-2 whitespace-nowrap cursor-pointer transition-colors ${
              legalTab === 'sla' ? 'border-[#673DE6] text-[#673DE6]' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            99.9% Uptime SLA Commitment
          </button>
          <button
            onClick={() => setLegalTab('refund')}
            className={`py-3 px-4 border-b-2 whitespace-nowrap cursor-pointer transition-colors ${
              legalTab === 'refund' ? 'border-[#673DE6] text-[#673DE6]' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            30-Day Money-Back Policy
          </button>
        </div>

        {/* Legal Tab Content */}
        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 text-xs sm:text-sm leading-relaxed text-slate-700 space-y-6">
          
          {legalTab === 'terms' && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-xl font-bold text-[#1B1340]">1. Terms of Service Agreement</h3>
              <p>
                This agreement governs the provision of domain registration, web hosting, virtual private servers (VPS), cloud compute instances, and related network services provided by <strong>XMart Orbit Private Limited</strong> ("XMart Orbit", "we", "us", or "our").
              </p>
              <h4 className="font-bold text-[#1B1340] text-sm pt-2">Acceptable Use Policy (AUP)</h4>
              <p>
                Customers agree to use our infrastructure strictly for lawful purposes. Unsolicited bulk email (SPAM), denial of service attacks, phishing operations, crypto-mining on shared CPU threads, and distribution of unlicensed intellectual property are strictly prohibited and subject to immediate service termination.
              </p>
              <h4 className="font-bold text-[#1B1340] text-sm pt-2">Service Provisioning & Account Responsibility</h4>
              <p>
                Upon verification of payment, accounts are provisioned instantaneously. Customers are solely responsible for maintaining the confidentiality of control panel credentials and managing application-level software updates.
              </p>
            </div>
          )}

          {legalTab === 'privacy' && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-xl font-bold text-[#1B1340]">2. Privacy Policy & GDPR Compliance</h3>
              <p>
                XMart Orbit Private Limited respects the fundamental privacy rights of its users. We strictly adhere to global privacy frameworks including the General Data Protection Regulation (GDPR).
              </p>
              <h4 className="font-bold text-[#1B1340] text-sm pt-2">Data We Collect</h4>
              <p>
                We collect personal registration details (name, email address, physical address, and billing information) solely for service delivery, ICANN compliance, and security verification. We never sell, rent, or trade your personal data to third-party advertising brokers.
              </p>
              <h4 className="font-bold text-[#1B1340] text-sm pt-2">Domain WHOIS Privacy</h4>
              <p>
                All eligible domain registrations processed via XMart Orbit include free automated WHOIS privacy masking, shielding personal phone numbers and physical addresses from publicly queryable registry databases.
              </p>
            </div>
          )}

          {legalTab === 'sla' && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-xl font-bold text-[#1B1340]">3. 99.9% Service Level Agreement (SLA)</h3>
              <p>
                XMart Orbit Private Limited guarantees a minimum of 99.9% network and hardware availability across all shared, WordPress, and cloud hosting accounts during any calendar month.
              </p>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00B090] shrink-0" />
                <div className="text-xs">
                  <strong className="text-[#1D1E20] block">Service Credit Guarantee:</strong>
                  If our uptime falls below 99.9% in any given month due to verified infrastructure downtime, clients are eligible to receive a 10% credit towards their next renewal cycle for every hour of downtime.
                </div>
              </div>
            </div>
          )}

          {legalTab === 'refund' && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-xl font-bold text-[#1B1340]">4. 30-Day Money-Back Guarantee Policy</h3>
              <p>
                We want you to be completely satisfied with our performance. If you are not happy with our web hosting or cloud services within 30 calendar days from the date of purchase, XMart Orbit will issue a 100% full refund on hosting fees.
              </p>
              <h4 className="font-bold text-[#1B1340] text-sm pt-2">Non-Refundable Third-Party Fees</h4>
              <p>
                Please note that registry domain registration fees, custom SSL certificates issued by external CAs, and dedicated IP address allocations are non-refundable once registered with ICANN registries. However, you retain full ownership and transferability of any registered domain names.
              </p>
            </div>
          )}

        </div>

      </section>
    </div>
  );
};
