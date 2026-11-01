import React, { useState } from 'react';
import {
  Headphones,
  Search,
  MessageSquare,
  BookOpen,
  Mail,
  ChevronRight,
  Clock,
  CheckCircle2,
  Phone,
  FileQuestion
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const KB_CATEGORIES = [
  { id: 'domains', name: 'Domains & DNS', count: '48 Articles' },
  { id: 'wordpress', name: 'WordPress & LSCache', count: '86 Articles' },
  { id: 'email', name: 'Email Setup & IMAP', count: '32 Articles' },
  { id: 'security', name: 'SSL & Firewall Rules', count: '29 Articles' },
  { id: 'billing', name: 'Billing & Invoices', count: '18 Articles' },
  { id: 'vps', name: 'VPS & SSH Administration', count: '42 Articles' },
];

export const SupportPage: React.FC = () => {
  const { navigateToPage, setIsTicketModalOpen, showNotification } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">Support Center</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full mb-3">
          <Headphones className="w-3.5 h-3.5" /> 24/7/365 Global Technical Desk
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight">
          How Can Our Cloud Engineers Help You?
        </h1>
        <p className="mt-3 text-base text-[#727586] max-w-2xl mx-auto leading-relaxed">
          Access our certified support team anytime through live chat, technical ticket submission, or browse 500+ self-service documentation guides.
        </p>

        {/* Search Input */}
        <div className="max-w-2xl mx-auto mt-8 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tutorials, error codes, DNS records..."
            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20"
          />
        </div>
      </section>

      {/* 3 Core Contact Methods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#673DE6] flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1B1340]">24/7 Live Chat</h3>
              <p className="text-xs text-[#727586] mt-2">
                Immediate interactive assistance for setup, migrations, and billing questions.
              </p>
              <div className="mt-4 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded inline-block">
                Average wait time: Under 3 minutes
              </div>
            </div>
            <button
              onClick={() => showNotification('Opening 24/7 Live Chat with Systems Engineer...')}
              className="mt-6 w-full py-2.5 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl cursor-pointer"
            >
              Start Chat Now
            </button>
          </div>

          <div className="p-7 rounded-3xl bg-white border-2 border-[#673DE6] shadow-xl shadow-purple-600/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#00B090] flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1B1340]">Technical Support Ticket</h3>
              <p className="text-xs text-[#727586] mt-2">
                Direct debugging by senior systems administrators for complex issues and custom environments.
              </p>
              <div className="mt-4 text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded inline-block">
                Guaranteed SLA: Under 15 minutes
              </div>
            </div>
            <button
              onClick={() => setIsTicketModalOpen(true)}
              className="mt-6 w-full py-2.5 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl cursor-pointer"
            >
              Open Technical Ticket
            </button>
          </div>

          <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-[#2F1C6A] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1B1340]">Corporate Email Desk</h3>
              <p className="text-xs text-[#727586] mt-2">
                Enterprise billing inquiries, dedicated hardware sales, and partner relations.
              </p>
              <div className="mt-4 text-xs font-mono font-bold text-slate-800">
                support@xmartorbit.com
              </div>
            </div>
            <a
              href="mailto:support@xmartorbit.com"
              className="mt-6 w-full py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl text-center cursor-pointer"
            >
              Send Direct Email
            </a>
          </div>
        </div>
      </section>

      {/* Knowledge Base Categories Grid */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1B1340]">Explore Self-Service Guides</h2>
            <p className="text-xs sm:text-sm text-[#727586] mt-1">Browse topics curated by our operations engineering team.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {KB_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => showNotification(`Viewing ${cat.name} knowledge base articles...`)}
                className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-purple-300 transition-colors cursor-pointer flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm text-[#1B1340]">{cat.name}</h4>
                  <span className="text-xs text-[#673DE6] font-semibold mt-1 inline-block">{cat.count}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
