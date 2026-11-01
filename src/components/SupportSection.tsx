import React, { useState } from 'react';
import {
  HelpCircle,
  Headphones,
  Search,
  BookOpen,
  MessageSquare,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const ARTICLES = [
  { id: 1, title: 'How to point your domain nameservers to XMart Orbit', category: 'DNS & Domains', readTime: '2 min read' },
  { id: 2, title: 'Configuring LiteSpeed Cache (LSCache) for 99+ PageSpeed score', category: 'WordPress Optimization', readTime: '4 min read' },
  { id: 3, title: 'How to create and connect custom business email accounts on Outlook & iOS', category: 'Email Setup', readTime: '3 min read' },
  { id: 4, title: 'Issuing free Let’s Encrypt Wildcard SSL certificates for subdomains', category: 'SSL & Security', readTime: '2 min read' },
  { id: 5, title: 'Setting up Git version control & automatic webhooks in XMart Orbit Panel', category: 'Developer Tools', readTime: '5 min read' },
  { id: 6, title: 'Restoring individual MySQL tables from automated daily snapshots', category: 'Databases & Backups', readTime: '3 min read' },
];

export const SupportSection: React.FC = () => {
  const { setIsTicketModalOpen, showNotification } = useApp();
  const [kbQuery, setKbQuery] = useState('');

  const filteredArticles = ARTICLES.filter((art) =>
    art.title.toLowerCase().includes(kbQuery.toLowerCase()) ||
    art.category.toLowerCase().includes(kbQuery.toLowerCase())
  );

  return (
    <section id="knowledge-base" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider mb-2">
            <Headphones className="w-3.5 h-3.5" /> 24/7/365 Expert Assistance
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B1340] tracking-tight">
            We’re Here Whenever You Need Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#727586] leading-relaxed">
            Our global team of senior system administrators and cloud engineers is standing by 24/7/365 to resolve any hosting, DNS, or migration questions.
          </p>
        </div>

        {/* 3 Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-200 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#673DE6] flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1B1340]">24/7 Live Chat</h3>
            <p className="text-xs text-[#727586] mt-1.5">
              Instant responses from certified engineers. Average response time is under 3 minutes.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#00B090] bg-emerald-50 px-2 py-0.5 rounded">
                Avg. Reply: 2.1m
              </span>
              <button
                onClick={() => showNotification('Opening 24/7 live chat session... Connected to Support Node.')}
                className="text-xs font-bold text-[#673DE6] hover:underline cursor-pointer"
              >
                Start Chat
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-200 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00B090] flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1B1340]">Submit Technical Ticket</h3>
            <p className="text-xs text-[#727586] mt-1.5">
              Comprehensive debugging for complex server configurations, SSL issues, or database tuning.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                Avg. SLA: 14m
              </span>
              <button
                onClick={() => setIsTicketModalOpen(true)}
                className="text-xs font-bold text-[#673DE6] hover:underline cursor-pointer"
              >
                Open Ticket
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-200 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-[#2F1C6A] flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1B1340]">Comprehensive Docs</h3>
            <p className="text-xs text-[#727586] mt-1.5">
              Step-by-step illustrated guides, video tutorials, and troubleshooting walkthroughs.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                500+ Articles
              </span>
              <a
                href="#knowledge-base-search"
                className="text-xs font-bold text-[#673DE6] hover:underline"
              >
                Search Docs
              </a>
            </div>
          </div>

        </div>

        {/* Knowledge Base Search Simulator */}
        <div id="knowledge-base-search" className="bg-[#F4F0FF]/60 rounded-3xl p-6 sm:p-8 border border-[#EDE5FF]">
          <div className="max-w-2xl mx-auto text-center mb-6">
            <h3 className="text-xl font-bold text-[#1B1340]">Search Our Knowledge Base</h3>
            <p className="text-xs text-[#727586] mt-1">Instant answers to frequent technical and billing questions.</p>

            <div className="mt-4 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={kbQuery}
                onChange={(e) => setKbQuery(e.target.value)}
                placeholder="Search tutorials (e.g., DNS, LiteSpeed, WordPress, SSL)..."
                className="w-full text-xs sm:text-sm pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => showNotification(`Opened article: "${art.title}"`)}
                className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-purple-300 transition-colors cursor-pointer flex items-center justify-between group"
              >
                <div className="pr-3">
                  <span className="text-[10px] font-bold text-[#673DE6] uppercase tracking-wider">
                    {art.category}
                  </span>
                  <div className="text-xs font-semibold text-[#1D1E20] group-hover:text-[#673DE6] transition-colors mt-0.5">
                    {art.title}
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 shrink-0 font-mono">
                  {art.readTime}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
