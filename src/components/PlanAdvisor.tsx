import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Sparkles, Server, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSTING_PLANS } from '../data/hostingData';

export const PlanAdvisor: React.FC = () => {
  const { addToCart, formatPrice } = useApp();
  
  const [visitors, setVisitors] = useState<number>(25000);
  const [websites, setWebsites] = useState<number>(3);
  const [isEcommerce, setIsEcommerce] = useState<boolean>(false);

  // Recommendation algorithm
  let recommendedPlan = HOSTING_PLANS[1]; // Premium Web
  if (isEcommerce || visitors > 100000 || websites > 10) {
    recommendedPlan = HOSTING_PLANS[3]; // Cloud Startup
  } else if (visitors > 40000 || websites > 5) {
    recommendedPlan = HOSTING_PLANS[2]; // Business Web
  } else if (visitors < 10000 && websites === 1 && !isEcommerce) {
    recommendedPlan = HOSTING_PLANS[0]; // Single Web
  }

  return (
    <section id="hosting-calculator" className="py-16 bg-gradient-to-b from-white to-[#F4F0FF]/40 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" /> Hosting Plan Advisor
          </div>
          <h2 className="text-3xl font-black text-[#1B1340] tracking-tight">
            Not Sure Which Plan You Need? Let’s Calculate.
          </h2>
          <p className="mt-2 text-sm text-[#727586]">
            Adjust your expected visitor volume and requirements to find the ideal architecture for peak performance.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl shadow-purple-950/5 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Sliders and Questions Column */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Monthly Visitors Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-[#1D1E20] mb-2">
                <span>Estimated Monthly Visitors:</span>
                <span className="text-sm font-black text-[#673DE6] font-mono bg-purple-50 px-2.5 py-1 rounded-lg">
                  {visitors.toLocaleString()} visitors/mo
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={visitors}
                onChange={(e) => setVisitors(Number(e.target.value))}
                className="w-full accent-[#673DE6] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>5,000 (Personal Blog)</span>
                <span>100,000+ (Growing Biz)</span>
                <span>250,000+ (High Traffic)</span>
              </div>
            </div>

            {/* Websites Count */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-[#1D1E20] mb-2">
                <span>Number of Separate Websites:</span>
                <span className="text-sm font-black text-[#673DE6] font-mono bg-purple-50 px-2.5 py-1 rounded-lg">
                  {websites} {websites === 1 ? 'Site' : 'Sites'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={websites}
                onChange={(e) => setWebsites(Number(e.target.value))}
                className="w-full accent-[#673DE6] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>1 Site</span>
                <span>10 Sites</span>
                <span>25 Sites</span>
              </div>
            </div>

            {/* eCommerce Toggle */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#1D1E20]">Online Store / WooCommerce?</span>
                <p className="text-[11px] text-slate-500 mt-0.5">Requires dynamic cart caching and dedicated memory buffer.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsEcommerce(!isEcommerce)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                  isEcommerce ? 'bg-[#673DE6] justify-end' : 'bg-slate-300 justify-start'
                }`}
              >
                <div className="bg-white w-4 h-4 rounded-full shadow-md" />
              </button>
            </div>

          </div>

          {/* Recommended Plan Result Box */}
          <div className="md:col-span-5 bg-gradient-to-b from-[#2F1C6A] to-[#1B1340] text-white p-6 rounded-2xl border border-purple-500/20 shadow-lg flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded">
                <Sparkles className="w-3 h-3" /> Recommended for Your Traffic
              </div>

              <h3 className="text-2xl font-black mt-2 text-white">{recommendedPlan.name}</h3>
              <p className="text-xs text-purple-200 mt-1 leading-relaxed">
                {recommendedPlan.tagline}
              </p>

              <div className="my-4 pt-4 border-t border-purple-800/60">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">
                    {formatPrice(recommendedPlan.monthlyPrices['48'])}
                  </span>
                  <span className="text-xs text-purple-200">/month (48m term)</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                  Save {recommendedPlan.discountPercentage}% + Free Domain Included
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-purple-100">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00B090]" />
                  <span>{recommendedPlan.specs.websites} Supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00B090]" />
                  <span>{recommendedPlan.specs.storage} NVMe Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00B090]" />
                  <span>LiteSpeed Enterprise Caching Stack</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => addToCart(recommendedPlan, 48)}
              className="mt-6 w-full py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Deploy Recommended Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
