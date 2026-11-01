import React, { useState } from 'react';
import {
  Globe,
  Zap,
  Check,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Layers,
  Code2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSTING_PLANS } from '../data/hostingData';

export const WordPressHostingPage: React.FC = () => {
  const { formatPrice, addToCart, navigateToPage } = useApp();
  const [billingMonths, setBillingMonths] = useState<48 | 24 | 12 | 1>(48);

  const wpPlan = HOSTING_PLANS.find((p) => p.id === 'wp-business') || HOSTING_PLANS[2];
  const price = wpPlan.monthlyPrices[billingMonths.toString() as '48' | '24' | '12' | '1'];
  const orig = wpPlan.originalPrices[billingMonths.toString() as '48' | '24' | '12' | '1'];

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">Managed WordPress</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full mb-3">
          <Globe className="w-3.5 h-3.5" /> Managed WordPress Environment
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight">
          Supercharged Managed WordPress Hosting
        </h1>
        <p className="mt-3 text-base text-[#727586] max-w-2xl mx-auto leading-relaxed">
          Accelerate your WordPress and WooCommerce store with LiteSpeed Cache (LSCache), automated core updates with smart rollback, and 1-click staging.
        </p>
      </section>

      {/* Featured WP Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-br from-white to-[#F4F0FF]/50 rounded-3xl border-2 border-[#673DE6] p-8 sm:p-10 shadow-xl shadow-purple-600/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-purple-100">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#673DE6] bg-[#EDE5FF] px-2.5 py-1 rounded-full">
                Most Popular for WooCommerce
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1B1340] mt-2">{wpPlan.name}</h2>
              <p className="text-xs text-slate-500 mt-1">{wpPlan.tagline}</p>
            </div>

            <div className="text-left md:text-right">
              <div className="text-xs text-slate-400 line-through">{formatPrice(orig)}/mo</div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-4xl font-black text-[#673DE6]">{formatPrice(price)}</span>
                <span className="text-xs text-slate-500">/mo</span>
              </div>
              <div className="text-[11px] text-emerald-600 font-bold mt-1">
                Save 77% + Free Domain Included
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                WordPress Performance Features:
              </h4>
              <div className="space-y-2 text-xs text-[#1D1E20]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>LiteSpeed Cache (LSCache) Server-Level Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>Object Cache Pro (Redis in-memory caching)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>1-Click Safe Staging Environment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>Automated WordPress Core & Plugin Updates</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Developer Tooling Included:
              </h4>
              <div className="space-y-2 text-xs text-[#1D1E20]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>WP-CLI Pre-installed & SSH/SFTP Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>Git Integration with Automated Webhook Deploy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>PHP 8.1, 8.2, 8.3 & 8.4 Version Switcher</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B090]" />
                  <span>Free Unlimited SSL & Daily Backups</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => addToCart(wpPlan, billingMonths)}
            className="w-full py-3.5 bg-[#673DE6] hover:bg-[#5229c9] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Deploy Managed WordPress Environment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
