import React from 'react';
import {
  ShieldCheck,
  Globe,
  Award,
  Users,
  Building,
  CheckCircle2,
  ChevronRight,
  Server,
  Zap,
  Lock
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutPage: React.FC = () => {
  const { navigateToPage } = useApp();

  return (
    <div className="py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#673DE6] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1D1E20] font-semibold">About Company</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#673DE6] uppercase tracking-wider bg-[#EDE5FF] px-3 py-1 rounded-full mb-3">
          <Building className="w-3.5 h-3.5" /> Corporate Overview
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1340] tracking-tight">
          Powering the Next Era of Web Infrastructure
        </h1>
        <p className="mt-3 text-base text-[#727586] max-w-2xl mx-auto leading-relaxed">
          <strong>XMart Orbit Private Limited</strong> is a premier global technology corporation delivering high-speed NVMe web hosting, cloud computing, managed WordPress architectures, and domain registration worldwide.
        </p>
      </section>

      {/* Key Company Numbers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-[#673DE6]">120,000+</div>
            <div className="text-xs font-bold text-slate-700 mt-1">Websites Powered</div>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-[#00B090]">99.99%</div>
            <div className="text-xs font-bold text-slate-700 mt-1">Verified Real Uptime</div>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-[#2F1C6A]">9 Nodes</div>
            <div className="text-xs font-bold text-slate-700 mt-1">Tier-4 Global Facilities</div>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="text-3xl sm:text-4xl font-black text-amber-500">&lt; 3 mins</div>
            <div className="text-xs font-bold text-slate-700 mt-1">Avg. Live Support Response</div>
          </div>
        </div>
      </section>

      {/* Corporate Mission & Values */}
      <section className="bg-[#F4F0FF]/40 py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 bg-white rounded-3xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#673DE6] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1B1340]">Obsession with Velocity</h3>
              <p className="text-xs text-[#727586] mt-2 leading-relaxed">
                We refuse to cut corners with legacy hardware or overloaded servers. We invest continuously in AMD EPYC processors, pure PCIe 5.0 NVMe drives, and LiteSpeed Enterprise caching.
              </p>
            </div>

            <div className="p-7 bg-white rounded-3xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#00B090] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1B1340]">Uncompromising Integrity</h3>
              <p className="text-xs text-[#727586] mt-2 leading-relaxed">
                No hidden renewal fees, no surprise storage caps, and no locked-in traps. We back every hosting subscription with an unconditional 30-day money-back guarantee.
              </p>
            </div>

            <div className="p-7 bg-white rounded-3xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-[#2F1C6A] flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1B1340]">Human-Centric Support</h3>
              <p className="text-xs text-[#727586] mt-2 leading-relaxed">
                When you need assistance, you chat directly with experienced systems engineers who resolve root causes, not scripted support bots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Corporate Details */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          <h3 className="text-lg font-bold text-[#1B1340]">Corporate Identity & Compliance Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
            <div>
              <span className="text-slate-400">Legal Business Entity:</span>
              <div className="font-bold text-[#1D1E20] mt-0.5">XMart Orbit Private Limited</div>
            </div>
            <div>
              <span className="text-slate-400">Official Brand Name:</span>
              <div className="font-bold text-[#1D1E20] mt-0.5">XMart Orbit</div>
            </div>
            <div>
              <span className="text-slate-400">Official Corporate Portal:</span>
              <div className="font-bold text-[#673DE6] mt-0.5">https://xmartorbit.com</div>
            </div>
            <div>
              <span className="text-slate-400">Accreditations & Security:</span>
              <div className="font-bold text-[#00B090] mt-0.5">ICANN Accredited · ISO 27001 Certified · GDPR Compliant</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
