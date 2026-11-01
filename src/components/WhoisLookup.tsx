import React, { useState } from 'react';
import { Search, ShieldCheck, Calendar, Server, Lock, ExternalLink, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const WhoisLookup: React.FC = () => {
  const { showNotification } = useApp();
  const [whoisQuery, setWhoisQuery] = useState('xmartorbit.com');
  const [isSearching, setIsSearching] = useState(false);
  const [whoisData, setWhoisData] = useState<{
    domain: string;
    registrar: string;
    createdDate: string;
    expiryDate: string;
    dnssec: string;
    status: string[];
    nameServers: string[];
    privacy: string;
  } | null>({
    domain: 'xmartorbit.com',
    registrar: 'XMart Orbit Private Limited ICANN Accredited',
    createdDate: '2021-04-12',
    expiryDate: '2030-04-12',
    dnssec: 'Signed (Active)',
    status: ['clientTransferProhibited', 'clientUpdateProhibited'],
    nameServers: ['ns1.xmartorbit.com', 'ns2.xmartorbit.com', 'ns3.xmartorbit.com'],
    privacy: 'Protected by XMart Privacy Shield',
  });

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whoisQuery.trim()) return;

    setIsSearching(true);
    const domainClean = whoisQuery.trim().toLowerCase().replace(/https?:\/\//, '');

    setTimeout(() => {
      setWhoisData({
        domain: domainClean,
        registrar: domainClean.includes('xmart') ? 'XMart Orbit Private Limited' : 'Verisign Global Registry Services',
        createdDate: '2019-08-15',
        expiryDate: '2028-08-15',
        dnssec: 'Active (ECDSA)',
        status: ['clientTransferProhibited', 'active'],
        nameServers: [`ns1.${domainClean}`, `ns2.${domainClean}`],
        privacy: 'WHOIS Privacy Guard Active',
      });
      setIsSearching(false);
      showNotification(`WHOIS records loaded for ${domainClean}`);
    }, 400);
  };

  return (
    <section id="whois-lookup" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider mb-2">
            <Search className="w-3.5 h-3.5" /> Registry Records
          </div>
          <h2 className="text-3xl font-black text-[#1B1340] tracking-tight">
            WHOIS Domain Lookup & Transfer Eligibility
          </h2>
          <p className="mt-2 text-sm text-[#727586]">
            Check public registry ownership, registrar details, and expiration status for any domain name worldwide.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleLookup} className="flex gap-2">
            <input
              type="text"
              value={whoisQuery}
              onChange={(e) => setWhoisQuery(e.target.value)}
              placeholder="Enter domain name (e.g., example.com)"
              className="flex-1 text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#673DE6]/20"
            />
            <button
              type="submit"
              disabled={isSearching}
              className="px-6 py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shrink-0 disabled:opacity-50"
            >
              {isSearching ? 'Querying...' : 'Lookup WHOIS'}
            </button>
          </form>

          {/* Results Display */}
          {whoisData && (
            <div className="mt-6 bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-200 gap-2">
                <div>
                  <span className="text-xs text-slate-400">Queried Domain:</span>
                  <div className="text-lg font-bold text-[#1B1340]">{whoisData.domain}</div>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                  Registered & Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400">ICANN Registrar:</span>
                  <div className="font-semibold text-[#1D1E20] mt-0.5">{whoisData.registrar}</div>
                </div>

                <div>
                  <span className="text-slate-400">Privacy Status:</span>
                  <div className="font-semibold text-[#00B090] mt-0.5 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> {whoisData.privacy}
                  </div>
                </div>

                <div>
                  <span className="text-slate-400">Registration Date:</span>
                  <div className="font-semibold text-[#1D1E20] mt-0.5">{whoisData.createdDate}</div>
                </div>

                <div>
                  <span className="text-slate-400">Registry Expiration Date:</span>
                  <div className="font-semibold text-[#1D1E20] mt-0.5">{whoisData.expiryDate}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs">
                <span className="text-slate-400">Active Authoritative Nameservers:</span>
                <div className="mt-1 flex flex-wrap gap-2">
                  {whoisData.nameServers.map((ns, idx) => (
                    <span key={idx} className="font-mono bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700">
                      {ns}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-slate-500">Want to consolidate this domain under XMart Orbit?</span>
                <a
                  href="#domain-search"
                  className="font-bold text-[#673DE6] hover:text-[#2F1C6A] flex items-center gap-1"
                >
                  Initiate Domain Transfer ($4.99 with +1 yr included) →
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
