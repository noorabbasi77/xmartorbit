import React from 'react';
import { Star, Quote, CheckCircle, Shield, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/hostingData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5 text-amber-500" /> Proven Customer Trust
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B1340] tracking-tight">
            Trusted by Over 120,000+ Websites Worldwide
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#727586] leading-relaxed">
            From emerging startups to high-volume WooCommerce enterprises, businesses rely on XMart Orbit Private Limited for uninterrupted uptime, extreme velocity, and 24/7 technical clarity.
          </p>

          {/* Aggregate Trust Scores Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-xs">
            <div className="flex items-center gap-2">
              <div className="flex text-emerald-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div>
                <strong className="text-sm font-bold text-[#1D1E20]">4.8 / 5</strong>
                <span className="text-slate-400 ml-1">Trustpilot (18,400+ reviews)</span>
              </div>
            </div>

            <div className="hidden sm:inline-block text-slate-300">|</div>

            <div className="flex items-center gap-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div>
                <strong className="text-sm font-bold text-[#1D1E20]">4.9 / 5</strong>
                <span className="text-slate-400 ml-1">Google Customer Rating</span>
              </div>
            </div>

            <div className="hidden sm:inline-block text-slate-300">|</div>

            <div className="flex items-center gap-2">
              <div className="flex text-indigo-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div>
                <strong className="text-sm font-bold text-[#1D1E20]">4.9 / 5</strong>
                <span className="text-slate-400 ml-1">HostAdvice Best Host 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-purple-200 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Star Rating */}
                <div className="flex text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#1D1E20] leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Author & Proof Metric */}
              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <div className="font-bold text-sm text-[#1B1340]">{review.name}</div>
                <div className="text-xs text-slate-500">{review.role}</div>
                <div className="text-xs text-[#673DE6] font-semibold">{review.company}</div>
                <div className="mt-2 text-[11px] font-mono font-bold text-[#00B090] bg-emerald-50 px-2 py-0.5 rounded inline-block">
                  {review.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Money-Back Guarantee Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2F1C6A] to-[#1B1340] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-amber-400">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">100% Risk-Free 30-Day Money-Back Guarantee</h3>
              <p className="text-xs sm:text-sm text-purple-200 mt-1">
                Try XMart Orbit with zero risk. If you are not completely thrilled with our loading speed and expert support, we will refund your payment in full.
              </p>
            </div>
          </div>

          <a
            href="#pricing-section"
            className="px-6 py-3 bg-[#673DE6] hover:bg-[#5229c9] text-white font-bold text-xs sm:text-sm rounded-xl shrink-0 shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            Get Started Risk-Free
          </a>
        </div>

      </div>
    </section>
  );
};
