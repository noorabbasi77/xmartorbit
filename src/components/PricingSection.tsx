import React, { useState } from 'react';
import {
  Check,
  X,
  Zap,
  ShieldCheck,
  Globe,
  Sparkles,
  HelpCircle,
  ArrowRight,
  Server,
  Lock,
  ChevronDown,
  Info
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSTING_PLANS } from '../data/hostingData';
import { HostingPlan } from '../types';

export const PricingSection: React.FC = () => {
  const { formatPrice, addToCart } = useApp();
  
  const [activeCategory, setActiveCategory] = useState<'web' | 'cloud' | 'vps' | 'wordpress'>('web');
  const [billingMonths, setBillingMonths] = useState<48 | 24 | 12 | 1>(48);
  const [showComparisonTable, setShowComparisonTable] = useState(false);

  const filteredPlans = HOSTING_PLANS.filter((plan) => plan.category === activeCategory);

  const handleSelectPlan = (plan: HostingPlan) => {
    addToCart(plan, billingMonths);
  };

  return (
    <section id="pricing-section" className="py-16 lg:py-24 bg-[#F4F0FF]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 text-amber-500" /> Transparent Cloud Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight text-balance">
            Choose the Perfect Hosting Architecture
          </h2>
          <p className="mt-3 text-base text-[#727586] leading-relaxed">
            All plans include high-speed NVMe SSD drives, 1-click installer, automated backups, and 24/7/365 expert support by XMart Orbit Private Limited.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl gap-1 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveCategory('web')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'web'
                  ? 'bg-white text-[#1B1340] shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Web Hosting
            </button>
            <button
              onClick={() => setActiveCategory('cloud')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'cloud'
                  ? 'bg-white text-[#1B1340] shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cloud Hosting (Dedicated)
            </button>
            <button
              onClick={() => setActiveCategory('wordpress')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'wordpress'
                  ? 'bg-white text-[#1B1340] shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Managed WordPress
            </button>
            <button
              onClick={() => setActiveCategory('vps')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'vps'
                  ? 'bg-white text-[#1B1340] shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              VPS Hosting (KVM)
            </button>
          </div>
        </div>

        {/* Billing Cycle Selector Buttons with Savings Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <span className="text-xs font-semibold text-[#727586] uppercase tracking-wider">
            Select Billing Period:
          </span>
          <div className="inline-flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-xs">
            <button
              onClick={() => setBillingMonths(48)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                billingMonths === 48
                  ? 'bg-[#673DE6] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>48 Months</span>
              <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded ${billingMonths === 48 ? 'bg-amber-400 text-slate-950' : 'bg-emerald-100 text-[#00B090]'}`}>
                Save 77% + 3 Free
              </span>
            </button>

            <button
              onClick={() => setBillingMonths(24)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                billingMonths === 24
                  ? 'bg-[#673DE6] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              24 Months
            </button>

            <button
              onClick={() => setBillingMonths(12)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                billingMonths === 12
                  ? 'bg-[#673DE6] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              12 Months
            </button>

            <button
              onClick={() => setBillingMonths(1)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                billingMonths === 1
                  ? 'bg-[#673DE6] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1 Month
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPlans.map((plan) => {
            const currentPrice = plan.monthlyPrices[billingMonths.toString() as '48' | '24' | '12' | '1'];
            const originalPrice = plan.originalPrices[billingMonths.toString() as '48' | '24' | '12' | '1'];
            const isFeatured = plan.popular || plan.bestValue;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl bg-white transition-all duration-200 flex flex-col justify-between ${
                  isFeatured
                    ? 'border-2 border-[#673DE6] shadow-xl shadow-purple-600/10 lg:-translate-y-2'
                    : 'border border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Featured Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#673DE6] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}
                {plan.bestValue && !plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00B090] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    Best Value for Business
                  </div>
                )}

                {/* Card Top Section */}
                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#1B1340]">{plan.name}</h3>
                    {billingMonths === 48 && (
                      <span className="text-[11px] font-bold text-[#00B090] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                        SAVE {plan.discountPercentage}%
                      </span>
                    )}
                  </div>
                  
                  <p className="text-xs text-[#727586] mt-1.5 min-h-[32px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="mt-5 pb-5 border-b border-slate-100">
                    <div className="text-xs text-[#727586] line-through">
                      {formatPrice(originalPrice)}/mo
                    </div>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-3xl sm:text-4xl font-black text-[#1B1340] tracking-tight">
                        {formatPrice(currentPrice)}
                      </span>
                      <span className="text-sm font-semibold text-[#727586]">/mo</span>
                    </div>

                    <div className="mt-1 text-[11px] text-purple-700 font-semibold">
                      {billingMonths >= 12
                        ? `Renews at ${formatPrice(originalPrice)}/mo after term`
                        : 'Billed monthly, cancel anytime'}
                    </div>

                    {plan.freeMonthsBonus && billingMonths === 48 && (
                      <div className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                        <Sparkles className="w-3 h-3" /> + 3 Months Free Included
                      </div>
                    )}
                  </div>

                  {/* Call to Action Button */}
                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full mt-5 py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-[#673DE6] hover:bg-[#5229c9] text-white shadow-md shadow-purple-600/25'
                        : 'bg-white hover:bg-slate-50 text-[#1B1340] border-2 border-slate-200 hover:border-purple-300'
                    }`}
                  >
                    <span>Choose Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center text-[11px] text-[#727586] mt-2">
                    30-Day Money-Back Guarantee
                  </div>

                  {/* Key Hardware Specs Chips */}
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-700 font-medium">
                      <span>Websites</span>
                      <strong className="text-[#1D1E20] font-bold">{plan.specs.websites}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-700 font-medium">
                      <span>NVMe SSD Storage</span>
                      <strong className="text-[#1D1E20] font-bold">{plan.specs.storage}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-700 font-medium">
                      <span>RAM Allocation</span>
                      <strong className="text-[#1D1E20] font-bold">{plan.specs.ram}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-700 font-medium">
                      <span>CPU Cores</span>
                      <strong className="text-[#1D1E20] font-bold">{plan.specs.vCpu}</strong>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-2.5 text-xs text-[#1D1E20]">
                    <div className="font-bold text-[11px] uppercase tracking-wider text-slate-400 mb-2">
                      Included in this plan:
                    </div>
                    {plan.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-[#00B090] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Trust Note */}
                <div className="px-7 py-3 bg-slate-50/80 border-t border-slate-100 rounded-b-3xl text-[11px] text-slate-500 flex items-center justify-between">
                  <span>LiteSpeed Enterprise</span>
                  <span className="font-semibold text-emerald-600">Free SSL Forever</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Accordion Toggle */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowComparisonTable(!showComparisonTable)}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#673DE6] hover:text-[#2F1C6A] bg-white border border-purple-200 hover:border-purple-300 px-6 py-3 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <span>{showComparisonTable ? 'Hide Complete Specification Matrix' : 'Compare All Technical Specifications & Features'}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showComparisonTable ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Expandable Comparison Table */}
        {showComparisonTable && (
          <div className="mt-8 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl animate-in fade-in slide-in-from-top-4">
            <div className="p-6 bg-[#1B1340] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">Comprehensive Plan Comparison</h3>
                <p className="text-xs text-purple-200 mt-0.5">Detailed breakdown of server specifications, caching layers, and security defenses.</p>
              </div>
              <div className="text-xs font-mono text-[#00B090] bg-emerald-950/60 border border-emerald-500/30 px-3 py-1.5 rounded-lg">
                100% NVMe PCIe 5.0 Hardware
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[#1D1E20]">
                    <th className="py-4 px-6 font-bold text-sm w-1/3">Feature / Specification</th>
                    <th className="py-4 px-4 font-bold text-sm text-center">Single Web</th>
                    <th className="py-4 px-4 font-bold text-sm text-center bg-purple-50/50 text-[#673DE6]">Premium Web</th>
                    <th className="py-4 px-4 font-bold text-sm text-center">Business Web</th>
                    <th className="py-4 px-4 font-bold text-sm text-center">Cloud Startup</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-3 px-6 font-medium text-[#1D1E20]">Websites Hosted</td>
                    <td className="py-3 px-4 text-center">1 Site</td>
                    <td className="py-3 px-4 text-center bg-purple-50/30 font-bold text-[#673DE6]">100 Sites</td>
                    <td className="py-3 px-4 text-center font-bold">100 Sites</td>
                    <td className="py-3 px-4 text-center font-bold">300 Sites</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 font-medium text-[#1D1E20]">Storage Technology</td>
                    <td className="py-3 px-4 text-center">50 GB NVMe</td>
                    <td className="py-3 px-4 text-center bg-purple-50/30 font-bold text-[#673DE6]">100 GB NVMe</td>
                    <td className="py-3 px-4 text-center font-bold">200 GB NVMe</td>
                    <td className="py-3 px-4 text-center font-bold">250 GB NVMe</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 font-medium text-[#1D1E20]">Web Server Software</td>
                    <td className="py-3 px-4 text-center">LiteSpeed Enterprise</td>
                    <td className="py-3 px-4 text-center bg-purple-50/30 font-bold text-[#673DE6]">LiteSpeed Enterprise</td>
                    <td className="py-3 px-4 text-center">LiteSpeed Enterprise</td>
                    <td className="py-3 px-4 text-center">LiteSpeed Enterprise</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 font-medium text-[#1D1E20]">Free Domain Name (.com, .net, etc.)</td>
                    <td className="py-3 px-4 text-center text-slate-300">—</td>
                    <td className="py-3 px-4 text-center bg-purple-50/30 text-[#00B090] font-bold">Included (1st Year)</td>
                    <td className="py-3 px-4 text-center text-[#00B090] font-bold">Included (1st Year)</td>
                    <td className="py-3 px-4 text-center text-[#00B090] font-bold">Included (1st Year)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 font-medium text-[#1D1E20]">Automated Backup Schedule</td>
                    <td className="py-3 px-4 text-center">Weekly</td>
                    <td className="py-3 px-4 text-center bg-purple-50/30">Weekly</td>
                    <td className="py-3 px-4 text-center text-[#00B090] font-bold">Daily + On-Demand</td>
                    <td className="py-3 px-4 text-center text-[#00B090] font-bold">Daily + Snapshots</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 font-medium text-[#1D1E20]">Object Cache for WordPress (Redis)</td>
                    <td className="py-3 px-4 text-center text-slate-300">—</td>
                    <td className="py-3 px-4 text-center bg-purple-50/30 text-slate-300">—</td>
                    <td className="py-3 px-4 text-center text-[#00B090] font-bold">Active</td>
                    <td className="py-3 px-4 text-center text-[#00B090] font-bold">Active Dedicated</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 font-medium text-[#1D1E20]">Dedicated IP Address</td>
                    <td className="py-3 px-4 text-center text-slate-300">—</td>
                    <td className="py-3 px-4 text-center bg-purple-50/30 text-slate-300">—</td>
                    <td className="py-3 px-4 text-center text-slate-300">—</td>
                    <td className="py-3 px-4 text-center text-[#00B090] font-bold">Free Dedicated IPv4</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 font-medium text-[#1D1E20]">WordPress Staging Environment</td>
                    <td className="py-3 px-4 text-center text-slate-300">—</td>
                    <td className="py-3 px-4 text-center bg-purple-50/30 text-slate-300">—</td>
                    <td className="py-3 px-4 text-center text-[#00B090] font-bold">1-Click Staging</td>
                    <td className="py-3 px-4 text-center text-[#00B090] font-bold">1-Click Staging</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 font-medium text-[#1D1E20]">Free Website Migration</td>
                    <td className="py-3 px-4 text-center text-[#00B090] font-bold">Unlimited Free</td>
                    <td className="py-3 px-4 text-center bg-purple-50/30 text-[#00B090] font-bold">Unlimited Free</td>
                    <td className="py-3 px-4 text-center text-[#00B090] font-bold">Unlimited Free</td>
                    <td className="py-3 px-4 text-center text-[#00B090] font-bold">VIP Priority Migration</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
