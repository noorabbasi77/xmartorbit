import React from 'react';
import { Layers, Layout, ShieldCheck, Check, ArrowRight, Award, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSTING_PLANS } from '../data/hostingData';

export const ResellerSection: React.FC = () => {
  const { addToCart } = useApp();

  return (
    <section id="reseller-hosting" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Banner for Reseller and Website Builder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Reseller Hosting */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#2F1C6A] via-[#1B1340] to-[#120B2D] text-white flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-900/60 border border-purple-700/40 px-3 py-1 rounded-full mb-4">
                <Layers className="w-3.5 h-3.5 text-purple-400" /> Agency & Reseller Hosting
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Start Your Own Web Hosting Company
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-purple-200 leading-relaxed">
                White-label infrastructure powered by XMart Orbit Private Limited. Create custom packages, set your own prices, and host unlimited client cPanel/hPanel sub-accounts.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-purple-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-400 text-purple-950 flex items-center justify-center font-black">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>100% White-Label (Custom Nameservers & Branding)</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-400 text-purple-950 flex items-center justify-center font-black">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Free Automated WHMCS / ClientExec Billing License</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-400 text-purple-950 flex items-center justify-center font-black">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Unlimited Free SSL Certificates for All Clients</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-400 text-purple-950 flex items-center justify-center font-black">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>LiteSpeed Web Server with LSCache on All Accounts</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-purple-800/60 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-purple-300">Reseller Starter from</div>
                <div className="text-2xl font-black text-white">$14.99<span className="text-xs font-normal text-purple-300">/mo</span></div>
              </div>

              <button
                onClick={() => addToCart(HOSTING_PLANS[3], 12)}
                className="px-6 py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Launch Reseller</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Website Builder & Security Shield */}
          <div id="website-builder" className="p-8 sm:p-10 rounded-3xl bg-[#F4F0FF]/60 border border-[#EDE5FF] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#673DE6] bg-[#EDE5FF] px-3 py-1 rounded-full mb-4">
                <Layout className="w-3.5 h-3.5" /> Intuitive Website Builder
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#1B1340] tracking-tight">
                Launch a Professional Website in 10 Minutes
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#727586] leading-relaxed">
                No coding required. Choose from 150+ designer-crafted responsive templates, drag and drop sections, and customize fonts, colors, and layouts visually.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-[#1D1E20]">
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center font-black">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>150+ Mobile-Responsive Industry Templates</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center font-black">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Built-in eCommerce Checkout & Payment Gateways</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center font-black">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Integrated AI Copywriter & Image Generator</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#00B090] flex items-center justify-center font-black">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Automated Google SEO Optimization Tools</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-purple-200/60 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-slate-500">Included Free With</div>
                <div className="text-lg font-bold text-[#673DE6]">All Hosting Plans</div>
              </div>

              <a
                href="#pricing-section"
                className="px-6 py-3 bg-white hover:bg-slate-50 text-[#1B1340] border-2 border-slate-200 hover:border-purple-300 font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5"
              >
                <span>Try Builder Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
