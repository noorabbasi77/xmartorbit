import React, { useState } from 'react';
import {
  Cpu,
  Zap,
  Check,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Server,
  Layers,
  Activity,
  HardDrive
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSTING_PLANS } from '../data/hostingData';

export const CloudHostingPage: React.FC = () => {
  const { formatPrice, addToCart, navigateToPage } = useApp();
  const [billingMonths, setBillingMonths] = useState<48 | 24 | 12 | 1>(48);

  const cloudPlans = HOSTING_PLANS.filter((p) => p.category === 'cloud');

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">Cloud Hosting</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full mb-3">
          <Cpu className="w-3.5 h-3.5" /> Dedicated Cloud Hardware
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight">
          High-Velocity Cloud Hosting
        </h1>
        <p className="mt-3 text-base text-[#727586] max-w-2xl mx-auto leading-relaxed">
          Enjoy the power of a dedicated server with the simplicity of our modern control panel. Dedicated RAM, dedicated CPU cores, and 4x speed scaling.
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
              {m} Months {m === 48 && '(Save 64%)'}
            </button>
          ))}
        </div>
      </section>

      {/* Cloud Plans Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {cloudPlans.map((plan) => {
            const price = plan.monthlyPrices[billingMonths.toString() as '48' | '24' | '12' | '1'];
            const orig = plan.originalPrices[billingMonths.toString() as '48' | '24' | '12' | '1'];

            return (
              <div
                key={plan.id}
                className="p-8 rounded-3xl bg-white border-2 border-[#673DE6] shadow-xl shadow-purple-600/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-[#1B1340]">{plan.name}</h3>
                    <span className="text-xs font-bold text-[#00B090] bg-emerald-50 px-2.5 py-0.5 rounded">
                      SAVE {plan.discountPercentage}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.tagline}</p>

                  <div className="my-5 pb-5 border-b border-slate-100">
                    <div className="text-xs text-slate-400 line-through">{formatPrice(orig)}/mo</div>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-4xl font-black text-[#1B1340]">{formatPrice(price)}</span>
                      <span className="text-xs text-slate-500">/mo</span>
                    </div>
                    <div className="text-[11px] text-[#673DE6] font-semibold mt-1">
                      Includes Free Dedicated IPv4 + Free Domain Name
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(plan, billingMonths)}
                    className="w-full py-3.5 bg-[#673DE6] hover:bg-[#5229c9] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Deploy Cloud Instance</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="mt-6 space-y-2 text-xs">
                    <div className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                      Dedicated Cloud Specs:
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>RAM (Dedicated)</span>
                      <strong className="text-[#1D1E20] font-mono">{plan.specs.ram}</strong>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>CPU Cores (Dedicated)</span>
                      <strong className="text-[#1D1E20] font-mono">{plan.specs.vCpu}</strong>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>NVMe SSD Storage</span>
                      <strong className="text-[#1D1E20] font-mono">{plan.specs.storage}</strong>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Network Bandwidth</span>
                      <strong className="text-[#1D1E20] font-mono">{plan.specs.bandwidth}</strong>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2 text-xs text-[#1D1E20]">
                    <div className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                      Enterprise Advantages:
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

      {/* Cloud Architecture Explainer */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1B1340]">Why Cloud Hosting Beats VPS Management</h2>
            <p className="text-xs sm:text-sm text-[#727586] mt-1">Get dedicated resources without spending hours in command-line Linux sysadmin tasks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#673DE6] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#1B1340]">Isolated Containerization</h4>
              <p className="text-xs text-[#727586] mt-1.5">
                Your resources are physically partitioned. No "noisy neighbors" will ever degrade your website's database response or memory.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#673DE6] flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#1B1340]">Instant Resource Scaling</h4>
              <p className="text-xs text-[#727586] mt-1.5">
                Upgrading RAM or CPU takes 1 click with zero downtime and no data migrations required.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#673DE6] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#1B1340]">24/7 VIP Priority Support</h4>
              <p className="text-xs text-[#727586] mt-1.5">
                Cloud inquiries bypass standard queues and connect directly to senior systems infrastructure engineers in under 2 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
