import React, { useState } from 'react';
import {
  Layers,
  Award,
  Check,
  ShieldCheck,
  Calculator,
  ArrowRight,
  ChevronRight,
  Users,
  DollarSign
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSTING_PLANS } from '../data/hostingData';

const RESELLER_TIERS = [
  { id: 'reseller-starter', name: 'Reseller Starter', cpanelAccounts: '50 Accounts', storage: '100 GB NVMe', bandwidth: '1 TB Bandwidth', price: 14.99, orig: 29.99 },
  { id: 'reseller-pro', name: 'Reseller Pro', cpanelAccounts: '100 Accounts', storage: '250 GB NVMe', bandwidth: '2.5 TB Bandwidth', price: 24.99, orig: 49.99, popular: true },
  { id: 'reseller-business', name: 'Reseller Business', cpanelAccounts: '250 Accounts', storage: '500 GB NVMe', bandwidth: '5 TB Bandwidth', price: 44.99, orig: 89.99 },
];

export const ResellerHostingPage: React.FC = () => {
  const { formatPrice, addToCart, navigateToPage } = useApp();
  const [clientCount, setClientCount] = useState(25);
  const [pricePerClient, setPricePerClient] = useState(15);

  const monthlyRevenue = clientCount * pricePerClient;
  const hostingCost = 24.99; // Reseller Pro
  const monthlyProfit = Math.max(0, monthlyRevenue - hostingCost);

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">Reseller Hosting</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full mb-3">
          <Layers className="w-3.5 h-3.5" /> White-Label Hosting Infrastructure
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight">
          Launch Your Own Web Hosting Brand
        </h1>
        <p className="mt-3 text-base text-[#727586] max-w-2xl mx-auto leading-relaxed">
          High-margin white-label hosting. Create custom hosting packages, set your own subscription rates, and manage clients under your own custom nameservers.
        </p>
      </section>

      {/* Interactive Reseller Profit Calculator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Calculator className="w-4 h-4" /> Agency Profit Estimator
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Calculate Your Monthly Agency Revenue</h3>
          <p className="text-xs text-slate-400 mt-1">
            See how much you can earn by providing managed web hosting to your design and development clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span>Number of Active Clients:</span>
                  <span className="text-[#00B090] font-mono text-sm">{clientCount} Clients</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={clientCount}
                  onChange={(e) => setClientCount(Number(e.target.value))}
                  className="w-full accent-[#673DE6] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span>Monthly Price You Charge Each Client:</span>
                  <span className="text-[#00B090] font-mono text-sm">${pricePerClient} / month</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={pricePerClient}
                  onChange={(e) => setPricePerClient(Number(e.target.value))}
                  className="w-full accent-[#673DE6] cursor-pointer"
                />
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-3">
              <div className="text-xs text-slate-400">Estimated Net Monthly Profit:</div>
              <div className="text-4xl sm:text-5xl font-black text-[#00B090] font-mono">
                ${Math.round(monthlyProfit)}
                <span className="text-xs text-slate-400 font-normal"> /mo</span>
              </div>
              <div className="text-xs text-purple-300">
                Annual Recurring Revenue: <strong>${Math.round(monthlyProfit * 12).toLocaleString()}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reseller Tiers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {RESELLER_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`p-7 rounded-3xl bg-white border flex flex-col justify-between transition-all ${
                tier.popular
                  ? 'border-2 border-[#673DE6] shadow-xl shadow-purple-600/10'
                  : 'border-slate-200 hover:border-purple-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#1B1340]">{tier.name}</h3>
                  {tier.popular && (
                    <span className="text-[10px] font-bold bg-[#673DE6] text-white px-2 py-0.5 rounded-full">
                      POPULAR
                    </span>
                  )}
                </div>

                <div className="my-5 pb-5 border-b border-slate-100">
                  <div className="text-xs text-slate-400 line-through">{formatPrice(tier.orig)}/mo</div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl font-black text-[#1B1340]">{formatPrice(tier.price)}</span>
                    <span className="text-xs text-slate-500">/mo</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-[#1D1E20]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B090]" />
                    <span>{tier.cpanelAccounts} Hosted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B090]" />
                    <span>{tier.storage} Storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B090]" />
                    <span>{tier.bandwidth}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B090]" />
                    <span>100% White-Label Nameservers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B090]" />
                    <span>Free WHMCS / ClientExec Billing License</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00B090]" />
                    <span>LiteSpeed Web Server on All Accounts</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => addToCart(HOSTING_PLANS[3], 12)}
                className="mt-6 w-full py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Launch {tier.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
