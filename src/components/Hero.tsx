import React from 'react';
import {
  Check,
  ShieldCheck,
  Zap,
  Globe,
  Clock,
  ArrowRight,
  Server,
  Star,
  Activity,
  HardDrive
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSTING_PLANS } from '../data/hostingData';

export const Hero: React.FC = () => {
  const { formatPrice, addToCart } = useApp();
  const topPlan = HOSTING_PLANS.find((p) => p.id === 'premium-web') || HOSTING_PLANS[1];

  const handleClaimDeal = () => {
    addToCart(topPlan, 48);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#F4F0FF]/60 via-white to-white">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 -translate-x-1/2 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#673DE6] bg-[#EDE5FF] px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#673DE6]" />
              <span>Next-Generation Cloud Infrastructure</span>
              <span className="text-slate-400">·</span>
              <span>Save 77% + 3 Months Free</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1B1340] tracking-tight leading-[1.12] text-balance">
              Everything You Need to Succeed Online
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#727586] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Power your online success with <strong className="text-[#1D1E20] font-semibold">XMart Orbit Private Limited</strong>. Experience ultra-fast, secure, and reliable web hosting, powerful cloud solutions, domain registration, and expert support — all in one place.
            </p>

            {/* Core Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#1D1E20] max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium">High-Performance NVMe SSD Hosting</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium">Free Lifetime SSL Certificates</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium">Free Domain Name for 1st Year</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium">24/7/365 Dedicated Expert Support</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium">99.9% Uptime Guarantee</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium">30-Day Money-Back Guarantee</span>
              </div>
            </div>

            {/* Price & Primary CTA Block */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <div className="text-center sm:text-left">
                <div className="text-xs text-[#727586] flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="line-through">{formatPrice(12.99)}/mo</span>
                  <span className="font-bold text-[#00B090] bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">
                    SAVE 77%
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-xs font-semibold text-[#727586]">from</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#673DE6] tracking-tight">
                    {formatPrice(2.99)}
                  </span>
                  <span className="text-sm font-semibold text-[#727586]">/mo</span>
                </div>
                <div className="text-[11px] font-semibold text-purple-700">
                  + 3 Months Free included
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={handleClaimDeal}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#673DE6] hover:bg-[#5229c9] text-white font-bold rounded-xl shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/35 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Claim Deal</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#pricing-section"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#F4F0FF] text-[#1D1E20] font-bold rounded-xl border border-slate-200 hover:border-purple-300 transition-all flex items-center justify-center text-center text-sm"
                >
                  Explore All Plans
                </a>
              </div>
            </div>

            {/* Trust Proof Badges Adjacent */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#727586]">
              <div className="flex items-center gap-2">
                <div className="flex text-emerald-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[#1D1E20]">Trustpilot 4.8/5</span>
                <span className="text-slate-400">(18.4k reviews)</span>
              </div>

              <div className="hidden sm:inline-block text-slate-300">|</div>

              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[#1D1E20]">Google 4.9/5</span>
              </div>

              <div className="hidden sm:inline-block text-slate-300">|</div>

              <div className="flex items-center gap-1.5 font-medium text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#00B090]" />
                <span>Zero-Downtime Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Interactive Server & Stack Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-b from-[#2F1C6A] to-[#1B1340] rounded-3xl p-6 sm:p-7 text-white shadow-2xl shadow-purple-950/30 border border-purple-500/20">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-purple-800/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">XMart Enterprise Node #04</div>
                    <div className="text-[10px] text-purple-300">Frankfurt Datacenter · Tier-4 Certified</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded">
                  99.99% ONLINE
                </span>
              </div>

              {/* Real-time Hardware Metrics Display */}
              <div className="grid grid-cols-2 gap-3 my-5">
                <div className="bg-purple-950/60 rounded-xl p-3 border border-purple-800/40">
                  <div className="flex items-center justify-between text-[11px] text-purple-300">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-400" /> Web Engine
                    </span>
                    <span className="text-emerald-400 font-mono font-bold">LSCache ON</span>
                  </div>
                  <div className="mt-1 text-sm font-bold text-white">LiteSpeed Enterprise</div>
                  <div className="text-[10px] text-purple-300 mt-0.5">5x faster than Apache/Nginx</div>
                </div>

                <div className="bg-purple-950/60 rounded-xl p-3 border border-purple-800/40">
                  <div className="flex items-center justify-between text-[11px] text-purple-300">
                    <span className="flex items-center gap-1">
                      <HardDrive className="w-3 h-3 text-cyan-400" /> NVMe IOPS
                    </span>
                    <span className="text-white font-mono font-bold">PCIe Gen5</span>
                  </div>
                  <div className="mt-1 text-sm font-bold text-white">7,500 MB/s Read</div>
                  <div className="text-[10px] text-purple-300 mt-0.5">Sub-millisecond query latency</div>
                </div>
              </div>

              {/* Interactive Performance Gauges */}
              <div className="space-y-3 bg-purple-950/40 p-4 rounded-2xl border border-purple-800/30">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-purple-200">CPU Compute Load (AMD EPYC™ 9654)</span>
                    <span className="font-mono text-emerald-300 font-bold">14% Optimal</span>
                  </div>
                  <div className="w-full bg-purple-900/60 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-400 to-[#673DE6] h-full rounded-full w-[14%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-purple-200">DDR5 ECC RAM Allocation</span>
                    <span className="font-mono text-cyan-300 font-bold">22% Buffer</span>
                  </div>
                  <div className="w-full bg-purple-900/60 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-[#673DE6] h-full rounded-full w-[22%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-purple-200">Global CDN Edge Latency</span>
                    <span className="font-mono text-white font-bold">18ms Worldwide</span>
                  </div>
                  <div className="w-full bg-purple-900/60 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#00B090] to-emerald-400 h-full rounded-full w-[95%]" />
                  </div>
                </div>
              </div>

              {/* Floating Feature Badges */}
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <div className="bg-purple-900/40 border border-purple-700/30 rounded-xl p-2.5">
                  <div className="text-xs font-bold text-white">0-Downtime</div>
                  <div className="text-[10px] text-purple-300 mt-0.5">Live Migrations</div>
                </div>
                <div className="bg-purple-900/40 border border-purple-700/30 rounded-xl p-2.5">
                  <div className="text-xs font-bold text-white">Automated</div>
                  <div className="text-[10px] text-purple-300 mt-0.5">Daily Cloud Backups</div>
                </div>
                <div className="bg-purple-900/40 border border-purple-700/30 rounded-xl p-2.5">
                  <div className="text-xs font-bold text-white">Monarx WAF</div>
                  <div className="text-[10px] text-purple-300 mt-0.5">Real-time Defense</div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-5 pt-4 border-t border-purple-800/60 flex items-center justify-between text-xs">
                <span className="text-purple-300">Ready to migrate or start fresh?</span>
                <button
                  onClick={handleClaimDeal}
                  className="font-bold text-white hover:text-purple-200 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Start Now <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
