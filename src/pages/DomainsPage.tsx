import React, { useState } from 'react';
import {
  Globe,
  Search,
  CheckCircle2,
  Lock,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ShoppingCart
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DOMAIN_TLDS, HOSTING_PLANS } from '../data/hostingData';

const EXTENDED_TLDS = [
  { extension: '.com', category: 'popular', regularPrice: 15.99, salePrice: 4.99, renewalPrice: 15.99, discount: '68% OFF', popular: true },
  { extension: '.online', category: 'popular', regularPrice: 34.99, salePrice: 0.99, renewalPrice: 34.99, discount: '97% OFF', popular: true },
  { extension: '.net', category: 'popular', regularPrice: 17.99, salePrice: 10.99, renewalPrice: 17.99, discount: '39% OFF' },
  { extension: '.org', category: 'popular', regularPrice: 16.99, salePrice: 8.99, renewalPrice: 16.99, discount: '47% OFF' },
  { extension: '.tech', category: 'tech', regularPrice: 49.99, salePrice: 1.99, renewalPrice: 49.99, discount: '96% OFF', popular: true },
  { extension: '.io', category: 'tech', regularPrice: 59.99, salePrice: 32.99, renewalPrice: 59.99, discount: '45% OFF' },
  { extension: '.dev', category: 'tech', regularPrice: 24.99, salePrice: 14.99, renewalPrice: 24.99, discount: '40% OFF' },
  { extension: '.app', category: 'tech', regularPrice: 24.99, salePrice: 14.99, renewalPrice: 24.99, discount: '40% OFF' },
  { extension: '.ai', category: 'tech', regularPrice: 89.99, salePrice: 69.99, renewalPrice: 89.99, discount: '22% OFF' },
  { extension: '.store', category: 'ecommerce', regularPrice: 49.99, salePrice: 1.99, renewalPrice: 49.99, discount: '96% OFF' },
  { extension: '.shop', category: 'ecommerce', regularPrice: 39.99, salePrice: 2.99, renewalPrice: 39.99, discount: '92% OFF' },
  { extension: '.co', category: 'business', regularPrice: 29.99, salePrice: 9.99, renewalPrice: 29.99, discount: '67% OFF' },
  { extension: '.biz', category: 'business', regularPrice: 19.99, salePrice: 4.99, renewalPrice: 19.99, discount: '75% OFF' },
  { extension: '.in', category: 'country', regularPrice: 11.99, salePrice: 5.49, renewalPrice: 11.99, discount: '54% OFF' },
  { extension: '.de', category: 'country', regularPrice: 12.99, salePrice: 6.99, renewalPrice: 12.99, discount: '46% OFF' },
  { extension: '.uk', category: 'country', regularPrice: 10.99, salePrice: 4.99, renewalPrice: 10.99, discount: '55% OFF' },
];

export const DomainsPage: React.FC = () => {
  const { formatPrice, addToCart, showNotification, navigateToPage } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setIsSearching(true);
    let clean = searchTerm.trim().toLowerCase().replace(/https?:\/\//, '').replace(/\/.*$/, '');
    if (!clean.includes('.')) clean = `${clean}.com`;

    setTimeout(() => {
      setSearchResult(clean);
      setIsSearching(false);
      showNotification(`Availability verified for ${clean}`);
    }, 400);
  };

  const filteredTlds = activeCategory === 'all'
    ? EXTENDED_TLDS
    : EXTENDED_TLDS.filter((t) => t.category === activeCategory);

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">Domains</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full mb-3">
          <Globe className="w-3.5 h-3.5" /> ICANN-Accredited Registrar
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight">
          Domain Name Search & Registration
        </h1>
        <p className="mt-3 text-base text-[#727586] max-w-2xl mx-auto">
          Secure your online identity today. Transparent renewal pricing, free WHOIS privacy, 2 free business mailboxes, and instant DNS activation.
        </p>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mt-8">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 p-2 bg-white rounded-2xl shadow-xl border-2 border-slate-200 focus-within:border-[#673DE6] transition-colors">
            <div className="flex items-center w-full px-3">
              <Search className="w-5 h-5 text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type your desired domain (e.g. mynewbrand.com)"
                className="w-full text-sm sm:text-base py-2.5 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="px-8 py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white font-bold text-sm rounded-xl cursor-pointer shrink-0 disabled:opacity-50"
            >
              {isSearching ? 'Searching...' : 'Search Domain'}
            </button>
          </form>

          {/* Search Result */}
          {searchResult && (
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#F4F0FF] to-white border border-[#EDE5FF] text-left flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-[#1B1340]">{searchResult}</span>
                    <span className="text-xs font-bold bg-emerald-100 text-[#00B090] px-2 py-0.5 rounded-full">Available</span>
                  </div>
                  <p className="text-xs text-[#727586] mt-0.5">Free WHOIS Privacy Protection & DNS Zone Management included.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right">
                  <div className="text-xs text-slate-400 line-through">{formatPrice(15.99)}</div>
                  <div className="text-xl font-black text-[#673DE6]">{formatPrice(4.99)}<span className="text-xs text-slate-500">/yr</span></div>
                </div>
                <button
                  onClick={() => {
                    addToCart(HOSTING_PLANS[1], 12, searchResult, 0);
                    showNotification(`Domain ${searchResult} added with free 1-year hosting bundle!`);
                  }}
                  className="px-5 py-2.5 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Claim with Hosting</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Free Domain Promotion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2F1C6A] to-[#1B1340] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-[#00B090] uppercase tracking-wider bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded">
              Special Hosting Bundle Offer
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">Get a FREE Domain for 1 Full Year</h3>
            <p className="text-xs sm:text-sm text-purple-200 max-w-xl">
              Purchase any 12, 24, or 48-month hosting plan and receive a free .com, .net, .org, or .online domain registration.
            </p>
          </div>
          <button
            onClick={() => navigateToPage('web-hosting')}
            className="px-6 py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white font-bold text-xs sm:text-sm rounded-xl cursor-pointer shrink-0"
          >
            Explore Eligible Plans
          </button>
        </div>
      </section>

      {/* TLD Pricing Catalog with Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1B1340]">Browse Domain Extension Pricing</h2>
          <p className="text-xs sm:text-sm text-[#727586] mt-1">Check regular and promotional renewal pricing for all top-level domains.</p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {[
              { id: 'all', label: 'All Extensions' },
              { id: 'popular', label: 'Most Popular' },
              { id: 'tech', label: 'Tech & Dev (.io, .tech, .ai)' },
              { id: 'ecommerce', label: 'eCommerce (.store, .shop)' },
              { id: 'business', label: 'Business (.co, .biz)' },
              { id: 'country', label: 'Country Specific' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#673DE6] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[#1D1E20]">
                <th className="py-3.5 px-6 font-bold">Extension</th>
                <th className="py-3.5 px-4 font-bold">1st Year Registration</th>
                <th className="py-3.5 px-4 font-bold">Annual Renewal</th>
                <th className="py-3.5 px-4 font-bold">WHOIS Privacy</th>
                <th className="py-3.5 px-6 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTlds.map((tld) => (
                <tr key={tld.extension} className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-6 font-bold text-sm text-[#1B1340]">
                    {tld.extension}
                    {tld.popular && (
                      <span className="ml-2 text-[10px] font-bold bg-[#EDE5FF] text-[#673DE6] px-1.5 py-0.5 rounded">
                        Popular
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-[#00B090] text-sm">{formatPrice(tld.salePrice)}</span>
                    <span className="text-[11px] text-slate-400 line-through ml-1.5">{formatPrice(tld.regularPrice)}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{formatPrice(tld.renewalPrice)}/yr</td>
                  <td className="py-3.5 px-4 text-[#00B090] font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Free Forever
                  </td>
                  <td className="py-3.5 px-6 text-right">
                    <button
                      onClick={() => {
                        setSearchTerm(`mybrand${tld.extension}`);
                        window.scrollTo({ top: 150, behavior: 'smooth' });
                      }}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-[#673DE6] hover:text-white text-slate-700 font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Search {tld.extension}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Domain Privacy & Features Grid */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1B1340]">Everything Included with Every Domain</h2>
            <p className="text-xs sm:text-sm text-[#727586] mt-1">No hidden upsells. You receive enterprise domain features standard.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#673DE6] flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#1B1340]">Free Lifetime WHOIS Privacy</h4>
              <p className="text-xs text-[#727586] mt-1.5">
                Mask your personal name, home address, and telephone number from public spam scrapers and telemarketers without paying extra.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#673DE6] flex items-center justify-center mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#1B1340]">DNS Zone & Record Control</h4>
              <p className="text-xs text-[#727586] mt-1.5">
                Easily configure A, AAAA, CNAME, MX, TXT, and SRV records with sub-minute global propagation across Anycast nameservers.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#673DE6] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#1B1340]">Domain Theft Lock (Registrar-Lock)</h4>
              <p className="text-xs text-[#727586] mt-1.5">
                Prevents unauthorized domain transfer attempts or hijacking with multi-factor authentication security keys.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
