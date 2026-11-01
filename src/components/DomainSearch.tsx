import React, { useState } from 'react';
import { Search, CheckCircle2, ShoppingCart, Sparkles, ArrowRight, Shield, RefreshCw } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DOMAIN_TLDS, HOSTING_PLANS } from '../data/hostingData';

export const DomainSearch: React.FC = () => {
  const { formatPrice, addToCart, showNotification } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTld, setSelectedTld] = useState('.com');
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState<'register' | 'transfer'>('register');
  const [searchedDomain, setSearchedDomain] = useState<string | null>(null);
  const [addedDomains, setAddedDomains] = useState<string[]>([]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsSearching(true);
    let clean = searchTerm.trim().toLowerCase().replace(/https?:\/\//, '').replace(/\/.*$/, '');
    if (!clean.includes('.')) {
      clean = `${clean}${selectedTld}`;
    }

    setTimeout(() => {
      setSearchedDomain(clean);
      setIsSearching(false);
    }, 450);
  };

  const handleSelectTld = (tld: string) => {
    setSelectedTld(tld);
    if (searchTerm) {
      const base = searchTerm.split('.')[0];
      setSearchTerm(`${base}${tld}`);
    }
  };

  const handleAddDomainToCart = (domain: string, price: number) => {
    setAddedDomains((prev) => [...prev, domain]);
    // Adds with a starter or attaches to top plan
    const starterPlan = HOSTING_PLANS[0];
    addToCart(starterPlan, 12, domain, price);
    showNotification(`Domain ${domain} added with 1-Year Hosting package!`);
  };

  const currentTldObj = DOMAIN_TLDS.find((t) => searchedDomain?.endsWith(t.extension)) || DOMAIN_TLDS[0];

  return (
    <section id="domain-search" className="py-14 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Domain Name Registration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B1340] tracking-tight">
            Find the Perfect Domain for Your Brand
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#727586]">
            Claim your online identity with transparent pricing, free WHOIS privacy protection, and full DNS control.
          </p>
        </div>

        {/* Tab switch between Register and Transfer */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab('register')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'register'
                ? 'bg-[#673DE6] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            Register New Domain
          </button>
          <button
            onClick={() => setActiveTab('transfer')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'transfer'
                ? 'bg-[#673DE6] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            Transfer Existing Domain
          </button>
        </div>

        {/* Search Input Box */}
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSearch}
            className="relative flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl bg-white shadow-xl shadow-purple-900/5 border-2 border-slate-200 focus-within:border-[#673DE6] transition-colors"
          >
            <div className="flex items-center w-full pl-3 pr-2">
              <Search className="w-5 h-5 text-slate-400 shrink-0 mr-2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={activeTab === 'register' ? 'Type your desired domain name (e.g., myawesomebrand)' : 'Enter domain to transfer (e.g., currentsite.com)'}
                className="w-full text-sm sm:text-base text-[#1D1E20] placeholder-slate-400 py-2.5 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className="w-full sm:w-auto px-7 py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 disabled:opacity-70"
            >
              {isSearching ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Checking...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>{activeTab === 'register' ? 'Search Domain' : 'Check Transfer'}</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Popular TLD Strip */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Popular:</span>
            {DOMAIN_TLDS.slice(0, 7).map((tld) => (
              <button
                key={tld.extension}
                type="button"
                onClick={() => handleSelectTld(tld.extension)}
                className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedTld === tld.extension
                    ? 'border-[#673DE6] bg-[#F4F0FF] text-[#673DE6] font-bold'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-purple-300'
                }`}
              >
                <span className="font-semibold">{tld.extension}</span>
                <span className="text-[11px] text-[#00B090] font-bold">{formatPrice(tld.salePrice)}</span>
              </button>
            ))}
          </div>

          {/* Search Result Banner */}
          {searchedDomain && (
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#F4F0FF] to-white border border-[#EDE5FF] shadow-sm animate-in fade-in slide-in-from-top-2">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-center sm:text-left">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <span className="text-lg font-bold text-[#1B1340]">{searchedDomain}</span>
                      <span className="text-xs font-bold bg-emerald-100 text-[#00B090] px-2 py-0.5 rounded-full">
                        Available!
                      </span>
                    </div>
                    <p className="text-xs text-[#727586] mt-0.5">
                      Includes Free WHOIS Privacy + DNS Management + 2 Free Custom Mailboxes.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <div className="text-xs text-slate-400 line-through">
                      {formatPrice(currentTldObj.regularPrice)}/yr
                    </div>
                    <div className="text-xl font-black text-[#673DE6]">
                      {formatPrice(currentTldObj.salePrice)}
                      <span className="text-xs font-normal text-slate-500">/1st yr</span>
                    </div>
                  </div>

                  {addedDomains.includes(searchedDomain) ? (
                    <span className="px-4 py-2.5 rounded-xl bg-emerald-50 text-[#00B090] font-bold text-xs border border-emerald-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Added to Cart
                    </span>
                  ) : (
                    <button
                      onClick={() => handleAddDomainToCart(searchedDomain, currentTldObj.salePrice)}
                      className="px-5 py-2.5 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Free Domain Upsell Message */}
              <div className="mt-4 pt-3 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                <span className="text-purple-900 flex items-center gap-1.5 font-medium">
                  <Shield className="w-4 h-4 text-[#673DE6]" />
                  Want this domain 100% free? Choose our Premium or Business Web Hosting plan!
                </span>
                <a
                  href="#pricing-section"
                  className="font-bold text-[#673DE6] hover:text-[#2F1C6A] flex items-center gap-1 underline underline-offset-2"
                >
                  View Eligible Hosting Plans <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Alternate Extensions Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {DOMAIN_TLDS.slice(0, 4).map((tld) => (
              <div
                key={tld.extension}
                className="p-3.5 rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-sm bg-white transition-all flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-[#1D1E20]">{tld.extension}</span>
                    {tld.badge && (
                      <span className="text-[10px] font-bold bg-[#EDE5FF] text-[#673DE6] px-1.5 py-0.5 rounded">
                        {tld.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 line-through mt-0.5">
                    {formatPrice(tld.regularPrice)}/yr
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm font-bold text-[#673DE6]">{formatPrice(tld.salePrice)}</div>
                  <button
                    onClick={() => {
                      const sampleDomain = `myproject${tld.extension}`;
                      handleAddDomainToCart(sampleDomain, tld.salePrice);
                    }}
                    className="text-[11px] font-semibold text-slate-600 hover:text-[#673DE6] transition-colors"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
