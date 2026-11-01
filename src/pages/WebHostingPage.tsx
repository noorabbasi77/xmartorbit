import React, { useState } from 'react';
import {
  Server,
  Zap,
  Check,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  HardDrive,
  Cpu,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSTING_PLANS } from '../data/hostingData';

export const WebHostingPage: React.FC = () => {
  const { formatPrice, addToCart, navigateToPage } = useApp();
  const [billingMonths, setBillingMonths] = useState<48 | 24 | 12 | 1>(48);

  const webPlans = HOSTING_PLANS.filter((p) => p.category === 'web');

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">Web Hosting</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full mb-3">
          <Zap className="w-3.5 h-3.5 text-amber-500" /> LiteSpeed Enterprise Stack
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight">
          Ultra-Fast NVMe SSD Web Hosting
        </h1>
        <p className="mt-3 text-base text-[#727586] max-w-2xl mx-auto leading-relaxed">
          High-performance shared web hosting on AMD EPYC servers with PCIe 5.0 storage, free automated daily/weekly backups, and 24/7 technical clarity.
        </p>

        {/* Billing Selector */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="text-xs font-bold text-slate-500 mr-2">Billing Term:</span>
          {([48, 24, 12, 1] as const).map((m) => (
            <button
              key={m}
              onClick={() => setBillingMonths(m)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                billingMonths === m
                  ? 'bg-[#673DE6] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {m} Months {m === 48 && '(Save 77%)'}
            </button>
          ))}
        </div>
      </section>

      {/* Plans Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {webPlans.map((plan) => {
            const price = plan.monthlyPrices[billingMonths.toString() as '48' | '24' | '12' | '1'];
            const orig = plan.originalPrices[billingMonths.toString() as '48' | '24' | '12' | '1'];
            const isFeatured = plan.popular || plan.bestValue;

            return (
              <div
                key={plan.id}
                className={`p-7 rounded-3xl bg-white border flex flex-col justify-between transition-all ${
                  isFeatured
                    ? 'border-2 border-[#673DE6] shadow-xl shadow-purple-600/10'
                    : 'border-slate-200 hover:border-purple-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#1B1340]">{plan.name}</h3>
                    <span className="text-[11px] font-bold text-[#00B090] bg-emerald-50 px-2 py-0.5 rounded">
                      SAVE {plan.discountPercentage}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.tagline}</p>

                  <div className="my-5 pb-5 border-b border-slate-100">
                    <div className="text-xs text-slate-400 line-through">{formatPrice(orig)}/mo</div>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-3xl font-black text-[#1B1340]">{formatPrice(price)}</span>
                      <span className="text-xs text-slate-500">/mo</span>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(plan, billingMonths)}
                    className="w-full py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Deploy {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="mt-6 space-y-2 text-xs">
                    <div className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                      Key Specifications:
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Websites</span>
                      <strong className="text-[#1D1E20]">{plan.specs.websites}</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>NVMe SSD Storage</span>
                      <strong className="text-[#1D1E20]">{plan.specs.storage}</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>RAM Allocation</span>
                      <strong className="text-[#1D1E20]">{plan.specs.ram}</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Bandwidth</span>
                      <strong className="text-[#1D1E20]">{plan.specs.bandwidth}</strong>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2 text-xs text-[#1D1E20]">
                    <div className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                      Features Included:
                    </div>
                    {plan.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00B090] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
